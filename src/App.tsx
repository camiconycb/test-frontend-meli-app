import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom';
import Details from './features/product/application/components/Details';
import Search from './features/search/application/components/Search';

function App() {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">Meli</Link>
        </header>
        <Switch>
          <Route path='/items/:id' element={<Details/>}/>
          <Route path='/' element={<Search/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// console.log(`Current NODE_ENV is ${process.env.NODE_ENV}`)

// console.log(`Sample key is ${process.env.SAMPLE_KEY}`)