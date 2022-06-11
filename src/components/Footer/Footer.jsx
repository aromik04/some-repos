import React from "react";
import styles from "./Footer.module.css"
const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<p className={styles.footer__copy}>&copy; _web blog {currentYear}</p>
		</footer>
	);
};

export default Footer;
