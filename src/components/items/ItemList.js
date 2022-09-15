import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

const dummyData = [
    { title: "wash car", time: "12:00 AM" },
    { title: "Do laundries", time: "9:00 PM" },
];

const ItemList = () => {
    return (
        <ul className={styles.ul}>
            {dummyData.map((item, index) => {
                return (
                    <li>
                        <Item key={index} title={item.title} time={item.time} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ItemList;
