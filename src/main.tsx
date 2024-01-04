import App from "@/App";
import "@/index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactQueryProvider from "./components/ReactQueryProvider";



createRoot(document.getElementById("root")!).render(
  <ReactQueryProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ReactQueryProvider>
);
