import './app.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import SignupForm from './components/SignupForm/SignupForm';
import { Container } from 'react-bootstrap'
import AuthProvider from './contexts/AuthContext';

function App() {
  return (

    <AuthProvider>



      <div className="container">
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>

          <div className="w-100" style={{ maxWidth: "400px" }}>
            <SignupForm />
          </div>

        </Container>



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
    </AuthProvider>
  );
}

export default App;
