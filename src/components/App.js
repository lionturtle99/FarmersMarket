import './../css/App.css';
import React from "react";
import Header from './Header/Header.js';
import MonthsContainer from './Months/MonthsContainer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MonthsContainer />
    </React.Fragment>
  );
}

export default App;
