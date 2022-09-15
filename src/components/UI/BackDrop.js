import React from "react";
import ReactDom from "react-dom";
import Modal from "./Modal";
import styles from "./Backdrop.module.css";

const BackDrop = () => {
    return ReactDom.createPortal(
        <div className={styles.backdrop}>
            <Modal />
        </div>,
        document.getElementById("overlays")
    );
};

export default BackDrop;
