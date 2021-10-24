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
      setdropDownChoice('');
    } else {
      alert('Please select all options');
    }
  };


    return (
        <div className={style.search}>
        <form onSubmit={getQuery}
        className={style.selection_panel}
        >
          <div className="p-2 m-1">
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
          </div>
        <div>
        <select 
        name="proteinChoice" 
        onChange={(e) => { setdropDownChoice(e.target.value) }}
        value={dropdownChoice}
        className={style.dropdown}
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
        <button className="btn btn-dark mt-2" type="submit">
        Search 
      </button>
      </div>
    </form>
    </div>


    )
}

export default SearchForm;