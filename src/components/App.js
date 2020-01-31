import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Footer from './Footer';

class App extends React.Component {
  yourMethodHere() {}

  render() {
    return (
      <>
        <Header />
        <NavBar />
        <MainContent />
        <Footer />
      </>
    );
  }
}

export default App;
