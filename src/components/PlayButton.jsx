/** FRONT TO GET CARDS SECTION AND CONTROL OF GAMES*/

import Button from "@mui/material/Button";
import PlayerDeck from "./PlayersDeck";
import UsersContext from "../app/LogicGame";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const PlayButton = () => {
  const { handlerCards, count } = useContext(UsersContext);
  return (
    <div>
      <NavLink to={count > 16 ? "/gameover" : "/game"}>
        <center>
          <Button variant="contained" onClick={handlerCards} style={{ background: '#808080', justifyContent: 'center' }} size="large">
            Cards
          </Button>
        </center>
      </NavLink>
      <PlayerDeck></PlayerDeck>
    </div>
  )
}

export default PlayButton