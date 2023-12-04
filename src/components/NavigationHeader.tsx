import { type FC } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const NavigationHeader: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Box display="flex" flexDirection={"row"}>
          <Typography variant="h6">Carbon Certificates App</Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/certificates" color="inherit">Certificates</Button>
          <Button component={Link} to="/favorites" color="inherit">Favorites</Button>
        </Box>
        <IconButton component={Link} to="https://github.com/Silverium/mui-grid-with-favs" color="inherit">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationHeader;
