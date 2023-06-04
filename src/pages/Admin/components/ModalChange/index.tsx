import {
	Autocomplete,
	Box,
	Button,
	Grid,
	Modal,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getIsModalChangeOpen } from "../../../../redux/selectors";
import {
	toggleModalChange,
	updateRecipe,
} from "../../../../redux/slices/recipeSlice";
import { getTagOptions } from "../../../../utils/functions";
import { FlexBetween } from "../../../../ui";
import { IRecipe } from "../../../../types";
import { toast } from "react-toastify";

const ModalChange = ({
	id,
	tags = [],
	name = "",
	imgSrc = "",
	preptime = 0,
	cooktime = 0,
	calories = 0,
	fat = 0,
	satfat = 0,
	carbs = 0,
	fiber = 0,
	sugar = 0,
	protein = 0,
	instructions = "",
	ingredients = [],
}: IRecipe) => {
	const isModalChangeOpen = useAppSelector((state) =>
		getIsModalChangeOpen(state)
	);
	const dispatch = useAppDispatch();

	const [inputs, setInputs] = useState({
		tags,
		name,
		imgSrc,
		preptime,
		cooktime,
		calories,
		fat,
		satfat,
		carbs,
		fiber,
		sugar,
		protein,
		instructions,
		ingredients: ingredients.join("\n"),
	});

	const handleSaveChanges = () => {
		const updatedRecipe: IRecipe = {
			id: id,
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
		dispatch(updateRecipe({ id, data: updatedRecipe }));
		dispatch(toggleModalChange());
		toast.success("Recipe Updated");
	};

	useEffect(() => {
		setInputs({
			tags,
			name,
			imgSrc,
			preptime,
			cooktime,
			calories,
			fat,
			satfat,
			carbs,
			fiber,
			sugar,
			protein,
			instructions,
			ingredients: ingredients.join("\n"),
		});
	}, [name]);

	return (
		<Modal
			open={isModalChangeOpen}
			onClose={() => dispatch(toggleModalChange())}
		>
			<Box sx={childStyles}>
				<Typography variant="title">Change Panel</Typography>
				<Grid mt="10px" container spacing={2}>
					<Grid item xs={3}>
						<TextField
							value={inputs.name}
							onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
							label="Name"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							value={inputs.imgSrc}
							onChange={(e) => setInputs({ ...inputs, imgSrc: e.target.value })}
							label="Image Link"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							value={String(inputs.preptime)}
							onChange={(e) =>
								setInputs({ ...inputs, preptime: +e.target.value })
							}
							type="number"
							label="Prep time (sec)"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							value={String(inputs.cooktime)}
							onChange={(e) =>
								setInputs({ ...inputs, cooktime: +e.target.value })
							}
							type="number"
							label="Cook time (sec)"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							value={String(inputs.calories)}
							onChange={(e) =>
								setInputs({ ...inputs, calories: +e.target.value })
							}
							type="number"
							label="Calories (kcal)"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							value={String(inputs.satfat)}
							onChange={(e) =>
								setInputs({ ...inputs, satfat: +e.target.value })
							}
							type="number"
							label="Saturated Fat (g)"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							value={String(inputs.fat)}
							onChange={(e) => setInputs({ ...inputs, fat: +e.target.value })}
							type="number"
							label="Total Fat (g)"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							value={String(inputs.carbs)}
							onChange={(e) => setInputs({ ...inputs, carbs: +e.target.value })}
							type="number"
							label="Carbohydrates (g)"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							value={String(inputs.fiber)}
							onChange={(e) => setInputs({ ...inputs, fiber: +e.target.value })}
							type="number"
							label="Dietary Fiber (g)"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							value={String(inputs.sugar)}
							onChange={(e) => setInputs({ ...inputs, sugar: +e.target.value })}
							type="number"
							label="Sugar Amount (g)"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							value={String(inputs.protein)}
							onChange={(e) =>
								setInputs({ ...inputs, protein: +e.target.value })
							}
							type="number"
							label="Protein Amount (g)"
						/>
					</Grid>
					<Grid item xs={12}>
						<Autocomplete
							multiple
							options={getTagOptions()}
							getOptionLabel={(option) => option}
							value={inputs.tags}
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
					<Grid item xs={6}>
						<TextField
							value={inputs.ingredients}
							onChange={(e) =>
								setInputs({ ...inputs, ingredients: e.target.value })
							}
							fullWidth
							multiline
							helperText="Press Enter to add next ingredient"
							label="Ingredients"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							value={inputs.instructions}
							onChange={(e) =>
								setInputs({ ...inputs, instructions: e.target.value })
							}
							fullWidth
							multiline
							helperText="Press Enter to add next instruction"
							label="Instructions"
						/>
					</Grid>
				</Grid>

				<FlexBetween gap="40px">
					<Button
						disabled={
							inputs.tags === tags &&
							inputs.name === name &&
							inputs.imgSrc === imgSrc &&
							inputs.preptime === preptime &&
							inputs.cooktime === cooktime &&
							inputs.calories === calories &&
							inputs.fat === fat &&
							inputs.satfat === satfat &&
							inputs.carbs === carbs &&
							inputs.fiber === fiber &&
							inputs.sugar === sugar &&
							inputs.protein === protein
						}
						sx={{ mt: "20px" }}
						fullWidth
						variant="contained"
						onClick={handleSaveChanges}
					>
						Save
					</Button>

					<Button
						sx={{ mt: "20px" }}
						fullWidth
						variant="contained"
						onClick={() => dispatch(toggleModalChange())}
					>
						Cancel
					</Button>
				</FlexBetween>
			</Box>
		</Modal>
	);
};

export default ModalChange;

const childStyles = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "70%",
	height: "80vh",
	overflowY: "scroll",
	bgcolor: "#ffffff",
	borderRadius: "12px",
	p: 4,
};
