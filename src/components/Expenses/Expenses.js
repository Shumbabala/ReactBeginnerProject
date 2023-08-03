import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  //we need to declare a state where we'll store the filter info from ExpenseFilter component
  const [chosenFilter, setChosenFilter] = useState("Date");
  const [expensesArray, setExpensesArray] = useState(props.expenses);

  function filterChangeHandler(event) {
    setChosenFilter(event.target.value);
    //warning: all these console.logs are only for testing purpouses, not to be in definitive version
    console.log(
      props.expenses.filter(
        (expense) => expense.date.getFullYear() === parseInt(chosenFilter)
      )
    );
    console.log("Expenses value: " + event.target.value);
    console.log("chosenFilter value: " + parseInt(chosenFilter));
    /*Assignment 3 code: output correct ExpenseItem list depending on'chosenFilter' parameter*/
    setExpensesArray((props) => {
      props.expenses.filter((expense) => {
        return expense.date.getFullYear() === parseInt(chosenFilter);
      });
    });
  }

  /*return statement has same structure as in App component, 
  except you need to extract each of the ExpenseItem components off of the
  'props' array submitted into this component as a parameter*/
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedFilter={chosenFilter}
        onFilterChange={filterChangeHandler}
      ></ExpenseFilter>

      {/*the code below works, but it's not part of the code version I'm trying to make work, can ignore*/}
      {/*}
      {props.expenses
        .filter(
          (expense) => expense.date.getFullYear() === parseInt(chosenFilter)
        )
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        */}

      {/*this is the rendering code that fails to work*/}
      {expensesArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
