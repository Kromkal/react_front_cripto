import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import { ModalProvider } from './Context/Modal';
import { ModalRoot } from './Components/ModalRoot';

function App() {

  return (
    <div className="App">
      <ModalProvider>
      <Header />
      <Main />

      <ModalRoot />
      </ModalProvider>
    </div>
  );
}

export default App;