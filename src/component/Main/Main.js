import { assest } from '../../assest/assest';
import './Main.css';

import React from 'react'

const Main = () => {
    return (
        <div className='main'>

            <div className='main1'>
                <h1>
                    Weapons to grow <br></br>your business
                </h1>
                <p>
                    Turbochargers your business growth <br /> Our product help ignite sales and entrepreneurship
                </p>
            </div>

            {/* ----------------------------------main2------------------ */}

            <div className='main2'>
                <p> Start for free</p>
            </div>

            {/* --------------------------------------------main3--------------------------------- */}

            <div className='main3'>

                <div className='images'>
                    <div className='img1'>
                        <img src={assest.verifier}  alt='img1'/>
                    </div>

                    <div className='img2'>
                        <img src={assest.screener} alt='photo1'/>
                        
                    </div>
                    <div className='img2'>
                        <img src={assest.blacks} alt='photo2'/>
                       
                    </div>
                    <div className='img1'>
                        <img src={assest.enricher} alt='photo3'/>


                    </div>
                </div>

            </div>

            {/* ---------------------------------main4----------------------------------------------------- */}

            <div className='main4'>
                <p>Modern companies are using brandnav</p>
            </div>


            <div className='main4-p1'>
                <h1>Choose Your weapon</h1>
                <p>Brandnav is multidimensional plateform designed for revenue growth</p>
            </div>



            <div className='main4-p2'>

                <div className='section'>

                    <div className='sec1'>
                        <div className='sec1-s1'>
                            <div className='s1'>
                                📲
                            </div>
                            <h1>Screener Search</h1>
                            <p>Build your list with advanced advanced filters</p>
                        </div>
                    </div>


                    <div className='sec2'>
                         <div className='sec1-s2'>      
                            <div className='s2'>
                                  <li className='l1'> 🚹</li>
                                  <li className='l1'> 🚹</li>
                                  <li className='l1'> 🚹</li>
                            </div>
                             <h4>Enricher Look Up</h4>
                             <p>Get verified contact information Enricher</p>
                         </div>
                   </div>
 

                    <div className='sec3'>                    
                    <div className='sec1-s2'>
                            <div className='s2'>
                                  <li className='l1'> 💬</li>
                                  <li className='l1'> 💬</li>
                                  <li className='l1'> 💬</li>
                            </div>
                             <h4>Email Verifier</h4>
                             <p>Reduce bouncer with 100% verified emails</p>
                         </div>
                  </div>


                    <div className='sec4'>                
                    <div className='sec1-s2'>                           
                            <div className='s2'>
                                  <li className='l1'> 🛄</li>
                                  <li className='l1'>  🛄</li>
                                  <li className='l1'>  🛄</li>
                            </div>
                             <h4>Blacklist Shield</h4>
                             <p>Monitor and boost your email delievreity</p>
                         </div>
                  </div>
                </div>




<div className='section2'>

     <div className='A1'>

           <div> 
             <h1> The ultimate ecom leads database</h1>
             <p>Discover untapped ecommerce brands with our high quality unsaturated leads database</p>
             <button className='btn1'>Try for free</button>
             <button className='btn2'>Learn More.....</button>
           </div>

           <div className='a1'>
           
               <div className='i1'> 
                <li>🏴----</li>
                <li>🏳️----</li>
                <li>🏴----</li>
               </div>
               <div className='i2'> 
               <li>🏴----</li>
               <li>🏳️----</li>
               </div>
            </div>
     </div>
</div>


            </div>




        </div>
    )
}

export default Main
