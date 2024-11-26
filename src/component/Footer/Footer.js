import { assest } from '../../assest/assest'
import './Footer.css'

import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>


            <div className='f1'>
                <img src={assest.banner1} alt='imag' />
            </div>

            <div className='foot'>

                <div className='f2'>
                    <h1>BrandNav.io</h1>
                    <p>BrandNav is an Ecom leads database  with tons of amazing filters.Now you can get access to store with just simple pack</p>
                </div>

                <div className='blog'>

                    <h1>Blog </h1>
                    <ul>
                        <li>All Blogs</li>
                        <li> Cold EMailing</li>
                    </ul>
                </div>

                <div className=' Docs'>
                    <h1>Documentation</h1>
                    <p>Getting Started</p>

                </div>

                <div className='Res'>
                    <h1>Resources</h1>
                    <ul>
                        <li>Latest updates</li>
                        <li>Roadmapes</li>
                        <li>About us</li>
                        <li>Join us</li>
                    </ul>
                </div>
                <div className='legal'>
                    <h1>Legal</h1>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                         <li>Refund Policy</li>
                         <li>Conatct us</li>
                    </ul>

                </div>

                


            </div>

            <hr></hr>
            <div className='last1'>
                <p> @2022 BrandNav.All rights reserved</p>

            </div>


        </div>
    )
}

export default Footer