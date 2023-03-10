import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { updateReview, deleteReview } from "../../utils/api";

function EditReview() {

    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();
    const [review, setReview] = useState({
        title: state.title,
        body: state.body,
        reviewId: state.reviewId
    });

    const handleChange = (event) => {
        setReview({
            ...review,
            [event.target.name]: event.target.value
        });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const reviewData = {
            title: review.title,
            body: review.body,
            reviewId: review.reviewId
        }
        await updateReview(reviewData);
        navigate("/UsersReviews", { replace: true });
    }
    const handleDelete = async (event) => {
        event.preventDefault();
        console.log("trying to delete");
        await deleteReview(review.reviewId);
        navigate("/UsersReviews", { replace: true });
    }


    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="title"
                        name="title"
                        value={review.title}
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="body">Review:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="body"
                        name="body"
                        value={review.body}
                        onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>Save Changes</button>
                <button type="submit" className="btn btn-danger" onClick={(event) => handleDelete(event)}>Delete</button>
            </form>
        </div>
    );

}

export default EditReview