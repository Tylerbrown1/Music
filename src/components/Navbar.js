import React, { useState } from "react";
import { Link } from "react-router-dom";
import RightMenuSlider from "@material-ui/core/Drawer";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import Login from "../Login/Login";
import {
	AppBar,
	Toolbar,
	ListItem,
	ListItemText,
	IconButton,
	Avatar,
	Divider,
	List,
	Typography,
	Box,
	ListItemIcon,
	Button,
} from "@material-ui/core";
import { Home, ContactMail, Apps, Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

// CSS Styles
const myStyles = makeStyles((theme) => ({
	menuSlider: {
		width: 250,
		background: "black",
		height: "100%",
	},
	avatar: {
		display: "block",
		margin: "0.5rem auto",
		width: theme.spacing(16),
		height: theme.spacing(16),
	},
	listItem: {
		color: "white",
	},
	buttonDiv: {
		display: "flex",
		marginInlineStart: "auto",
	},
	signUpButton: {
		backgroundColor: "#FFFFFF",
		paddingRight: "12px",
		paddingLeft: "12px",
		borderBottomLeftRadius: "30px",
		borderTopLeftRadius: "30px",
		borderBottomRightRadius: "30px",
		borderTopRightRadius: "30px",
		paddingBottom: "10px",
		paddingTop: "10px",
		lineHeight: "16px",
		fontWeight: 500,
		fontSize: "14px",
		cursor: "pointer",
		transitionProperty: "background",
		WebkitAppearance: "none",
		boxShadow: "none",
		borderStyle: "none",
		marginLeft: "1rem",
	},
	logInButton: {
		backgroundColor: "#000",
		color: "#FFFFFF",
		paddingRight: "12px",
		paddingLeft: "12px",
		borderBottomLeftRadius: "30px",
		borderTopLeftRadius: "30px",
		borderBottomRightRadius: "30px",
		borderTopRightRadius: "30px",
		paddingBottom: "10px",
		paddingTop: "10px",
		lineHeight: "16px",
		fontWeight: 500,
		fontSize: "14px",
		cursor: "pointer",
		transitionProperty: "background",
		WebkitAppearance: "none",
		boxShadow: "none",
		borderStyle: "none",
	},
}));

const menuItems = [
	{
		listIcon: <Home />,
		listText: "Home",
		listPath: "/",
	},
	{
		listIcon: <DriveEtaIcon />,
		listText: "Cars",
		listPath: "/carSelection",
	},
	{
		listIcon: <Apps />,
		listText: "Services",
	},
	{
		listIcon: <ContactMail />,
		listText: "Contact",
	},
];

const Navbar = () => {
	const [state, setState] = useState({
		right: false,
	});
	const togSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};
	const classes = myStyles();
	const sideList = (slider) => (
		<Box
			className={classes.menuSlider}
			component="div"
			onClose={togSlider("right", false)}
		>
			{" "}
			<Button style={{ color: "white" }} onClick={togSlider("right", false)}>
				X
			</Button>
			<Avatar className={classes.avatar} src="/G-wagon.png" alt="Avatar" />
			<Divider />
			<List>
				{menuItems.map((lsItem, key) => (
					<ListItem button key={key} component={Link} to={lsItem.listPath}>
						<ListItemIcon className={classes.listItem}>
							{lsItem.listIcon}
						</ListItemIcon>
						<ListItemText className={classes.listItem}>
							{lsItem.listText}
						</ListItemText>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<Box component="nav">
				<AppBar style={{ backgroundColor: "black" }}>
					<Toolbar>
						<IconButton onClick={togSlider("right", true)}>
							<Menu style={{ color: "white" }}></Menu>
						</IconButton>
						<Typography variant="h5" style={{ color: "white" }}>
							LuxCar
						</Typography>

						<RightMenuSlider
							anchor="left"
							open={state.right}
							onClose={togSlider("right", false)}
						>
							{sideList("right")}
						</RightMenuSlider>
						<div className={classes.buttonDiv}>
							<Button
								component={Link}
								to="/login"
								className={classes.logInButton}
							>
								Log In
							</Button>
							<Button
								component={Link}
								to="/signup"
								className={classes.signUpButton}
							>
								Sign Up
							</Button>
						</div>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
};

export default Navbar;
