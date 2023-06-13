/** FRONT TO PLAYERS INPUT IN PRINCIPAL PAGE */

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const PlayerInput = ({ number }) => {
  return (
    <TextField
      defaultValue={number == 1 ? 'Player 1' : 'Player 2'}
      id={`${number}`}
      label={`Player ${number}`}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
};

export default PlayerInput;
