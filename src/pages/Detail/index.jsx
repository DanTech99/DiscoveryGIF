import React from "react";
import { useContext } from "react";
import GifsContext from "../../context/GifsContextProvider";

export default function Detail({params}){


	const gifsContext = useContext(GifsContext)
	console.log(gifsContext)

	
	
	// const gif = gifs.find(singleGif => singleGif.id === params.id)

	return (
	<div className="Detail">
		<h1>Gif con id {params.id}</h1>
	</div>
	)
};
