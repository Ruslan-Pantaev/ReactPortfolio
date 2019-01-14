import React, { Component } from 'react';
// import './App.css';
import Landing from './components/pages/Landing';
import About from './components/pages/About';
import CV from './components/pages/CV';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-87922163-1');

// const history = createBrowserHistory();

class App extends Component {
  componentDidMount(){
    // window.ga('create', 'UA-87922163-1', 'auto');
  }

  setPageAndSendToGA = url => {
    window.ga('set', 'page', url);
    window.ga('send', 'pageview');
  };

  trackGoogleAnalytics = location => {
    if (window.ga) {
      this.setPageAndSendToGA(location);
    }
  };
  
  render() {
    // this.trackGoogleAnalytics('https://localhost:3000/test');
    // ReactGA.pageview(window.location.pathname + window.location.search);
    // ReactGA.pageview(this.props.location.pathname + window.location.search);

    // History.listen((location) => {  
    //   if (window.ga) {
    //     window.ga('send', 'pageview', location.pathname);
    //   }
    // });

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
