import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for managing document head

import '../css/recipe.css'; // Corrected import statement
import pizzaImage from '../img/pizza.webp';


function Recipes() {
  return (
    <div>
      
      <Helmet>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="stylesheet" href="recipe.css" />
        <title>Pizza</title>
      </Helmet>
      <div className="card">
        <img src={pizzaImage} alt="pizza" /> 
        <div className="ingredients">
          <p id="main-heading">Simple Omelette Recipe</p>
          <p id="content">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          <div className="list1">
            <p id="preparation">Preparation time</p>
            <ul>
              <li><span id="bold-content">Total:</span> Approximately 10 minutes</li>
              <li><span id="bold-content">Preparation:</span> 5 minutes</li>
              <li><span id="bold-content">Cooking:</span> 5 minutes</li>
            </ul>
          </div>
          <p id="sub-heading">Ingredients</p>
          <ul className="list2">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>
        <hr />
        <div className="instructions">
          <p id="sub-heading">Instructions</p>
          <ol className="list2">
            <li><span id="bold-content">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li><span id="bold-content">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li><span id="bold-content">Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
            <li><span id="bold-content">Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li><span id="bold-content">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li><span id="bold-content">Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
          </ol>
          <hr />
        </div>
        <div className="nutrition">
          <p id="sub-heading">Nutrition</p>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <table>
            <tbody>
              <tr>
                <td>Calories</td>
                <td id="bold-data">277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td id="bold-data">0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td id="bold-data">20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td id="bold-data">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
