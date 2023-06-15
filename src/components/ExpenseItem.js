import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: "RED_EXPENSE",
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>
                {currency} {props.cost}
            </td>
            <td>
                <FontAwesomeIcon
                    icon={faCirclePlus}
                    size="2xl"
                    style={{ color: "#288033" }}
                    onClick={(e) => increaseAllocation(props.name)}
                />
            </td>
            <td>
                <FontAwesomeIcon
                    icon={faCircleMinus}
                    size="2xl"
                    style={{ color: "#b33019" }}
                    onClick={(e) => decreaseAllocation(props.name)}
                />
            </td>
            <td>
                <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
