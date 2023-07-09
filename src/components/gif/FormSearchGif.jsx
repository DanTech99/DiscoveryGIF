import React from "react";

import {
	useLocation,
	Link,
} from "wouter";

function FormSearchGif({
	keyword,
	setKeyword,
}) {
	const [location] = useLocation();
	return (
		<>
		
			<h1 className="title-gif">
				<Link to="/">Gif Search</Link>
			</h1>
			<div className="form-container">
			<form
				action=""
				style={{
					display:
						location === "/"
							? "flex"
							: "none",
				}}
			>
				
				<input
					type="text"
					onChange={(e) =>
						setKeyword(e.target.value)
					}
					value={keyword}
					className="inputSearch"
					placeholder="busca un gif"
				/>
			</form>
			<h1>{keyword}</h1>
			</div>
		</>
	);
}

export default FormSearchGif;
