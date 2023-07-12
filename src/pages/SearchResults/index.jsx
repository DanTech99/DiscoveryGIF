import React from "react";
import SpinnerLoader from "../../components/SpinnerLoader";
import ListOfGif from "../../components/gif/ListOfGif";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResult({
	params: { keyword },
}) {
	const {loading, gifs} = useGifs({keyword})

	// useEffect(() => {
	// 	setLoading(true);
	
	// 	getGifs({ keyword }).then((gifs) => {
	// 		setGifts(gifs)
	// 		setLoading(false)
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 		setLoading(false);
	// 	});
		
	// }, [keyword]);

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
