import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import UI from '../pictures/s&j.png';
import Employee from '../pictures/employee.png';
import Book from '../pictures/booksearch.png';
import Times from '../pictures/lambdatimes.png';
import GameofLife from '../pictures/gameoflife.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div style={{fontFamily: 'Anton', dsiplay: 'center'}} className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img style= {{height:'176px'}} alt="instagram logo" src={UI} className="avatar-img" />

        <CardTitle style={{fontFamily: 'Anton'}}>S and J UI challenge</CardTitle>
            <CardText>
            User Interface project that showcases practical html,css and javascript skills.
            </CardText>
            <CardActions>
            <Button colored>
              <a href="https://antony-nyagah-ui-challenge.netlify.com/" class="button" target="blank">Live Demo</a>
                </Button>
            </CardActions>

          </Card>
           {/* Project 2 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img style= {{height:'176px'}} alt="instagram logo" src={GameofLife} className="avatar-img" />

        <CardTitle style={{fontFamily: 'Anton'}}>Game of Life</CardTitle>
            <CardText>
             Cellular automaton!
            </CardText>
            <CardActions border>
              <Button colored>
              <a href="https://antony-nyagah-game-of-life.herokuapp.com/" class="button" target="blank">Live Demo</a>
                </Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img style= {{height:'176px'}} alt="instagram logo" src={Employee} className="avatar-img" />

        <CardTitle style={{fontFamily: 'Anton'}}>Employee-Handbook</CardTitle>
            <CardText>
              Create your own employee database!
            </CardText>
            <CardActions border>
              <Button colored>
              <a href="https://antony-nyagah-employeelist.herokuapp.com/" class="button" target="blank">Live Demo</a>
                </Button>
            </CardActions>
          </Card>

         {/* Project 4 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img style= {{height:'176px'}} alt="instagram logo" src={Book} className="avatar-img" />

        <CardTitle style={{fontFamily: 'Anton'}}>Book Search</CardTitle>
            <CardText>
            Search and learn more about your favorite book!
            </CardText>
            <CardActions border>
            <Button colored>
              <a href="https://antony-nyagah-book-search.herokuapp.com/" class="button" target="blank">Live Demo</a>
                </Button>
            </CardActions>
          </Card>

          {/* Project 5 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img style= {{height:'176px'}} alt="instagram logo" src={Times} className="avatar-img" />

        <CardTitle style={{fontFamily: 'Anton'}}>Lambda Times</CardTitle>
            <CardText>
            Front End React News app that showcases basic filtering and carousel of images!
            </CardText>
            <CardActions border>
            <Button colored>
              <a href="https://antony-nyagah-lambdatimes.herokuapp.com/" class="button" target="blank">Live Demo</a>
                </Button>
            </CardActions>
          </Card>

          

        </div>


      )
    } 

  }



  render() {
    return(
      <div>
        <h1 style={{color: 'white', display: 'center' , fontFamily: 'Anton', textAlign:'center',}}>Projects</h1>


          <Grid>
            <Cell col={12}>
              <p style= {{color:'white', display:'center', textAlign: 'center' }}>During my time at lambda school we have completed many coding excerises as well as sprint challenges that assess what we learned along the way. 
              Here are some projects I've done during the curriculum or my spare time. More robust projects coming soon..</p>
              <br></br>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
