import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const DropdownCurrency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrency = (event) => {
        const expense = {
            currency: event.target.value,
        };
        dispatch({
            type: "CHG_CURRENCY",
            payload: expense.currency,
        });
    };

    return (
        <div>
            <select
                value={currency}
                onChange={handleCurrency}
                style={{
                    backgroundColor: "lightgreen",
                    color: "white",
                    borderRadius: "5px",
                    width: "100%",
                    padding: 10,
                }}
            >
                <option value="$" style={{ color: "black" }}>
                    $ Dollar
                </option>
                <option value="£" style={{ color: "black" }}>
                    £ Pound
                </option>
                <option value="€" style={{ color: "black" }}>
                    € Euro
                </option>
                <option value="₹" style={{ color: "black" }}>
                    ₹ Rupee
                </option>
            </select>
        </div>
    );
};

export default DropdownCurrency;
