import React, { useState } from "react";

export const itemContext = React.createContext();

const ItemContextProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);
    return (
        <itemContext.Provider value={{ showModal, setShowModal, items, setItems }}>
            {children}
        </itemContext.Provider>
    );
};

export default ItemContextProvider;
