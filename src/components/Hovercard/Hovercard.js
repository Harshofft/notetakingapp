import React from 'react'
import './Hovercard.css'
import Img1 from './HoverImg/img1.jpg'
// import Img2 from './HoverImg/img5.png'
// import Img3 from './HoverImg/wp10278791-god-of-war-symbol-wallpapers-removebg-preview.png'
// import Img4 from './HoverImg/wukong-removebg-preview.png'
function hovercard({title,imgchar}) {
  return (
    <div className="shop-container">
      <a href="#" alt="god of war" target="_blank">
        <div className="card">
          <div className="wrapper">
            <img src={Img1} className="cover-image"/>
          
          </div>
          {/* <img src={Img3} class="title"/> */}
          <h4 className='addnotes title'>{title}</h4> 
          <img src={imgchar} className="character"/>
         </div>
      </a>
  </div>
  )
}

export default hovercard