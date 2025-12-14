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
  const [active, setActive] = React.useState("home");

  const navItemBase =
  "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer";

  const navItemActive =
    "bg-blue-600 text-white shadow-lg";

  const navItemInactive =
    "text-gray-400 hover:text-white";

 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="flex items-center gap-3 bg-[#1c1c1c]/80 backdrop-blur-md p-2 rounded-full">
      
      {/* HOME */}
      <li>
        <Linkdom
          to="Hero"
          smooth
          offset={-100}
          duration={500}
          onClick={() => setActive("home")}
          className={`${navItemBase} ${
            active === "home" ? navItemActive : navItemInactive
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor">
            <path strokeWidth="2" d="M3 12l9-9 9 9v9a3 3 0 01-3 3h-12a3 3 0 01-3-3z" />
          </svg>

          {active === "home" && <span className="text-sm">Home</span>}
        </Linkdom>
      </li>

      {/* WORK */}
      <li>
        <Linkdom
          to="Work"
          smooth
          offset={-180}
          duration={500}
          onClick={() => setActive("work")}
          className={`${navItemBase} ${
            active === "work" ? navItemActive : navItemInactive
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor">
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6h6m-7 4h8m-9 4h10M4 6h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
            />
          </svg>

          {active === "work" && (
            <span className="text-sm">Work</span>
          )}
        </Linkdom>
      </li>

      {/* ACHIEVEMENT */}
      <li>
        <Linkdom
          to="Award"
          smooth
          offset={-200}
          duration={500}
          onClick={() => setActive("achievement")}
          className={`${navItemBase} ${
            active === "achievement" ? navItemActive : navItemInactive
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor">
            <path strokeWidth="2" d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
          </svg>

          {active === "achievement" && (
            <span className="text-sm">Achievement</span>
          )}
        </Linkdom>
      </li>

      {/* PROJECT */}
      <li>
        <Linkdom
          to="Project"
          smooth
          offset={20}
          duration={500}
          onClick={() => setActive("project")}
          className={`${navItemBase} ${
            active === "project" ? navItemActive : navItemInactive
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="18" height="14" rx="2" />
          </svg>

          {active === "project" && <span className="text-sm">Project</span>}
        </Linkdom>
      </li>

    </ul>
  );
 
  return (
      <Navbar className="sticky top-0 bg-black z-10 rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none">
        <div className="flex items-center justify-between">
          <Typography className="text-xl lg:text-2xl font-bold tracking-wide text-white">
            <Link to="/" className="hover:text-blue-500 transition">
              ZFR
            </Link>
          </Typography>
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
            {navList}
          </div>
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