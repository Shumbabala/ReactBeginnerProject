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
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
