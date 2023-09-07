import React from "react";
import FormSearchGif from "../../components/gif/FormSearchGif";
import GifCategories from "../../components/gif/GifCategories";
import { useGifs } from "../../hooks/useGifs";
import SpinnerLoader from "../../components/SpinnerLoader";

export default function Home() {

	const {gifs, loading} = useGifs();
	
	return (
		<div>
			<FormSearchGif />
			<GifCategories />
			<h3>Busqueda Reciente</h3>
			<div className="home-container">
				{
					loading ? <SpinnerLoader /> : gifs.map((gif) => {
						return (
							<div key={gif.id}>
								<img src={gif.url} alt='gifs' className="img-home" loading="lazy" />
							</div>
						);
					})
				}
			</div>
		</div>
	);
}
