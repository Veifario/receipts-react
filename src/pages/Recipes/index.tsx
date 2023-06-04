import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getRecipesList } from "../../redux/selectors";
import { Card } from "./components";
import testImg from "../../assets/images/testFood.png";
import { Container, FlexBetween } from "../../ui";
import { Typography } from "@mui/material";

const Recipes = () => {
	const recipes = useAppSelector((state) => getRecipesList(state));

	const displayRecipes = () =>
		recipes.length === 0 ? (
			<Typography variant="h2">There is no recipes for today 🥦</Typography>
		) : (
			recipes.map(({ id, name, cooktime, tags, imgSrc }: any) => (
				<Card
					key={id}
					id={id}
					title={name}
					cookTime={cooktime}
					img={imgSrc}
					tags={tags}
				/>
			))
		);

	return (
		<Container>
			<FlexBetween flexWrap="wrap" gap="40px" mt="20px">
				{displayRecipes()}
			</FlexBetween>
		</Container>
	);
};

export default Recipes;
