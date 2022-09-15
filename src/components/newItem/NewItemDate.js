import React from "react";
import styles from "./NewItemDate.module.css";

const NewItemDate = () => {
    const date = new Date();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return (
        <div className={styles["date-container"]}>
            <div>
                <p className={styles.date}>{date.getDate()}</p>
            </div>
            <div className={styles["month-and-year"]}>
                <p className={styles.month}>{month}</p>
                <p className={styles.year}>{year}</p>
            </div>
        </div>
    );
};

export default NewItemDate;
