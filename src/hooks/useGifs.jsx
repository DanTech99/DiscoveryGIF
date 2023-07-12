import React from 'react'
import { useEffect, useState } from 'react'
import { getGifs } from '../services/getGifs'

export function useGifs({keyword}) {
  const [gifs, setGifts] = useState(
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

  return [loading, gifs]
}

