import React, { useContext, useState } from "react";
import styles from "./Item.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { itemContext } from "../../store/ItemContextProvider";

const Item = ({ title, time, itemIndex }) => {
    const [icon, setIcon] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const { setItems, items } = useContext(itemContext);

    const onDeleteHandler = () => {
        let tempArr = items.filter((item, index) => index !== itemIndex);
        setItems(tempArr);
        localStorage.setItem("items", JSON.stringify(tempArr));
    };

    const onCheckedHandler = () => {
        setIsChecked(!isChecked);
    };

    let titleStyle = !isChecked ? `${styles.title}` : `${styles.checkedTitle}`;

    return (
        <div className={styles.container}>
            <input
                className={styles.checkbox}
                type="checkbox"
                style={{ marginRight: 20 }}
                onChange={onCheckedHandler}
            />
            <p className={titleStyle}>{title}</p>
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
