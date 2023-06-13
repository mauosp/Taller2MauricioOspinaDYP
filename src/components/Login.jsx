import PlayerInput from "./PlayersConfig";
import UsersContext from "../app/LogicGame";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { Users, handlerUsers } = useContext(UsersContext);

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        {Users.map((user) => (
          <PlayerInput key={user.id} number={user.id} />
        ))}
        <NavLink to={"/game"}>
          <div></div>
          <Button variant="contained" onClick={handlerUsers} style={{ background: '#000000' }}>
            Login
          </Button>
        </NavLink>
      </Box>
    </div>
  );
};

export default Login;
