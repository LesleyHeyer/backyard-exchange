import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Gallery from './components/Gallery';
import About from './components/About';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';

function App() {

  
  // const APP_ID = 'c8728e98';
  // const APP_KEY = '5c86e9ec900ac93823bc0a8c336fe773';

  // const [recipes, setRecipes] = useState([]);
  // //because the hits come back as an array of objects
  // // const [search, setSearch] = useState('');//search input state
  // const [query, setQuery] = useState(''); //state that only submits after we click the search button



  // useEffect (() => {  //this is to it only does a query once or when the state changes
  //   console.log('Effect has been run')
  //   getRecipes();
  // }, [query]);

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6`);
  //   const data = await response.json(); //the await is to wait for the promise
    
  //   setRecipes(data.hits); //setRecipes holds the recipes we get from the query
  //   console.log(data.hits);

  // }

  // const updateSearch = e => {
  //   setSearch(e.target.value); //the event from the onChange in the input of the search will provide the value to update setSearch
  // };

  // const getSearch = e => {
  //   e.preventDefault(); //prevents page refresh
  //   setQuery(search); //this gets the query (finished text) from the search submission
  //   setSearch(''); //sets search back to empty string
  // };



  return (
    <Router>
    <div className="app">
      <NavBar />
      <Switch>
        <Route path='/' exact component={SearchForm} />
        <Route path="/About" component={About} />
        <Route path="/Gallery" component={Gallery} />
      </Switch>
        </div>
        </Router>
  );
}

export default App;
