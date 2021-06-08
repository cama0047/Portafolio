import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactMe from './components/pages/ContactMe';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/contact-me' component={ContactMe} />
          <Route path='/github1' component={() => window.location = 'https://github.com/Scrap-Arts-Music'}/>
          <Route path='/github2' component={() => window.location = 'https://github.com/cama0047/ws-sam-events'}/>
          <Route path='/github3' component={() => window.location = 'https://github.com/cama0047/Web-scraping-001'}/>
          <Route path='/github4' component={() => window.location = 'https://github.com/cama0047/Resto-react-native-yelp'}/>
          <Route path='/github5' component={() => window.location = 'https://github.com/cama0047/mongoDB-crud'}/>
          <Route path='/github6' component={() => window.location = 'https://moviefinder-cc.netlify.app/'}/>
          <Route path='/github7' component={() => window.location = 'https://github.com/cama0047/ChatApp'}/>
          <Route path='/github8' component={() => window.location = 'https://github.com/cama0047/React-router'}/>
          <Route path='/github9' component={() => window.location = 'https://github.com/cama0047/WeatherApp'}/>
          <Route path='/github10' component={() => window.location = 'https://github.com/cama0047/AdobeXdPlugIn'}/>
          <Route path='/github11' component={() => window.location = 'https://github.com/cama0047/Expense-Tracker'}/>
          <Route path='/github12' component={() => window.location = 'https://github.com/cama0047/WeatherApp'}/>
          <Route path='/github13' component={() => window.location = 'https://github.com/cama0047/FileExplorer-c-'}/>
          <Route path='/github14' component={() => window.location = 'https://github.com/cama0047/Music-player'}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
