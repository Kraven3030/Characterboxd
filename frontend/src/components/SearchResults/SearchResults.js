import React from 'react';
import ContentResults from '../ContentResults/ContentResults';

const SearchResults = ({ mediaResults }) => {
  // return early if there are no images
  if (mediaResults.length === 0) {
      return <h2>No Images Found!</h2>
  }
  return (
      <ContentResults mediaResults={mediaResults} />
  )
}
export default SearchResults;