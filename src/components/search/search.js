import React, { useEffect, useState } from "react";
import axios from "axios";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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
    <div className="ui segment" style={{ padding: 15 }}>
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
      <div className="sixteen wide column" style={{ paddingTop: 10 }}>
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
    <div className="ui middle aligned divided list">
      <div className="item">
        <div className="right floated content">
          <div className="ui button">
            <a
              href={`https://en.wikipedia.org?curid=${item.pageid}`}
              target="_blank"
            >
              Go
            </a>
          </div>
        </div>
        <div className="content">
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    </div>
  );
};
