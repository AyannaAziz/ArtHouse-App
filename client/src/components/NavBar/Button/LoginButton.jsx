import React from "react";
import styles from "./buttons.module.css";


const LoginButton = (props) => {
 
    return(
            <button className= {styles.LoginButton} onClick={props.action}>Login
            </button>
    )

}

export default LoginButton;