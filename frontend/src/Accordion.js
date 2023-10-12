import React, { useState } from 'react'

const Accordion = () => {
   const [accordionData, setAccordionData] = useState([
      {
         title: 'Title 1',
         body: `Body 1`,
         display: 'flex',
      },
      {
         title: 'Title 2',
         body: `Body 2`,
         display: 'flex',
      },
      {
         title: 'Title 3',
         body: `Body 3`,
         display: 'flex',
      },
   ])

   return (
      <div>
         {accordionData.map((element, index) => {
            return (
               <div className='accordion-item' key={index}>
                  <div
                     className='accordion-title'
                     onClick={() => {
                        element.display =
                           element.display === 'flex' ? 'none' : 'flex'
                        setAccordionData([...accordionData])
                     }}>
                     <div>{element.title}</div>
                     <div>{element.display === 'flex' ? '-' : '+'}</div>
                  </div>

                  <div
                     className='accordion-content'
                     style={{ display: element.display, color: 'tomato' }}>
                     {element.body}
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default Accordion
