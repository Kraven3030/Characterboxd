function MovieReviews() {

    const [movieReview, setMovieReview] = useState([]);
    
    useEffect(() => {
        async function grabMedia() {
            const data = await axios.get(`http://localhost:9000/media/${._id}`)
            setMedia(data)
        }
    },[])


    return(
        <div>
            {/* <Nav /> */}
            <img src="#" class="img-thumbnail" alt="" />
            <div>
                <section>
                    <input>Review 1</input>
                </section>
                <section>
                    <input>Review 2</input>
                </section>
                <section>
                    <input>Review 3</input>
                </section>
            </div>
        </div>
    );
    
    }
    
    export default MovieReviews