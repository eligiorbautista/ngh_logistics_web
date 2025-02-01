import React, { useState } from "react";
import {
  AiFillEye,
  AiFillDelete,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { Edit, Search } from "lucide-react";
import { toast } from "sonner";
import { IoAdd } from "react-icons/io5";

const Inventory = () => {
  const inventoryItems = [
    {
      id: 1,
      name: "Syringes",
      quantity: 1000,
      category: "Medical Supplies",
      latestDeliveryDate: "2023-10-01",
    },
    {
      id: 2,
      name: "Masks",
      quantity: 5000,
      category: "Personal Protective Equipment",
      latestDeliveryDate: "2023-09-25",
    },
    {
      id: 3,
      name: "Gloves",
      quantity: 2000,
      category: "Personal Protective Equipment",
      latestDeliveryDate: "2023-09-20",
    },
    {
      id: 4,
      name: "Ventilators",
      quantity: 10,
      category: "Medical Equipment",
      latestDeliveryDate: "2023-09-15",
    },
    {
      id: 5,
      name: "Sanitizers",
      quantity: 3000,
      category: "Personal Protective Equipment",
      latestDeliveryDate: "2023-09-10",
    },
    {
      id: 6,
      name: "Thermometers",
      quantity: 150,
      category: "Medical Equipment",
      latestDeliveryDate: "2023-09-05",
    },
    {
      id: 7,
      name: "Face Shields",
      quantity: 221,
      category: "Personal Protective Equipment",
      latestDeliveryDate: "2023-09-01",
    },
    {
      id: 8,
      name: "Bandages",
      quantity: 129,
      category: "Medical Supplies",
      latestDeliveryDate: "2023-08-25",
    },
    {
      id: 9,
      name: "Stethoscopes",
      quantity: 194,
      category: "Medical Equipment",
      latestDeliveryDate: "2023-08-20",
    },
    {
      id: 10,
      name: "IV Drips",
      quantity: 232,
      category: "Medical Supplies",
      latestDeliveryDate: "2023-08-15",
    },
    {
      id: 11,
      name: "Oxygen Tanks",
      quantity: 194,
      category: "Medical Equipment",
      latestDeliveryDate: "2023-08-10",
    },
    {
      id: 12,
      name: "Scalpels",
      quantity: 100,
      category: "Medical Supplies",
      latestDeliveryDate: "2023-08-05",
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
    toast.info("Add item feature is not yet available.");
  };

  const getStockLevel = (quantity) => {
    if (quantity < 10) return "Low";
    if (quantity >= 10 && quantity <= 50) return "Moderate";
    return "High";
  };

  const getStockLevelClass = (quantity) => {
    if (quantity < 10) return "bg-red-100 text-red-800";
    if (quantity >= 10 && quantity <= 50)
      return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };

  const getABCClass = (quantity) => {
    if (quantity > 200) return "bg-blue-100 text-blue-800";
    if (quantity > 100) return "bg-purple-100 text-purple-800";
    return "bg-gray-100 text-gray-800";
  };

  const getABCCategory = (quantity) => {
    if (quantity > 200) return "A";
    if (quantity > 100) return "B";
    return "C";
  };

  const forecastDemand = (quantity) => {
    const growthRate = 0.1; //ex. growth rate of 10%
    return Math.round(quantity * (1 + growthRate));
  };

  const sortedItems = [...inventoryItems].sort((a, b) => {
    if (sortConfig.key) {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      if (sortConfig.key === "stockLevel") {
        aValue = getStockLevel(a.quantity);
        bValue = getStockLevel(b.quantity);
      } else if (sortConfig.key === "abcCategory") {
        aValue = getABCCategory(a.quantity);
        bValue = getABCCategory(b.quantity);
      } else if (sortConfig.key === "demandForecast") {
        aValue = forecastDemand(a.quantity);
        bValue = forecastDemand(b.quantity);
      } else if (sortConfig.key === "latestDeliveryDate") {
        aValue = new Date(a.latestDeliveryDate);
        bValue = new Date(b.latestDeliveryDate);
      }

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
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

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="flex justify-between mb-4">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-transparent focus:outline-none w-full md:w-auto"
            />
            <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
          <button
            onClick={handleAddItem}
            className="px-3 pr-4 py-1.5 bg-gray-800 text-white rounded flex items-center space-x-1 cursor-pointer"
          >
            <IoAdd />New
          </button>
        </div>
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
                  <button
                    onClick={() => handleSort("stockLevel")}
                    className="ml-2"
                  >
                    {sortConfig.key === "stockLevel" &&
                    sortConfig.direction === "ascending" ? (
                      <AiOutlineSortAscending className="inline w-4 h-4" />
                    ) : (
                      <AiOutlineSortDescending className="inline w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ABC Category
                  <button
                    onClick={() => handleSort("abcCategory")}
                    className="ml-2"
                  >
                    {sortConfig.key === "abcCategory" &&
                    sortConfig.direction === "ascending" ? (
                      <AiOutlineSortAscending className="inline w-4 h-4" />
                    ) : (
                      <AiOutlineSortDescending className="inline w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Demand Forecast
                  <button
                    onClick={() => handleSort("demandForecast")}
                    className="ml-2"
                  >
                    {sortConfig.key === "demandForecast" &&
                    sortConfig.direction === "ascending" ? (
                      <AiOutlineSortAscending className="inline w-4 h-4" />
                    ) : (
                      <AiOutlineSortDescending className="inline w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Latest Delivery Date
                  <button
                    onClick={() => handleSort("latestDeliveryDate")}
                    className="ml-2"
                  >
                    {sortConfig.key === "latestDeliveryDate" &&
                    sortConfig.direction === "ascending" ? (
                      <AiOutlineSortAscending className="inline w-4 h-4" />
                    ) : (
                      <AiOutlineSortDescending className="inline w-4 h-4" />
                    )}
                  </button>
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
                      {getStockLevel(item.quantity)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2 py-1 rounded ${getABCClass(
                        item.quantity
                      )}`}
                    >
                      {getABCCategory(item.quantity)}
                    </span>
                  </td>
                  <td className="py-4 px-6">{forecastDemand(item.quantity)}</td>
                  <td className="py-4 px-6">{item.latestDeliveryDate}</td>
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