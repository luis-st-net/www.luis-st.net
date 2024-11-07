import styles from "./HttpStatusError.module.css";

export default function ({ message, details, statusCode, width }: IHttpStatusError) {
	return (
		<>
			<div className={styles.errorContainer} style={{minWidth: width + "px"}}>
				<h2 className={styles.errorText}>
					{message}
				</h2>
				<h4 className={styles.errorText}>
					{details}
				</h4>
			</div>
			<div className={styles.verticalDivider} />
			<h2 className={styles.errorText} style={{minWidth: width + "px"}}>
				{statusCode}
			</h2>
		</>
	);
}

export interface IHttpStatusError {
	message: string;
	details: string;
	statusCode: number;
	width: number;
}