import React from 'react'
import { Route, Routes } from 'react-router'
import { Toaster } from 'react-hot-toast'

import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import NoteDetailsPage from './pages/NoteDetailsPage.jsx';
import toast from 'react-hot-toast';

const App = () => {
  return (
    <div data-theme="coffee">
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App