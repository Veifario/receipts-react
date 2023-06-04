import React, { useEffect, Fragment } from "react";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { Header, Preloader, ScrollToTop } from "./components";
import { Routes, Route } from "react-router-dom";
import { Admin, Home, RecipeDetails, Recipes } from "./pages";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getRecipes } from "./redux/slices/recipeSlice";
import { getLoaderStatus } from "./redux/selectors";
import { ToastContainer } from "react-toastify";

function App() {
	const dispatch = useAppDispatch();

	const loadingStatus = useAppSelector((state) => getLoaderStatus(state));

	useEffect(() => {
		dispatch(getRecipes());
	}, []);

	return (
		<Fragment>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/recipes" element={<Recipes />} />
					<Route path="/recipes/:id" element={<RecipeDetails />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>
				<Preloader loadingStatus={loadingStatus} />
			</div>
			<ScrollToTop />
			<ToastContainer autoClose={2000} />
		</Fragment>
	);
}

export default App;
