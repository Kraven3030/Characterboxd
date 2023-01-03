
import React from 'react';
import ContentResults from '../ContentResults/ContentResults';

const SearchResults = ({ mediaResults, searchString }) => {
  // return early if there are no images
  if (mediaResults.results) {
    if (mediaResults.results.length > 0) {
      return (
      <ContentResults mediaResults={mediaResults} />
      )
    } else {
      if (searchString.length !== 0) {
        return (
          <h2 className="noResult">No media found!</h2>
          )
      }
    }
  }
}
export default SearchResults;