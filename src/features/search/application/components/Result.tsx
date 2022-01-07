import { FunctionComponent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ResultSearchValue } from '../state/searchProvider';
interface IResultProps {

}

const Result: FunctionComponent<IResultProps> = props => {
  // useEffect(() => {
  // },[])

  const resultSearchValue = useRecoilValue(ResultSearchValue);

  return (
    <h1>Result</h1>
  );
  
}
export default Result;

