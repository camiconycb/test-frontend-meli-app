
import { FunctionComponent, useEffect } from 'react';


const NoMatchPage: FunctionComponent = () => {
  useEffect(() => {
    console.log('render 404');
    
  },[])

  return (
    <div className='main'>
      <h3 className='message'>404 - Not found</h3>
    </div>
  );
}

export default NoMatchPage;
