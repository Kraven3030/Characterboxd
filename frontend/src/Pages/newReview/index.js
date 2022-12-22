import React, { useState } from 'react';
function NewReview() {

    const [review, setReview] = useState('')


    return(
        <div>
           {/* <Nav />  */}
           <h1>New Review</h1>
        <form>
            <label>

            </label>
            <input type="submit"/>
        </form>
        {/* <figure class="figure">
            <img src="#" class="figure-img img-fluid rounded" alt='' />
            <figcaption class="figure-caption" >
                <input>Review Here</input>
            </figcaption>
        </figure>
        <button type="submit" class="btn btn-info" >Add Review</button> */}
        </div>
    );
    
    }
    
    export default NewReview