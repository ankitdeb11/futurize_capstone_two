
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer__container container">
                <h1 className="footer__title">Thanks for passing by. Happy Investing!</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Enquiries</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Applications</a>
                    </li>


                </ul>

                <div className="footer__social">


                    <a href="instagram.com" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-instagram' ></i>
                    </a>



                    <a href="https://discord.gg/Uf8KpEnwuH" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-discord-alt' ></i>
                    </a>

                    <a href="https://twitter.com/codewell11" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-twitter' ></i>
                    </a>



                </div>


                <span className='footer__copy'>
                    Futurize Prototype. <br />
                    Made with <i className='bx bxl-react'></i> by Team 96 - VIT <br />
                    &#169; Ankit Deb 2024. All Rights Reserved.
                </span>

            </div>
        </footer>
    )
}

export default Footer