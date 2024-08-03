import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChevronRight } from "lucide-react";
import Avatar from "react-avatar";
import Sidebar from "./Sidebar";
import {
  activityData,
  recentOrders,
  customerFeedback,
  restroFeatureAndFuture,
  orderInfo,
} from "../mock_data/data";
import Header from "./Header";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-6">
            {orderInfo.map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className={`bg-${item.bg}-500 p-2 rounded`}>
                    <item.icon color={item.color} size={26} />
                  </div>
                  <span
                    className={`${
                      item.change > 0 ? "text-green-500" : "text-red-700"
                    }`}
                  >
                    {item.change > 0 ? "↑" : "↓"} {Math.abs(item.change)}%
                  </span>
                </div>
                <p className="text-md text-gray-400 my-4">{item.title}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
            ))}
            <div className="xl:col-span-2 lg:col-span-2 bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-md text-gray-400">Net Profit</p>
                <span className="text-green-500">↑ 3%</span>
              </div>
              <p className="text-3xl font-bold text-green-500">$ 6759.25</p>
              <div className="flex items-center justify-between mt-2">
                <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center">
                  <span className="text-lg font-bold">70%</span>
                </div>
                <p className="text-xs text-gray-400">
                  *This value has been rounded off
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Activity</h2>
                <select className="bg-gray-700 text-white rounded p-1">
                  <option>Weekly</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={activityData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Bar dataKey="value" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="space-y-4">
                {restroFeatureAndFuture.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded mr-5`}>
                        <item.icon color={item.color} size={30} />
                      </div>
                      <span className="text-lg">{item.title}</span>
                    </div>
                    <ChevronRight size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 xl:col-span-2 bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="text-left text-gray-400">
                    <th className="py-2">Customer</th>
                    <th className="py-2">Order No.</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr
                      key={index}
                      className="text-left border-b border-gray-700"
                    >
                      <td className="py-2 flex items-center gap-4">
                        <Avatar
                          className="rounded-full"
                          size="28px"
                          name={order.customer}
                        />
                        {order.customer}
                      </td>
                      <td className="py-2">{order.orderNo}</td>
                      <td className="py-2">{order.amount}</td>
                      <td className="py-2">
                        <span
                          className={`px-2 rounded-xl ${
                            order.status === "Delivered"
                              ? "bg-green-500"
                              : order.status === "Cancelled"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Customer's Feedback</h2>
              <div className="space-y-4 max-h-64 overflow-y-auto hide-scrollbar">
                {customerFeedback.map((feedback, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <Avatar
                          className="rounded-full"
                          size="28px"
                          name={feedback.name}
                        />
                        <span>{feedback.name}</span>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < feedback.rating
                                ? "text-yellow-500"
                                : "text-gray-500"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">{feedback.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
