
import LoginPage from './Pages/LoginPage/LoginPages';
import RegisterPage from './RegisterPage/RegisterPage';
import ForgotPaswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/forgot" element={<ForgotPaswordPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
