import React, { useContext, useState } from "react";
import styles from "./Item.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { itemContext } from "../../store/ItemContextProvider";

const Item = ({ title, time, index }) => {
    const [icon, setIcon] = useState(false);
    const { setItems, items } = useContext(itemContext);

    const onDeleteHandler = () => {
        let tempArr = items.filter(() => !index);
        console.log(tempArr);
    };

    return (
        <div className={styles.container}>
            <input type="checkbox" style={{ marginRight: 20 }} />
            <p className={styles.title}>{title}</p>
            <div onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)}>
                {!icon && (
                    <DeleteOutlineIcon
                        className={styles.icon}
                        style={{ marginRight: 15 }}
                    />
                )}
                {icon && (
                    <DeleteIcon
                        className={styles.icon}
                        style={{ marginRight: 15 }}
                        onClick={onDeleteHandler}
                    />
                )}
            </div>
        </div>
    );
};

export default Item;
