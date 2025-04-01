import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { ShowLoading, HideLoading } from '../redux/rootSlice';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import VictoryVisasLogo from "../assets/LOGO.png";
import { setAdmin } from "../redux/Adminslice"; // Add this import

function Login() {
  const [credentials, setCredentials] = useState({ 
    email: "", 
    password: "" 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      message.warning("Please fill all fields");
      return;
    }
    await login();
  };

 // In your login function:
const login = async () => {
  try {
    dispatch(ShowLoading());
    const response = await axios.post("https://api.victoryvisas.com/api/victory-visas/admin-login", credentials);
    dispatch(HideLoading());
    
    if (response.data.success) {
      message.success(response.data.message);
      localStorage.setItem("token", response.data.token);
      dispatch(setAdmin(response.data.admin)); // This sets isAuthenticated to true
      navigate("/admin"); // Redirect to admin dashboard
    } else {
      message.error(response.data.message);
    }
  } catch (error) {
    message.error(error.response?.data?.message || "Login failed");
    dispatch(HideLoading());
  }
};

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img 
            src={VictoryVisasLogo} 
            alt="Victory Visas Logo" 
            className="w-40" 
          />
        </div>
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ 
                ...credentials, 
                email: e.target.value 
              })}
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 w-full rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={credentials.password}
                onChange={(e) => setCredentials({ 
                  ...credentials, 
                  password: e.target.value 
                })}
                placeholder="Enter your password"
                className="px-4 py-3 border border-gray-300 w-full rounded-lg focus:outline-none focus:border-blue-500 pr-12"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;