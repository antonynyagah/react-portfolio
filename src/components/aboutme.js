import React, { Component } from 'react';
import { Button } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div style={{fontSize: '30px', fontFamily: 'Anton', color: 'white', textAlign:'center', margin: '200px'}} >
        
      <h1 style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>About Page</h1>

<p>Hey there! I'm Antony Nyagah but i go by Tony for short. </p>
<p>I'm a current Integration engineer looking to transition into a software engineer! I'm a graduate from wichita state univesity with a B.S in electrical engineering. 
  Also I'm currently a part time student at lambda school, a remote online program that teaches students practical skills in web development and computer science and how its like to work in a real dev role.
  Overall, I have 2 years of experience in integration, web development, technical support along with 4 years of experience in sales consulting and customer support in retail tech.
</p>
<p>I am seeking any role in software engineering in the greatest city in the world, New York City!</p>
<p>My hobbies outside of work include traveling, watching basketball, playing video games, and learning new things!</p>
      
      </div>
    )
  }
}

export default About;
