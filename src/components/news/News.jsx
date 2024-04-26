
import "./news.css";
import Trends from './Trends';
import DetectionTool from './DetectionTool';

const News = () => {
  return (


    <section className="news section" id="news">

      <h2 className="section__title">Trending News</h2>
      <span className="section__subtitle">Get to know  the latest news about Stocks and Crypto. <i className="uil uil-bitcoin"></i>
      </span>


      {/* Divide into 2 divs  */}

      <div className="news__container container grid">

        <Trends />

        <DetectionTool />







      </div>


    </section>



  )
}

export default News