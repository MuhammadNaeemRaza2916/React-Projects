import './Navbaar.css';

const Navbaar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src="../../public/images/brand_logo.png" alt="" />
                </div>
                <div className="navMenu">
                    <ul>
                        <li><a href="#">MENU</a></li>
                        <li><a href="#">LOCATION</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
                <div className="navBtn">
                    <button>Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbaar;