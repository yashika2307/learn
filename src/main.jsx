import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
import Support from './Support.jsx'
import Register from './Register.jsx'
import SignIn from './SignIn.jsx'
import Header from './Header.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
// import Router from 'react-router'
// import routes from './routes'
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'G-ZDC6DH2D9J'
}
 
TagManager.initialize(tagManagerArgs)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)

function Main() {
  return (
    <Router>
      <Header></Header>
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