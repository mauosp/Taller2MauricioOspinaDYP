import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import { UsersProvider } from "./app/LogicGame";
import CoreGame from "./screens/CoreGame";
import EndGame from "./screens/EndGame";

function App() {
  return (
    <BrowserRouter>
      <UsersProvider>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/game" element={<CoreGame />} />
          <Route path="/gameover" element={<EndGame />} />
        </Routes>
      </UsersProvider>
    </BrowserRouter>
  );
}

export default App;
