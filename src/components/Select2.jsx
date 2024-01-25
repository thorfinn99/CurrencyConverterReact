import React, { useState } from 'react'

function Select() {
   const [active6, isActive6] = useState(true);
   const [active7, isActive7] = useState(false);
   const [active8, isActive8] = useState(false);
   const [active9, isActive9] = useState(false);
   const [active10, isActive10] = useState(false);

   const [first, isFirst] = useState(1);

   

   const chooseINR2 = () => {
    isActive6(!active6)
    isActive7(false)
    isActive8(false)
    isActive9(false)
    isActive10(false)

   }
   const chooseDollar2 = () => {
    isActive7(!active7)
    isActive6(false)
    isActive8(false)
    isActive9(false)
    isActive10(false)
   }
   const chooseYen2 = () => {
    isActive8(!active8)
    isActive7(false)
    isActive6(false)
    isActive9(false)
    isActive10(false)
   }
   const chooseRiyaal2 = () => {
    isActive9(!active9)
    isActive7(false)
    isActive8(false)
    isActive6(false)
    isActive10(false)
   }
   const chooseEuro2 = () => {
    isActive10(!active10)
    isActive7(false)
    isActive8(false)
    isActive9(false)
    isActive6(false)
   }

  return (
    <div className='flex gap-9 mt-10' >
      <button onClick={chooseINR2} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active6 === (true) ? 'bg-green-500' : 'bg-white'} ${active6 === (true) ? 'border-transparent text-white' : 'bg-white'} `} >INR</button>
      <button onClick={chooseDollar2} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active7 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Dollar</button>
      <button onClick={chooseYen2} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active8 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Yen</button>
      <button onClick={chooseRiyaal2} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active9 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Riyaal</button>
      <button onClick={chooseEuro2} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active10 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Euro</button>
    </div>
  )
}

export default Select
 