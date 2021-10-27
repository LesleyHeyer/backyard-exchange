import React, { useState, useEffect } from "react";
import Recipe from './Recipe';
import './SearchForm.css';

const SearchForm = () => {

  const APP_ID = 'c8728e98';
  const APP_KEY = '5c86e9ec900ac93823bc0a8c336fe773';

  const [recipes, setRecipes] = useState([]);
  //because the hits come back as an array of objects
  // const [search, setSearch] = useState('');//search input state
  const [query, setQuery] = useState(''); //state that only submits after we click the search button



  useEffect (() => {  //this is to it only does a query once or when the state changes
    console.log('Effect has been run')
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6`);
    const data = await response.json(); //the await is to wait for the promise
    
    setRecipes(data.hits); //setRecipes holds the recipes we get from the query
    console.log(data.hits);

  }

  // console.log(setQuery);

  const [radioChoice, setRadioChoice] = useState(null);
  const [dropdownChoice, setdropDownChoice] = useState(null);

  const getQuery= e => {
    e.preventDefault(); //prevents page refresh
    if (radioChoice !== '' && dropdownChoice !== '') {
      console.log('Hello')
      setQuery(`${radioChoice} ${dropdownChoice}`);
      setRadioChoice(null);
      setdropDownChoice('');
    } else {
      alert('Please select all options');
    }
  };


    return (
      <div>
      <div className="search-form">
        <form onSubmit={getQuery}
        className="selection_panel"
        >
          <div className="p-1 m-1">
        <input 
          type="radio" 
          value="grilled" 
          name="cookingStyle"
          checked={radioChoice === 'grilled'}
          onChange={(e) => { setRadioChoice(e.target.value) }}
        />
        <label for="grilled"
        className="p-1"
        >
          Grilled
        </label>
        <input 
          type="radio" 
          value="smoked" 
          name="cookingStyle" 
          checked={radioChoice === 'smoked'}
          onChange={(e) => { setRadioChoice(e.target.value) }}
        />
        <label for="smoked"
        className="p-1"
        >
          Smoked
          </label>
          </div>
        <div className="p-1 m-1">
        <select 
        name="proteinChoice" 
        onChange={(e) => { setdropDownChoice(e.target.value) }}
        value={dropdownChoice}
        className="dropdown"
        >
        <option value="" disabled selected hidden>Choose An Option</option>
          <option 
            value='chicken'>
            Chicken
          </option>
            <option 
            value='beef'>
            Beef
          </option>
          <option 
            value='turkey'>
            Turkey
          </option>
          <option 
            value='lamb'>
            Lamb
          </option>
          <option 
            value='pork'>
            Pork
          </option>
          <option 
            value='fish'>
            Fish
          </option>
          <option 
            value='vegetable'>
            Vegetable
          </option>
        </select>
        </div>
        <div>
        <button className="btn btn-dark mt-2 mb-2" type="submit">
        Search 
      </button>
      </div>
    </form>
    </div>

    <div>
        <body className="body">
          <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
        </div>
        </body>
        </div>
      </div>


    )
}

export default SearchForm;