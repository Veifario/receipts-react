import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import {} from "../../types";

const initialState = {};

const recipeSlice = createSlice({
	initialState,
	name: "recipe",
	reducers: {},
	extraReducers(builder) {},
});
