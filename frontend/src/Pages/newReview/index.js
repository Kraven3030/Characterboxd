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
            </form>
        </div>
    );
    
    }
    
    export default NewReview