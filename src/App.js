import { useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import Notes from './components/Notes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
<Router>
    <div className="App">
      <Categories/>
      <Routes>
        <Route path="/:id" element={<Notes />}/>
      </Routes>
    </div>
</Router>
  );
}

export default App;
