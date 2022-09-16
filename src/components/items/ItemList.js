import React, { useContext } from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";
import { itemContext } from "../../store/ItemContextProvider";

const ItemList = () => {
    const { items } = useContext(itemContext);
    return (
        <ul className={styles.ul}>
            {items.map((itemTitle, index) => {
                return (
                    <li key={index}>
                        <Item title={itemTitle} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ItemList;
