import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core";

// import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography>
          <Link color="inherit">Home</Link>
        </Typography>
        <Typography>
          <Link color="inherit">Search</Link>
        </Typography>
        <Typography>
          <Link color="inherit">Random</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
