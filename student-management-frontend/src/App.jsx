import {BrowserRouter , Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";
import EditStudent from "./pages/EditStudent";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";

import {AuthProvider} from "./context/AuthContext"
function App() {

    return (

        <BrowserRouter>
        <AuthProvider>
        <Routes>

        {/* Public routes*/}
        <Route path="/" element={<Login/>} />

        {/*Protected routes*/}
        <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dashboard/>
            </DashboardLayout>
          </ProtectedRoute>
        }
        />

        <Route
        path="/students"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Students/>
            </DashboardLayout>
          </ProtectedRoute>
        }
        />

        <Route
        path="/students/add"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AddStudent/>
            </DashboardLayout>
          </ProtectedRoute>
        }
        />

        <Route
        path="/students/edit/:id"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <EditStudent/>
            </DashboardLayout>
          </ProtectedRoute>
        }
        />

        <Route
        path="/students/details"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <StudentDetails/>
            </DashboardLayout>
          </ProtectedRoute>
        }
        />

        <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Profile/>
            </DashboardLayout>
          </ProtectedRoute>
        }
        />

        <Route path="*" element={<NotFound/>} />

        </Routes>
        </AuthProvider>
        </BrowserRouter>

    );

}

export default App;