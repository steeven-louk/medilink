// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/authContext'
import toast from 'react-hot-toast';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    toast.error("veuillez vous connectez!!")
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
