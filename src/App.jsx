import "./App.css";
import SearchResults from "./pages/SearchResults";
import Detail  from "./pages/Detail";
import Home from "./pages/Home";
import {GifsContextProvider} from "./context/GifsContextProvider";

import { Route, Link } from "wouter";


function App() {
	return (
		
		<div className="App">
			<h1 className="title">
				<Link to="/">React Gif</Link>
			</h1>
			
			<div className="card">
				<section className="App-content">
					<GifsContextProvider>
					<Route
						component={Home}
						path="/"
					/>
					<Route
						component={SearchResults}
						path="/search/:keyword"
					/>
					<Route
						component={Detail}
						path="/gif/:id"
					/>
					</GifsContextProvider>
				</section>
			</div>
			
		</div>
		
	);
}
export default App;
