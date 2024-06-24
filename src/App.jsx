import Fields from './components/Fields'
import Navbar from './components/Navber'
import Cardcontainer from './components/Cardcontainer'
import result from './storage.json'
import Footer from './components/Footer'
import More from './components/More'
import { useState } from 'react';
import './App.css'
import './output.css'
function App() {
  const [more,setMore]=useState(10);
   function getMoreResult(){
    console.log("more called",more)

        setMore(e=> e+10)
    }
  return (
    <>
      <Navbar/>
      <Fields/>
      {<hr className='my-10'></hr>}
    <Cardcontainer result={result} more={more}/>
      {<hr className='my-10'></hr>}
      <More getMoreResult={getMoreResult}/>
    <Footer/>
      </>
    )
}
export default App
