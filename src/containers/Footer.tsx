import { buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/constants/navbar";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-black pt-10 md:pt-24">
      <div className="max-w-7xl pb-10 md:pb-20 px-4 mx-auto gap-16 flex justify-between items-start md:items-center flex-col md:flex-row">
        <div className="relative w-[175px]">
          <h2 className="text-6xl">Love Lock down</h2>
          <div
            style={{ transform: "rotateY(180deg)" }}
            className="absolute right-0 -z-1 top-1/4 translate-x-5"
          >
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="36.933 20.013 126.038 160.01"
              viewBox="36.933 20.013 126.038 160.01"
              height="100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <g>
                <path
                  className="fill-[#D88196]"
                  d="M123.8 164.5c-36.6-34.2-60.6-74.8-68.9-117-1.2-5.8-2-11.9 0-17.6 4.5-12.9 13.5-11.7 22.6-4.8 12.3 9.4 16.1 31.5 17.6 43.6-1.5-12.4 35.5-37.9 51.2-41 20.3-4 16.5 10.6 16.2 23.9-.3 16.7-5.4 33.4-13.2 49.1-12.5 25.3-31.8 48.6-51 71.8"
                  fill="#fcea10"
                  data-color="1"
                ></path>
                <path
                  d="M125.3 167.7c-26.1-20.6-49.2-45.4-65.8-74.3C51.8 80 44.7 65.2 41.1 50.1c-1.4-5.9-1.7-18 6.1-19.9 5.6-1.4 12.5 3.1 16.5 6.7C74.3 46.6 78.9 62 82.3 75.5c.5 2.1 3.6 1.2 3.2-.9-.9-4.2 2.5-8.8 4.8-11.9 3.7-5 8.3-9.3 13-13.4 8.7-7.5 20.2-16.6 32.2-17.5 6.3-.5 9.4 2.9 10.5 8.9 1.2 6.3 1.5 13.1 1.7 19.5.7 20.6-5.5 40.8-14.3 59.3-9.7 20.5-22.5 39.3-35.2 58.1-1.2 1.8 1.7 3.4 2.9 1.7 24-35.6 52.3-75.8 49.8-120.9-.4-6.6-.4-13.9-2.1-20.4-1.3-5.1-4.6-8.8-10-9.4-12.6-1.4-25.5 8.5-34.7 15.8C98 49.3 92.2 54.7 87.4 61c-3 4-6.3 9.2-5.2 14.5l3.2-.9c-3.3-13.1-7.7-27.1-16.8-37.4-6.7-7.7-22.9-17-29.4-4.1-4.1 8.1-1.9 16.9.8 25.1 2.6 7.9 5.8 15.7 9.4 23.2 7.6 15.6 17 30.2 27.8 43.7 13.4 16.8 28.9 31.7 45.8 45 1.6 1.3 4-1.1 2.3-2.4z"
                  fill="#1d1d1b"
                  data-color="2"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex justify-start md:justify-between items-start gap-5 flex-col md:flex-row w-full md:w-8/12">
          <div>
            <h3 className="text-3xl mb-4">Menu</h3>
            {navLinks.map((link) => (
              <div className="text-xl my-2">
                <NavLink
                  key={link.id}
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-electric-indigo" : "text-black"
                    } capitalize font-semibold`
                  }
                >
                  {link.label}
                </NavLink>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-3xl mb-4">Contact Us</h3>
            <p className="text-xl my-2">info@mysite.com</p>
            <p className="text-xl my-2">+123-456-7890</p>
          </div>
          <div>
            <h3 className="text-3xl mb-4">Follow Us</h3>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex-1 w-full">
                <Link className={buttonVariants({ size: "full" })} to="/">
                  TikTok
                </Link>
              </div>
              <div className="flex-1 flex justify-center items-center gap-2">
                <Link className={buttonVariants({ size: "full" })} to="/">
                  Facebook
                </Link>
                <Link className={buttonVariants({ size: "full" })} to="/">
                  Instagram
                </Link>
              </div>
              <div className="flex-1 w-full">
                <Link className={buttonVariants({ size: "full" })} to="/">
                  YouTube
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex text-center py-2 mt-12">
        <p className="text-papaya-whip w-full text-center">
          © {new Date().getFullYear()} by Love Lockdown. Powered and secured by
          Wix
        </p>
      </div>
    </footer>
  );
};

export default Footer;
