import React, { useState } from "react";

import ExpensesItem from "./ExpensesItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHadler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHadler}
        />   
        {props.items.map((expense) => (
          <ExpensesItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

      </Card>
    </div>
  );
};

export default Expenses;
