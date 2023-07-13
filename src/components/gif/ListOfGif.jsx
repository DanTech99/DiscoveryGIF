import React from "react";
import {
	useState,
} from "react";
import Gif from "./Gif";
import styles from "./Gif.module.css";

export default function ListOfGif({gifs, decodeKeyword}) {
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
