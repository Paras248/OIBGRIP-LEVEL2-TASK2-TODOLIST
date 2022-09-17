import React, { useContext, useEffect } from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";
import { itemContext } from "../../store/ItemContextProvider";

const ItemList = () => {
    const { items } = useContext(itemContext);
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);
    return (
        <ul className={styles.ul}>
            {items.map((itemTitle, index) => {
                return (
                    <li key={index}>
                        <Item title={itemTitle} itemIndex={index} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ItemList;
