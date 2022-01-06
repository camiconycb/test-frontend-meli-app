import { FunctionComponent, useEffect, useState } from 'react';
import Logo from '../atoms/Logo';
import SearchForm from '../molecules/SearchForm';
import '../styles.scss';

interface IHeaderProps {
}
const Header: FunctionComponent<IHeaderProps> = props => {
  // useEffect(() => {
  // },[])

  return (
    <header className='header'>
      <Logo></Logo>
      <SearchForm></SearchForm>
    </header>

  )
}

export default Header;

