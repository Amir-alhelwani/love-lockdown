import Layout from "@/Layout";
import Transition from "@/components/Transition";
import { AnimatePresence } from "framer-motion";
import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PersistLogin from "./components/PersistLogin";
import useAxiosPrivate from "./hooks/useAxiosPrivate";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const EscapeRooms = lazy(() => import("@/pages/EscapeRooms"));
const Tickets = lazy(() => import("@/pages/Tickets"));
const Blog = lazy(() => import("@/pages/Blog"));
const Profile = lazy(() => import("@/pages/Profile"));
const UserTicket = lazy(() => import("@/pages/UserTicket"));
const PersonalPreferences = lazy(() => import("@/pages/PersonalPreferences"));
const PartnerPreferences = lazy(() => import("@/pages/PartnerPreferences"));
const Article = lazy(() => import("@/pages/Article"));

const App = () => {
  const location = useLocation();
  useAxiosPrivate();
  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Transition Page={Home} />} />
            <Route
              path="/escape-rooms"
              element={<Transition Page={EscapeRooms} />}
            />
            <Route
              path="/escape-rooms/:id"
              element={<Transition Page={Tickets} />}
            />
            <Route path="/blog" element={<Transition Page={Blog} />} />
            <Route path="/blog/:id" element={<Transition Page={Article} />} />
            <Route
              path="/user/ticket"
              element={<Transition Page={UserTicket} />}
            />
            <Route path="/profile" element={<Transition Page={Profile} />} />
            <Route
              path="/user/preferences"
              element={<Transition Page={PersonalPreferences} />}
            />
            <Route
              path="/user/partner"
              element={<Transition Page={PartnerPreferences} />}
            />
            <Route path="*" element={<Transition Page={NotFound} />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
