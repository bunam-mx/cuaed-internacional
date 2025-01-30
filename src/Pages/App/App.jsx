import { useRoutes, BrowserRouter } from "react-router-dom";
import HeaderBar from "../../Components/HeaderBar/HeaderBar";
import FooterBlock from "../../Components/FooterBlock/FooterBlock";
import Home from "../Home/Home";
import './App.css'

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> }
  ]);
};

function App() {
  return (
    <BrowserRouter>
      <HeaderBar />
      <AppRoutes />
      <FooterBlock />
    </BrowserRouter>
  )
}

export default App
