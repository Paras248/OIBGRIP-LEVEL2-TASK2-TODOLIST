import React from "react";
import ItemList from "./components/items/ItemList";
import NewItem from "./components/newItem/NewItem";
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.container}>
            <div className={styles["sub-container"]}>
                <NewItem />
                <ItemList />
            </div>
        </div>
    );
}

export default App;
