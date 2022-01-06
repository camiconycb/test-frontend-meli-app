import { FunctionComponent, useEffect, useState } from 'react';
import '../styles.scss';

interface ILogoProps {

}

const Logo: FunctionComponent<ILogoProps> = props => {
  // useEffect(() => {
  // },[])


  return (
    <img className="header__logo" src="mercado-libre-logo.webp" alt="logo"/>
  );
  
}
export default Logo;

