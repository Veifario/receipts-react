import React from "react";
import { FlexBetween } from "../../../../ui";
import { Box, Divider, Typography } from "@mui/material";
import testImg from "../../../../assets/images/testFood.png";
import { useAppSelector } from "../../../../redux/hooks";
import { getSpecificRecipe } from "../../../../redux/selectors";

const Info = () => {
	const { calories, fat, satfat, carbs, fiber, sugar, protein, imgSrc }: any =
		useAppSelector((state) => getSpecificRecipe(state));

	return (
		<FlexBetween gap="35px" height="600px">
			<img
				width="70%"
				style={{ height: "600px", borderRadius: "30px", objectFit: "cover" }}
				src={imgSrc}
				alt=""
			/>

			<Box
				width="30%"
				height="100%"
				p="35px"
				sx={{ background: "#E7FAFE", borderRadius: "30px" }}
			>
				<Typography variant="title">Nutrition Information</Typography>
				<FlexBetween mt="30px" pb="10px">
					<Typography variant="small">Calories</Typography>
					<Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
						{calories} kcal
					</Typography>
				</FlexBetween>
				<Divider />

				<FlexBetween pb="10px" mt="20px">
					<Typography variant="small">Total Fat</Typography>
					<Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
						{fat} g
					</Typography>
				</FlexBetween>
				<Divider />

				<FlexBetween pb="10px" mt="20px">
					<Typography variant="small">Saturated Fat</Typography>
					<Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
						{satfat} g
					</Typography>
				</FlexBetween>
				<Divider />

				<FlexBetween pb="10px" mt="20px">
					<Typography variant="small">Carbohydrates</Typography>
					<Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
						{carbs} g
					</Typography>
				</FlexBetween>
				<Divider />

				<FlexBetween pb="10px" mt="20px">
					<Typography variant="small">Dietary Fiber</Typography>
					<Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
						{fiber} g
					</Typography>
				</FlexBetween>
				<Divider />

				<FlexBetween pb="10px" mt="20px">
					<Typography variant="small">Sugar Amount</Typography>
					<Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
						{sugar} g
					</Typography>
				</FlexBetween>
				<Divider />

				<FlexBetween pb="10px" mt="20px">
					<Typography variant="small">Protein Amount</Typography>
					<Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
						{protein} g
					</Typography>
				</FlexBetween>
				<Divider />
			</Box>
		</FlexBetween>
	);
};

export default Info;
