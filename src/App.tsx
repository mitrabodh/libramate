import React from 'react';
import LoginPage from "./components/authentication/LoginPage"
import CreateAccount from './components/authentication/CreateAccountPage';
import Canvas from './components/canvas/Canvas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route index element={<LoginPage />} />
        <Route path="canvas" element={<Canvas />} />
        <Route path='create-account' element={<CreateAccount />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
