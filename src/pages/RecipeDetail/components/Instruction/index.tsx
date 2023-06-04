import React from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { getSpecificRecipe } from "../../../../redux/selectors";
import { Box, Typography } from "@mui/material";

const Instruction = () => {
	const { instructions }: any = useAppSelector((state) =>
		getSpecificRecipe(state)
	);

	return (
		<Box mt="70px">
			<Typography mb="30px" variant="h3">
				Instructions
			</Typography>
			{instructions?.split("\r\n\r\n").map((e: any, i: number) => (
				<p style={{ marginTop: "15px" }} key={i}>
					<Typography variant="text">
						<b style={{ color: "#000000" }}>{i + 1}.</b> {e}
					</Typography>
				</p>
			))}
		</Box>
	);
};

export default Instruction;
