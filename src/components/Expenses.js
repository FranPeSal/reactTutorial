import ExpensesItem from "./ExpensesItem";
import Card from "./Card";
import './Expenses.css'


function Expenses(props) {

    return (
        <Card className="expenses">
            <ExpensesItem title={props.items[0].title}
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
            </ExpensesItem>
        </Card>
    );
}

export default Expenses;