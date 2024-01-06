import { buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";
import Auth from "@/containers/Auth";
import UserDropdown from "./UserDropdown";
import useUserStore from "@/features/auth/useUserStore";
import TicketRequest from "./TicketRequest";
import NavbarMobileDropdown from "./NavbarMobileDropdown";

const NavbarButtons = () => {
  const token = useUserStore((state) => state.token);
  return (
    <div className="flex justify-center items-center gap-3 lg:gap-5">
      {token ? (
        <>
          <UserDropdown />
          <TicketRequest />
        </>
      ) : (
        <>
          <Auth />
          <Link
            to="/#subscribe"
            className={buttonVariants({ className: "uppercase max-[375px]:hidden font-title-font text-lg" })}
          >
            subscribe
          </Link>
        </>
      )}
      <NavbarMobileDropdown />
    </div>
  );
};

export default NavbarButtons;
