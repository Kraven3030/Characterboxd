import { useState, useEffect } from "react";
import axios from 'axios'


function UsersReviews() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        // async function grabUser() {
        //     const data = await axios.get(`http://localhost:9000/user/${user._id}`)
        //     setUser(data)
        // }
    }, [])

    return (
        <div>
            {/* <Nav /> */}
            <figure>

                <img src="#" class="rounded-circle" alt="" />
                    <figcaption>
                        <h3>nmae</h3>
                    </figcaption>
            </figure>
            <figure>
                <figcaption>
                    <h2>Reviews by:name</h2>

                </figcaption>
                <form>
                    {/* Reviews Here Using For Loop*/}
                </form>

            </figure>
        </div>
    );

}

export default UsersReviews