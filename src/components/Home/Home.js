import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron , Grid ,Col, Image, Button} from 'react-bootstrap';
import Team from  '../../image/team.jpeg'
import './Home.css';
import FooterPage from '../Navbar/FooterPage';
import FacebookImg from '../../image/fb.png';
import Twitt from '../../image/tw.png'


 class Home extends Component {
  render() {
    return (
      <div>
           <Jumbotron>
                  <h2>Welcome to our new website!</h2>
                  <p>This is how to build Website with react and router
                   The secret to doing anything is believing that you can do it.
                   Anything that you believe you can do strong enough, you can do. 
                   Anything. As long as you believe. Let's build some happy little clouds
                   up here. All you need to paint is a few tools, a little instruction,
                   and a vision in your mind. Look at them little rascals. I really 
                   recommend you use odorless thinner or your spouse is gonna run you
                   right out into the yard and you'll be working by yourself.
                  </p>
                   
                  
                  </Jumbotron>
                  
                   <div className="myTeam">
                   <img src={Team}/>
                   <div className="box_2">
                   <ul>
                    <li> <p className="para1">What do you think?</p></li>
                     <p>Just think about these things in your mind - then bring
                        them into your world. Nothing's gonna make your husband or
                        wife madder than coming home and having a snow-covered dinner.
                        We'll put some happy little leaves here and there. 
                          The first step to doing anything 
                        is to believe you can do it.
                        See it finished in your mind before you ever start.</p>
                     <li><p className="para1">Here are just some of the features we’d like to highlight:</p></li>
                     <p>This is the way you take out your flustrations. Don't be bashful drop
                        me a line. Fluff that up.
                        See there how easy that is. The little tiny Tim easels will let you down.</p>
                   </ul>
                       </div>
                  </div>
                   
                  
                <div className="myIcons">
                <p>Share this page</p>
                  <img src={FacebookImg}/>
                  <img src={Twitt}/>
                </div>

                  
                  
            <FooterPage/>
          
        
      </div>
    )
  }
}

export default Home;