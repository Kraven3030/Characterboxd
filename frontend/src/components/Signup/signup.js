import { useState } from 'react'
import "./signup.css"


function Signup() {

    // The on load event waits until the page is fully loaded before running the functions within.
    window.onload = (event) => {
        const signupModal1 = document.getElementsByClassName("signupModal")
        const openSignupModal = document.getElementsByClassName("signupLink")
        const closeSignupModal = document.getElementsByClassName("modalCloseBtn")
        window.addEventListener("click", outsideLogClick);

        console.log(456)
        // This function allows the user to open the login model once the login link is clicked
        for (let i = 0; i < openSignupModal.length; i++) {
            openSignupModal[i].addEventListener("click", openSignup)
        }
        function openSignup() {
            document.getElementsByClassName("signupModal")[0].style = "display: block"
        }

        // This function allows the user to click the X in the modal to close 
        for (let i = 0; i < closeSignupModal.length; i++) {
            closeSignupModal[i].addEventListener("click", closeSignup)
        }
        function closeSignup() {
            document.getElementsByClassName("signupModal")[0].style = "display: none"
        }


        function outsideLogClick(e) {
            for (let i = 0; i < signupModal1.length; i++) {
                if (e.target === signupModal1[i]) {
                    signupModal1[i].style.display = "none"
                }
            }
        }
    }


    return (
        <figure>
            <div className='signupModal'>
                <div className='modalContent'>
                    <form className='signupForm'>
                        <div className='signupDiv'>
                            <span className='modalCloseBtn'>&times;</span>
                            <label htmlFor='Email'>Email:</label>
                            <input type='text' id='username' placeholder='Username'></input>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder="Password"></input>
                            <button className='submitSignupBtn' type="submit">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </figure>
    )
}

export default Signup;