import React from 'react';
import Header from './Header';
import Botao from './Botao';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Footer from './Footer';
import Fetch from './Fetch';

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />{' '}
      <Header />
      <Botao />
      <Fetch />
      <NavBar />
      <MainContent />
      <Footer />
    </>
  );
}
export default App;
