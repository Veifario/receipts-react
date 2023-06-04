import { Box, Typography } from "@mui/material";
import React from "react";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import { FlexBetween } from "../../../../ui";
import { useNavigate } from "react-router-dom";

interface cardProps {
	id: string;
	img: string;
	title: string;
	tags: any;
	cookTime: number;
}

const Card = ({ id, img, title, cookTime, tags }: cardProps) => {
	const navigate = useNavigate();

	const handleMore = () => {
		navigate(`/recipes/${id}`);
	};

	return (
		<Box
			p="15px"
			width="400px"
			minHeight="430px"
			sx={{
				position: "relative",
				display: "flex",
				flexDirection: "column",
				background:
					"linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%);",
				borderRadius: "30px",
				cursor: "pointer",
			}}
			onClick={handleMore}
		>
			<img
				src={img}
				alt="Recipe Image"
				loading="lazy"
				style={{
					borderRadius: "30px",
					objectFit: "cover",
					height: "200px",
					width: "100%",
				}}
			/>
			<Typography marginX="10px" mt="22px" variant="title">
				{title}
			</Typography>
			<Box
				display="flex"
				marginX="10px"
				mt="22px"
				gap="25px"
				sx={{ position: "absolute", bottom: 30 }}
			>
				<FlexBetween gap="10px">
					<TimerOutlinedIcon />
					<Typography variant="small">{cookTime / 60 + " Minutes"}</Typography>
				</FlexBetween>
				<FlexBetween gap="10px">
					<CookieOutlinedIcon />
					<Typography variant="small">
						{tags[0]}, {tags[1]}
					</Typography>
				</FlexBetween>
			</Box>
		</Box>
	);
};

export default Card;
