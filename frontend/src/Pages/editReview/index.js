function EditReview() {
    return (
        <div>
            {/* <Nav /> */}
            <h1>Edit</h1>
            <figure className="figure">
                <img src="#" className="figure-img img-fluid rounded" alt='' />
                <figcaption className="figure-caption" >
                    <input>Review Here</input>
                </figcaption>
            </figure>
            <button type="submit" className="btn btn-info" >Save Changes</button>
            <button type="submit" className="btn btn-danger" >Delete</button>
        </div>
    );

}

export default EditReview