import './app.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';

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
            <Recipes
            // updateDietLabel={getDietLabel}
            // updateMealType={getMealType}
            // updateCuisine={getCuisine}
            // updateHealthLabel={getHealthLabel}
            // updateDietType={getDietType}
            // label={dietLabel}
            // meal={mealType}
            // cuisines={cuisines}
            // health={healthLabel}
            // type={dietType}
            />
          </Route>

          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;