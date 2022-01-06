import { FunctionComponent, useEffect, useState } from 'react';
import '../styles.scss';


interface IInputProps {

}

const Input: FunctionComponent<IInputProps> = props => {
  // useEffect(() => {
  // },[])


  return (
    <input className='searchForm__input' type="text" placeholder='Nunca dejes de buscar'/>
  );
  
}
export default Input;

