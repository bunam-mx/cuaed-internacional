import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import './App.css'

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
  ]);
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
