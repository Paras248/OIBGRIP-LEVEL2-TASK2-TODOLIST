import React, { useContext } from "react";
import ItemList from "./components/items/ItemList";
import NewItem from "./components/newItem/NewItem";
import styles from "./App.module.css";
import BackDrop from "./components/UI/BackDrop";
import { itemContext } from "./store/ItemContextProvider";

function App() {
    const { showModal, items } = useContext(itemContext);
    let Element = <ItemList />;

    if (items.length === 0) {
        Element = (
            <li className={`${styles.textContainer} ${styles.title}`}>
                No items found!!!
            </li>
        );
    }
    return (
        <>
            {showModal && <BackDrop />}
            <div className={styles.container}>
                <div className={styles["sub-container"]}>
                    <NewItem />
                    {Element}
                </div>
            </div>
        </>
    );
}

export default App;
