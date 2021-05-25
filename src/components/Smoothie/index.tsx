import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { deleteRecipe, Recipe } from '../../data/recipesSlice';
import style from './style.module.css';
import { pluralize } from './utility';

export function Smoothie({ recipe }: { recipe: Recipe }) {
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <div className={style.card}>
      <h2>{recipe.name}</h2>
      {recipe.ingredients.map((ingredient) => (
        <div key={ingredient.name}>
          <span>{ingredient.amount.value} </span>
          <span>
            {pluralize(ingredient.amount.value, ingredient.amount.unit)}{' '}
          </span>
          <span>{ingredient.name}</span>
        </div>
      ))}
      <button onClick={() => history.push(`/recipe/${recipe.id}`)}>Edit</button>
      <button onClick={() => dispatch(deleteRecipe(recipe.id))}>Delete</button>
    </div>
  );
}
