import React, { useContext, useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { itemContext } from "../../store/ItemContextProvider";

const Modal = () => {
    const { setShowModal, setItems, items } = useContext(itemContext);
    const [text, setText] = useState("");
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        console.log(items);
    }, [items]);

    const onClickHandler = () => {
        if (text.trim().length !== 0) {
            setItems((prevState) => [text, ...prevState]);
            setShowModal(false);
            return;
        }
        setShowError(true);
    };

    return (
        <div className={styles.container}>
            {showError && (
                <p style={{ color: "red" }}>Please Enter some text and then submit</p>
            )}
            <input
                className={`${styles.input} ${showError && styles.error}`}
                placeholder="Description"
                value={text}
                onChange={(event) => {
                    setText(event.target.value);
                    setShowError(false);
                }}
                autoFocus
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
