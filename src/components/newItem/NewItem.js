import React from "react";
import NewItemDate from "./NewItemDate";
import styles from "./NewItem.module.css";

const NewItem = () => {
    return (
        <div className={styles.container}>
            <div className={styles["details-container"]}>
                <NewItemDate />
                <button className={styles["button"]}>+</button>
            </div>
        </div>
    );
};

export default NewItem;
