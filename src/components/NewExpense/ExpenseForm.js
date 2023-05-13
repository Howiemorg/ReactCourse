import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [form, setForm] = useState(false)

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  
  const titleChange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setForm(false);
  }

  const canceled = () => {
    setForm(false);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
    
  const submitting = () => {
    setForm(true);
  }

  if (form) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChange} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChange} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="reset" onClick={canceled}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

  return (
    <button type="submit" onClick={submitting}>Add Expense</button>
  )
};

export default ExpenseForm;
