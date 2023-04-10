import './App.css';
import Carousel from './components/carousel/Carousel';
import Categories from './components/categories/Categories';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import SuggestionCard from './components/suggestionCard/SuggestionCard';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Categories />
      <Carousel />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard /> 
      <Footer />
    </div>
  );
}

export default App;
