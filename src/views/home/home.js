import React from 'react'
import  './home.css'
import Heart from './heart.png'
import Brain from './brain.png'
import Security from './cyber-security.png'
import Featurecard from './../../components/featureCard/feature'
import { Link } from 'react-router-dom'
function home() {
  return (
    <div className='main-color home-container'>
        <h1 className='text-center pri-color font-style' >Quick Notebook📕</h1>
        <p className='text-center sec-color font-size'>App is bulid for taking note when ever you need 🧠</p>
        <div className='fecard-container'>
        <Featurecard  featureImg={Heart}  featureDec=''/>
        <Featurecard featureImg={Brain}/>
        <Featurecard featureImg={Security}/>
        </div>
        <div className='btn-container'>
            <Link to='./add' className='btns'>Add Note📝</Link>
            <Link to='./show' className='btns'>Show   Note 📒</Link>
        </div>
    </div>
  )
}

export default home