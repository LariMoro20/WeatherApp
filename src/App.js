import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Help from './pages/Help';
import Header from './components/Header';
import Footer from './components/Footer';
import MetaTags from 'react-meta-tags';
function App() {


  return (
    <Router>
      <MetaTags>
        <title>WeatherApp</title>
        <meta name="description" content="Aplicação de verificação de previsão do tempo utilizando API externa." />
        <meta property="author" content="Larissa Santos" />
        <meta property="og:title" content="WeatherApp" />
        <meta property="og:image" content="./images/logow.png" />
      </MetaTags>
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
