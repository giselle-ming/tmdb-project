import { useState } from "react";
import NavBar from "./NavBar";
import SingleCardSearch from "./SingleCardSearch";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [showClearButton, setShowClearButton] = useState(false);

  const onChange = (e) => {
    e.preventDefault();

    const inputText = e.target.value;
    setQuery(inputText);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1&include_adult=false&query=${inputText}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          setShowClearButton(inputText.length > 0);
        } else {
          setResults([]);
        }
      });
  };

  const clearInput = () => {
    setQuery("");
    setResults([]);
    setShowClearButton(false);
  };

  return (
    <div className="search-main">
      <NavBar />
      <div className="search-container">
        <div className="search-input">
          <input
            name="search"
            type="text"
            placeholder=""
            value={query}
            onChange={onChange}
          ></input>
          {showClearButton && (
            <button
              type="button"
              onClick={clearInput}
              className="search-input-btn-clear"
            >
              Clear
            </button>
          )}
        </div>
        <div className="search-results-container">
          {results.length > 0 ? (
            results.map((movie) => (
              <SingleCardSearch key={movie.id} movie={movie} />
            ))
          ) : (
            <h2 className="search-empty-results">
              No movies found. Please try again.
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
