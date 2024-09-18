import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 w-full absolute z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg texts-slate-gray"
              >{link.label}</a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
      
    </header>
  );
};

export default Nav;
