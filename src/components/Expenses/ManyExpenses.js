import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./ManyExpenses.css";
import { useState } from "react";

const ManyExpenses = (props) => {
  const [year, setYear] = useState("2022");

  const changeYear = (selectedYear) => {
    setYear((prevYear) => {
      return selectedYear;
    });
    console.log(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeYear={changeYear} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ManyExpenses;
