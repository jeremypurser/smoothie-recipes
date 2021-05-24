import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AmountUnit = 'cup' | 'Tbsp' | 'tsp' | 'oz' | '';

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

type RecipeState = {
  byId: Record<string, Recipe>;
  allIds: string[];
};

const initialState: RecipeState = {
  byId: {},
  allIds: [],
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.byId[action.payload.id] = action.payload;
      state.allIds.push(action.payload.id);
      return state;
    },
    updateRecipe: (state, action: PayloadAction<Recipe>) => {
      state.byId[action.payload.id] = action.payload;
      return state;
    },
    // payload is recipe.id
    deleteRecipe: (state, action: PayloadAction<string>) => {
      delete state.byId[action.payload];
      state.allIds = state.allIds.filter((id) => id !== action.payload);
      return state;
    },
  },
});

export const { addRecipe, updateRecipe, deleteRecipe } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
