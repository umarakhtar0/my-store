import React from 'react';
import '../App.scss'; // Ensure this file includes all styles

const About = () => {
  return (
    <section className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          I’m Umar Akhtar, a Frontend Developer with over 3 years of experience in building and designing modern web applications. I specialize in crafting intuitive user experiences and transforming complex problems into simple, beautiful, and effective interfaces.
        </p>
        <p>
          I have worked with a variety of technologies like React, Angular, HTML5, CSS3, JavaScript (ES6+), and more. My passion for learning drives me to stay up-to-date with the latest trends and best practices in frontend development.
        </p>
        <p>
          When I’m not coding, you’ll find me exploring the latest tech trends, playing video games, or capturing the beauty of nature through photography.
        </p>
        <p>
          I'm always eager to work on exciting projects and collaborate with like-minded individuals. Let’s build something amazing together!
        </p>
        
        {/* Skills Section */}
        <div className="skills">
          <h3 className="skills-title">My Skills</h3>
          <div className="skill">
            <span className="skill-name">HTML</span>
            <div className="progress-bar" style={{ width: '99%' }}>
              <span className="progress-text">99%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">CSS</span>
            <div className="progress-bar" style={{ width: '90%' }}>
              <span className="progress-text">90%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">JavaScript</span>
            <div className="progress-bar" style={{ width: '77%' }}>
              <span className="progress-text">77%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">React</span>
            <div className="progress-bar" style={{ width: '78%' }}>
              <span className="progress-text">78%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">Bootstrap</span>
            <div className="progress-bar" style={{ width: '88%' }}>
              <span className="progress-text">88%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
