import React from "react";
import SpinnerLoader from "../../components/SpinnerLoader";
import ListOfGif from "../../components/gif/ListOfGif";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResult({params}) {

	const {keyword} = params
	const {loading, gifs} = useGifs({keyword})

	const decodeKeyword = decodeURIComponent(keyword.replace("%20", " "))

	return (
		<>
		 {
				loading
				? <SpinnerLoader />
				: <ListOfGif gifs={gifs} decodeKeyword={decodeKeyword} />
		 }
		</>
	);
}
