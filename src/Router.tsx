import { Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav/Nav";
import Login from "./pages/Login/Login";
import Map from "./pages/Map/Map";
import Board from "./pages/Board/Board";
import LoginConfirmModal from "./components/Modal/LoginConfirmModal";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Nav />}>
        <Route index path="/" element={<Login />} />
        <Route index path="/map" element={<Map />} />
        <Route index path="/board" element={<Board />} />
        <Route index path="/confirm" element={<LoginConfirmModal />} />
      </Route>
    </Routes>
  );
};

export default Router;
