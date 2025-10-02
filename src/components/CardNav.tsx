import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../contexts/ThemeContext";

interface NavItem {
  href: string;
  label: string;
  shortLabel?: string;
  icon?: string;
}

const CardNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems: NavItem[] = [
    { href: "#about", label: "About", shortLabel: "About" },
    { href: "#education", label: "Education", shortLabel: "Edu" },
    { href: "#internships", label: "Internships", shortLabel: "Work" },
    { href: "#research", label: "Research", shortLabel: "Research" },
    { href: "#contact", label: "Contact", shortLabel: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active item based on scroll position
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveItem(href);
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveItem("");
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-full max-w-7xl px-4 ${
        isScrolled ? "scale-100 opacity-100" : "scale-95 opacity-90"
      }`}
      style={{ 
        marginTop: 'max(env(safe-area-inset-top, 0px), 8px)',
        paddingTop: 'env(safe-area-inset-top, 0px)'
      }}
    >
      <div className="relative">
        {/* Desktop Navigation - Hidden on mobile */}
        <div
          className={`hidden lg:flex items-center justify-around px-3 py-3 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 ${
            isDark
              ? "bg-gray-800/90 border-gray-700/50 shadow-gray-900/20"
              : "bg-white/90 border-gray-200/50 shadow-gray-200/20"
          }`}
        >
          {/* Logo/Brand */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 hover:scale-105"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="font-semibold text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Keshav
            </span>
          </button>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeItem === item.href
                    ? isDark
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : isDark
                    ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                }`}
              >
                {item.label}
                {activeItem === item.href && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="border-l border-gray-300/20 dark:border-gray-600/20 pl-2">
            <DarkModeSwitch
              checked={isDark}
              onChange={toggleTheme}
              size={20}
              moonColor="#60A5FA"
              sunColor="#F59E0B"
            />
          </div>
        </div>

        {/* Tablet Navigation - Hidden on mobile and desktop */}
        <div
          className={`hidden md:flex lg:hidden items-center justify-around px-2 py-2 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 ${
            isDark
              ? "bg-gray-800/90 border-gray-700/50 shadow-gray-900/20"
              : "bg-white/90 border-gray-200/50 shadow-gray-200/20"
          }`}
        >
          {/* Logo/Brand */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-2 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">K</span>
            </div>
            <span className="font-semibold text-xs bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Keshav
            </span>
          </button>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeItem === item.href
                    ? isDark
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : isDark
                    ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                }`}
              >
                {item.shortLabel || item.label}
                {activeItem === item.href && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="border-l border-gray-300/20 dark:border-gray-600/20 pl-1">
            <DarkModeSwitch
              checked={isDark}
              onChange={toggleTheme}
              size={16}
              moonColor="#60A5FA"
              sunColor="#F59E0B"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Header */}
          <div
            className={`flex items-center justify-around px-4 py-3 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 ${
              isDark
                ? "bg-gray-800/90 border-gray-700/50 shadow-gray-900/20"
                : "bg-white/90 border-gray-200/50 shadow-gray-200/20"
            }`}
          >
            {/* Logo/Brand */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-semibold text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Keshav
              </span>
            </button>

            {/* Mobile Menu Toggle & Theme */}
            <div className="flex items-center gap-2">
              <DarkModeSwitch
                checked={isDark}
                onChange={toggleTheme}
                size={18}
                moonColor="#60A5FA"
                sunColor="#F59E0B"
              />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  isDark
                    ? "bg-gray-700/50 hover:bg-gray-600/50 text-white"
                    : "bg-gray-100/50 hover:bg-gray-200/50 text-black"
                }`}
              >
                <div className="w-4 h-4 flex flex-col justify-center items-center">
                  <div
                    className={`w-3 h-0.5 transition-all duration-200 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-0.5"
                    } ${isDark ? "bg-white" : "bg-black"}`}
                  />
                  <div
                    className={`w-3 h-0.5 transition-all duration-200 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    } ${isDark ? "bg-white" : "bg-black"}`}
                  />
                  <div
                    className={`w-3 h-0.5 transition-all duration-200 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-0.5"
                    } ${isDark ? "bg-white" : "bg-black"}`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div
            className={`mt-3 transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`flex flex-col gap-2 p-3 rounded-2xl shadow-lg backdrop-blur-md border transition-all duration-300 ${
                isDark
                  ? "bg-gray-800/90 border-gray-700/50 shadow-gray-900/20"
                  : "bg-white/90 border-gray-200/50 shadow-gray-200/20"
              }`}
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center justify-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    activeItem === item.href
                      ? isDark
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                        : "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                  }`}
                >
                  {item.label}
                  {activeItem === item.href && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CardNav;
