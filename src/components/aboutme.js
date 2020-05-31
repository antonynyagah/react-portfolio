import React, { Component } from 'react';
import { Button } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div style={{fontSize: '30px', fontFamily: 'Anton', color: 'white', textAlign:'center'}} >
        
      <h1 style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>About Page</h1>

<p>Hey there! I'm Antony Nyagah but i go by Tony for short. </p>
<p>I'm a current Integration engineer looking to transition into a software engineer! I'm a graduate from wichita state univesity with a B.S in electrical engineering. Im currently a part time student at lambda school, a remote program that teaches the practical skills in web development and computer science!</p>
<p>I am open to any role in software development whether front or backend. I want to start my software engineer career in the greatest city in the world: New York City!</p>
      
      </div>
    )
  }
}

export default About;
