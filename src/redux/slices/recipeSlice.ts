import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { IRecipe } from "../../types";

export const getRecipes = createAsyncThunk(
	"recipe/getRecipes",
	async (__, thunkAPI) => {
		try {
			const res = await api.getRecipes();
			return res;
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.response);
		}
	}
);

export const getRecipe = createAsyncThunk(
	"recipe/getSpicificRecipe",
	async (id: string, thunkAPI) => {
		try {
			const res = await api.getRecipe(id);
			return res;
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.response);
		}
	}
);

export const addRecipe = createAsyncThunk(
	"recipe/addRecipe",
	async (data: IRecipe, thunkAPI) => {
		try {
			const res = await api.addRecipe(data);
			return { res, data };
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.response);
		}
	}
);

export const removeRecipe = createAsyncThunk(
	"recipe/removeRecipe",
	async (id: string, thunkAPI) => {
		try {
			const res = await api.deleteRecipe(id);
			return { res, id };
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.response);
		}
	}
);

export const updateRecipe = createAsyncThunk(
	"recipe/updateRecipe",
	async ({ id, data }: any, thunkAPI) => {
		try {
			const res = await api.putRecipe(id, data);
			return { res, id, data };
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.response);
		}
	}
);

const initialState = {
	recipesList: [],
	recipeSpecific: {},
	loadingStatus: false,
	isModalChangeOpen: false,
};

const recipesSlice = createSlice({
	initialState,
	name: "recipe",
	reducers: {
		toggleModalChange: (state) => {
			state.isModalChangeOpen = !state.isModalChangeOpen;
		},
		getRecipeSpecific: (state, { payload }) => {
			state.recipeSpecific = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getRecipes.pending, (state) => {
				state.loadingStatus = true;
			})
			.addCase(getRecipes.fulfilled, (state, action: PayloadAction<any>) => {
				state.recipesList = action.payload;
				state.loadingStatus = false;
			});
		builder
			.addCase(getRecipe.pending, (state) => {
				state.loadingStatus = true;
			})
			.addCase(getRecipe.fulfilled, (state, action: PayloadAction<any>) => {
				state.recipeSpecific = action.payload;
				state.loadingStatus = false;
			});
		builder
			.addCase(addRecipe.pending, (state) => {
				state.loadingStatus = true;
			})
			.addCase(addRecipe.fulfilled, (state, action: PayloadAction<any>) => {
				//@ts-ignore
				state.recipesList.push(action.payload.data);
				state.loadingStatus = false;
			});
		builder
			.addCase(removeRecipe.pending, (state) => {
				state.loadingStatus = true;
			})
			.addCase(removeRecipe.fulfilled, (state, action: PayloadAction<any>) => {
				state.recipesList = state.recipesList.filter(
					(e: any) => e.id !== action.payload.id
				);
				state.loadingStatus = false;
			});

		builder
			.addCase(updateRecipe.pending, (state) => {
				state.loadingStatus = true;
			})
			.addCase(updateRecipe.fulfilled, (state, action: PayloadAction<any>) => {
				// @ts-ignore
				state.recipesList = state.recipesList.map((recipe: any) =>
					recipe.id === action.payload.id
						? { ...recipe, ...action.payload.data }
						: recipe
				);
				state.loadingStatus = false;
			});
	},
});

export default recipesSlice.reducer;
export const { toggleModalChange, getRecipeSpecific } = recipesSlice.actions;
