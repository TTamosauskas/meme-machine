import React from 'react';
import Header from './Header';
import Botao from './Botao';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Footer from './Footer';
import Fetch from './Fetch';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Botao />
      <Form />
      <NavBar />
      <MainContent />
      <Footer />
      <Fetch />
    </>
  );
}
export default App;
