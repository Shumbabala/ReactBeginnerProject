import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  //Section 5 assignment 2 code ***
  //we need to declare a state where we'll store the filter info from ExpenseFilter component
  const [chosenFilter, setChosenFilter] = useState("Date");

  function FilterChangeHandler(event) {
    setChosenFilter(event.target.value);
  }

  //***

  /*return statement has same structure as in App component, 
  except you need to extract each of the ExpenseItem components off of the
  'props' array submitted into this component as a parameter*/
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedFilter={chosenFilter}
        onFilterChange={FilterChangeHandler}
      ></ExpenseFilter>
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.data}
        /> 
      ))}
    </Card>
  );
}

export default Expenses;
