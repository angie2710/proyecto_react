import './App.css';
import LoginPage from './Pages/LoginPage/LoginPages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './RegisterPage/RegisterPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import NotFoundPage from './Pages/components/NotFoundPage';
import ProtectedRoute from './Pages/components/ProtecetedRoute';
import ResetPasswordPage from './Pages/ResetPasswordPage/ResetPasswordPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
