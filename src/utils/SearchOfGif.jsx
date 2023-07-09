import React from "react";
import {
	useState,
	useEffect,
} from "react";
import { getGifs } from "../services/getGifs";
import Gif from "../components/gif/Gif";

export default function SearchResults({
	keyword,
}) {
	const [gifts, setGifts] = useState(
		[],
	);

	useEffect(() => {
		getGifs({ keyword }).then((gifs) =>
			setGifts(gifs),
		);
	}, [keyword]);

	return gifts.map(
		({ id, title, url }) => (
			<Gif
				key={id}
				id={id}
				title={title}
				url={url}
			/>
		),
	);
}
