// src/Components/ProtectedRoute.jsx
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.admin || {});
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/admin-login" replace />;
};

export default ProtectedRoute;