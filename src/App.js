import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Help from './pages/Help';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {


  return (
    <Router>
      <div className="weather_main">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/help" exact render={() => <Help />} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
