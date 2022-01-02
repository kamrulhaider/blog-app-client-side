import Home from "./pages/Home/Home";
import TopBar from "./components/TopBar/TopBar";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const user = true;
  return (
    <BrowserRouter>
      <TopBar></TopBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="login" element={user ? <Login /> : <Home />} />
        <Route path="write" element={user ? <Write /> : <Login />} />
        <Route path="setting" element={user ? <Settings /> : <Login />} />
        <Route path="post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
