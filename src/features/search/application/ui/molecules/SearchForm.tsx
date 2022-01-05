import { FunctionComponent, useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Logo from '../atoms/Logo';
interface ISearchBoxProps {

}

const SearchForm: FunctionComponent<ISearchBoxProps> = props => {
  // useEffect(() => {
  // },[])


  return (
    <nav>
      <Input></Input>
      <Button></Button>
    </nav>
  );
  
}
export default SearchForm;

