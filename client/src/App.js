import React, { Component } from 'react';
// import './App.css';
import Landing from './components/pages/Landing';
import About from './components/pages/About';
import CV from './components/pages/CV';
import Projects from './components/pages/Projects';
import CodeControl from './components/pages/CodeControl';
import CodeControl2019 from './components/pages/CodeControl2019';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';

const history = createHistory();
// ReactGA.initialize('UA-87922163-1');
// history.listen((location, action) => {
//   ReactGA.pageview(location.pathname + location.search);
//   // console.log(location.pathname)
// });


class App extends Component {
  // componentDidMount(){
  //   window.ga('create', 'UA-87922163-1', 'auto');
  //   ReactGA.pageview('/');
  // }
  
  render() {
    return (
      <Router history={history}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cv" component={CV} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/CodeControl" component={CodeControl} />
            <Route exact path="/CodeControl2019" component={CodeControl2019} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={NotFound} status={404} />
          </Switch>
      </Router>
    );
  }
}

export default App;
