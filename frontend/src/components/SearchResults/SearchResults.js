import React from 'react';
import { useParams } from 'react-router-dom'
import ContentResults from '../ContentResults/ContentResults';

const SearchResults = ({ mediaResults, searchString, limit }) => {

  const displayedResults = mediaResults.slice(0, limit)

  return (
    <div className='searchResults'>
      {mediaResults && mediaResults.results && mediaResults.results.map(result => (
        <div key={result.id}>
          {/* render result */}
          <ContentResults mediaResults={mediaResults} />
        </div>
      ))}
    </div>
  );
}

// // return early if there are no images
// if (mediaResults.results) {
//   if (mediaResults.results.length > 0) {
//   return (
//     <ContentResults mediaResults={mediaResults} />
//   )
// } else {
//   if (searchString.length !== 0) {
//   return (
//     <h2 className="noResult">No media found!</h2>
//   )
// }
//     }
//   }
// }
export default SearchResults;