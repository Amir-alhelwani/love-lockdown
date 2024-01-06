import { navLinks } from "@/constants/navbar";
import { NavLink } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <div className="hidden md:flex justify-center items-center gap-5 lg:gap-8 md:text-lg lg:text-xl">
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          className={({ isActive }) =>
            `${
              isActive ? "text-electric-indigo" : "text-black"
            } capitalize font-semibold font-text-font`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavbarLinks;
