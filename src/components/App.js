import React from 'react';
import Header from './Header';
import Botao from './Botao';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Footer from './Footer';
import Fetch from './Fetch';
import TravelContainer from './TravelContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Botao />
      <TravelContainer />
      <NavBar />
      <MainContent />
      <Footer />
      <Fetch />
    </>
  );
}
export default App;
