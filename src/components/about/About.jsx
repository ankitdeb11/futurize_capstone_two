
import FrontEnd from "../../assets/frontend.png";
import BackEnd from "../../assets/backend.png";
import MLDev from "../../assets/ml_developer.png";
import Python from "../../assets/python.png";
import "./about.css";


const About = () => {
    return (


        <section className="about section" id='about'>
            <h2 className="section__title">About Us</h2>
            <span className="section__subtitle">Meet the Dream Team - your Support System</span>



            <div className="about__container container">

                <div className="about__box">




                    {/* Ankit Deb Part from here  */}
                    <img src={FrontEnd} alt="" className="about__img-top" />
                    <div className="about__vertical">

                        <div className="about__vertical-name">
                            Ankit Deb
                        </div>

                        <div className="about__vertical-title">
                            Front End Developer
                        </div>


                        <div className="about__vertical-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint est ipsum nemo fugiat quo nesciunt distinctio laudantium laborum architecto.
                        </div>
                    </div>




                    {/* Surajkumar S Part from here  */}

                    <img src={BackEnd} alt="" className="about__img-top" />
                    <div className="about__vertical">

                        <div className="about__vertical-name">
                            Surajkumar Sikchi
                        </div>

                        <div className="about__vertical-title">
                            Back End Developer
                        </div>


                        <div className="about__vertical-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint est ipsum nemo fugiat quo nesciunt distinctio laudantium laborum architecto.
                        </div>
                    </div>





                    {/* Ajinkya Deokate Part from here  */}

                    <img src={MLDev} alt="" className="about__img-top" />
                    <div className="about__vertical">

                        <div className="about__vertical-name">
                            Ajinkya Deokate
                        </div>

                        <div className="about__vertical-title">
                            Machine Learning Developer
                        </div>


                        <div className="about__vertical-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint est ipsum nemo fugiat quo nesciunt distinctio laudantium laborum architecto.
                        </div>
                    </div>







                    {/* Aditya Ojha Part from here  */}



                    <img src={MLDev} alt="" className="about__img-top" />
                    <div className="about__vertical">

                        <div className="about__vertical-name">
                            Aditya Ojha
                        </div>

                        <div className="about__vertical-title">
                            Machine Learning Developer
                        </div>


                        <div className="about__vertical-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint est ipsum nemo fugiat quo nesciunt distinctio laudantium laborum architecto.
                        </div>
                    </div>




                    {/* Prasad Deshmukh Part from here  */}


                    <img src={Python} alt="" className="about__img-top" />
                    <div className="about__vertical">

                        <div className="about__vertical-name">
                            Prasad Deshmukh
                        </div>

                        <div className="about__vertical-title">
                            Python Developer
                        </div>


                        <div className="about__vertical-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint est ipsum nemo fugiat quo nesciunt distinctio laudantium laborum architecto.
                        </div>
                    </div>









                </div>



            </div>



        </section>



    )
}

export default About