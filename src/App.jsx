
import './App.css';
import About from './components/about/About';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import News from './components/news/News';


function App() {
  return (
    <>


      <Header />

      <main className='main'>
        <Home />
        <Features />
        <News />
        <About />
        <Footer />


      </main>



    </>
  );
}

export default App;