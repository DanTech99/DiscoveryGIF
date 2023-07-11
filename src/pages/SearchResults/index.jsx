import React from "react";
import {
	useEffect,
	useState,
} from "react";
import { getGifs } from "../../services/getGifs";
import SpinnerLoader from "../../components/SpinnerLoader";
import ListOfGif from "../../components/gif/ListOfGif";

export default function SearchResult({
	params: { keyword },
}) {
	const [gifts, setGifts] = useState(
		[],
	);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
	
		getGifs({ keyword }).then((gifs) => {
			setGifts(gifs)
			setLoading(false)
		})
		.catch((err) => {
			console.log(err);
			setLoading(false);
		});
		
	}, [keyword]);

	const decodeKeyword = decodeURIComponent(keyword.replace("%20", " "))

	return (
		<>
		 {
				loading
				? <SpinnerLoader />
				: <ListOfGif gifs={gifts} decodeKeyword={decodeKeyword} />
		 }
		</>
	);
}
