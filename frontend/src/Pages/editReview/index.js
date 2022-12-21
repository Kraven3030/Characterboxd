function EditReview() {
return(
    <div>
        {/* <Nav /> */}
        <h1>Edit</h1>
        <figure class="figure">
            <img src="#" class="figure-img img-fluid rounded" alt='' />
            <figcaption class="figure-caption" >
                <input>Review Here</input>
            </figcaption>
        </figure>
        <button type="submit" class="btn btn-info" >Save Changes</button>
        <button type="submit" class="btn btn-danger" >Delete</button>
    </div>
);

}

export default EditReview