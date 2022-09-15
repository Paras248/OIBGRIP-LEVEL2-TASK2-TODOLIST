import React, { useContext } from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";
import { itemContext } from "../../store/ItemContextProvider";

const ItemList = () => {
    const { items } = useContext(itemContext);
    return (
        <ul className={styles.ul}>
            {items.map((item, index) => {
                return (
                    <li>
                        <Item key={index} title={item.title} time={item.time} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ItemList;
