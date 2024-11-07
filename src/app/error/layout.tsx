import React from "react";
import styles from "./layout.module.css";

export default function ({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.grid}>
			<div className={styles.container}>
				{children}
			</div>
		</div>
	);
}