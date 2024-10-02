import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar fixed w-full py-4">
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
          <ul className="flex lg:gap-14 md:static md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:flex-row md:text-black md:shadow-none md:p-0 md:m-0 gap-8 fixed left-0 top-1/2 -translate-y-1/2 flex-col p-8 rounded shadow-lg shadow-slate-300 bg-sky-500 font-bold text-white">
            <li className="font-medium opacity-65 hover:text-black md:hover:text-sky-500">
              <a href="http://">Beranda</a>
            </li>
            <li className="font-medium opacity-65 hover:text-black md:hover:text-sky-500">
              <a href="http://">Tentang Kami</a>
            </li>
            <li className="font-medium opacity-65 hover:text-black md:hover:text-sky-500">
              <a href="http://">Layanan</a>
            </li>
            <li className="font-medium opacity-65 hover:text-black md:hover:text-sky-500">
              <a href="http://">Kontak</a>
            </li>
          </ul>
          {/* Login */}
          <div className="login bg-sky-500 border border-sky-500 text-white px-5 py-2 rounded-full ml-auto hover:bg-white hover:text-sky-500 hover:border hover:border-sky-500">
            <a href="http://">Login</a>
          </div>
          <i className="ri-menu-3-line text-2xl block ml-6 md:hidden"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
