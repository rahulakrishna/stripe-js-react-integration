import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Summary from './components/Checkout/Summary';
import UpdateCard from './components/Checkout/UpdateCard';

function App() {
  return (
    <div>
      <Route exact path="/summary" component={Summary} />
      <Route exact path="/update-card" component={UpdateCard} />
    </div>
  );
}

export default App;
