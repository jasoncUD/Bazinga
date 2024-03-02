import './App.css';
import { Outlet } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import LearnPage from "./Pages/LearnPage/LearnPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
