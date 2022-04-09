import React from "react";
import styles from "./SocialMenu.module.css"
const SocialMenu = (props) => {
    return (
        <li className={styles.social-menu__item}>
            <a className={props.className} href="/" aria-label={props.aria}></a>
        </li>
    );
  };
    export default SocialMenu