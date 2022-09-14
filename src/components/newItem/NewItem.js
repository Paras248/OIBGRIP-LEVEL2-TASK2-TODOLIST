import React from "react";
import NewItemDate from "./NewItemDate";
import styles from "./NewItem.module.css";

const NewItem = () => {
    return (
        <div className={styles.container}>
            <div className={styles["details-container"]}>
                <NewItemDate />
                <p>12 Tasks</p>
            </div>
            <button className={styles["button"]}>+</button>
        </div>
    );
};

export default NewItem;
