import React from 'react';
import Logo from '../assests/images/justixce.jpg';

function Home(){
  return(
    <div>
      <style jsx>{`
        img{
          width:25%;
          display: block;
          margin-left: 25%;
          margin-right: 25%;
        }
      `}</style>
      <p>Avery's Organics is a mid-sized farm in Northern Oregon that grows organic produce, and sells it at Farmer's Markets throughout town. </p>
      <img src={Logo}/>
    </div>
  );
}

export default Home;
