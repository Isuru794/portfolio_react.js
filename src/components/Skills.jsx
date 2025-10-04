import React from 'react';
import './Skills.css';

const SimpleSkills = () => {
  return (
    <section className="skills" id="skills" style={{padding: '50px 0', background: '#f0f0f0'}}>
      <div className="skills-container">
        <h2 style={{textAlign: 'center', fontSize: '2rem', color: 'red'}}>
          SKILLS SECTION - VISIBLE TEST
        </h2>
        <p style={{textAlign: 'center'}}>If you can see this, the component is loading</p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
          <div style={{padding: '20px', background: 'white', borderRadius: '10px'}}>HTML</div>
          <div style={{padding: '20px', background: 'white', borderRadius: '10px'}}>CSS</div>
          <div style={{padding: '20px', background: 'white', borderRadius: '10px'}}>JavaScript</div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSkills;