import {
  X,
  Home,
  PieChart,
  Users,
  FileText,
  MessageSquare,
  LogOut,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home" },
  { icon: PieChart, label: "Analytics" },
  { icon: Users, label: "Customers" },
  { icon: FileText, label: "Orders" },
  { icon: MessageSquare, label: "Messages" },
];

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`fixed inset-y-0 left-0 transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } w-48 bg-gray-800 text-white transition duration-200 ease-in-out z-30 lg:translate-x-0 lg:static lg:inset-0`}
  >
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 gap-3">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <button onClick={toggleSidebar} className="lg:hidden">
          <X size={24} />
        </button>
      </div>
      <nav>
        {sidebarItems.map((item, index) => (
          <a
            key={index}
            href={`/`}
            className="flex items-center space-x-3 text-gray-300 hover:text-white mb-4"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
    <div className="absolute bottom-0 w-full p-6">
      <a
        href={`/logout`}
        className="flex items-center space-x-2 text-gray-300 hover:text-white"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </a>
    </div>
  </div>
);

export default Sidebar;
