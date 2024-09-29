import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import MyImg from "../assets/MyImg.jpg"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a React Front-end developer. I create responsive wesbsite.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={MyImg} className="img" alt="MyImg"></img>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutContent;
