import React, { useEffect } from 'react';

const About = (props) => {
  useEffect(() => {
    console.log('[About,js] used effect method')
  });

  return (
    <div>
      <p>This is all About</p>
      <button className="btn btn-primary" onClick={() => { props.history.push('/home') }}>Home</button>
    </div>
  )
}

export default About;
