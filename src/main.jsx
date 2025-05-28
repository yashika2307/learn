import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
import Support from './Support.jsx'
import Register from './Register.jsx'
import SignIn from './SignIn.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
        {/* Add other pages here */}
      </Routes>
    </Router>
  );
}

export default Main;