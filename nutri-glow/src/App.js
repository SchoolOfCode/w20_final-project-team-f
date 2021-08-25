import './app.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';

function App() {
  // state that stores user selection from recipe filters
  const [dietLabel, setDietLabel] = useState('');
  const [mealType, setMealType] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [healthLabel, setHealthLabel] = useState('');
  const [dietType, setDietType] = useState('');

  function getDietLabel(label) {
    setDietLabel(label);
  }
  function getMealType(type) {
    setMealType(type);
  }

  function getCuisine(cuisine) {
    setCuisine(cuisine);
  }

  function getHealthLabel(health) {
    setHealthLabel(health);
  }
  function getDietType(diet) {
    setDietType(diet);
  }
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
              updateDietLabel={getDietLabel}
              updateMealType={getMealType}
              updateCuisine={getCuisine}
              updateHealthLabel={getHealthLabel}
              updateDietType={getDietType}
              label={dietLabel}
              meal={mealType}
              cuisines={cuisine}
              health={healthLabel}
              type={dietType}
            />
          </Route>
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
