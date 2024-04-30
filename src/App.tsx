import React from 'react';
import LoginPage from "./components/LoginPage"
import CreateAccount from './components/CreateAccount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route index element={<LoginPage />} />
        <Route path='create-account' element={<CreateAccount />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
