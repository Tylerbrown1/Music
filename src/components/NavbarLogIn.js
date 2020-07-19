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
  List,
  Typography,
  Box,
  ListItemIcon,
  Button,
} from "@material-ui/core";
import { Home, Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../Login/base";

import { useStateValue } from "../StateProvider";

// CSS Styles
const myStyles = makeStyles((theme) => ({
  menuSlider: {
    width: 250,
    background: "#DEE2EC",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "1rem auto",
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  listItem: {
    color: "#8c756A",
  },
  buttonDiv: {
    display: "flex",
    marginInlineStart: "auto",
    color: "#8c756A",
  },
  LogOutButton: {
    backgroundColor: "#8c756A",
    color: "white",
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
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/home",
  },
  {
    listIcon: <DriveEtaIcon />,
    listText: "Rides",
    listPath: "/rides",
  },
];

const NavbarTwo = (props) => {
  const [{ order }, dispatch] = useStateValue();
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
      <Button style={{ color: "#8c756A" }} onClick={togSlider("right", false)}>
        X
      </Button>
      <Avatar className={classes.avatar} src="/pink.jpg" alt="Avatar" />
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
    <AppBar position="static" style={{ backgroundColor: "#DEE2EC" }}>
      <Toolbar>
        <IconButton onClick={togSlider("right", true)}>
          <Menu style={{ color: "#8c756A" }}></Menu>
        </IconButton>
        <Typography variant="h5" style={{ color: "#8c756A" }}>
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
          <div style={{ paddingTop: ".3rem" }}>
            <DriveEtaIcon></DriveEtaIcon>
            <span>{order?.length}</span>
          </div>
          <Button
            onClick={() => firebase.auth().signOut()}
            className={classes.LogOutButton}
          >
            Log Out
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarTwo;
