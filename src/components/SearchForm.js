import React, { useState } from "react";
import style from './SearchForm.module.css';

const SearchForm = ({setQuery, query}) => {

  // console.log(setQuery);

  const [radioChoice, setRadioChoice] = useState(null);
  const [dropdownChoice, setdropDownChoice] = useState(null);

  const getQuery= e => {
    e.preventDefault(); //prevents page refresh
    if (radioChoice !== '' && dropdownChoice !== '') {
      console.log('Hello')
      setQuery(`${radioChoice} ${dropdownChoice}`);
      setRadioChoice(null);
      setdropDownChoice(null);
    }   
  };


    return (
        <div className={style.search}>
        <form onSubmit={getQuery}>
        <input 
          type="radio" 
          value="grilled" 
          name="cookingStyle"
          checked={radioChoice === 'grilled'}
          onChange={(e) => { setRadioChoice(e.target.value) }}
        />
        <label for="grilled">
          Grilled
        </label>
        <input 
          type="radio" 
          value="smoked" 
          name="cookingStyle" 
          checked={radioChoice === 'smoked'}
          onChange={(e) => { setRadioChoice(e.target.value) }}
        />
        <label for="smoked">
          Smoked
          </label>

        <div className="drop-down">
        <select 
        name="proteinChoice" 
        onChange={(e) => { setdropDownChoice(e.target.value) }}
        value={dropdownChoice}
        >
        <option value="" disabled selected hidden>Protein/Vegetable</option>
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
        <button className="search-button" type="submit">
        Search 
      </button>
    </form>
    </div>


    )
}

export default SearchForm;