//DELETE FILE ONCE UDEMY ISSUE IS RESOLVED


import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
//import ExpensesList from "./ExpensesList";
import ExpenseItem from "./ExpenseItem";
//import ExpenseRender from "./ExpenseRender";
import { useState } from "react";

function Expenses(props) {
  //we need to declare a state where we'll store the filter info from ExpenseFilter component
  const [chosenFilter, setChosenFilter] = useState("2022");
  const [expensesArray, setExpensesArray] = useState(props.expenses);

  //render boolean used to render conditionally in return statement
  //const [render, setRender] = useState(false);

  function filterChangeHandler(event) {
    setChosenFilter(() => (event.target.value));
    //warning: all these console.logs are only for testing purpouses, not to be in definitive version
    /*console.log(
      props.expenses.filter(
        (expense) => expense.date.getFullYear() === parseInt(chosenFilter)
      )
    );
    console.log("Expenses value: " + event.target.value);
    console.log("chosenFilter value: " + parseInt(chosenFilter));
    /*Assignment 3 code: output correct ExpenseItem list depending on'chosenFilter' parameter*/
    setExpensesArray(() => {
      return props.expenses.filter((expense) => {
        return expense.date.getFullYear() === parseInt(chosenFilter);
      });
    });
  }

  /*return statement has same structure as in App component, 
  except you need to extract each of the ExpenseItem components off of the
  'props' array submitted into this component as a parameter*/
  return (
    <div>
      <Card className="expenses">
        {/*we need to render either an "add expense" button or the old school ExpenseFilter, not both at the same time*/}
        {/*<ExpenseRender />*/}
        <ExpenseFilter
          selectedFilter={chosenFilter}
          onFilterChange={filterChangeHandler}
        ></ExpenseFilter>

        {/*this will render only when 'render' is true
        <ExpenseRender render={render} />*/}

        {/*the code below works, but it's not part of the code version I'm trying to make work, can ignore*/}
        {/*<ExpensesList
          expenses={props.expenses.filter(
            (expense) => expense.date.getFullYear() === parseInt(chosenFilter)
          )}
          />*/}

        {/*
        {/*this will render only when 'render' is false
        <ExpenseRender render={!render} />
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
    </div>
  );
}

export default Expenses;
