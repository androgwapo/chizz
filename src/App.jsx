import React from 'react';
import './App.css';
import './css/new.css';
import './css/recipe.css'; // Corrected import statement
import Header from './sections/Header';
import Home from './sections/Home';
import About from './sections/About';
import Popular from './sections/Popular';
import Recently from './sections/Recently';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';
import Recipes from './sections/Recipes';

function App() {
  return (
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="popular">
        <Popular />
      </section>
      <section id="recently">
        <Recently />
      </section>
      <section id="newsletter">
        <Newsletter />
      </section>
      <section id="recipe"> {/* Include the recipe section within the main container */}
        <Recipes />
      </section>
      <Footer />
    </div>
  );
}

export default App;
