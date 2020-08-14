import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	// Hooks useState for search term and search results
	const [term, setTerm] = useState("programming");
	const [results, setResults] = useState([]);

	// Runs when re-rendered and when the term changes
	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
				// params passed in for the wikipedia search link
				params: {
					action: "query",
					list: "search",
					origin: "*",
					format: "json",
					srsearch: term,
				},
			});
			// Results from query
			setResults(data.query.search);
		};
		search();
		// Passed in term in array gets called each time the term changes
	}, [term]);

	// Maps through all results and creates jsx for each item then sets it to renderedResults
	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className='item'>
				<div className='content'>
					<div className='header'>{result.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label>Enter Search Term</label>
					<input
						className='input'
						value={term}
						onChange={(event) => setTerm(event.target.value)}
					/>
				</div>
			</div>
			<div className='ui celled list'>{renderedResults}</div>
		</div>
	);
};

export default Search;
