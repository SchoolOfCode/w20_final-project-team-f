import './app.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import ArticleCard from './components/ArticleCard/ArticleCard';
import { myths1, nutrition1, foods1 } from '././data';

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
            <div className="rightMyths">
              {myths1.map((data) => (
                <ArticleCard data={data} />
              ))}
            </div>
          </Route>
          <Route path="/nutrition1">
            <div className="rightNutrition">
              {nutrition1.map((data) => (
                <ArticleCard data={data} />
              ))}
            </div>
          </Route>
          <Route path="/foods1">
            <div className="rightFoods">
              {foods1.map((data) => (
                <ArticleCard data={data} />
              ))}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
