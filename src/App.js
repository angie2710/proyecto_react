
import LoginPage from './Pages/LoginPage/LoginPages';
import RegisterPage from './RegisterPage/RegisterPage';
import ForgotPaswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//#######
import MyComponent from './Pages/Playground/Playground ';
import MensajeCambio from './Pages/Playground/UseEffect';
import ClickTracker from './Pages/Playground/UseRef';
import DobleMemo from './Pages/Playground/UseMemo';
import BotonConsola from './Pages/Playground/useCallback';
function App(){
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/forgot" element={<ForgotPaswordPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />

    <Route path="/MyComponent" element={<MyComponent/>} />
    <Route path="/Contador" element={<MensajeCambio/>} />
    <Route path="/click" element={<ClickTracker/>} />
    <Route path="/doble" element={<DobleMemo/>} />
    <Route path="/boton" element={<BotonConsola/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
