import React from "react";
import ItemList from "./components/items/ItemList";
import NewItem from "./components/newItem/NewItem";
import styles from "./App.module.css";
import BackDrop from "./components/UI/BackDrop";

function App() {
    return (
        <>
            <BackDrop />
            <div className={styles.container}>
                <div className={styles["sub-container"]}>
                    <NewItem />
                    <ItemList />
                </div>
            </div>
        </>
    );
}

export default App;
