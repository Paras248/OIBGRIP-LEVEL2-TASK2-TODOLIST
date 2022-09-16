import React, { useEffect, useState } from "react";

export const itemContext = React.createContext();

const ItemContextProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItemFromLocalStorage(setItems);
    }, []);
    return (
        <itemContext.Provider value={{ showModal, setShowModal, items, setItems }}>
            {children}
        </itemContext.Provider>
    );
};

const fetchItemFromLocalStorage = (setItems) => {
    const date = new Date();
    const today = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear();

    const localStorageDate = localStorage.getItem("date");

    if (!localStorageDate) {
        localStorage.setItem("date", `${today} ${month} ${year}`);
    }

    if (localStorage.getItem("date") !== `${today} ${month} ${year}`) {
        localStorage.clear();
        localStorage.setItem("date", `${today} ${month} ${year}`);
        return;
    }

    const localStorageItems = JSON.parse(localStorage.getItem("items"));
    if (localStorageItems) {
        setItems(localStorageItems);
    }
};

export default ItemContextProvider;
