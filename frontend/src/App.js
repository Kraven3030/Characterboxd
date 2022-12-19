import './App.css';
import { Routes, Route, Link } from "react-router-dom";

// Imports for components and pages
import Login from './components/Login/login'


function App() {
  return (
    <div className="App">
      <h1>Hello Blake, Rory and Bren</h1>
      <main>
        <Routes>
          <Route path="/Login/Login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
