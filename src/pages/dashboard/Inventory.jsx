import React, { useState } from "react";
import {
  AiFillEye,
  AiFillEdit,
  AiFillDelete,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
  AiOutlineAppstore,
  AiOutlineTags,
  AiOutlineTeam,
} from "react-icons/ai";
import { Edit, Search } from "lucide-react";

const Inventory = () => {
  const inventoryItems = [
    {
      id: 1,
      name: "Syringes",
      quantity: 1000,
      category: "Medical Supplies",
      supplier: "Supplier A",
    },
    {
      id: 2,
      name: "Masks",
      quantity: 5000,
      category: "Personal Protective Equipment",
      supplier: "Supplier B",
    },
    {
      id: 3,
      name: "Gloves",
      quantity: 2000,
      category: "Personal Protective Equipment",
      supplier: "Supplier C",
    },
    {
      id: 4,
      name: "Ventilators",
      quantity: 10,
      category: "Medical Equipment",
      supplier: "Supplier D",
    },
    {
      id: 5,
      name: "Sanitizers",
      quantity: 3000,
      category: "Personal Protective Equipment",
      supplier: "Supplier E",
    },
    {
      id: 6,
      name: "Thermometers",
      quantity: 150,
      category: "Medical Equipment",
      supplier: "Supplier F",
    },
    {
      id: 7,
      name: "Face Shields",
      quantity: 221,
      category: "Personal Protective Equipment",
      supplier: "Supplier G",
    },
    {
      id: 8,
      name: "Bandages",
      quantity: 129,
      category: "Medical Supplies",
      supplier: "Supplier H",
    },
    {
      id: 9,
      name: "Stethoscopes",
      quantity: 194,
      category: "Medical Equipment",
      supplier: "Supplier I",
    },
    {
      id: 10,
      name: "IV Drips",
      quantity: 232,
      category: "Medical Supplies",
      supplier: "Supplier J",
    },
    {
      id: 11,
      name: "Oxygen Tanks",
      quantity: 194,
      category: "Medical Equipment",
      supplier: "Supplier K",
    },
    {
      id: 12,
      name: "Scalpels",
      quantity: 100,
      category: "Medical Supplies",
      supplier: "Supplier L",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const itemsPerPage = 10;

  const handleView = (id) => {
    console.log(`View item with id: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Edit item with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with id: ${id}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleAddItem = () => {
    console.log("Add new item");
  };

  const sortedItems = [...inventoryItems].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });

  const filteredItems = sortedItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const totalItems = inventoryItems.length;
  const totalCategories = new Set(inventoryItems.map((item) => item.category))
    .size;
  const totalSuppliers = new Set(inventoryItems.map((item) => item.supplier))
    .size;

  const lowStockItems = inventoryItems.filter(
    (item) => item.quantity < 10
  ).length;
  const moderateStockItems = inventoryItems.filter(
    (item) => item.quantity >= 10 && item.quantity <= 50
  ).length;
  const highStockItems = inventoryItems.filter(
    (item) => item.quantity > 50
  ).length;

  const getStockLevelClass = (quantity) => {
    if (quantity < 10) return "bg-red-100 text-red-800";
    if (quantity >= 10 && quantity <= 50)
      return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };

  const getABCClass = (quantity) => {
    if (quantity > 200) return "bg-blue-100 text-blue-800"; // A category
    if (quantity > 100) return "bg-purple-100 text-purple-800"; // B category
    return "bg-gray-100 text-gray-800"; // C category
  };

  const forecastDemand = (quantity) => {
    const growthRate = 0.1; // Example growth rate of 10%
    return Math.round(quantity * (1 + growthRate));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded shadow flex items-center">
          <AiOutlineAppstore className="w-8 h-8 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Items</h3>
            <p className="text-2xl">{totalItems}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center">
          <AiOutlineTags className="w-8 h-8 text-green-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Categories</h3>
            <p className="text-2xl">{totalCategories}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center">
          <AiOutlineTeam className="w-8 h-8 text-yellow-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Suppliers</h3>
            <p className="text-2xl">{totalSuppliers}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded shadow flex items-center">
          <div>
            <h3 className="text-lg font-semibold text-red-600">Low Stock</h3>
            <p className="text-2xl">{lowStockItems}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center">
          <div>
            <h3 className="text-lg font-semibold text-yellow-600">
              Moderate Stock
            </h3>
            <p className="text-2xl">{moderateStockItems}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center">
          <div>
            <h3 className="text-lg font-semibold text-green-600">High Stock</h3>
            <p className="text-2xl">{highStockItems}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded shadow flex items-center">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">A Category</h3>
            <p className="text-2xl">
              {inventoryItems.filter((item) => item.quantity > 200).length}
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center">
          <div>
            <h3 className="text-lg font-semibold text-purple-600">
              B Category
            </h3>
            <p className="text-2xl">
              {
                inventoryItems.filter(
                  (item) => item.quantity > 100 && item.quantity <= 200
                ).length
              }
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-600">C Category</h3>
            <p className="text-2xl">
              {inventoryItems.filter((item) => item.quantity <= 100).length}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                  <button onClick={() => handleSort("id")} className="ml-2">
                    {sortConfig.key === "id" &&
                    sortConfig.direction === "ascending" ? (
                      <AiOutlineSortAscending className="inline w-4 h-4" />
                    ) : (
                      <AiOutlineSortDescending className="inline w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                  <button onClick={() => handleSort("name")} className="ml-2">
                    {sortConfig.key === "name" &&
                    sortConfig.direction === "ascending" ? (
                      <AiOutlineSortAscending className="inline w-4 h-4" />
                    ) : (
                      <AiOutlineSortDescending className="inline w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                  <button
                    onClick={() => handleSort("quantity")}
                    className="ml-2"
                  >
                    {sortConfig.key === "quantity" &&
                    sortConfig.direction === "ascending" ? (
                      <AiOutlineSortAscending className="inline w-4 h-4" />
                    ) : (
                      <AiOutlineSortDescending className="inline w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                  <button
                    onClick={() => handleSort("category")}
                    className="ml-2"
                  >
                    {sortConfig.key === "category" &&
                    sortConfig.direction === "ascending" ? (
                      <AiOutlineSortAscending className="inline w-4 h-4" />
                    ) : (
                      <AiOutlineSortDescending className="inline w-4 h-4" />
                    )}
                  </button>
                </th>

                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Level
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ABC Category
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Demand Forecast
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="py-4 px-6">{item.id}</td>
                  <td className="py-4 px-6">{item.name}</td>
                  <td className="py-4 px-6">{item.quantity}</td>
                  <td className="py-4 px-6">{item.category}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2 py-1 rounded ${getStockLevelClass(
                        item.quantity
                      )}`}
                    >
                      {item.quantity < 10
                        ? "Low"
                        : item.quantity <= 50
                        ? "Moderate"
                        : "High"}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2 py-1 rounded ${getABCClass(
                        item.quantity
                      )}`}
                    >
                      {item.quantity > 200
                        ? "A"
                        : item.quantity > 100
                        ? "B"
                        : "C"}
                    </span>
                  </td>
                  <td className="py-4 px-6">{forecastDemand(item.quantity)}</td>
                  <td className="py-4 px-6 flex space-x-2">
                    <button
                      onClick={() => handleView(item.id)}
                      className="text-gray-800 hover:text-blue-700"
                    >
                      <AiFillEye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="text-gray-800 hover:text-green-700"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-gray-800 hover:text-red-700"
                    >
                      <AiFillDelete className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
