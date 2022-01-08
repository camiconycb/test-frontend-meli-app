import { FunctionComponent, useEffect, useState } from 'react';
// import { SearchProvider } from '../context/searchProvider';
import Header from '../ui/organisms/Header';
import Result from './Result';
interface ISearchProps {

}

const Search: FunctionComponent<ISearchProps> = props => {
  // useEffect(() => {
  // },[])


  return (
    <div>
      <Header/>
      <Result/>

    </div>
  );
  
}
export default Search;

