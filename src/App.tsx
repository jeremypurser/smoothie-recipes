import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { SmoothieForm } from './components/SmoothieForm';
import { Smoothies } from './components/Smoothies';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/recipe">
          <SmoothieForm />
        </Route>
        <Route path="/recipe/:id">
          <SmoothieForm />
        </Route>
        <Route path="/recipes">
          <Smoothies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
