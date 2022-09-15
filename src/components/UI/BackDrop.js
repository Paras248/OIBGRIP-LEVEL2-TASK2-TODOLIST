import React, { useContext } from "react";
import ReactDom from "react-dom";
import Modal from "./Modal";
import styles from "./Backdrop.module.css";
import { itemContext } from "../../store/ItemContextProvider";

const BackDrop = () => {
    const { setShowModal } = useContext(itemContext);

    return ReactDom.createPortal(
        <div>
            <div className={styles.backdrop} onClick={() => setShowModal(false)} />
            <Modal />
        </div>,
        document.getElementById("overlays")
    );
};

export default BackDrop;
