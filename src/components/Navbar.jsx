import React, { useState, useEffect } from "react";
import { Home, User, LaptopMinimal, FileText, Menu, X, Github } from "lucide-react";

function Navbar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    const [activeTab, setActiveTab] = useState("#home");

    useEffect(() => {
        function scrollHandler() {
            if (window.scrollY >= 20) {
                updateNavbar(true);
            } else {
                updateNavbar(false);
            }

            // Very simple scroll spy to highlight the corresponding tab
            const sections = ["#home", "#about", "#project", "#resume"];
            for (const section of sections.reverse()) {
                const el = document.querySelector(section);
                if (el && window.scrollY >= el.offsetTop - 150) {
                    setActiveTab(section);
                    break;
                }
            }
        }

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    const handleNavClick = (hash) => {
        updateExpanded(false);
        setActiveTab(hash);
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${navColour ? "glass shadow-xl py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#home" className="text-2xl font-bold text-primary-purple tracking-widest font-serif">
                            Akr.
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <NavItem href="#home" icon={<Home size={18} />} text="Home" currentPath={activeTab} onClick={handleNavClick} />
                        <NavItem href="#about" icon={<User size={18} />} text="About" currentPath={activeTab} onClick={handleNavClick} />
                        <NavItem href="#project" icon={<LaptopMinimal size={18} />} text="Projects" currentPath={activeTab} onClick={handleNavClick} />
                        <NavItem href="#resume" icon={<FileText size={18} />} text="Resume" currentPath={activeTab} onClick={handleNavClick} />

                        {/* GitHub Button embedded */}
                        <a
                            href="https://github.com/AkankshaRaj07/Portfolio"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-4 bg-primary-purple/20 hover:bg-primary-purple/40 border border-primary-purple/50 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300"
                        >
                            <Github size={18} />
                            <span className="font-semibold text-sm">Star</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => updateExpanded(!expand)}
                            className="text-white hover:text-primary-purple p-2 focus:outline-none"
                        >
                            {expand ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${expand ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass mt-2 border-t border-b-0 border-r-0 border-l-0 border-white/10">
                    <MobileNavItem href="#home" icon={<Home size={18} />} text="Home" currentPath={activeTab} onClick={handleNavClick} />
                    <MobileNavItem href="#about" icon={<User size={18} />} text="About" currentPath={activeTab} onClick={handleNavClick} />
                    <MobileNavItem href="#project" icon={<LaptopMinimal size={18} />} text="Projects" currentPath={activeTab} onClick={handleNavClick} />
                    <MobileNavItem href="#resume" icon={<FileText size={18} />} text="Resume" currentPath={activeTab} onClick={handleNavClick} />
                </div>
            </div>
        </nav>
    );
}

// Subcomponents for cleaner nav items
const NavItem = ({ href, icon, text, currentPath, onClick }) => {
    const isActive = currentPath === href;
    return (
        <a
            href={href}
            onClick={() => onClick(href)}
            className={`flex items-center gap-2 px-1 py-2 text-sm font-medium transition-colors relative group
        ${isActive ? "text-primary-purple" : "text-gray-300 hover:text-white"}
      `}
        >
            {icon}
            {text}
            <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-primary-purple transition-transform duration-300 origin-left 
        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
        </a>
    );
};

const MobileNavItem = ({ href, icon, text, currentPath, onClick }) => {
    const isActive = currentPath === href;
    return (
        <a
            href={href}
            onClick={() => onClick(href)}
            className={`flex items-center gap-3 w-full px-3 py-4 text-base font-medium rounded-md
        ${isActive ? "bg-primary-purple/20 text-primary-purple" : "text-gray-300 hover:bg-white/5 hover:text-white"}
      `}
        >
            {icon}
            {text}
        </a>
    );
};

export default Navbar;
