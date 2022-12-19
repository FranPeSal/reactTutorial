import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";


const NewExpense = (props) => {

    const [isEditing, setEditing] = useState();

   
    const saveExpenseDateHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setEditing(false)        
    };
   
    const startEditingHandler = () =>{
        setEditing(true)
    }

    const stopEditingHandler = () =>{
        setEditing(false)
    }


    return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} onCancel={stopEditingHandler}/>}
    </div>
    );
};

export default NewExpense;