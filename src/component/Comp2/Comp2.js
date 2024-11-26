import { assest } from '../../assest/assest'
import './Comp2.css'

import React from 'react'

const Comp2 = () => {
  return (
    <div className='comp2'>
{/* -------------------------------------------------------Line1----------------------------------- */}
       <div className='mains5'>
        <h1>
            Fix data accuracy problems <br></br>with BrandNav 
        </h1>

        <div className='n2'>
            <img src={assest.card2} alt='imagw'/>
            <img src={assest.longcard} alt='imagw'/>
        </div>
       </div>


{/* ---------------------------------------------------------------Line2-------------------------------------- */}
      <div className='mains6'>

        <h1>
            Who is using BrandNav
        </h1>
        <p>BrandNav become irreplaceble tool for business</p>

      </div>
{/* ---------------------------------------------------------------------------items design ----- */}
      <div className='items'>

        <div className='item1'>
            <label>📶</label>
            <h1>Sales & Marketing Teams</h1>
            <p>Sales and marketing teams using are using brandnav to efficiently locate and verify prospect conatact information and identity key decision makers</p>

        </div>
        <div className='item1'>
            <label>📶</label>
            <h1>Software & it companies</h1>
            <p>IT companies ont uning BrandNav to build lists for outreach, identify target organizotions, and verity email addresses of leads to improve email cellveroninty</p>

        </div>
        <div className='item1'>
            <label>📶</label>
            <h1>Service Providers</h1>
            <p>Service providers are using BrandNav to locate accurate email addresses build a list of contacts, and improve the efficiency of their sales process</p>
        </div>

      
        
        <div className='item1'>
            <label>📶</label>
            <h1>Recruiters</h1>
            <p>Recruiters are using BrandNav to locate and verify the email addresses of job candidates, build a talent pool, and streamline their hiring process.</p>
        </div>

        <div className='item1'>
            <label>📶</label>
            <h1>Backlinks Outreach</h1>
            <p>SEO link builders are using BrandNav to locate and verify the email addresses of potential link partners, and build outreach lists for link- building purposes.</p>
        </div>
        <div className='item1'>
            <label>📶</label>
            <h1>Investors</h1>
            <p>Investors are using BrandNav to quickly find and verify contact information for key executives and decision-makers and streamline their workflow.</p>
        </div>

      </div>



    </div>






  )
}

export default Comp2