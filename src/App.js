import React, {useState, useEffect} from 'react';

import './App.css';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import Recipe from './components/Recipe'

function App() {

  
  // const APP_ID = '';
  const APP_KEY = '4df740ec417a4ba4a89f4c833dceb1bd';

  const [recipes, setRecipes] = useState([]);
  //because the hits come back as an array of objects
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');


  // useEffect (() => {  //this is to it only does a query once or when the state changes
  //   getRecipes();
  // }, [query]);

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.spoonacular.com/recipes/716429/information?apiKey={APP_KEY}Y&includeNutrition=true.`);
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
