import React from 'react';
import {Link,Routes,Route} from "react-router-dom";
import   SuperChildComponent  from './SuperChildComponent'


const LazyFetch = React.lazy(()=>import('./FetchApiComponent') )

interface ChildProps {
    message:string,
    // onMessageChange:string
    onMessageChange:(newMessage:string)=>void;
}



const ChildComponent = ({message,onMessageChange}:ChildProps) => {

console.log("Child Component");

  return (
    <div >
      <div className='flex item-center justify-center'>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-5" 
      onClick={()=>onMessageChange('Data from Parent Component')}>
         <Link to="/">Relationship</Link></button>  
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-5 ">
        <Link to="/superchild">Store Data</Link></button>    
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-5 ">
        <Link to="/fetchapi">Api Data</Link></button>  
        </div>
      <h3 className="font-sans text-lg  text-center"> {message}</h3>
      <Routes>
      <Route path="/superchild" element={<SuperChildComponent/>}/>
      <Route path="/fetchapi" element={<React.Suspense fallback="loading">
      <LazyFetch/>
      </React.Suspense>}/>
      </Routes>
    </div>
  )
}

export default ChildComponent
