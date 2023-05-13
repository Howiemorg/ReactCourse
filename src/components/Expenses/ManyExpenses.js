import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./ManyExpenses.css";
import { useState } from "react";

const ManyExpenses = (props) => {
  const [year, setYear] = useState("2022");

  const changeYear = (selectedYear) => {
    setYear(selectedYear);
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeYear={changeYear} />
        {props.expenses.map((expense) => (
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
};

export default ManyExpenses;
