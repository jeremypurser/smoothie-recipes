import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AmountUnit = 'cup' | 'Tbsp' | 'tsp' | 'oz';

export type Ingredient = {
  name: string;
  amount: {
    value: number;
    unit: AmountUnit;
  };
};

export type Recipe = {
  id: string;
  name: string;
  ingredients: Ingredient[];
};

const initialState: Recipe[] = [];

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.push(action.payload);
    },
  },
});

export const { addRecipe } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
