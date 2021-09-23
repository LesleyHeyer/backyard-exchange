import React, {useEffect, useState} from 'react';

import './App.css';
import SearchForm from './components/SearchForm';
import Recipe from './components/Recipe';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import NavBar from './components/NavBar';

function App() {

  
  const APP_ID = 'c8728e98';
  const APP_KEY = '5c86e9ec900ac93823bc0a8c336fe773';

  const [recipes, setRecipes] = useState([]);
  //because the hits come back as an array of objects
  // const [search, setSearch] = useState('');//search input state
  const [query, setQuery] = useState(''); //state that only submits after we click the search button

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect (() => {  //this is to it only does a query once or when the state changes
    console.log('Effect has been run')
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json(); //the await is to wait for the promise
    
    setRecipes(data.hits); //setRecipes holds the recipes we get from the query
    console.log(data.hits);

  }

  // const updateSearch = e => {
  //   setSearch(e.target.value); //the event from the onChange in the input of the search will provide the value to update setSearch
  // };

  // const getSearch = e => {
  //   e.preventDefault(); //prevents page refresh
  //   setQuery(search); //this gets the query (finished text) from the search submission
  //   setSearch(''); //sets search back to empty string
  // };



  return (
    <div className="app">
       {sidebarOpen ? 
        <Sidebar /> : ""}
          <Header setSidebarOpen={setSidebarOpen} />
        <SearchForm
          // getSearch={getSearch}
          // search={search}
          // updateSearch={updateSearch}
          query={query}
          setQuery={setQuery}
        />
        <div className="body">
        <body>
          <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
        </div>
        </body>
        </div>

      {/* <NavBar /> */}
      </div>

  );
}

export default App;
