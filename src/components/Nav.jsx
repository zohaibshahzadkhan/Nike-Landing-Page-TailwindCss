import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header className="padding-x py-8 w-full absolute max-lg:relative z-10">
      <nav className="">
        <div className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
          </a>
          <ul className="flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg texts-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block"
            onClick={() => {
              setToggleNav(!toggleNav);
            }}
          >
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </div>
        </div>

        {toggleNav && (
          <div className="hidden max-lg:block py-6 border-b-2 mt-8 border-slate-gray">
            <ul className="flex flex-col space-y-3 justify-center font-medium">
              {navLinks.map((link) => (
                <li key={link.label} className="py-1 "> 
                  <a
                    href={link.href}
                    className="font-montserrat leading-normal text-lg texts-slate-gray"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
