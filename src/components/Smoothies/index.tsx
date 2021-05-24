import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteRecipe } from '../../data/recipesSlice';
import { pluralize } from './utility';

export function Smoothies() {
  const recipes = useAppSelector((state) => state.recipes);
  const dispatch = useAppDispatch();
  const history = useHistory();

  return recipes.allIds.length > 0 ? (
    <>
      {recipes.allIds.map((id) => {
        console.log(id);
        const { byId } = recipes;
        return (
          <Fragment key={id}>
            <h2>{byId[id].name}</h2>
            {byId[id].ingredients.map((ingredient) => (
              <div key={ingredient.name}>
                <span>{ingredient.name}</span>
                <span>{ingredient.amount.value}</span>
                <span>
                  {pluralize(ingredient.amount.value, ingredient.amount.unit)}
                </span>
              </div>
            ))}
            <button onClick={() => history.push(`/recipe/${id}`)}>Edit</button>
            <button onClick={() => dispatch(deleteRecipe(id))}>Delete</button>
          </Fragment>
        );
      })}
    </>
  ) : (
    <p>No recipes</p>
  );
}
