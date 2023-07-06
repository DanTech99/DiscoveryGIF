import { useState } from 'react'
import './App.css'
import ListOfGif from './components/ListOfGif'
import SearchOfGif from './components/SearchOfGif'
import GifCategories from './components/GifCategories'

import {Route, Link} from 'wouter'

function App() {
  const [keyword, setKeyword] = useState('')

  return (
    <>
      <h1><span className='title-gif'>Gift</span>  Search</h1>
      <form action="">
        
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
