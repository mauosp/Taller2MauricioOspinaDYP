/** SCREEN FOR FINAL GAME WITH POSIBLE WINNER */

import UsersContext from "../app/LogicGame";
import { useContext } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Results = () => {
  const { winner } = useContext(UsersContext);
  return (
    <div>
      {winner === "" ? (
        <Alert severity="warning">
          <AlertTitle>JUEGO TERMINADO</AlertTitle>
          <div>
            Ningún jugador ganó
          </div>
        </Alert>
      ) : (
        <Alert severity="success">
          <AlertTitle>JUEGO COMPLETADO</AlertTitle>
          <div>
            Jugador Ganador: <strong>{`${winner}`}</strong>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default Results;
