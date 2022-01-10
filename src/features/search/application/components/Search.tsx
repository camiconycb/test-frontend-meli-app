import { FunctionComponent, useEffect, useState } from 'react';
// import { SearchProvider } from '../context/searchProvider';
import Header from '../ui/organisms/Header';
import Result from './Result';
import './styles.scss';

interface ISearchProps {

}

const Search: FunctionComponent<ISearchProps> = props => {
  // useEffect(() => {
  // },[])


  return (
    <div>
  
      <Header />
    
    </div>
  );

}
export default Search;

