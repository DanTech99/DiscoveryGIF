import React from "react";
import { useState } from "react";
import styles from "./Gif.module.css";

import {
	useLocation,
	Link,
} from "wouter";

function FormSearchGif() {
	const [path, pushLocation] =
		useLocation();

	const [keyword, setKeyword] =
		useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		pushLocation(`/search/${keyword}`);
		console.log(keyword);

		// navegar a otra ruta
	};

	const handleChange = (e) => {
		setKeyword(e.target.value);
	};
	return (
		<>
			<div
				className={
					styles.form_container
				}
			>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						onChange={handleChange}
						value={keyword}
						className={
							styles.inputSearch
						}
						placeholder="busca un gif"
					/>
				</form>
			</div>
		</>
	);
}

export default FormSearchGif;
