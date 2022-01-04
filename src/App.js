import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home";
import TopBar from "./components/TopBar/TopBar";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useContext } from "react";
import { Context } from "./context/Context";
import Settings from "./pages/Settings/Settings";

function App() {
  const { user } = useContext(Context);
  return (
      <BrowserRouter>
        <TopBar></TopBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={user ? <Home /> : <Register />} />
          <Route path="login" element={user ? <Home /> : <Login />} />
          <Route path="write" element={user ? <Write /> : <Register />} />
          <Route path="settings" element={user ? <Settings /> : <Register />} />
          <Route path="post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
