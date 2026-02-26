import { ArrowRight } from "../assets/icons/ArrowRight";
import { ArrowDown } from "../assets/icons/ArrowDown";
import { Bell } from "../assets/icons/Bell";
import { Menu } from "../assets/icons/Menu";

export default function Header({ activeTab, setIsOpen }) {
  return (
    <header className="h-20 bg-white border-b lato-regular border-gray-100 flex items-center justify-between px-4 md:px-8 shrink-0 transition-all duration-300">
      {/* Left Side: Hamburger + Breadcrumbs */}
      <div className="flex items-center gap-3">
        {/* Hamburger Menu: Only visible below 1024px (lg) */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 -ml-2 lg:hidden text-gray-500 hover:bg-gray-50 rounded-md transition-colors"
          aria-label="Open Sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-1 text-[13px] md:text-[14px] text-gray-500">
          {/* Hide "Admin >" on very small screens to prevent overlap */}
          <span className="hidden sm:inline">Admin</span>
          <span className="hidden sm:inline text-gray-400">
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className="text-[#2D767F] font-semibold capitalize truncate max-w-[120px] sm:max-w-none">
            {activeTab}
          </span>
        </div>
      </div>

      {/* Right Side: Notifications + Profile */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* Notifications */}
        <div className="relative cursor-pointer group">
          <Bell className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
          <span className="absolute -top-1.5 -right-1 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] px-[4px] rounded-full flex items-center justify-center border-2 border-white">
            99
          </span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 md:gap-3 pl-4 border-l border-gray-100 md:border-none">
          <div className="hidden sm:block text-right">
            <p className="text-[14px] font-bold text-gray-800 leading-tight">
              Workforce
            </p>
            <p className="text-[12px] text-gray-400">Admin</p>
          </div>

          {/* Profile Circle / Dropdown */}
          <button className="w-8 h-8 md:w-9 md:h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <ArrowDown className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
