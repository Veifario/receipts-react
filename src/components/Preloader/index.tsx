import { Box } from "@mui/system";
import React from "react";
import { HashLoader } from "react-spinners";

interface preloaderProps {
	loadingStatus: boolean;
}
const Preloader = ({ loadingStatus }: preloaderProps) => {
	const parentCss = {
		display: loadingStatus ? "block" : "none",
		position: "fixed",
		top: 0,
		left: 0,
		backgroundColor: "#E4E6F1",
		width: "100vw",
		height: "100vh",
	};
	const cssOverride = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
	};
	return (
		<Box sx={parentCss}>
			<HashLoader
				color="#0f7f6b"
				// @ts-ignore
				cssOverride={cssOverride}
				size={100}
			/>
		</Box>
	);
};

export default Preloader;
