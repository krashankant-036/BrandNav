import { assest } from '../../assest/assest'
import './Comp3.css'

import React from 'react'

const Comp3 = () => {
  return (
    <div className='comp3'>

       <div className='mains7'>
        <h1>Dont judge take our word for it</h1>
        <p>Excellent ⭐⭐⭐⭐⭐ | 4.8/5 G2 Ratings</p>
       </div>

       <div className='n5'>
        <img src={assest.card3} alt='img-1'/>
        <img src={assest.card1} alt='img-1'/>
       </div>
 </div>
  )
}

export default Comp3