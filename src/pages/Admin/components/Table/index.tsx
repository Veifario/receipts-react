import React from "react";
import {
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Table as TableMui,
	Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getRecipesList } from "../../../../redux/selectors";
import {
	getRecipeSpecific,
	removeRecipe,
	toggleModalChange,
} from "../../../../redux/slices/recipeSlice";
import { IRecipe } from "../../../../types";

const Table = () => {
	const recipes = useAppSelector((state) => getRecipesList(state));
	const dispatch = useAppDispatch();

	const deleteRecipe = (id: string) => {
		dispatch(removeRecipe(id));
	};

	const handleChange = (recipe: IRecipe) => {
		dispatch(toggleModalChange());
		dispatch(getRecipeSpecific(recipe));
	};

	return (
		<TableContainer>
			<TableMui sx={{ width: "60%" }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Image</TableCell>
						<TableCell align="right">Calories</TableCell>
						<TableCell align="right">Fat&nbsp;(g)</TableCell>
						<TableCell align="right">Carbs&nbsp;(g)</TableCell>
						<TableCell align="right">Protein&nbsp;(g)</TableCell>
						<TableCell align="center">Control</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{recipes.map(
						({
							id,
							imgSrc,
							calories,
							name,
							fat,
							carbs,
							protein,
							...rest
						}: any) => (
							<TableRow
								key={id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{name}
								</TableCell>
								<TableCell align="left">
									<img
										style={{
											width: "auto",
											height: "70px",
											borderRadius: "15px",
											objectFit: "contain",
										}}
										src={imgSrc}
										alt=""
									/>
								</TableCell>
								<TableCell align="right">{calories}</TableCell>
								<TableCell align="right">{fat}</TableCell>
								<TableCell align="right">{carbs}</TableCell>
								<TableCell align="right">{protein}</TableCell>
								<TableCell align="right">
									<Button onClick={() => deleteRecipe(id)} color="error">
										Delete
									</Button>
									<Button
										onClick={() =>
											handleChange({
												id,
												imgSrc,
												calories,
												name,
												fat,
												carbs,
												protein,
												...rest,
											})
										}
										color="info"
									>
										Change
									</Button>
								</TableCell>
							</TableRow>
						)
					)}
				</TableBody>
			</TableMui>
		</TableContainer>
	);
};

export default Table;
