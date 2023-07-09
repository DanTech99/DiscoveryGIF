import React from "react";
import { Link } from "wouter";
import {
	useEffect,
	useState,
} from "react";
import { getCategories } from "../../services/getCategories";

function GifCategories() {
	const [categories, setCategories] =
		useState([]);

	useEffect(() => {
		getCategories().then(
			(categories) =>
				setCategories(categories),
		);
	}, []);

	return (
		<>
			<h2>Categories</h2>
			<div className="keyword-recomended">
				{categories.map(({ name }) => (
					<Link
						to={`/gif/${name}`}
						className="keyword-link"
						key={name}
					>
						{name}
					</Link>
				))}
			</div>
		</>
	);
}

export default GifCategories;
