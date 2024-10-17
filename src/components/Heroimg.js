import React from 'react'
import "./HeroimgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';
const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg'></img>

      </div>
      <div className='content'>
        <h3>Hey! I'M  Abdul Raheem</h3>
        <h1> ReactJS Developer.</h1>
        <Link to="/project" className='btn'>Projects</Link>
        <Link to="/contact" className='btn-light'>Contact</Link>
      </div>
    </div>
  )
}

export default Heroimg
