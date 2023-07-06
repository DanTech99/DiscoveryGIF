import React from 'react'
import {Link} from 'wouter'

function GifLinks() {
  return (
    <div className='keyword-recomended'>
        <Link to="/gif/anime" className='keyword-link'>gif de animes</Link>
        <Link to="/gif/kawai" className='keyword-link'>gif de cosas kawai</Link>
        <Link to="/gif/game" className='keyword-link'> gif de juegos</Link>
        <Link to="/gif/lol" className='keyword-link'> gif de lol</Link>        
  </div>
  )
}

export default GifLinks