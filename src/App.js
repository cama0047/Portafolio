import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactMe from './components/pages/ContactMe';

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
          <Route path='/contact-me' component={ContactMe} />
          <Route path='/github1' component={() => window.location = 'https://github.com/Scrap-Arts-Music'}/>
          <Route path='/github2' component={() => window.location = 'https://github.com/cama0047/ws-sam-events'}/>
          <Route path='/github3' component={() => window.location = 'https://github.com/cama0047/Resto-react-native-yelp'}/>
          <Route path='/github4' component={() => window.location = 'https://github.com/cama0047/mongoDB-crud'}/>
          <Route path='/github5' component={() => window.location = 'https://github.com/cama0047/WeatherApp'}/>
          <Route path='/github6' component={() => window.location = 'https://github.com/cama0047/FileExplorer-c-'}/>
          <Route path='/github7' component={() => window.location = 'https://github.com/cama0047/Music-player'}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
