import React, { useState, useRef, useEffect } from "react";
import Chart from "react-apexcharts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Menu, Package, Truck, Box, ClipboardList } from 'lucide-react';

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const barData = {
    series: [
      {
        name: "Supplies Delivered",
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
    options: {
      chart: {
        type: "bar",
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"],
      },
    },
  };

  const lineData = {
    series: [
      {
        name: "Delivery Time (in hours)",
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
    options: {
      chart: {
        type: "line",
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"],
      },
    },
  };

  const pieData = {
    series: [300, 50, 100, 40],
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Medicine", "Equipment", "Supplies", "Others"],
    },
  };

  const recentDeliveries = [
    { id: 1, item: "Syringes", quantity: 1000, date: "2023-10-01" },
    { id: 2, item: "Masks", quantity: 5000, date: "2023-10-02" },
    { id: 3, item: "Gloves", quantity: 2000, date: "2023-10-03" },
    { id: 4, item: "Ventilators", quantity: 10, date: "2023-10-04" },
  ];

  const totalDeliveries = recentDeliveries.length;
  const totalItems = recentDeliveries.reduce((acc, delivery) => acc + delivery.quantity, 0);
  const uniqueItems = new Set(recentDeliveries.map(delivery => delivery.item)).size;

  const downloadPDF = () => {
    const input = document.getElementById("recent-deliveries-table");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save("recent-deliveries.pdf");
    });
  };

  const downloadPNG = () => {
    const input = document.getElementById("recent-deliveries-table");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "recent-deliveries.png";
      link.click();
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded shadow flex items-center">
          <Package className="w-10 h-10 text-blue-500 mr-4" />
          <div>
            <h2 className="text-xl font-bold mb-2">Total Deliveries</h2>
            <p className="text-2xl">{totalDeliveries}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center">
          <Box className="w-10 h-10 text-green-500 mr-4" />
          <div>
            <h2 className="text-xl font-bold mb-2">Total Items Delivered</h2>
            <p className="text-2xl">{totalItems}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center">
          <ClipboardList className="w-10 h-10 text-purple-500 mr-4" />
          <div>
            <h2 className="text-xl font-bold mb-2">Total Unique Items</h2>
            <p className="text-2xl">{uniqueItems}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Supplies Delivered</h2>
          <Chart options={barData.options} series={barData.series} type="bar" height={300} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Delivery Time</h2>
          <Chart options={lineData.options} series={lineData.series} type="line" height={300} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Inventory Distribution</h2>
          <Chart options={pieData.options} series={pieData.series} type="pie" height={300} />
        </div>
        <div className="bg-white p-4 rounded shadow col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-bold mb-4">Recent Deliveries</h2>
          <div className="flex justify-end mb-4 relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="text-gray-700 px-4 py-2 rounded">
              <Menu className="w-5 h-5" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <button onClick={downloadPDF} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                  Download PDF
                </button>
                <button onClick={downloadPNG} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                  Download PNG
                </button>
              </div>
            )}
          </div>
          <div className="overflow-x-auto" id="recent-deliveries-table">
            <table className="min-w-full bg-white divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentDeliveries.map((delivery) => (
                  <tr key={delivery.id} className="hover:bg-gray-100">
                    <td className="py-4 px-6">{delivery.id}</td>
                    <td className="py-4 px-6">{delivery.item}</td>
                    <td className="py-4 px-6">{delivery.quantity}</td>
                    <td className="py-4 px-6">{delivery.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;