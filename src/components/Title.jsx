/** FRONT FOR TITLE IN PRINCIPAL PAGE */

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { TfiGame } from "react-icons/tfi";

const Title = () => {
  return (
    <Box>
      <AppBar position="static" style={{ background: '#000000' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <TfiGame />
          </IconButton>
          <Typography component="div">
            Deck of Cards Game
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Title