import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import CssBaseline from "@mui/material/CssBaseline";

const Search = () => {
  return (
    <form>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <CssBaseline />
        <Box m={2}>
          <TextField
            id="outlined-basic"
            label="Search Twitter..."
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>

        <Button variant="contained" color="primary" size="small">
          Search
        </Button>
      </Box>
    </form>
  );
};

export default Search;
