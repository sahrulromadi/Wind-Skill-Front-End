import React, { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  // usestate untuk menu
  const [showMenu, setShow] = useState(false);
  const menuClick = () => {
    setShow(!showMenu);
  };

  let menuActive = () => {
    if (showMenu) {
      return "left-0";
    } else {
      return "-left-full";
    }
  };

  // useeffect untuk navbar ketika di scroll
  const [showBg, setShowBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    });
  }, []);

  let scrollActive = showBg ? "bg-white shadow-md shadow-sky-300" : " ";

  return (
    <nav className={`navbar fixed w-full py-4 z-10 transition-all ${scrollActive}`}>
      <div className="container mx-auto px-6">
        <div className="navbar-box flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <img
              src="../../public/assets/img/logo.png"
              alt="logo"
              className="w-16"
            />
          </div>
          {/* Content */}
          <ul
            className={`flex gap-6 fixed ${menuActive()} top-1/2 -translate-y-1/2 flex-col ps-4 pe-6 py-6 rounded shadow-lg shadow-slate-300 bg-white font-bold text-sky-500 transition-all bg-opacity-95 md:static md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:flex-row md:text-black md:shadow-none md:p-0 md:m-0 lg:gap-14`}
          >
            <li className="font-medium opacity-65 hover:text-black md:hover:text-sky-500 flex items-center gap-2">
              <i className="ri-home-2-line text-2xl block md:hidden"></i>
              <a href="#">Beranda</a>
            </li>
            <li className="font-medium opacity-65 hover:text-black md:hover:text-sky-500 flex items-center gap-2">
              <i className="ri-information-line text-2xl block md:hidden"></i>
              <a href="#">Tentang Kami</a>
            </li>
            <li className="font-medium opacity-65 hover:text-black md:hover:text-sky-500 flex items-center gap-2">
              <i className="ri-settings-line text-2xl block md:hidden"></i>
              <a href="#">Layanan</a>
            </li>
            <li className="font-medium opacity-65 hover:text-black md:hover:text-sky-500 flex items-center gap-2">
              <i className="ri-image-line text-2xl block md:hidden"></i>
              <a href="#">Kontak</a>
            </li>
          </ul>
          {/* Login */}
          <div className="login bg-sky-500 border border-sky-500 text-white px-5 py-2 rounded-full ml-auto md:ml-0 hover:bg-white hover:text-sky-500 hover:border hover:border-sky-500">
            <a href="#">Login</a>
          </div>
          <i
            className="ri-menu-3-line text-2xl block ml-6 md:hidden"
            onClick={menuClick}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
