import { useState, useEffect } from 'react'
import './App.css'
import Select from './components/Select'
import Select2 from './components/Select2'

function App() {
  const [first, isFirst] = useState('1');
  
 

  return (
    <div className='flex flex-col max-w-lg bg-rose-100 rounded-lg  items-center mx-auto my-auto my-20' >
     <h1 className='text-4xl font-bold m-5 mt-10' ><span className='text-green-500' >Currency</span> Converter</h1>
     <div>
    {/*  <input type="number" className='outline-0 rounded-lg w-[250px] p-3 m-4 ' placeholder='Enter A value' defaultValue={first} /> */}
     </div>
     <div>
      <Select isFirst={isFirst} />
     </div>
     
     <div className='mb-7' >
      
     </div>
    </div>
  )
}

export default App
