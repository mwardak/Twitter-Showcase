import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import CssBaseline from "@mui/material/CssBaseline";
import { NavLink } from "react-router-dom";

// import Grid from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Box
          mr={45}
          sx={{
            flexGrow: 1,
            alignItems: "right",
          }}
        >
          <TwitterIcon />
        </Box>
        <Typography variant="h5">
          <Box m={1}>
            <Link color="inherit">Home</Link>
          </Box>
        </Typography>

        <Typography variant="h5">
          <Box m={1}>
            <Link color="inherit">Search</Link>
          </Box>
        </Typography>

        <Typography variant="h5">
          <Box m={1}>
            <Link color="inherit">Random</Link>
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
