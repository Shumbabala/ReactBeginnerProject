import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

function Expenses(props) {
  //we need to declare a state where we'll store the filter info from ExpenseFilter component
  const [chosenFilter, setChosenFilter] = useState("2022");
  const [expensesArray, setExpensesArray] = useState(props.expenses);

  function filterChangeHandler(event) {
    setChosenFilter(event.target.value);

    /*Assignment 3 code: output correct ExpenseItem list depending on'chosenFilter' parameter*/
    //this code seems to be the main issue of the problem,
    //giving "TypeError: Cannot read properties of undefined (reading 'filter')" on React App
    setExpensesArray(() => {
      return props.expenses.filter((expense) => {
        return expense.date.getFullYear() === parseInt(chosenFilter);
      });
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedFilter={chosenFilter}
          onFilterChange={filterChangeHandler}
        ></ExpenseFilter>

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
    </div>
  );
}

export default Expenses;
