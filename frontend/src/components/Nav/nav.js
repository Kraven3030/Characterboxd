function Nav() {
    return (
    <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link className='loginLink' to="/Login/login">
          <h1>Login</h1>
        </Link>
        <Link to="/Signup/signup">
          <h1 className='signupLink'>Signup</h1>
        </Link>
    </div>
    );
}
export default Nav