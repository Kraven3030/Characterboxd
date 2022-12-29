import React, { useState } from 'react';
function NewReview() {

    const [review, setReview] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();


    }

    return(
        <div>
           <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input 
                type="text"
                id="title"
                name="title"
                value={review.title}
                />
                <br />
                <label htmlFor="body">Review:</label>
                <input 
                type="text"
                id="body"
                name="body"
                value={review.body}
                />
                <br />
                <button type="submit" className="btn btn-info" >Submit Review</button>
            </form>
        </div>
    );
    
    }
    
    export default NewReview