
import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContextProvider'

// custom hook para obtener los gifs 
export function useGifs({keyword} = {keyword: null}) {
	const [loading, setLoading] = useState(false);
 	const {gifs, setGifs} = useContext(GifsContext);

	useEffect(() => {
		setLoading(true);
		const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
	
		getGifs({ keyword: keywordToUse })
			.then((gifs) => {
			setGifs(gifs)
			setLoading(false)
			localStorage.setItem('lastKeyword', keyword)
		})
		.catch((err) => {
			console.log(err);
			setLoading(false);
		});
		
	}, [keyword, setGifs]);

  return {loading, gifs }
}

