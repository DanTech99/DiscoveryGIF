import React from "react";
import styles from "./Gif.module.css";


function Gif({ title, url, id,  } = {}) {
	return (
				<a href={`#${id}`} className={styles.icon_copy}>
					<img src={url} alt={title} className={styles.gif_img} />
				</a>
	
	);
}

export default Gif;
