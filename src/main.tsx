import App from "@/App";
import "@/index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactQueryProvider from "./components/ReactQueryProvider";
import PersistLogin from "./components/PersistLogin";

createRoot(document.getElementById("root")!).render(
  <ReactQueryProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/*" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ReactQueryProvider>
);
