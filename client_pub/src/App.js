import React from 'react';
import {
  BrowserRouter as Router, Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Management from './containers/Management.jsx';
import Technician from './containers/Technician.jsx';
import TechByTest from './containers/TechByTest.jsx';
import Register from './containers/Register.jsx';
import Results from './containers/ResultsContainer.jsx';
import Units from './containers/Units.jsx';
import SHowHideBtn from './containers/ResultsBtn.jsx';
import Footer from './components/Footer.jsx';
import SearchOptionsPage from './containers/SearchOptions.jsx';
import './App.css';

const App = () => {
  
  return (
    <Router>
      <div className="App">
      <Header/>
      <Nav />
        <div className="App-header">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/management" component={Management} />
            <Route path="/technician" component={Technician} />
            <Route path="/techByTest" component={TechByTest} />
            <Route path="/register" component={Register} />
            <Route path="/results" component={Results} />
            <Route path="/units" component={Units} />
            <Route path="/results-btn" component={SHowHideBtn} />
            <Route path="/search-options" component={SearchOptionsPage} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
