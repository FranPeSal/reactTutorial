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

        {/* <ExpensesItem title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}>
                </ExpensesItem>

                <ExpensesItem title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}>
                </ExpensesItem>
                <ExpensesItem title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}>
                </ExpensesItem>
                <ExpensesItem title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}>
                </ExpensesItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
