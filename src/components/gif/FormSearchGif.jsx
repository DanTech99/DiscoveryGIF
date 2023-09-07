import React from "react";
import { useState } from "react";
import styles from "./Gif.module.css";

// Importamos useLocation y Link de wouter
import {
	useLocation,
	Link,
} from "wouter";

// Definimos la función FormSearchGif
function FormSearchGif() {
	// Usamos el hook useLocation para obtener la ruta actual y la función para cambiarla
	const [path, pushLocation] =
		useLocation();

	// Usamos el hook useState para manejar el estado de la palabra clave
	const [keyword, setKeyword] =
		useState("");

	// Definimos la función handleSubmit que se ejecutará al enviar el formulario
	const handleSubmit = (e) => {
		// Prevenimos el comportamiento por defecto del formulario
		e.preventDefault();
		// Navegamos a la ruta de búsqueda con la palabra clave
		pushLocation(`/search/${keyword}`);

	};

	// Definimos la función handleChange que se ejecutará al cambiar el valor del input
	const handleChange = (e) => {
		// Actualizamos el estado de la palabra clave con el nuevo valor del input
		setKeyword(e.target.value);
	};
	return (
		<>
			<div className={styles.form_container}>
				<form onSubmit={handleSubmit} className={styles.form}>
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
