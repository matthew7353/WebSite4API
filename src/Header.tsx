

function Header(){
    return(
        <div className = 'navbar navbar-expand-lg bg-dark'>
            <div className='container-fluid'>
                <a className="navbar-brand" href="#">Your Logo</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;