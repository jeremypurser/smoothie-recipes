import { v4 as uuid } from 'uuid';
import { CreateSmoothie } from '.';
import { Ingredient, Recipe } from '../../data/recipesSlice';

export function transformRecipeData({
  recipe,
  id,
}: {
  recipe: CreateSmoothie;
  id?: string;
}): Recipe {
  const ingredients: Ingredient[] = recipe.ingredients
    .map((ingredient, i) => ({
      name: ingredient,
      amount: {
        value: recipe.amountValues[i],
        unit: recipe.amountUnits[i],
      },
    }))
    .filter(Boolean);

  return {
    id: id || uuid(),
    name: recipe.name,
    ingredients,
  };
}
