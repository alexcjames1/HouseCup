import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './routes';
import './css/style.scss';

function App() {
  return (
    <div className="App">
        <Router>
             <Route exact path="/" component={Home} />
         </Router>
    </div>
  );
}

export default App;
