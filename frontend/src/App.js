import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import SplashScreen from './components/pages/SplashScreen';
import MainChatEmptyState from './components/pages/MainChatEmptyState';
import MainChatActiveChat from './components/pages/MainChatActiveChat';
import SettingsPage from './components/pages/SettingsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/chat" element={<MainChatEmptyState />} />
          <Route path="/chat/:id" element={<MainChatActiveChat />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
