import React from "react";
import './SearchForm.module.css';

const SearchForm = () => {
    return (
        <div className="search-form">
        <form>
        <input type="radio" value="protein" name="cookingStyle" />
        <label for="protein">Grilled</label>
        <input type="radio" value="vegetable" name="cookingStyle" />
        <label for="vegetable">Smoked</label>
        <select name="proteinChoice">
        <option value="" disabled selected hidden>Protein/Vegetable</option>
          <option value="chicken">Chicken</option>
          <option value="chicken">Beef</option>
          <option value="chicken">Turkey</option>
          <option value="chicken">Lamb</option>
          <option value="chicken">Pork</option>
          <option value="chicken">Fish/Seafood</option>
          <option value="chicken">Vegetable</option>
        </select>
        <button className="search-button" type="submit">
        Search 
      </button>
    </form>
    </div>
    )
}

export default SearchForm;