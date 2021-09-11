import React, {useState, useEffect} from 'react';

import './App.css';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import Recipe from './components/Recipe'

function App() {

  
  const APP_ID = '';
  const APP_KEY = '';

  const [recipes, setRecipes] = useState([]);
  //because the hits come back as an array of objects
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');


  // useEffect (() => {  //this is to it only does a query once or when the state changes
  //   getRecipes();
  // }, [query]);

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
  //   const data = await response.json();
  //   setRecipes(data.hits); 
  //   console.log(data.hits);
  // }; // API CALL - USE SPOONACULAR


  // const updateSearch = e => {
  //   setSearch(e.target.value);
  // };

  // const getSearch = e => {
  //   e.preventDefault(); //prevents page refresh
  //   setQuery(search);
  // };

  return (
    <div>
      <h1 className="title"> BACKYARD EXCHANGE </h1>
      <div className="home">
      <div className="search-form">
      <SearchForm
        // search={getSearch}
        // updateSearch={updateSearch}
      />
      </div>
      <div className="recipes">
      {/* {recipes.map(recipe => (
      <Recipe 
        key={}
        title={}
        calorie={}
        image={}
        ingredients={}

      />
      ))} */}
      </div>
      </div>
      <NavBar />
    </div>

  );
}

export default App;
