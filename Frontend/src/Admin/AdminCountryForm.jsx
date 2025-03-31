import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch, FiRefreshCw } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineEye, AiOutlineClose } from "react-icons/ai";

export default function CountryVisaAdmin() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [notes, setNotes] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const countries = ["Australia", "Canada", "Germany", "India", "UK", "USA", "Other"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchInquiries();
  }, [search, statusFilter, countryFilter]); // Added dependencies to refetch when filters change

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/visa-inquiries", {
        params: { search, status: statusFilter, country: countryFilter }
      });
      setInquiries(data);
      setCurrentPage(1); // Reset to first page when filters change
      setLoading(false);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      setLoading(false);
    }
  };

  // Get current inquiries for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInquiries = inquiries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(inquiries.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`/api/visa-inquiries/${id}`, { status });
      fetchInquiries();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const deleteInquiry = async (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      try {
        await axios.delete(`/api/visa-inquiries/${id}`);
        fetchInquiries();
      } catch (error) {
        console.error("Error deleting inquiry:", error);
      }
    }
  };

  const saveNotes = async () => {
    try {
      await axios.put(`/api/visa-inquiries/${selectedInquiry._id}`, { notes });
      fetchInquiries();
      setSelectedInquiry(null);
    } catch (error) {
      console.error("Error saving notes:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800";
      case "contacted": return "bg-yellow-100 text-yellow-800";
      case "resolved": return "bg-green-100 text-green-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
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

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search inquiries..."
            className="pl-10 pr-4 py-2 w-full border rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 md:flex gap-2 md:gap-4">
          <select
            className="p-2 border rounded text-sm md:text-base"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="resolved">Resolved</option>
            <option value="rejected">Rejected</option>
          </select>
          <select
            className="p-2 border rounded text-sm md:text-base"
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
          >
            <option value="all">All Countries</option>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button
            onClick={fetchInquiries}
            className="col-span-2 md:col-span-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <FiRefreshCw /> Refresh
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : inquiries.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p>No inquiries found matching your criteria.</p>
        </div>
      ) : isMobile ? (
        <div className="space-y-4">
          {currentInquiries.map(inquiry => (
            <div key={inquiry._id} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{inquiry.name}</h3>
                <span className={`px-2 py-1 rounded text-xs ${getStatusColor(inquiry.status)}`}>
                  {inquiry.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div>
                  <p className="text-gray-500">Country</p>
                  <p>{inquiry.country}</p>
                </div>
                <div>
                  <p className="text-gray-500">Visa Type</p>
                  <p>{inquiry.visaType}</p>
                </div>
                <div>
                  <p className="text-gray-500">Date</p>
                  <p>{new Date(inquiry.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-2 border-t">
                <select
                  value={inquiry.status}
                  onChange={(e) => updateStatus(inquiry._id, e.target.value)}
                  className={`px-2 py-1 rounded text-xs ${getStatusColor(inquiry.status)}`}
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="resolved">Resolved</option>
                  <option value="rejected">Rejected</option>
                </select>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedInquiry(inquiry);
                      setNotes(inquiry.notes || "");
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <AiOutlineEye size={18} />
                  </button>
                  <button
                    onClick={() => deleteInquiry(inquiry._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <AiOutlineDelete size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <Pagination />
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Country</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Visa Type</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentInquiries.map(inquiry => (
                    <tr key={inquiry._id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {inquiry.name}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.country}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.visaType}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        <select
                          value={inquiry.status}
                          onChange={(e) => updateStatus(inquiry._id, e.target.value)}
                          className={`px-2 py-1 rounded text-xs md:text-sm ${getStatusColor(inquiry.status)}`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="resolved">Resolved</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedInquiry(inquiry);
                              setNotes(inquiry.notes || "");
                            }}
                            className="text-blue-600 hover:text-blue-800"
                            title="View details"
                          >
                            <AiOutlineEye size={18} />
                          </button>
                          <button
                            onClick={() => deleteInquiry(inquiry._id)}
                            className="text-red-600 hover:text-red-800"
                            title="Delete"
                          >
                            <AiOutlineDelete size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination />
        </>
      )}

      {selectedInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg md:text-xl font-bold">Inquiry Details</h3>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm md:text-base">Name:</p>
                  <p className="text-sm md:text-base">{selectedInquiry.name}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Email:</p>
                  <p className="text-sm md:text-base">{selectedInquiry.email}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Phone:</p>
                  <p className="text-sm md:text-base">{selectedInquiry.phone}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Country:</p>
                  <p className="text-sm md:text-base">{selectedInquiry.country}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Visa Type:</p>
                  <p className="text-sm md:text-base">{selectedInquiry.visaType}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Status:</p>
                  <p className="text-sm md:text-base capitalize">{selectedInquiry.status}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-sm md:text-base">Message:</p>
                <p className="whitespace-pre-wrap text-sm md:text-base bg-gray-50 p-2 rounded">
                  {selectedInquiry.message}
                </p>
              </div>

              <div>
                <p className="font-semibold text-sm md:text-base">Admin Notes:</p>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2 border rounded mt-1 text-sm md:text-base"
                  rows="3"
                  placeholder="Add your notes here..."
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="px-3 py-1 md:px-4 md:py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm md:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={saveNotes}
                  className="px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm md:text-base"
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
}