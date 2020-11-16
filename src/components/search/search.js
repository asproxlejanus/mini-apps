import React, { useEffect, useState } from "react";
import axios from "axios";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: query,
        },
      });
      setResults(data.query.search);
    };
    if (query) search();
  }, [query]);

  return (
    <div>
      <div className="ui fluid icon input">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search..."
        />
        <i className="search icon"></i>
      </div>
      <div className="sixteen wide column">
        {results?.map((item) => {
          return <List item={item} key={item.pageid} />;
        })}
      </div>
    </div>
  );
};

export default Search;

const List = ({ item }) => {
  return (
    <div className="ui relaxed divided list">
      <div className="item">
        <div className="content">
          <span className="header">{item.snippet}</span>
        </div>
      </div>
    </div>
  );
};
