import React from 'react';
import { Header } from './components/header';
import { Shop } from './components/Shop';
import { Footer } from './components/footer';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Shop />
      <Footer />
    </React.Fragment>
  );
}

export default App; 
