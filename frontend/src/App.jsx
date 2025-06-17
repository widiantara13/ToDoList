import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Task from './pages/Task';
import FormList from './components/FormList'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/task/add' element={<Task/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App