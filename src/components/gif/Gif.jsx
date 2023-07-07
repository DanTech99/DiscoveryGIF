import React from 'react'


function Gif({title, url, id} = {}) {

  return (
    <>
      <a href={`#${id}`}>
          <img src={url} alt={title}  />
      </a> 
    </>
  )
}

export default Gif