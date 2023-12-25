import './Header.css'

function Header(){
    return(
        <nav>
            <div>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <button className="signup-button">Sign Up</button>
        </nav>
    )
}

export default Header;