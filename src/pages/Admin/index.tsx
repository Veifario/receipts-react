import React from "react";
import { Box } from "@mui/material";
import { AddPanel, ModalChange, Table } from "./components";
import { useAppSelector } from "../../redux/hooks";
import { getSpecificRecipe } from "../../redux/selectors";

const Admin = () => {
	const {
		id,
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
		ingredients,
	}: any = useAppSelector((state) => getSpecificRecipe(state));

	return (
		<Box>
			<Table />
			<AddPanel />
			<ModalChange
				id={id}
				tags={tags}
				name={name}
				imgSrc={imgSrc}
				preptime={preptime}
				cooktime={cooktime}
				calories={calories}
				fat={fat}
				satfat={satfat}
				carbs={carbs}
				fiber={fiber}
				sugar={sugar}
				protein={protein}
				instructions={instructions}
				ingredients={ingredients}
			/>
		</Box>
	);
};

export default Admin;
