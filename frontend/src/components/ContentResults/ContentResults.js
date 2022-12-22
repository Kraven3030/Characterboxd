function ContentResults({ mediaResults }) {
    const baseUrl = "https://image.tmdb.org/t/p/original"
    const genres = [
    {
        "id": 10759,
        "name": "Action & Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 10762,
        "name": "Kids"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10763,
        "name": "News"
    },
    {
        "id": 10764,
        "name": "Reality"
    },
    {
        "id": 10765,
        "name": "Sci-Fi & Fantasy"
    },
    {
        "id": 10766,
        "name": "Soap"
    },
    {
        "id": 10767,
        "name": "Talk"
    },
    {
        "id": 10768,
        "name": "War & Politics"
    },
    {
        "id": 37,
        "name": "Western"
    }]
    return (
        <div className="list">
            {console.log(mediaResults.results)}
            {mediaResults.results.map(media => (
                    <div key={media.id} className="resultCard">
                        <h3>{media.title}{media.name}</h3>
                        <h4>{media.genre_ids.forEach(genre_id => {
                            if (media.genre_id === genres.id) {
                                return genres.name
                            }
                        })
                        }</h4>
                        <h5>{media.release_date}{media.first_air_date}</h5>
                        <p>{media.overview}</p>
                        <img src={baseUrl + media.poster_path} alt={"something"} />
                        
                    </div>
            )
            )}
        </div>
    )
};

export default ContentResults;