import './Header.css'
import {Link} from 'react-scroll';
import NavLink from "./NavBarComponents.tsx";



function Header(){
    return(
        <>
            <nav>
                <div>
                    <a href="#" className = 'logo'>Home</a>
                    <a href="#functions">Funkcje</a>
                    <NavLink to={"functions"}>Funkcje</NavLink>
                    <a href="#">Contact</a>
                </div>
                <button className="signup-button">Sign Up</button>
            </nav>
        </>
    )
}

    export default Header;