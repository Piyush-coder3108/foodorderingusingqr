import React from "react";
import MenuCard from "./MenuCard";
const MenuAdd = () => {
    return (
        <div className="menu_add">
            <MenuCard />
            <div className="ResForm">
                <input
                    type="text"
                    name="itemName"
                    id="itemName"
                    placeholder="Item Name"
                />
                <textarea placeholder="Description"></textarea>
                <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Price"
                />
                <button className="menu_adder"> Add </button>
            </div>
        </div>
    );
};

export default MenuAdd;
