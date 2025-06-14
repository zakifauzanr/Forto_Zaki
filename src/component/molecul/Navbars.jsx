import React from "react";
import {
  Navbar,
  MobileNav,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbars() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Home", to: "/", isRoute: true },
    { label: "Projects", to: "Project", offset: -50 },
    { label: "Awards", to: "Award", offset: -70 },
  ];

  const navList = (
    <ul className="flex flex-col lg:flex-row gap-4 items-center">
      {navItems.map(({ label, to, isRoute = false, offset = -60 }, idx) => (
        <Typography
          key={idx}
          as="li"
          variant="small"
          className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          {isRoute ? (
            <Link to={to}>{label}</Link>
          ) : (
            <ScrollLink
              to={to}
              smooth={true}
              duration={500}
              offset={offset}
              spy={true}
            >
              {label}
            </ScrollLink>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-none rounded-none shadow-md px-4 py-3 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="text-xl font-bold tracking-wide">
            Zakifr
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="lg:hidden text-white"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} className="bg-black text-white px-4">
        {navList}
      </MobileNav>
    </Navbar>
  );
}