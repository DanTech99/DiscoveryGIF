import React from 'react'
import { useEffect, useState } from 'react'
import { getGifs } from '../services/getGifs'
import Gif from './Gif'

export default function ListOfGif({ params: {keyword}}) {

    const [gifts, setGifts] = useState([])

    useEffect(() => {
        getGifs({keyword})
        .then(gifs => setGifts(gifs))
    }, [keyword])

  return gifts.map(({id, title, url}) => 
    <Gif 
    key={id}
    id={id} 
    title={title} 
    url={url} />)
}
