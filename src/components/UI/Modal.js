import React, { useContext, useRef } from "react";
import styles from "./Modal.module.css";
import { itemContext } from "../../store/ItemContextProvider";

const Modal = () => {
    const { setShowModal, setItems } = useContext(itemContext);
    const inputRef = useRef("");

    const onClickHandler = () => {
        setItems((prevState) => [inputRef.current, ...prevState]);
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                placeholder="Description"
                value={inputRef.current}
            />
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => setShowModal(false)}>
                    Cancel
                </button>
                <button className={styles.button} onClick={onClickHandler}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default Modal;
