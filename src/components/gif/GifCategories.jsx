import React from "react";
import { Link } from "wouter";
import {
	useEffect,
	useState,
} from "react";
import { getCategories } from "../../services/getCategories";
import styles from "./Gif.module.css";

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
			<div
				className={
					styles.keyword_recomended
				}
			>
				{categories.map(({ name }) => (
					<Link
						to={`/search/${name}`}
						className={
							styles.keyword_link
						}
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
