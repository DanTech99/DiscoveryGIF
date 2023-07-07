import React from 'react'
import {Link} from 'wouter'
import { useEffect, useState } from 'react'
import { getCategories } from '../../services/getCategories'

function GifCategories() {

  const [categories, setCategories]
 = useState([])

  useEffect(() => {
    getCategories()
    .then(categories => setCategories(categories))
  }, [])

  return (
    <div className='keyword-recomended'>
       {
          categories.map(({name}) => 
          <Link to={`/gif/${name}`} className='keyword-link'>{name}</Link>
          )
       }      
    </div>
  )
}

export default GifCategories