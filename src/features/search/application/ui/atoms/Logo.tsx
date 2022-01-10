import { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss';

interface ILogoProps {

}

const Logo: FunctionComponent<ILogoProps> = props => {
  // useEffect(() => {
  // },[])


  return (
    <Link to= "/" >
      <img className="header__logo" src="mercado-libre-logo.webp" alt="logo"/>
    </Link>
  );
  
}
export default Logo;

