import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Layout from "./components/Layout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import SubscriptionExpired from "./pages/SubscriptionExpired.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Sales from "./pages/Sales.jsx";
import Products from "./pages/Products.jsx";
import Stock from "./pages/Stock.jsx";
import Customers from "./pages/Customers.jsx";
import Appointments from "./pages/Appointments.jsx";
import Financial from "./pages/Financial.jsx";
import Reports from "./pages/Reports.jsx";
import AdminSubscriptions from "./pages/AdminSubscriptions.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster theme="dark" position="top-right" richColors />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/subscription-expired" element={<SubscriptionExpired />} />
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/products" element={<Products />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/admin/subscriptions" element={<AdminSubscriptions />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;