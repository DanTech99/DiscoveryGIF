
import { useEffect, useState } from 'react'
import { getGifs } from '../services/getGifs'

export function useGifs({keyword} = {keyword: null}) {
  const [gifs, setGifts] = useState(
		[]
	);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
	
		getGifs({ keyword: keywordToUse })
			.then((gifs) => {
			setGifts(gifs)
			setLoading(false)
			localStorage.setItem('lastKeyword', keyword)
		})
		.catch((err) => {
			console.log(err);
			setLoading(false);
		});
		
	}, [keyword]);

  return {gifs, loading}
}

