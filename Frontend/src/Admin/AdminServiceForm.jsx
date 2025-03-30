import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch, FiRefreshCw } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineEye, AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

const AdminServiceForm = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [visaTypeFilter, setVisaTypeFilter] = useState("all");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const visaTypes = ["business", "study", "tourist", "immigration"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/visaRequests", {
        params: { 
          search, 
          visaType: visaTypeFilter !== "all" ? visaTypeFilter : undefined 
        }
      });
      setRequests(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching requests:", error);
      toast.error("Failed to load requests");
      setLoading(false);
    }
  };

  const deleteRequest = async (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      try {
        await axios.delete(`/api/visaRequests/${id}`);
        toast.success("Request deleted successfully");
        fetchRequests();
      } catch (error) {
        console.error("Error deleting request:", error);
        toast.error("Failed to delete request");
      }
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Visa Requests Admin</h1>
      
      <div className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search requests..."
            className="pl-10 pr-4 py-2 w-full border rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && fetchRequests()}
          />
        </div>
        
        <div className="grid grid-cols-2 md:flex gap-2 md:gap-4">
          <select
            className="p-2 border rounded text-sm md:text-base"
            value={visaTypeFilter}
            onChange={(e) => setVisaTypeFilter(e.target.value)}
          >
            <option value="all">All Visa Types</option>
            {visaTypes.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)} Visa
              </option>
            ))}
          </select>
          <button
            onClick={fetchRequests}
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
      ) : requests.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p>No requests found matching your criteria.</p>
        </div>
      ) : isMobile ? (
        <div className="space-y-4">
          {requests.map(request => (
            <div key={request._id} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{request.name}</h3>
                <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-800 capitalize">
                  {request.visaType}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="truncate">{request.email}</p>
                </div>
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p>{request.phone}</p>
                </div>
                <div>
                  <p className="text-gray-500">Date</p>
                  <p>{formatDate(request.createdAt)}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-2 border-t">
                <button
                  onClick={() => setSelectedRequest(request)}
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                >
                  <AiOutlineEye size={16} /> View
                </button>
                
                <button
                  onClick={() => deleteRequest(request._id)}
                  className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                >
                  <AiOutlineDelete size={16} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Phone</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Visa Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {requests.map(request => (
                  <tr key={request._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(request.createdAt)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {request.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {request.email}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {request.phone}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 capitalize">
                      {request.visaType}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedRequest(request)}
                          className="text-blue-600 hover:text-blue-800"
                          title="View details"
                        >
                          <AiOutlineEye size={18} />
                        </button>
                        <button
                          onClick={() => deleteRequest(request._id)}
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
      )}

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg md:text-xl font-bold">Request Details</h3>
              <button
                onClick={() => setSelectedRequest(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm md:text-base">Name:</p>
                  <p className="text-sm md:text-base">{selectedRequest.name}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Email:</p>
                  <p className="text-sm md:text-base">{selectedRequest.email}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Phone:</p>
                  <p className="text-sm md:text-base">{selectedRequest.phone}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Visa Type:</p>
                  <p className="text-sm md:text-base capitalize">{selectedRequest.visaType}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Submitted:</p>
                  <p className="text-sm md:text-base">{formatDate(selectedRequest.createdAt)}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-sm md:text-base">Message:</p>
                <p className="whitespace-pre-wrap text-sm md:text-base bg-gray-50 p-2 rounded">
                  {selectedRequest.message}
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setSelectedRequest(null)}
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

export default AdminServiceForm;