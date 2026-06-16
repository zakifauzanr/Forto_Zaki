import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  Home,
  Briefcase,
  Award,
  LayoutGrid,
  Menu,
  X,
} from "lucide-react";
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
          <Home className="w-5 h-5" />

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
          <Briefcase className="w-5 h-5" />

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
          <Award className="w-5 h-5" />

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
          offset={-150}
          duration={500}
          onClick={() => setActive("project")}
          className={`${navItemBase} ${
            active === "project" ? navItemActive : navItemInactive
          }`}
        >
          <LayoutGrid className="w-5 h-5" />

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
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          {navList}
        </Collapse>
      </Navbar>
  );
}