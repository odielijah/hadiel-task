import { menuItems } from "../data/sideBarMenu";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.svg";
import { Close } from "../assets/icons/Close";

export default function Sidebar({
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
}) {
  return (
    <>
      {/* Overlay to Darken background when sidebar is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <section
        id="sidebar"
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#2D767F] text-white flex flex-col transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:relative lg:translate-x-0 lg:w-60 lg:flex`}
      >
        <div id="logo" className="p-8 flex items-center justify-between">
          <img src={logo} alt="logo" className="w-[110px] h-auto" />

          <button onClick={() => setIsOpen(false)} className="lg:hidden p-1">
            <Close className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-4 py-6 flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className="relative w-full lato-regular cursor-pointer flex items-center gap-3 px-4 py-3 lg:py-2 rounded-lg transition-colors"
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-orange-400 rounded-lg"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <item.Icon className="relative z-10 w-5 h-5 lg:w-4 lg:h-4" />
              <span className="relative z-10 text-[15px] lg:text-[14px]">
                {item.name}
              </span>
            </button>
          ))}
        </nav>
      </section>
    </>
  );
}
