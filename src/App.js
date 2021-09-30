
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './components/Restaurant/Restaurant';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Mealdb from './components/Mealdb/Mealdb';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/restaurant">
            <Restaurant></Restaurant>
          </Route>
          <Route path="/meal/:idMeal">
            <MealDetail></MealDetail>
          </Route>
          <Route path="/mealdb">
            <Mealdb></Mealdb>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
