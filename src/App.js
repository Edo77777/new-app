import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Weather from './components/Weather/Weather';
import News from  './components/News/News';
import CustomNavbar from './components/Navbar/CustomNavbar';
 
 
 

class App extends Component {
  render() {
    return (
        <Router>
         
        <div className="App">
        <CustomNavbar/>
        <Route exact path ="/" component={Home} />
        <Route path="/News" component={News}/>
        <Route path="/Weather" component={Weather}/>
   
         </div>
         </Router>
    );
  }
}

export default App;
