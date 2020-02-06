import React from 'react';
import Header from './Header';
import Botao from './Botao';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Footer from './Footer';
import Fetch from './Fetch';
import Travel from './Travel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Botao />
      <Travel />
      <NavBar />
      <MainContent />
      <Footer />
      <Fetch />
    </>
  );
}
export default App;
