import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { getRecipe } from "../../redux/slices/recipeSlice";
import { Container } from "../../ui";
import { Header, Info, Ingredients, Instruction } from "./components";
import { Grid } from "@mui/material";

const RecipeDetails = () => {
	const params: any = useParams();

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getRecipe(params.id));
	}, []);

	return (
		<Container>
			<Header />
			<Info />
			<Grid container spacing="100px">
				<Grid item xs={5}>
					<Ingredients />
				</Grid>
				<Grid item xs={7}>
					<Instruction />
				</Grid>
			</Grid>
		</Container>
	);
};

export default RecipeDetails;
