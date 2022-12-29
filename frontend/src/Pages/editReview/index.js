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

    const handleChange = (event) => {
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
                onChange={handleChange}
                />
                <br />
                <label htmlFor="body">Review:</label>
                <input 
                type="text"
                id="body"
                name="body"
                value={review.body}
                onChange={handleChange}
                />
                <br />
            <button type="submit" className="btn btn-info" >Save Changes</button>
            <button type="submit" className="btn btn-danger" >Delete</button>
            </form>
        </div>
    );

}

export default EditReview