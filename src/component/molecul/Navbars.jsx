import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Link as Linkdom } from 'react-scroll';
 
export default function Navbars() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="cursor-pointer hover:text-blue-400 transition duration-200"
      >
        <Link to='/' className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="cursor-pointer hover:text-blue-400 transition duration-200"
        >
        <Linkdom 
          className="nav-link"
          to="Award"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Achievement
        </Linkdom>
      </Typography>
      <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="cursor-pointer hover:text-blue-400 transition duration-200"
        >
        <Linkdom
          className="nav-link"
          to="Project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Project
        </Linkdom>
      </Typography>
    </ul>
  );
 
  return (
      <Navbar className="sticky top-0 bg-black z-10 rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            className="text-xl lg:text-2xl font-bold tracking-wide"
          >
            <Link to='/'>
              Zakifr
            </Link>
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="mb-5 mr-2 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          {navList}
        </Collapse>
      </Navbar>
  );
}