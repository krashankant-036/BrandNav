import './Comp1.css'
//import '../../assest/assest'
import React from 'react'
import { assest } from '../../assest/assest'

const Comp1 = () => {
    return (

        <div className='comp'>
            <div className='mains2'>

                <h1>Why should you use brandnav ?</h1>
                <p>Optimize your work flow for faster results and higher revenue</p>
            </div>

            <div className='imagex'>

                <img src={assest.card1} alt='image1' />
                <div className='t1'>
                    <h1>Enrich Any Csv</h1>
                    <p>Brandnav transform your csv files by adding valuable contact,firmographics and technologies data .with just a few clicks,you can enhance your data with enriched information and unlock new insights and opportunities</p>
                </div>

            </div>
            {/* -------------------------------------------------------------------------------------- */}
            <div className='imagex'>


                <div className='t1'>
                    <h1>Fresh data updates everyday</h1>
                    <p>Brandnav updates it data every day,providing the most recent and accurate information to its users.with a constant stream of new information ,Brandnav ensures that users that have access to the latest contact.firmographics and technographics data for better decision-making </p>
                </div>
                <img src={assest.card2} alt='image1' />

            </div>

            {/* ------------------------------------------------------------------------------------------------ */}


            <div className='imagex'>

                <img src={assest.card3} alt='image1' />
                <div className='t1'>
                    <h1>Advance search with 25+ unique filters </h1>
                    <p>Brandnav offers over 25+ filters to help users build highly segmented list for better prospecting with brandnav,you can create highly targetted list that are tailored to your specific needs,streamlining your workflow and maximizing your productivity</p>
                </div>
            </div>


            {/* ----------------------------------new line----------------------------------------------------- */}

            <div className='mains4'>

                <div className='n1'>
                    <h1>Pinpoint your ideal customer with<br></br>relevent data structures </h1>
                    <p>Screener Attributes</p>
                </div>


                {/* <div className='d1'>
                    <ul>
                        <li> 📘 <br></br><span>Financials</span></li>
                        <li> 📘 <br></br><span>Company name & Website</span></li>
                        <li> 📘 <br></br><span>Company Location</span></li>
                        <li> 📘 <br></br><span>Country Code</span></li>         
                    </ul>
                </div> */}

                <div className="d1">
                    <ul>
                        <li><span class="icon">📘</span><span class="label">Financials</span></li>
                        <li><span class="icon">📘</span><span class="label">Company name & Website</span></li>
                        <li><span class="icon">📘</span><span class="label">Company Location</span></li>
                        <li><span class="icon">📘</span><span class="label">Country Code</span></li>
                    </ul>
                </div>

                <div className="d2">
                    <ul>
                        <li><span class="icon">📘</span><span class="label">Employee Count</span></li>
                        <li><span class="icon">📘</span><span class="label">Industry</span></li>
                        <li><span class="icon">📘</span><span class="label">and 20+ more</span></li>
                       
                    </ul>
                </div>


                <div className="d1">
                    <ul>
                        <li><span class="icon">📶</span><span class="label">Phone</span></li>
                        <li><span class="icon">✉️</span><span class="label">Email</span></li>
                        <li><span class="icon">📘</span><span class="label">Job title</span></li>
                        <li><span class="icon">🛄</span><span class="label">LinkedIn</span></li>
                    </ul>
                </div>

            </div>


        </div>

    )
}

export default Comp1