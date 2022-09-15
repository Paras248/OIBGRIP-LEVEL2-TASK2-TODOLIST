import React, { useContext } from "react";
import NewItemDate from "./NewItemDate";
import styles from "./NewItem.module.css";
import { itemContext } from "../../store/ItemContextProvider";
const NewItem = () => {
    const { setShowModal } = useContext(itemContext);
    return (
        <div className={styles.container}>
            <div className={styles["details-container"]}>
                <NewItemDate />
                <button className={styles["button"]} onClick={() => setShowModal(true)}>
                    +
                </button>
            </div>
        </div>
    );
};

export default NewItem;
