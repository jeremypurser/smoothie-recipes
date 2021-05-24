import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { deleteRecipe, Recipe } from '../../data/recipesSlice';
import { pluralize } from './utility';

export function Smoothie({ recipe }: { recipe: Recipe }) {
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <>
      <h2>{recipe.name}</h2>
      {recipe.ingredients.map((ingredient) => (
        <div key={ingredient.name}>
          <span>{ingredient.name}</span>
          <span>{ingredient.amount.value}</span>
          <span>
            {pluralize(ingredient.amount.value, ingredient.amount.unit)}
          </span>
        </div>
      ))}
      <button onClick={() => history.push(`/recipe/${recipe.id}`)}>Edit</button>
      <button onClick={() => dispatch(deleteRecipe(recipe.id))}>Delete</button>
    </>
  );
}
