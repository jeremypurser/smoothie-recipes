import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addRecipe, AmountUnit, updateRecipe } from '../../data/recipesSlice';
import './style.css';
import { transformRecipeData } from './utility';

export type CreateSmoothie = {
  name: string;
  ingredients: string[];
  amountValues: number[];
  amountUnits: AmountUnit[];
};

export function SmoothieForm() {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector((state) => state.recipes);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const recipeToUpdate = recipes.byId[id];

  const options: AmountUnit[] = ['cup', 'Tbsp', 'tsp', 'oz'];

  const getDefaultValues = (): CreateSmoothie => {
    if (recipeToUpdate) {
      return {
        name: recipeToUpdate.name,
        ingredients: recipeToUpdate.ingredients.map(
          (ingredient) => ingredient.name
        ),
        amountValues: recipeToUpdate.ingredients.map(
          (ingredient) => ingredient.amount.value
        ),
        amountUnits: recipeToUpdate.ingredients.map(
          (ingredient) => ingredient.amount.unit
        ),
      };
    }
    return {
      name: '',
      ingredients: [''],
      amountValues: [0],
      amountUnits: [''],
    };
  };

  const { register, unregister, handleSubmit } = useForm<CreateSmoothie>({
    defaultValues: getDefaultValues(),
  });

  const [ingredients, setIngredients] = useState(
    getDefaultValues().ingredients.map((_, i) => i)
  );

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ingredients[ingredients.length - 1] + 1]);
  };

  const handleRemoveIngredient = (i: number) => {
    unregister(`ingredients.${i}` as `ingredients.${number}`);
    unregister(`amountValues.${i}` as `amountValues.${number}`);
    unregister(`amountUnits.${i}` as `amountUnits.${number}`);
    setIngredients(ingredients.slice(0, i).concat(ingredients.slice(i + 1)));
  };

  const submitRecipe = (data: CreateSmoothie) => {
    const recipe = transformRecipeData({ recipe: data, id });
    dispatch(recipeToUpdate ? updateRecipe(recipe) : addRecipe(recipe));
    history.push('/recipes');
  };

  return (
    <form onSubmit={handleSubmit(submitRecipe)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" {...register('name')} />
      </div>
      <div>
        {ingredients.map((i) => (
          <div key={i}>
            <label htmlFor={`ingredients.${i}`}>Ingredient:</label>
            <input
              id={`ingredients.${i}`}
              {...register(`ingredients.${i}` as `ingredients.${number}`, {
                required: true,
              })}
            />
            <label htmlFor={`amountValues.${i}`}>Amount:</label>
            <input
              id={`amountValues.${i}`}
              {...register(`amountValues.${i}` as `amountValues.${number}`, {
                required: true,
                valueAsNumber: true,
                validate: (val) => Number(val) > 0,
              })}
              type="number"
            />
            <label htmlFor={`amountUnits.${i}`}>Unit:</label>
            <select
              id={`amountUnits.${i}`}
              {...register(`amountUnits.${i}` as `amountUnits.${number}`, {
                required: true,
              })}
            >
              <option value="">Select...</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {i > 0 && (
              <button onClick={() => handleRemoveIngredient(i)}>Remove</button>
            )}
          </div>
        ))}
        <button onClick={handleAddIngredient}>Add ingredient</button>
      </div>
      <input
        type="submit"
        value={recipeToUpdate ? 'Update recipe' : 'Add recipe'}
      />
    </form>
  );
}
