import { FunctionComponent, useEffect, useState } from 'react';
import Logo from '../atoms/Logo';
import SearchForm from '../molecules/SearchForm';
import styled from "styled-components";

interface IHeaderProps {

}

const Header: FunctionComponent<IHeaderProps> = props => {
  // useEffect(() => {
  // },[])



  return (
    <header>
      <Wrapper>
        <Logo></Logo>
        <SearchForm></SearchForm>
      </Wrapper>
      
    </header>
    
  );
  
}
const Wrapper = styled(Header)`
  display: grid;
  grid-template-areas: 'header-report-detail' 'description-report-detail';
  grid-template-columns
: 0.1fr 0.1fr;
  max-width: var(--max-width);
`;
export default Header;

