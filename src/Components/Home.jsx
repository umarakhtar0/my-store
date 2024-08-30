import React from 'react';
import '../App.scss'; // Make sure to create and import the CSS file for styling
import profilePic from './i.jpeg'; // Update the path to your image

const Home = () => {
  return (
    <section className="home">
      <div className="home-text">
        <h1 className="greeting">Hello, <span className="hand-icon">👋</span></h1>
        <div className="name-container">
          <span className="intro">It's Me</span> 
          <h2 className="name">Umar Akhtar</h2>
        </div>
       
        
        <div className="profession-container">
          <p className="profession">
            <span className="profession-word">Frontend </span>
            &nbsp;
            <span className="profession-word"> Developer</span>
          </p>
          <div className="line"></div>
        </div>
        <div className="cta-button">
          <a href="#projects" className="btn btn-outline-dark">
             My Projects
          </a>
        </div>
      </div>
      <div className="home-image">
        <img src={profilePic} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
