import { useState } from 'react'
import './App.css'
import ListOfGif from './components/gif/ListOfGif'
import SearchOfGif from './components/gif/SearchOfGif'
import GifCategories from './components/gif/GifCategories'

import {Route, Link, useLocation} from 'wouter'

function App() {
  const [keyword, setKeyword] = useState('')
  const [location] = useLocation();

  return (
    <>
      <h1><Link to='/'><span className='title-gif'>Gif</span>  Search</Link></h1>

      <form action="" style={{display: location === '/' ? 'block' : 'none'}}>
        
      <input type="text" onChange={e => setKeyword(e.target.value)} value={keyword} className='inputSearch' placeholder='busca un gif' />
      </form>

      <h2>Categories</h2>
      <GifCategories />

      <div className="card">
        <h1>{keyword}</h1>
        <section className='App-content'>
          <Route path='/gif/:keyword' component={ListOfGif} />
          <SearchOfGif keyword={keyword} />
        </section>
      </div>
    </>
  )
}
export default App
