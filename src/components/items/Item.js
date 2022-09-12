import React from "react";

const Item = ({ title, time }) => {
    return (
        <div>
            <input type="checkbox" />
            <p>{title}</p>
            <p>{time}</p>
        </div>
    );
};

export default Item;
