import { useState } from "react";
import "./App.css";
import ListOfGif from "./components/gif/ListOfGif";
import SearchOfGif from "./components/gif/SearchOfGif";
import GifCategories from "./components/gif/GifCategories";
import FormSearchGif from "./components/gif/FormSearchGif";

import { Route } from "wouter";

function App() {
	const [keyword, setKeyword] =
		useState("");
	const [
		isvisibletag,
		setIsvisibletag,
	] = useState(false);

	const handleShowCategories = () => {
		setIsvisibletag(!isvisibletag);
	};
	return (
		<>
			<FormSearchGif
				keword={keyword}
				setKeyword={setKeyword}
			/>

			<button
				type="button"
				onClick={handleShowCategories}
				className="btn-categories"
			>
				Categories
			</button>
			{isvisibletag ? (
				<GifCategories />
			) : null}

			<div className="card">
				<section className="App-content">
					<Route
						path="/gif/:keyword"
						component={ListOfGif}
					/>
					<SearchOfGif
						keyword={keyword}
					/>
				</section>
			</div>
		</>
	);
}
export default App;
