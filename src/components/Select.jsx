import React, { useState, useEffect } from 'react'

function Select() {

   const [active1, isActive1] = useState(false);
   const [active2, isActive2] = useState(true);
   const [active3, isActive3] = useState(false);
   const [active4, isActive4] = useState(false);
   const [active5, isActive5] = useState(false);

   const [first, setFirst] = useState('1');
   const [second, setSecond] = useState('148.14');
   const [third, setThird] = useState('83.12');
  {/* useEffect(() => {
    console.log(first)
 }, [first, setFirst])

   useEffect(() => {
    console.log(third)
 }, [third, setThird]) */}

   useEffect(() => {
    setThird(Number((first*second).toFixed(2)))
 },)

   

   const chooseINR = () => {

    isActive1(!active1)
    isActive2(false)
    isActive3(false)
    isActive4(false)
    isActive5(false)

    setSecond(1.78)

   }
   const chooseDollar = () => {
    isActive2(!active2)
    isActive1(false)
    isActive3(false)
    isActive4(false)
    isActive5(false)

    setSecond(147.88)

   }
   const chooseYen = () => {
    isActive3(!active3)
    isActive2(false)
    isActive1(false)
    isActive4(false)
    isActive5(false)

    setSecond(1)

   }
   const chooseRiyaal = () => {
    isActive4(!active4)
    isActive2(false)
    isActive3(false)
    isActive1(false)
    isActive5(false)

    setSecond(39.43)
   }
   const chooseEuro = () => {
    isActive5(!active5)
    isActive2(false)
    isActive3(false)
    isActive4(false)
    isActive1(false)

    setSecond(161.02)
   }


   const [active6, isActive6] = useState(false);
   const [active7, isActive7] = useState(false);
   const [active8, isActive8] = useState(true);
   const [active9, isActive9] = useState(false);
   const [active10, isActive10] = useState(false);
   

   const chooseINR2 = () => {
    isActive6(!active6)
    isActive7(false)
    isActive8(false)
    isActive9(false)
    isActive10(false)

    setSecond('83.12')

   }
   const chooseDollar2 = () => {
    isActive7(!active7)
    isActive6(false)
    isActive8(false)
    isActive9(false)
    isActive10(false)

    setSecond('1')
   }
   const chooseYen2 = () => {
    isActive8(!active8)
    isActive7(false)
    isActive6(false)
    isActive9(false)
    isActive10(false)

    setSecond('148.14')
   }
   const chooseRiyaal2 = () => {
    isActive9(!active9)
    isActive7(false)
    isActive8(false)
    isActive6(false)
    isActive10(false)

    setSecond('3.75')
   }
   const chooseEuro2 = () => {
    isActive10(!active10)
    isActive7(false)
    isActive8(false)
    isActive9(false)
    isActive6(false)

    setSecond('0.92')
   }

  return (
    <div>
      <div>
        <div>
        <input type="number" onChange={(e) => {setFirst(e.target.value)}} className='outline-0 ml-[110px] rounded-lg w-[250px] p-3 m-4 ' placeholder='Enter the amount' value={first} />
        </div>
    <div className='flex gap-9 mt-5' >
      <button onClick={chooseINR}  className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active1 === (true) ? 'bg-green-500' : 'bg-white'} ${active1 === (true) ? 'border-transparent text-white' : 'bg-white'} `} >INR</button>
      <button onClick={chooseDollar} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active2 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Dollar</button>
      <button onClick={chooseYen} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active3 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Yen</button>
      <button onClick={chooseRiyaal} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active4 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Riyaal</button>
      <button onClick={chooseEuro} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active5 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Euro</button>
    </div>
 </div>

 {/* ---------------------------------------------------*/}

  <div className='flex flex-col items-center' >
  {<h1 className='font-bold text-6xl text-green-500' >=</h1>}
  <input type="number" onChange={(e) => {setThird(e.target.value)}} className='outline-0 rounded-lg w-[250px] p-3 m-4 ' value={third} placeholder='Enter A value' />
  <div className='flex gap-9 mt-6' >
      <button onClick={chooseINR2} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active6 === (true) ? 'bg-green-500' : 'bg-white'} ${active6 === (true) ? 'border-transparent text-white' : 'bg-white'} `} >INR</button>
      <button onClick={chooseDollar2} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active7 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Dollar</button>
      <button onClick={chooseYen2} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active8 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Yen</button>
      <button onClick={chooseRiyaal2} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active9 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Riyaal</button>
      <button onClick={chooseEuro2} className=  {` border-black border-2 rounded-lg font-bold px-3 py-1 ${active10 === (true) ? 'bg-green-500 border-transparent text-white' : 'bg-white'} `} >Euro</button>
    </div>
  </div>
</div>
  )
}

export default Select
 