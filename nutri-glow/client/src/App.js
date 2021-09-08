import './app.scss';
import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import ArticleCard from './components/ArticleCard/ArticleCard';
import { myths1, nutrition1, foods1 } from '././data';
import Login from './components/LoginForm/LoginForm';
import Footer from './components/Footer/Footer';
import { auth } from './firebase';
import Signup from './components/Signup/Signup';


function App() {
  // track user authentication status
  // user authentication status determines if profile page is displayed

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        console.log(userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

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
          <Route path="/login">

            <div className="container">
              {user ? <Profile /> : <Login isLoggedIn={false} />}
            </div>
            <div className="containerLogin">
              {user ? <Profile /> : <Login />}

            </div>
          </Route>
          <Route path="/signup">
            <div className="containerSignup">
              {user ? <Profile /> : <Signup />}
            </div>
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
      <Footer />
    </div>
  );
}

export default App;
