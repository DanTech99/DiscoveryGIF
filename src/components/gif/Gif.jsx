import React from "react";
import styles from "./Gif.module.css";
import { useState } from "react";
import { Link, useLocation } from "wouter";

function Gif({ title, url, id } = {}) {

	
	return (
		<a
			href={`/gif/${id}`}
			className={styles.icon_copy}
		>
			<img
				src={url}
				alt={title}
				className={styles.gif_img}
			/>
		</a>
	);
}

export default Gif;
