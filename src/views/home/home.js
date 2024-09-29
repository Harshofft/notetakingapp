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
        <Featurecard  featureImg={Heart}  featureDec='To Never forget things which you want to remember' />
        <Featurecard featureImg={Brain} featureDec='To track your progress' />
        <Featurecard featureImg={Security} featureDec='To keep your data safe' />
        </div>
        <div className='btn-container'>
          <Link to='/add'>  <button  className='btns'>Add Note📝</button> </Link>
          <Link to='/show'> <button  className='btns'>Show   Note 📒</button></Link>
           
        </div>
    </div>
  )
}

export default home