import React from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { getSpecificRecipe } from "../../../../redux/selectors";
import { Box, Divider, Typography } from "@mui/material";

const Ingredients = () => {
	const { ingredients }: any = useAppSelector((state) =>
		getSpecificRecipe(state)
	);

	return (
		<Box mt="70px">
			<Typography mb="30px" variant="h3">
				Ingredients
			</Typography>
			{ingredients?.map((el: any, i: number) => (
				<Box key={i}>
					<Typography py="30px">{el}</Typography>
					<Divider />
				</Box>
			))}
		</Box>
	);
};

export default Ingredients;
