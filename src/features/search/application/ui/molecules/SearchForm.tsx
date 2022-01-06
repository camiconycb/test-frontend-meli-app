import { FunctionComponent, useEffect, useState } from 'react';
import styled from "styled-components";

import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Logo from '../atoms/Logo';
import '../styles.scss';



interface ISearchBoxProps {

}

const SearchForm: FunctionComponent<ISearchBoxProps> = props => {
  // useEffect(() => {
  // },[])


  return (
    <nav>
      <form className='header__searchForm'>
        <Input></Input>
        <Button></Button>
      </form>
    </nav>
  );
  
 
};


export default SearchForm;