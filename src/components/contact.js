import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Button } from 'react-mdl';
import Avatar from '../pictures/IMG_7710.png';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h2>Antony Nyagah</h2>
            <img
              alt="instagram logo" src={Avatar} className="avatar-img"
              style={{height: '150px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lets Connect!</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                    
                    Phone: 316-737-0164
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                    
                    Email: anyagah17@gmail.com
                  </ListItemContent>
                </ListItem>
              

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
