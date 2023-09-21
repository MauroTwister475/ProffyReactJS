import ReactDOM from 'react-dom/client';
import { Routes } from './Routes';
import { QueryClientProvider } from "react-query";
import { queryClinte } from "./api/useQuery"
import { BrowserRouter } from "react-router-dom";

import "./styles/main.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClinte}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </QueryClientProvider>
)
