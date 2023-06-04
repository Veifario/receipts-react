import React, { Fragment } from "react";
import { Container, FlexBetween } from "../../ui";
import { Divider, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { FacebookOutlined } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
	return (
		<Fragment>
			<Container>
				<FlexBetween paddingY="35px">
					<Link to="/">
						<Typography variant="logo">Foodie</Typography>
					</Link>

					<FlexBetween gap="50px">
						<Link to="/">
							<Typography variant="link">Home</Typography>
						</Link>
						<Link to="/recipes">
							<Typography variant="link">Recipes</Typography>
						</Link>
						<Link to="/admin">
							<Typography variant="link">Admin</Typography>
						</Link>
					</FlexBetween>

					<FlexBetween gap="30px">
						<FacebookOutlined />
						<TwitterIcon />
						<InstagramIcon />
					</FlexBetween>
				</FlexBetween>
			</Container>
			<Divider />
		</Fragment>
	);
};

export default Header;
