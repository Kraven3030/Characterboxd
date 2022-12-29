import { useState,useEffect } from "react";

function EditReview() {

    const [review, setReview] = useState({});

    useEffect(() => {
        async function grabReview() {
            const results = await fetch()
            setReview(results)
        }
        grabReview()
    },[])

    const handleeChange = (event) => {
        setReview({
            [event.target.name]: event.target.value
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input 
                type="text"
                id="title"
                name="title"
                value={review.title}
                onChange={handleSubmit}
                />
                <br />
                <label htmlFor="body">Review:</label>
                <input 
                type="text"
                id="body"
                name="body"
                value={review.body}
                onChange={handleSubmit}
                />
                <br />
            <button type="submit" className="btn btn-info" >Save Changes</button>
            <button type="submit" className="btn btn-danger" >Delete</button>
            </form>
        </div>
    );

}

export default EditReview