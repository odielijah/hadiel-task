import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Enrolment from "./components/Enrolment";

export default function App() {
  const [activeTab, setActiveTab] = useState("enrolment");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F5F7FA] overflow-hidden">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header activeTab={activeTab} setIsOpen={setIsSidebarOpen} />
        <main>{activeTab === "enrolment" && <Enrolment />}</main>
      </div>
    </div>
  );
}
