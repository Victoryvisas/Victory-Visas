import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch, FiRefreshCw } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineEye, AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

const AdminFlightForm = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const destinations = ["New York", "London", "Paris", "Tokyo", "Dubai", "Other"];

  // Fetch data with error handling
  const fetchData = async (url, params = {}) => {
    try {
      const response = await axios.get(url, {
        params,
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const data = await fetchData("https://api.victoryvisas.com/api/flightTickets", {
        search,
        destination: destinationFilter !== "all" ? destinationFilter : undefined
      });
      setInquiries(data);
      setCurrentPage(1); // Reset to first page when filters change
    } catch (error) {
      toast.error("Failed to load inquiries");
    } finally {
      setLoading(false);
    }
  };

  const deleteInquiry = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;
    
    try {
      await axios.delete(`https://api.victoryvisas.com/api/flightTickets/${id}`);
      toast.success("Inquiry deleted");
      await fetchInquiries();
    } catch (error) {
      toast.error("Delete failed");
      console.error("Delete Error:", error);
    }
  };

  // Mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial load and when filters change
  useEffect(() => { fetchInquiries(); }, [destinationFilter]);

  // Date formatting
  const formatDate = (dateString) => 
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInquiries = inquiries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(inquiries.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <h1 className="text-2xl font-bold mb-6">Flight Ticket Inquiries</h1>
      
      <div className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search inquiries..."
            className="pl-10 pr-4 py-2 w-full border rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && fetchInquiries()}
          />
        </div>
        
        <div className="grid grid-cols-2 md:flex gap-2 md:gap-4">
          <select
            className="p-2 border rounded text-sm md:text-base"
            value={destinationFilter}
            onChange={(e) => setDestinationFilter(e.target.value)}
          >
            <option value="all">All Destinations</option>
            {destinations.map(dest => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
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
        <>
          <div className="space-y-4">
            {currentInquiries.map(inquiry => (
              <div key={inquiry._id} className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{inquiry.name}</h3>
                  <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-800">
                    {inquiry.destination}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div>
                    <p className="text-gray-500">Contact</p>
                    <p>{inquiry.contact}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Travel Dates</p>
                    <p>{inquiry.travelDates}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Passengers</p>
                    <p>A: {inquiry.adults}, K: {inquiry.kids}, I: {inquiry.infants}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Submitted</p>
                    <p>{formatDate(inquiry.createdAt)}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t">
                  <button
                    onClick={() => setSelectedInquiry(inquiry)}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                  >
                    <AiOutlineEye size={16} /> View
                  </button>
                  
                  <button
                    onClick={() => deleteInquiry(inquiry._id)}
                    className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                  >
                    <AiOutlineDelete size={16} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Pagination />
        </>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Contact</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Destination</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Travel Dates</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Passengers</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Submitted</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentInquiries.map(inquiry => (
                    <tr key={inquiry._id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {inquiry.name}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.contact}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.email}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.destination}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.travelDates}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        A: {inquiry.adults}, K: {inquiry.kids}, I: {inquiry.infants}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(inquiry.createdAt)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedInquiry(inquiry)}
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
            <Pagination />
          </div>
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
                  <p className="font-semibold text-sm md:text-base">Contact:</p>
                  <p className="text-sm md:text-base">{selectedInquiry.contact}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Email:</p>
                  <p className="text-sm md:text-base">{selectedInquiry.email}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Destination:</p>
                  <p className="text-sm md:text-base">{selectedInquiry.destination}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Travel Dates:</p>
                  <p className="text-sm md:text-base">{selectedInquiry.travelDates}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Passengers:</p>
                  <p className="text-sm md:text-base">
                    Adults: {selectedInquiry.adults}, Kids: {selectedInquiry.kids}, Infants: {selectedInquiry.infants}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Submitted:</p>
                  <p className="text-sm md:text-base">{formatDate(selectedInquiry.createdAt)}</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="px-3 py-1 md:px-4 md:py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm md:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminFlightForm;