import { RootState } from "../store";

export const getRecipesList = (state: RootState) =>
	state.recipesReducer.recipesList;

export const getSpecificRecipe = (state: RootState) =>
	state.recipesReducer.recipeSpecific;

export const getLoaderStatus = (state: RootState) =>
	state.recipesReducer.loadingStatus;

export const getIsModalChangeOpen = (state: RootState) =>
	state.recipesReducer.isModalChangeOpen;

export const getSearchProducts = (state: RootState) => state;
