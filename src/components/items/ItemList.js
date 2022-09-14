import React from "react";
import Item from "./Item";

const dummyData = [
    { title: "wash car", time: "12:00 AM" },
    { title: "Do laundries", time: "9:00 PM" },
];

const ItemList = () => {
    return (
        <div>
            {dummyData.map((item, index) => {
                return <Item key={index} title={item.title} time={item.time} />;
            })}
        </div>
    );
};

export default ItemList;
