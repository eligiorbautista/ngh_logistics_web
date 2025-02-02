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

const Request = () => {
  const requestItems = [
    {
      id: 1,
      department: "Emergency",
      itemName: "Syringes",
      quantity: 100,
      requestDate: "2023-10-01",
      status: "Pending",
    },
    {
      id: 2,
      department: "ICU",
      itemName: "Masks",
      quantity: 200,
      requestDate: "2023-09-25",
      status: "Approved",
    },
    {
      id: 3,
      department: "Surgery",
      itemName: "Gloves",
      quantity: 150,
      requestDate: "2023-09-20",
      status: "Rejected",
    },
    {
      id: 4,
      department: "Pediatrics",
      itemName: "Bandages",
      quantity: 50,
      requestDate: "2023-09-15",
      status: "Pending",
    },
    {
      id: 5,
      department: "Radiology",
      itemName: "Lead Aprons",
      quantity: 10,
      requestDate: "2023-09-10",
      status: "Approved",
    },
    {
      id: 6,
      department: "Pharmacy",
      itemName: "IV Drips",
      quantity: 300,
      requestDate: "2023-09-05",
      status: "Rejected",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const itemsPerPage = 10;

  const handleView = (id) => {
    console.log(`View request with id: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Edit request with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete request with id: ${id}`);
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

  const handleAddRequest = () => {
    toast.info("Add request feature is not yet available.");
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  const sortedItems = [...requestItems].sort((a, b) => {
    if (sortConfig.key) {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      if (sortConfig.key === "requestDate") {
        aValue = new Date(a.requestDate);
        bValue = new Date(b.requestDate);
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
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
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
            onClick={handleAddRequest}
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
                  Department
                  <button onClick={() => handleSort("department")} className="ml-2">
                    {sortConfig.key === "department" &&
                    sortConfig.direction === "ascending" ? (
                      <AiOutlineSortAscending className="inline w-4 h-4" />
                    ) : (
                      <AiOutlineSortDescending className="inline w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item Name
                  <button onClick={() => handleSort("itemName")} className="ml-2">
                    {sortConfig.key === "itemName" &&
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
                  Request Date
                  <button
                    onClick={() => handleSort("requestDate")}
                    className="ml-2"
                  >
                    {sortConfig.key === "requestDate" &&
                    sortConfig.direction === "ascending" ? (
                      <AiOutlineSortAscending className="inline w-4 h-4" />
                    ) : (
                      <AiOutlineSortDescending className="inline w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                  <button
                    onClick={() => handleSort("status")}
                    className="ml-2"
                  >
                    {sortConfig.key === "status" &&
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
                  <td className="py-4 px-6">{item.department}</td>
                  <td className="py-4 px-6">{item.itemName}</td>
                  <td className="py-4 px-6">{item.quantity}</td>
                  <td className="py-4 px-6">{item.requestDate}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2 py-1 rounded ${getStatusClass(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </td>
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

export default Request;