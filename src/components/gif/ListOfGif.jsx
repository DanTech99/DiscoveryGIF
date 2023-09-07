import React from "react";
import {
	useState,
} from "react";
// Importamos el componente Gif y los estilos del módulo Gif
import Gif from "./Gif";
import styles from "./Gif.module.css";

// Exportamos la función ListOfGif que recibe como parámetros los gifs y la palabra clave decodificada
export default function ListOfGif({gifs, decodeKeyword}) {
	// Creamos el estado para los gifs y su función de actualización
	const [gif, setGif] = useState(gifs)

	return (
		<>
		<h1>Buscando los Gif de: {decodeKeyword}</h1>
		<div className={styles.item_gif}>
		
		{gif.map(
			({ id, title, url }) => (
				<Gif
					key={id}
					id={id}
					title={title}
					url={url}
				/>
			)
		)}
	</div>
		</>
		
	)
}
