import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Routes>
      <Route
        path="/"
        element={!user ? <Login /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
