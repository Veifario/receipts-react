import React, { useState } from "react";
import {
	Autocomplete,
	Box,
	Button,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { v4 as uniqueId } from "uuid";
import { getTagOptions } from "../../../../utils/functions";
import { useAppDispatch } from "../../../../redux/hooks";
import { toast } from "react-toastify";
import { addRecipe } from "../../../../redux/slices/recipeSlice";
import { IRecipe } from "../../../../types";

const AddPanel = () => {
	const dispatch = useAppDispatch();

	const [inputs, setInputs] = useState({
		tags: [],
		name: "",
		imgSrc: "",
		preptime: 0,
		cooktime: 0,
		calories: 0,
		fat: 0,
		satfat: 0,
		carbs: 0,
		fiber: 0,
		sugar: 0,
		protein: 0,
		instructions: "",
		ingredients: "",
	});

	const handleAddRecipe = () => {
		for (const input in inputs) {
			// @ts-ignore
			if (inputs[input] == 0) {
				toast.warning("Fill all text areas");
				return;
			}
		}

		const newRecipe: IRecipe = {
			id: uniqueId(),
			name: inputs.name,
			imgSrc: inputs.imgSrc,
			preptime: inputs.preptime,
			cooktime: inputs.cooktime,
			calories: inputs.calories,
			fat: inputs.fat,
			satfat: inputs.satfat,
			carbs: inputs.carbs,
			fiber: inputs.fiber,
			sugar: inputs.sugar,
			protein: inputs.protein,
			instructions: inputs.instructions.split("\n").join("\r\n\r\n"),
			ingredients: inputs.ingredients.split("\n"),
			tags: inputs.tags,
		};
		dispatch(addRecipe(newRecipe));
		toast.success("New Recipe uploaded");
	};

	return (
		<Box sx={centeredBoxCss}>
			<Typography variant="title">Add Panel</Typography>
			<Grid mt="10px" container spacing={2}>
				<Grid item xs={6}>
					<TextField
						value={inputs.name}
						onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
						label="Name"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						value={inputs.imgSrc}
						onChange={(e) => setInputs({ ...inputs, imgSrc: e.target.value })}
						label="Image Link"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						value={String(inputs.preptime)}
						onChange={(e) =>
							setInputs({ ...inputs, preptime: +e.target.value })
						}
						type="number"
						label="Prep time (sec)"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						value={String(inputs.cooktime)}
						onChange={(e) =>
							setInputs({ ...inputs, cooktime: +e.target.value })
						}
						type="number"
						label="Cook time (sec)"
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						value={String(inputs.calories)}
						onChange={(e) =>
							setInputs({ ...inputs, calories: +e.target.value })
						}
						type="number"
						label="Calories (kcal)"
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						value={String(inputs.satfat)}
						onChange={(e) => setInputs({ ...inputs, satfat: +e.target.value })}
						type="number"
						label="Saturated Fat (g)"
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						value={String(inputs.fat)}
						onChange={(e) => setInputs({ ...inputs, fat: +e.target.value })}
						type="number"
						label="Total Fat (g)"
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						value={String(inputs.carbs)}
						onChange={(e) => setInputs({ ...inputs, carbs: +e.target.value })}
						type="number"
						label="Carbohydrates (g)"
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						value={String(inputs.fiber)}
						onChange={(e) => setInputs({ ...inputs, fiber: +e.target.value })}
						type="number"
						label="Dietary Fiber (g)"
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						value={String(inputs.sugar)}
						onChange={(e) => setInputs({ ...inputs, sugar: +e.target.value })}
						type="number"
						label="Sugar Amount (g)"
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						value={String(inputs.protein)}
						onChange={(e) => setInputs({ ...inputs, protein: +e.target.value })}
						type="number"
						label="Protein Amount (g)"
					/>
				</Grid>
				<Grid item xs={12}>
					<Autocomplete
						multiple
						options={getTagOptions()}
						getOptionLabel={(option) => option}
						onChange={(event, newValue) => {
							//@ts-ignore
							setInputs({ ...inputs, tags: [...newValue] });
						}}
						renderInput={(params) => (
							<TextField
								required
								{...params}
								variant="standard"
								label="Choose tags"
								placeholder="Favorites"
							/>
						)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						value={inputs.ingredients}
						onChange={(e) =>
							setInputs({ ...inputs, ingredients: e.target.value })
						}
						fullWidth
						multiline
						helperText="Press Enter to add next ingredient"
						type="number"
						label="Ingredients"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						value={inputs.instructions}
						onChange={(e) =>
							setInputs({ ...inputs, instructions: e.target.value })
						}
						fullWidth
						multiline
						helperText="Press Enter to add next instruction"
						type="number"
						label="Instructions"
					/>
				</Grid>
			</Grid>
			<Button
				sx={{ mt: "20px" }}
				fullWidth
				variant="contained"
				onClick={handleAddRecipe}
			>
				Add New Recipe
			</Button>
		</Box>
	);
};

export default AddPanel;

const centeredBoxCss = {
	position: "fixed",
	right: "20px",
	top: "120px",
	width: "36%",
	height: "80vh",
	padding: "20px",
	overflowY: "scroll",
	overflowX: "unset",
};
