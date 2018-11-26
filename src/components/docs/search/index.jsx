import React from "react";
import icon from "./magnifier.svg";
import { Link } from "gatsby";

import "./search.scss";

import { InstantSearch, Hits, SearchBox, Highlight, Snippet, connectStateResults } from "react-instantsearch-dom";

function Product({ hit }) {
  return (
    <Link to={hit.path}>
      <Highlight attribute="title" hit={hit} />
      <Snippet attribute="excerpt" hit={hit} />
    </Link>
  );
}

const Content = connectStateResults(({ searchState, searchResults }) => {
  // If our query is empty - display nothing.
  if (searchState && !searchState.query) {
    return null;
  }

  // If we have results and valid hits.
  if (searchResults && searchResults.nbHits !== 0) {
    return (
      <div className="hits-wrapper">
        <Hits hitComponent={Product} />
      </div>
    );
  }

  // If we don't have hits (wrap so it displays in the same style)
  return (
    <div className="hits-wrapper">
      <div className="ais-Hits">
        <p>
          No results have been found for: <em>{searchState.query}</em>
        </p>
      </div>
    </div>
  );
});

export default class Specs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <InstantSearch appId="0M9O8K67BX" apiKey="02a6a0889ba6194edd1030b80dde383c" indexName="test_doc">
        <div className="search-wrapper">
          <SearchBox submit={<img src={icon} alt="Search" />} reset={null} translations={{ placeholder: "Search our documentation..." }} />
        </div>
        <Content />
      </InstantSearch>
    );
  }
}
