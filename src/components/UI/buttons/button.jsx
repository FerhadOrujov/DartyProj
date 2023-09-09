import { useState } from "react";
import styles from "./button.module.css"

function Button() {

    
    return (
        <>
        <div className={styles.div}>
            <button className={styles.button}>
                Кнопка
            </button>
        </div>
        </>
        
    )
}

export default Button;