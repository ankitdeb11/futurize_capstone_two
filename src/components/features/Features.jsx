import { useState } from 'react';
import "./features.css";

const Features = () => {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }



  return (
    <section className="features section" id="features">
      <h2 className="section__title">Features</h2>
      <span className="section__subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis itaque soluta?
      </span>


      <div className="features__container container grid">

        {/* Feature 1 Area from here  */}



        <div className="features__content">


          <div>
            <i className="uil uil-building features__icon"></i>
            <h3 className="features__title">Feature 1 - Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>

          </div>


          <span className="features__button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right features__button-icon"></i>
          </span>


          <div className={toggleState === 1 ? "features__modal active-modal" : "features__modal"}>
            <div className="features__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times features__modal-close"></i>

              <h3 className="features__modal-title">Feature 1 - Lorem, ipsum dolor.</h3>
              <p className="features__modal-description">Feature 1 - brief description Lorem ipsum dolor sit amet, consectetur adipisicing.</p>


              <ul className="features__modal-projects grid">


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dignissimos culpa, accusantium itaque impedit illo!</p>
                </li>



                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam adipisci voluptates ullam at cumque?
                  </p>
                </li>


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nemo libero, aperiam maxime quae quaerat.
                  </p>
                </li>


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ipsa illum voluptas quam natus tenetur.</p>
                </li>


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sint, reprehenderit rem laudantium optio alias!
                  </p>
                </li>


              </ul>




            </div>
          </div>

        </div>




        {/* Feature 2 Area from here  */}

        <div className="features__content">



          <div>
            <i className="uil uil-chart-growth features__icon"></i>
            <h3 className="features__title">Feature 2- Lorem ipsum, dolor sit amet consectetur adipisicing..</h3>

          </div>


          <span onClick={() => toggleTab(2)} className="features__button">View more <i className="uil uil-arrow-right features__button-icon"></i></span>


          <div className={toggleState === 2 ? "features__modal active-modal" : "features__modal"}>
            <div className="features__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times features__modal-close"></i>

              <h3 className="features__modal-title">Feature 2 - Lorem, ipsum.</h3>
              <p className="features__modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit debitis architecto consequatur esse minima.</p>


              <ul className="features__modal-projects grid">


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere porro a sapiente at itaque.</p>
                </li>



                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere porro a sapiente at itaque.</p>
                </li>


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere porro a sapiente at itaque.</p>
                </li>


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere porro a sapiente at itaque.</p>
                </li>


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere porro a sapiente at itaque.</p>

                </li>


              </ul>




            </div>
          </div>

        </div>





        {/* Area for Feature 3 from here  */}


        <div className="features__content">



          <div>
            <i className="uil uil-usd-circle features__icon"></i>
            <h3 className="features__title">Feature 3 - Lorem ipsum dolor sit amet consectetur adipisicing.</h3>

          </div>


          <span onClick={() => toggleTab(3)} className="features__button">View more <i className="uil uil-arrow-right features__button-icon"></i></span>


          <div className={toggleState === 3 ? "features__modal active-modal" : "features__modal"}>
            <div className="features__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times features__modal-close"></i>

              <h3 className="features__modal-title">Feature 3 - Lorem, ipsum dolor.</h3>
              <p className="features__modal-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum culpa est blanditiis.</p>


              <ul className="features__modal-projects grid">


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus quae delectus! Corrupti, eum cupiditate.</p>
                </li>



                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus quae delectus! Corrupti, eum cupiditate.</p>
                </li>


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>
                  <p className="features__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus quae delectus! Corrupti, eum cupiditate.</p>
                </li>


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>
                  <p className="features__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus quae delectus! Corrupti, eum cupiditate.</p>
                </li>


                <li className="features__modal-project">
                  <i className="uil uil-check-circle features__modal-icon"></i>

                  <p className="features__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus quae delectus! Corrupti, eum cupiditate.</p>

                </li>


              </ul>




            </div>
          </div>

        </div>




      </div>

    </section>
  )
}

export default Features