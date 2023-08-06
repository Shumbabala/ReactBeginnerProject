import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  //create state hooks
  //render boolean used to render conditionally in return statement
  const [render, setRender] = useState(false);

  //function to handle when the user whishes to add a new expense (we need to render the ExpenseForm object)
  function addNewExpenseHandler() {
    setRender(!render);
  }

  //must reset NewExpense back to beginner form
  function cancelClickHandler() {
    setRender(!render);
  }

  function saveExpenseDataHandler(enteredExpenseData) {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };

    //ExpenseData object submission to parent component (App.js)
    props.onAddExpense(ExpenseData);
  }

  if (!render) {
    //return JSX content to render "add expense" button
    return (
      <div className="new-expense">
        {/*if you click on this button, render turns "true" and <ExpenseForm/> is returned instead*/}
        <button type="button" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelClick={cancelClickHandler}
      />
    </div>
  );
}

export default NewExpense;
