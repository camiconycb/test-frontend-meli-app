import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
// import { SearchProvider } from '../../context/searchProvider';
import '../styles.scss';
import {queryState} from '../../state/searchProvider';

interface IInputProps {

}

const Input: FunctionComponent<IInputProps> = props => {
  useEffect(() => {
    console.log('render input');

  },[])

  const [query, setQuery] = useRecoilState(queryState);
  return (
    <input 
      className='searchForm__input' 
      type="text"
      placeholder='Nunca dejes de buscar'
      data-testid="input-search" 
      onChange={(e) => {
        e.preventDefault();
        console.log(e.target.value)
        setQuery(e.target.value);
      }}
      value={query}
    />
  );
  
}
export default Input;

