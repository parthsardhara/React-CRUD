import React from 'react';

const Home = (props) => {
  return (
    <div>
      <p>Home page</p>
      <button className="btn btn-primary" onClick={() => { props.history.push('/about') }}>About</button>
    </div>
  )
}

export default Home;
