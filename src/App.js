import HomePage from "pages/Home";
import "./App.css";
import UserProvider from "providers/UserProvider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "components/Layout/Layout";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Register";
import MessagePage from "pages/Message";
import EditProfilePage from "pages/Profiile/EditProfile";
import ProfilePage from "pages/Profiile/Profile";

function App() {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/message' element={<MessagePage />} />
            <Route path='/edit-profile' element={<EditProfilePage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </Layout>
      </UserProvider>
    </Router>
  );
}

export default App;
