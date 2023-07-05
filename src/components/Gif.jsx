import React from 'react'

function Gif({title, url, id} = {}) {
  return (
    <a href={`#${id}`}>
        <h3>{title}</h3>
        <img src={url} alt=""  />
    </a>
  )
}

export default Gif