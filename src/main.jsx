import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
import Support from './ContactUs.jsx'
import Register from './Register.jsx'
import SignIn from './SignIn.jsx'
import Header from './Header.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout.jsx' 
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
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default Main;