import React, { useEffect } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom';
import Details from './features/product/application/components/Details';
import Search from './features/search/application/components/Search';
import {
  RecoilRoot } from 'recoil';
import Result from './features/search/application/components/Result';
import NoMatchPage from './features/noMatchPage';
import { Helmet } from 'react-helmet';

function App() {
  useEffect(() =>{

  },[]);

  return (
    <div>
 
        <Router>
          <RecoilRoot>
            <Switch>
              <Route  path='/'  element={
                <div>
                  <Helmet>
                    <title>Mercado Libre</title>
                    <meta name='description' content={`Mercado libre` }></meta>

                  </Helmet>
                  <Search/>

                </div>
              }/>
              <Route path='/items' element={ 
                <div className='main'>
                  <Search/>
                  <Result/> 
                </div>
              }/>
              <Route path= "*"element={<NoMatchPage/>} />
              <Route path='/items/:id' element={
                <div className='main'>
                  <Search/>
                  <Details/>
                </div>
              }/>
            </Switch>
          </RecoilRoot>
        </Router>

     
    </div>
  );
}

export default App;
// console.log(`Current NODE_ENV is ${process.env.NODE_ENV}`)

// console.log(`Sample key is ${process.env.SAMPLE_KEY}`)