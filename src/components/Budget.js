import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
    const { budget, expenses, dispatch, currency, remaining } =
        useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const changeBudget = (budget) => {
        if (budget > 20000)
            alert(
                `The value cannot exceed remaining funds ${currency}${remaining}`
            );
        else if (budget < totalExpenses)
            alert("You cannot reduce the budger value lower than the spending");
        else {
            const expense = {
                cost: parseInt(budget),
            };
            dispatch({
                type: "SET_BUDGET",
                payload: expense.cost,
            });
        }
    };

    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency}</span>
            <input
                type="number"
                step={10}
                value={budget}
                onChange={(e) => changeBudget(e.target.value)}
            />
        </div>
    );
};
export default Budget;
