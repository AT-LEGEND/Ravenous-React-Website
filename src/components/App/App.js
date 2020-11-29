import "./App.css";
import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
function App() {
	return (
		<div class='App'>
			<h1>ravenous</h1>
			<SearchBar />
			<BusinessList />
		</div>
	);
}

export default App;
