import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Login from "./Login";
import Register from "./Register";
import SubscriptionExpired from "./SubscriptionExpired";
import Dashboard from "./Dashboard";
import Sales from "./Sales";
import Products from "./Products";
import Stock from "./Stock";
import Customers from "./Customers";
import Appointments from "./Appointments";
import Financial from "./Financial";
import Reports from "./Reports";
import AdminSubscriptions from "./AdminSubscriptions";
import Settings from "./Settings";

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
