import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
// (remove once udemy issue is resolved) import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

function Expenses(props) {
  //we need to declare a state where we'll store the filter info from ExpenseFilter component
  const [chosenFilter, setChosenFilter] = useState("2022");

  function filterChangeHandler(event) {
    setChosenFilter(() => event.target.value);
  }

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(chosenFilter)
  );
  /*return statement has same structure as in App component, 
  except you need to extract each of the ExpenseItem components off of the
  'props' array submitted into this component as a parameter*/
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedFilter={chosenFilter}
          onFilterChange={filterChangeHandler}
        ></ExpenseFilter>

        <ExpensesChart expenses={filteredExpenses} />

        {/*the code below works, but it's not part of the code version I'm trying to make work, can ignore*/}
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
