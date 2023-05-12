import Card from "../UI/Card";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = props => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div class="Nameexpense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
