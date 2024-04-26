
import "./header.css";

import MainLogo from "../../assets/mainlogo.png";

const Header = () => {
    return (
        <header className='header'>
            <nav className="nav container">

                <a href="#indexhtml" className="nav__logo">
                    <img src={MainLogo} alt="" />
                    {/* Futurize */}
                </a>

                <div className="nav__menu">
                    <div className="nav__list grid">


                        <li className="nav__item">
                            <a href="#home" className="nav__link">Home</a>
                        </li>


                        <li className="nav__item">
                            <a href="#features" className="nav__link">Features</a>
                        </li>



    

                        <li className="nav__item">
                            <a href="#news" className="nav__link">News</a>
                        </li>


                        <li className="nav__item">
                            <a href="#market" className="nav__link">Market</a>
                        </li>




                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>



                    </div>
                </div>

            </nav>

        </header>
    )
}

export default Header