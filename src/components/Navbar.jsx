import React from "react";

import { navLinks } from "../constants/index"
// import { INavLink } from "../types/index"

const Navbar = () => {
    return (
        <header className="fixed inset-x-0 top-10 h-17 flex mx-auto w-5/6 justify-between center rounded-b-3xl text-center text-indigo-200 bg-opacity-90">
            <h1> Navbar </h1>
            <ul className="flex space-x-12 max-lg:hidden">
                {navLinks.map((link) => {
                    return(
                        <li key={link.label}>
                            <a href={link.href}>
                                {link.label}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </header>
    );
};

export default Navbar;
