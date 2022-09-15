import React from "react";
import styles from "./Modal.module.css";

const Modal = () => {
    return (
        <div className={styles.container}>
            <input className={styles.input} />
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Cancel</button>
                <button className={styles.button}>Add</button>
            </div>
        </div>
    );
};

export default Modal;
