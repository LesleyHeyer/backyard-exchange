import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({ title, image, ingredients, url }) => {

    return(
        <div className={style.recipe}>
            <h2>{title}</h2>
            <a href={url}>Click Here To View Full Recipe</a>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt="" />
        </div>

    );
};

export default Recipe;