import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content" style= {{fontFamily: 'Anton'}}>
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily:'Anton'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
            <a href={"https://resume.creddle.io/resume/14mulmr5kh6"}target="_blank"> Resume</a>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily:'Anton'}} to="/">MyPortfolio</Link>}>
            <Navigation>
            <a href={"https://resume.creddle.io/resume/14mulmr5kh6"}target="_blank"> Resume</a>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
