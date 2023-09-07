import React from "react";
import { Link } from "wouter";
import {
	useEffect,
	useState,
} from "react";
import { getCategories } from "../../services/getCategories";
import styles from "./Gif.module.css";

// Definimos la función GifCategories
function GifCategories() {
	// Creamos el estado para las categorías y su función de actualización
	const [categories, setCategories] =
		useState([]);

	// Usamos el hook useEffect para obtener las categorías cuando el componente se monta
	useEffect(() => {
		// Llamamos a la función getCategories y actualizamos el estado con las categorías obtenidas
		getCategories().then(
			(categories) =>
				setCategories(categories),
		);
	// Pasamos un array vacío como segundo argumento para que useEffect se ejecute solo una vez
	}, []);

	return (
		<>
			<h2>Categories</h2>
			<div
				className={
					styles.keyword_recomended
				}
			>
				{categories.map(({ name }) => (
					<Link
						to={`/search/${name}`}
						className={
							styles.keyword_link
						}
						key={name}
					>
						{name}
					</Link>
				))}
			</div>
		</>
	);
}

export default GifCategories;
