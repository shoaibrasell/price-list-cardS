// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-purple-400 px-4">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? 
            <XMarkIcon className="h-6 w-6 text-cyan-500" />
           : 
            <Bars3Icon className="h-6 w-6 text-cyan-500" />
          }
        </span>
      </div>
      <ul className={`md:flex absolute  md:static duration-500 pl-8 pb-4 py-2 bg-purple-400 ${open ? 'top6' : '-top-36'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
