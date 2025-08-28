import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UploadNote from './pages/UploadNote';
import AskQuestion from './pages/AskQuestion';

const gold = '#C9B037';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-black/90 rounded-xl shadow-lg p-8 max-w-xl w-full text-center border" style={{ borderColor: gold }}>
        <div className="mb-4 flex justify-center">
          <span className="text-5xl font-extrabold" style={{ color: gold }}>🦉</span>
        </div>
        <h1 className="text-4xl font-bold mb-2 font-serif" style={{ color: gold }}>Study Buddy AI</h1>
        <p className="text-lg mb-6 font-light" style={{ color: '#f5e9c6' }}>
          Your personalized, AI-powered study assistant. Upload your notes, ask questions, and get clear, structured answers—powered by advanced AI and your own learning material.
        </p>
        <div className="flex flex-col gap-4">
          <a href="/register"><button className="font-semibold py-2 px-6 rounded-lg shadow transition" style={{ backgroundColor: gold, color: 'black' }}>Get Started</button></a>
          <button className="bg-black border font-semibold py-2 px-6 rounded-lg shadow transition" style={{ borderColor: gold, color: gold }}>Learn More</button>
        </div>
      </div>
      <footer className="mt-8 text-sm" style={{ color: '#f5e9c6' }}>&copy; 2025 Study Buddy AI. All rights reserved.</footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#C9B037] flex flex-col items-center justify-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<UploadNote />} />
          <Route path="/ask" element={<AskQuestion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
