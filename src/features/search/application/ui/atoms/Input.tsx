import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
// import { SearchProvider } from '../../context/searchProvider';
import '../styles.scss';
import {queryState} from '../../state/searchProvider';

interface IInputProps {

}

const Input: FunctionComponent<IInputProps> = props => {
  // useEffect(() => {
  // },[])

  const [query, setQuery] = useRecoilState(queryState);
  return (
    <input 
      className='searchForm__input' 
      type="text" 
      placeholder='Nunca dejes de buscar' 
      onChange={(e) => {
        e.preventDefault();
        setQuery(e.target.value);
      }}
      value={query}
    />
  );
  
}
export default Input;

