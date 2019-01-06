import React, { Component } from 'react';
// import './App.css';
import Landing from './components/pages/Landing';
import About from './components/pages/About';
import CV from './components/pages/CV';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cv" component={CV} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={NotFound} status={404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
