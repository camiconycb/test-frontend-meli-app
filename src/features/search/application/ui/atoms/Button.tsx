import { FunctionComponent, useEffect, useState } from 'react';
import '../styles.scss';

import { MdSearch } from "react-icons/md";
interface IButtonProps {

}

const Button: FunctionComponent<IButtonProps> = props => {
  // useEffect(() => {
  // },[])


  return (
   <button className='searchForm__button'>
      <MdSearch/>
   </button>
  );
  
}
export default Button;

