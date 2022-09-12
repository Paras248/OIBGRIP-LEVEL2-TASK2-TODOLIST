import React from "react";
import ItemList from "./components/items/ItemList";
import "./App.css";
import NewItem from "./components/newItem/NewItem";

function App() {
    return (
        <div>
            <NewItem />
            <ItemList />
        </div>
    );
}

export default App;
