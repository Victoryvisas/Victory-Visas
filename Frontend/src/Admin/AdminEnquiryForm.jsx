import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch, FiRefreshCw } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineEye, AiOutlineClose } from "react-icons/ai";

const AdminEnquiryForm = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [notes, setNotes] = useState("");
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Fetch enquiries with filters
  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const params = {};
      if (statusFilter !== "all") params.status = statusFilter;
      if (searchTerm) params.search = searchTerm;
      
      const response = await axios.get("/api/enquiries", { params });
      setEnquiries(response.data);
      setCurrentPage(1); // Reset to first page when filters change
      setError("");
    } catch (err) {
      setError("Failed to fetch enquiries. Please try again.");
      console.error("Error fetching enquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [statusFilter]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEnquiries = enquiries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(enquiries.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Update enquiry status
  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`/api/enquiries/${id}`, { status: newStatus });
      setEnquiries(enquiries.map(enquiry => 
        enquiry._id === id ? { ...enquiry, status: newStatus } : enquiry
      ));
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status");
    }
  };

  // Delete enquiry
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      try {
        await axios.delete(`/api/enquiries/${id}`);
        setEnquiries(enquiries.filter(enquiry => enquiry._id !== id));
      } catch (err) {
        console.error("Error deleting enquiry:", err);
        alert("Failed to delete enquiry");
      }
    }
  };

  // Save notes for an enquiry
  const saveNotes = async () => {
    if (!selectedEnquiry) return;
    
    try {
      await axios.put(`/api/enquiries/${selectedEnquiry._id}`, { notes });
      setEnquiries(enquiries.map(enquiry => 
        enquiry._id === selectedEnquiry._id ? { ...enquiry, notes } : enquiry
      ));
      setSelectedEnquiry(null);
    } catch (err) {
      console.error("Error saving notes:", err);
      alert("Failed to save notes");
    }
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    const statusClasses = {
      new: "bg-blue-100 text-blue-800",
      contacted: "bg-yellow-100 text-yellow-800",
      resolved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800"
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
        {status}
      </span>
    );
  };

  // Pagination component
  const Pagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center mt-4">
        <nav className="inline-flex rounded-md shadow">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-1 border-t border-b border-gray-300 bg-white text-sm font-medium ${
                currentPage === number 
                  ? 'bg-blue-50 text-blue-600 border-blue-500'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
          >
            Next
          </button>
        </nav>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
            <button 
              onClick={fetchEnquiries}
              className="mt-2 px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Enquiry Management</h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search enquiries..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && fetchEnquiries()}
            />
          </div>
          <select
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="resolved">Resolved</option>
            <option value="rejected">Rejected</option>
          </select>
          <button
            onClick={fetchEnquiries}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <FiRefreshCw /> Refresh
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentEnquiries.length > 0 ? (
                currentEnquiries.map((enquiry) => (
                  <tr key={enquiry._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(enquiry.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{enquiry.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{enquiry.email}</div>
                      <div className="text-sm text-gray-500">{enquiry.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {enquiry.purpose}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={enquiry.status}
                        onChange={(e) => updateStatus(enquiry._id, e.target.value)}
                        className={`text-xs rounded-full px-2 py-1 ${
                          enquiry.status === "new" ? "bg-blue-100 text-blue-800" :
                          enquiry.status === "contacted" ? "bg-yellow-100 text-yellow-800" :
                          enquiry.status === "resolved" ? "bg-green-100 text-green-800" :
                          "bg-red-100 text-red-800"
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="resolved">Resolved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => {
                          setSelectedEnquiry(enquiry);
                          setNotes(enquiry.notes || "");
                        }}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                        title="View details"
                      >
                        <AiOutlineEye size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(enquiry._id)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                      >
                        <AiOutlineDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    No enquiries found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>

      {/* Enquiry Detail Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-gray-800">Enquiry Details</h2>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <AiOutlineClose size={24} />
                </button>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Name</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedEnquiry.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedEnquiry.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedEnquiry.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Country</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedEnquiry.country}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Purpose</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedEnquiry.purpose}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Status</h3>
                    <div className="mt-1">
                      <StatusBadge status={selectedEnquiry.status} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Message</h3>
                  <p className="mt-1 text-sm text-gray-900 whitespace-pre-line">
                    {selectedEnquiry.message || "No message provided"}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Admin Notes</h3>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Add internal notes here..."
                  />
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Submitted On</h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {new Date(selectedEnquiry.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={saveNotes}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEnquiryForm;