import '../styles/Navbar.css'

export const Navbar = () => {
    return (
        <nav>
            <div className='logo-and-name'>
                <img className="logo" src="src/assets/images/logo.png" alt="" />
                <h1>Sapori D'Italia Ristorante</h1>
            </div>
            <ul className='menu'>
                <li><a href="#">Starters</a></li>
                <li><a href="#">Main Courses</a></li>
                <li><a href="#">Desserts</a></li>
            </ul>
        </nav>
    )
}
