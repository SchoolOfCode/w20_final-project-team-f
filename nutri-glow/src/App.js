import './app.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';

function App() {
  //state that stores user selection from recipe filters
  const [dietLabel, setDietLabel] = useState('');
  const [mealType, setMealType] = useState('');
  const [cuisines, setCuisines] = useState('');
  const [healthLabel, setHealthLabel] = useState('');
  const [dietType, setDietType] = useState('');

  function getDietLabel(label) {
    setDietLabel(label);
  }
  function getMealType(meal) {
    setMealType(meal);
  }

  function getCuisine(cuisine) {
    setCuisines(cuisine);
  }

  function getHealthLabel(health) {
    setHealthLabel(health);
  }
  function getDietType(type) {
    setDietType(type);
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
              cuisine={cuisines}
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
