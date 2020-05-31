import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../pictures/IMG_7710.png';
import '../App.css';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto', fontFamily: 'Anton'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img alt="instagram logo" src={Avatar} className="avatar-img" />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React/Redux | NodeJS | Express | MongoDB | Python</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/antony-nyagah-a42a2754/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/antonynyagah" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
