import './app.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import MythsTrying from './components/MythsTrying/MythsTrying';
import NutritionTrying from './components/NutritionTrying/NutritionTrying';
import FoodsTrying from './components/FoodsTrying/FoodsTrying';

function App() {
  return (
    <div className="container">
      <Router>
        <nav>
          <Navbar />
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/articles" component={Articles} />
          <Route path="/recipes">
            <Recipes />
          </Route>

          <Route path="/profile" component={Profile} />
          <Route path="/myths1">
            <MythsTrying />
          </Route>
          <Route path="/nutrition1">
            <NutritionTrying />
          </Route>
          <Route path="/foods1">
            <FoodsTrying />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
