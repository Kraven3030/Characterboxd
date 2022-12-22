import { useState, useEffect } from "react";

function UsersReviews() {

    const [user, setUser] = useState([]);
    
    useEffect(() => {
        async function grabUser() {
            const data = await axios.get(`http://localhost:9000/user/${._id}`)
            setUser(data)
        }
    },[])

    return(
        <div>
            {/* <Nav /> */}
            <figure>
                <img src={user.img} class="rounded-circle" alt="" />
                    <figcaption>
                        <h3>{ user.username }</h3>
                    </figcaption>
            </figure>
            <figure>
                <figcaption>
                    <h2>Reviews by:{ user.username }</h2>
                </figcaption>
                <form>
                    {/* Reviews Here Using For Loop*/}
                </form>

            </figure>
        </div>
    );
    
    }
    
    export default UsersReviews