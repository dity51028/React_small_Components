import React from 'react'
import Accordian, { AccordianItem } from './components/Accordian'


function App() {
  

  return (
    <>
     <div className='min-h-screen flex items-center justify-center'>
       <Accordian className='max-w-lg'>
          <AccordianItem value='1' trigger="Accordian Item 1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Numquam vero tenetur quas labore ipsum alias facere 
          aliquam non fugit cupiditate. Magnam, quisquam sequi 
          nobis quam nihil corrupti deserunt fugiat voluptates!
          </AccordianItem>
          
          <AccordianItem value='2' trigger="Accordian Item 2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Numquam vero tenetur quas labore ipsum alias facere 
          aliquam non fugit cupiditate. Magnam, quisquam sequi 
          nobis quam nihil corrupti deserunt fugiat voluptates!
          </AccordianItem>
          
          <AccordianItem value='3' trigger="Accordian Item 3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Numquam vero tenetur quas labore ipsum alias facere 
          aliquam non fugit cupiditate. Magnam, quisquam sequi 
          nobis quam nihil corrupti deserunt fugiat voluptates!
          </AccordianItem>
       </Accordian>
     </div>
    </>
  )
}

export default App
