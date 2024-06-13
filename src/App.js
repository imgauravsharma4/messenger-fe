import HomePage from "pages/Home";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Register";
import MessagePage from "pages/Message";
import EditProfilePage from "pages/Profiile/EditProfile";
import ProfilePage from "pages/Profiile/Profile";
import { SocketProvider } from "providers/SocketProvider";
import ProtectedRoute from "components/Layout/ProtectedRoute";
import UserProvider from "providers/UserProvider";
import Layout from "components/Layout/Layout";

function App() {
  return (
    <Router>
      <UserProvider>
        <SocketProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path='/message' element={<MessagePage />} />
                <Route path='/edit-profile' element={<EditProfilePage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </Layout>
        </SocketProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
