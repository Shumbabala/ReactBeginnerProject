import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };

    //ExpenseData object submission to parent component (App.js)
    props.onAddExpense(ExpenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
