import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

type AmountUnit = 'cup' | 'Tbsp' | 'tsp' | 'oz';

type CreateSmoothie = {
  name: string;
  ingredients: string[];
  amountValues: number[];
  amountUnits: AmountUnit[];
};

export function SmoothieForm() {
  const { register, unregister, handleSubmit } = useForm<CreateSmoothie>();
  const [ingredients, setIngredients] = useState([0, 1, 2]);

  const options: AmountUnit[] = ['cup', 'Tbsp', 'tsp', 'oz'];

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ingredients[ingredients.length - 1] + 1]);
  };

  const handleRemoveIngredient = (i: number) => {
    unregister(`ingredients.${i}` as `ingredients.${number}`);
    unregister(`amountValues.${i}` as `amountValues.${number}`);
    unregister(`amountUnits.${i}` as `amountUnits.${number}`);
    setIngredients(ingredients.slice(0, i).concat(ingredients.slice(i + 1)));
  };

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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
              })}
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
              <button onClick={handleRemoveIngredient.bind(null, i)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button onClick={handleAddIngredient}>Add ingredient</button>
      </div>
      <input type="submit" />
    </form>
  );
}
