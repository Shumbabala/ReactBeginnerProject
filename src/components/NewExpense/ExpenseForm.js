import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  /*
  instead of using the above verbose syntax we could use the following =>...
  const [data, setData] = useState({ title: "", amount: 0, date: new Date() });

  function generalChangeHandler(event) {
    switch (event.target.name) {
      case "title":
        setData({ ...data, title: event.target.value });
        break;
      case "amount":
        setData({ ...data, amount: event.target.value });
        break;
      case "date":
        setData({ ...data, date: event.target.value });
        break;
      default:
    }
  }*/

  //we don't possess "enteredData" or "enteredAmount" values, so we must access them from
  //inside our "data" object

  //change this function back to personal type once Udemy question is resolved
  function submitHandler(event) {
    event.preventDefault();

    props.onCancelClick();

    const ExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //ExpenseData object submission to parent component (NewExpense.js)
    props.onSaveExpenseData(ExpenseData);

    //form input blank resetting
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler /*generalChangeHandler*/}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler /*generalChangeHandler*/}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler /*generalChangeHandler*/}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/*we must now also add a 'cancel' button next to the regular 'Add Expense' button*/}
        <button type="button" onClick={props.onCancelClick}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
