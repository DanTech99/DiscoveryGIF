import React from "react";
import {
	useEffect,
	useState,
} from "react";
import { getGifs } from "../../services/getGifs";
import Gif from "../../components/gif/Gif";
import styles from "../../components/gif/Gif.module.css";

export default function ListOfGif({
	params: { keyword },
}) {
	const [gifts, setGifts] = useState(
		[],
	);

	useEffect(() => {
		getGifs({ keyword }).then((gifs) =>
			setGifts(gifs),
		);
	}, [keyword]);

	const decodeKeyword = decodeURIComponent(keyword.replace("%20", " "))

	return (
		<>
			<h1>
				Mostrando gif de: {decodeKeyword}
			</h1>
			<div className={styles.item_gif}>
				{gifts.map(
					({ id, title, url }) => (
						<Gif
							key={id}
							id={id}
							title={title}
							url={url}
						/>
					),
				)}
			</div>
		</>
	);
}
