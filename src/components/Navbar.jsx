import React from "react";

import { hamburger } from "../assets/icons/index"

import { navLinks } from "../constants/index"
// import { INavLink } from "../types/index"

const Navbar = () => {
    return (
        <header className="navbar">
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

            <div className="hidden max-lg:block">
                <img src={hamburger} alt="hamburger" width={30} height={30} /> 
            </div> 
        </header>
    );
};

export default Navbar;
