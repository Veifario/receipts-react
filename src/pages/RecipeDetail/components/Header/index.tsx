import React, { Fragment } from "react";
import { Box, Divider, Typography } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import CookieIcon from "@mui/icons-material/Cookie";
import { FlexBetween } from "../../../../ui";
import { useAppSelector } from "../../../../redux/hooks";
import { getSpecificRecipe } from "../../../../redux/selectors";

const Header = () => {
	const { name, preptime, cooktime, tags }: any = useAppSelector((state) =>
		getSpecificRecipe(state)
	);

	return (
		<Fragment>
			<Typography mt="50px" variant="h2">
				{name}
			</Typography>
			<FlexBetween width="50%" my="50px">
				<Box display="flex" gap="20px" alignItems="center">
					<TimerIcon />
					<FlexBetween flexDirection="column" alignItems="flex-start" gap="8px">
						<Typography
							sx={{
								textTransform: "uppercase",
							}}
							variant="caption"
						>
							prep time
						</Typography>
						<Typography width="100%" variant="small">
							{preptime / 60} Minutes
						</Typography>
					</FlexBetween>
				</Box>
				<Divider orientation="vertical" flexItem />
				<Box display="flex" gap="20px" alignItems="center">
					<AvTimerIcon />
					<FlexBetween flexDirection="column" alignItems="flex-start" gap="8px">
						<Typography
							sx={{
								textTransform: "uppercase",
							}}
							variant="caption"
						>
							cook time
						</Typography>
						<Typography width="100%" variant="small">
							{cooktime / 60} Minutes
						</Typography>
					</FlexBetween>
				</Box>
				<Divider orientation="vertical" flexItem />
				<Box display="flex" gap="20px" alignItems="center">
					<CookieIcon />
					<FlexBetween flexDirection="column" alignItems="flex-start" gap="8px">
						<Typography
							sx={{
								textTransform: "uppercase",
							}}
							variant="caption"
						>
							tags
						</Typography>
						<Typography width="100%" variant="small">
							{tags?.map((tag: string, i: any) =>
								tags.length - 1 === i ? tag + "" : tag + ", "
							)}
						</Typography>
					</FlexBetween>
				</Box>
			</FlexBetween>
		</Fragment>
	);
};

export default Header;
