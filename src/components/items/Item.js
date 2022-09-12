import React from "react";

import styles from "./Item.module.css";

const Item = ({ title, time }) => {
    return (
        <div className={styles.container}>
            <input type="checkbox" />
            <p>{title}</p>
            <p>{time}</p>
        </div>
    );
};

export default Item;
