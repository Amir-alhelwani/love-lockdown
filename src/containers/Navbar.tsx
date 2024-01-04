import { Link } from "react-router-dom";
import NavbarLinks from "@/components/NavbarLinks";
import NavbarButtons from "@/components/NavbarButtons";

const Navbar = () => {
  return (
    <header className="fixed border-b border-black bg-papaya-whip top-0 left-0 w-full h-[--nav-height] z-30">
      <nav className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <Link to="/">
          <h1 className="text-lg sm:text-xl md:text-2xl">Dating Event</h1>
        </Link>
        <NavbarLinks />
        <NavbarButtons />
      </nav>
    </header>
  );
};

export default Navbar;
