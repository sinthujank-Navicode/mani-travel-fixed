"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For the mobile menu
  const [langOpen, setLangOpen] = useState(false); // For the language dropdown
  const [selectedLang, setSelectedLang] = useState("EN"); // Default language

  const menuItems = [
    { name: "Home", link: "#" },
    { name: "About us", link: "#" },
    { name: "Services", link: "#" },
  ];

  // Language dropdown component
  const languageDropdown = (
    <div className="relative language-dropdown">
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="flex items-center text-sm cursor-pointer"
      >
        {selectedLang}
        <span
          className={`ml-1 transition-transform duration-200 ${
            langOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>
      {langOpen && (
        <div className="absolute left-0 mt-2 w-20 bg-white shadow-lg border rounded cursor-pointer z-50">
          {["EN", "TA"].map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setSelectedLang(lang);
                setLangOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".language-dropdown")) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className=" w-full z-50 flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-15 bg-white shadow-sm px-11 py-1 rounded-2xl">
        <div className="text-3xl mb-2 font-bold ">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold">
          {menuItems.map((item) => (
            <a key={item.name} href={item.link}>
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Language & Contact Button */}
      <div className="hidden md:flex items-center space-x-12 relative">
        <span className="bg-white shadow-sm px-5 py-[14px] rounded-2xl">
          {languageDropdown}
        </span>
        <button className="bg-white shadow-sm text-black px-9 py-[13px] rounded-2xl">
          Contact
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden bg-white py-2 px-3 ml-[9] rounded-sm"
        onClick={() => {
          setIsOpen(!isOpen);
          setLangOpen(false); // Close language dropdown when toggling menu
        }}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 space-y-4 z-50">
          {menuItems.map((item) => (
            <a key={item.name} href={item.link} className="hover:bg-black hover:text-white">
              {item.name}
            </a>
          ))}

          {/* Wrap dropdown in relative div for mobile */}
          <div className="relative">{languageDropdown}</div>

          <button className="bg-black text-white px-4 py-2 rounded-2xl">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
