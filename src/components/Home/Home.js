import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Button} from 'react-bootstrap';
import './Home.css';
import FooterPage from '../Navbar/FooterPage';
import Carousel from './Carousel'


 class Home extends Component {
  render() {
    return (
      <div>
         <Carousel/>
            <div className="myTeam">
            <div className="box_2">
              <h1 className="display-3" style={{color:"#a05353"}}>Hello,</h1>
       <hr className="my-2" />
       <p>We provide safety and security information for every country of the world to ...</p>
       <p>A country is a region that is identified as a distinct entity in political geography. 
          General information or statistical publications that adopt the wider definition for purposes such as illustration and comparison include:.</p>
       <p className="lead">
         <Button style={{backgroundColor: "#dfe7ef"}} ><Link to="/SearchField"> Search </Link></Button>
        </p>
        </div>
        </div>
        <FooterPage/>
      </div>
    )
  }
}

export default Home;