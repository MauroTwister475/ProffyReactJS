import ReactDOM from 'react-dom/client';
import { Routes } from './Routes';
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)
