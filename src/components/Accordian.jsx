import React, { createContext, useContext, useEffect, useState } from 'react'
import { ChevronDown } from 'react-feather'
const AccordianContext = createContext()

export default function Accordian ({children,value,onChange, ...props}) {
 const [selected,setSelected] = useState(value)

 useEffect(()=>{
    onChange?.(selected)
 },[selected])
 
 
 
    return (
    <div>
        <ul {...props}>
            <AccordianContext.Provider value={{selected,setSelected}}>
            {children} 
            </AccordianContext.Provider>
            
        </ul>

    </div>
  )
}

 export function AccordianItem({children,value,trigger, ...props}){
    const {selected,setSelected} = useContext(AccordianContext)
    const open = selected === value

    return(
        <li className='border-b' {...props}>
            <header role='button' onClick={()=>setSelected(open ? null:value)}
             className='flex justify-between items-center p-4 font-medium'
            >
                {trigger}
                <ChevronDown/>
                
                <div className="overflow-y-hidden"
                    style={{height:open?'100%':0}}
                >
                    <div className="p-2 pb-4">
                        {children}
                    </div>
                </div>
            </header>
        </li>
    )
 }