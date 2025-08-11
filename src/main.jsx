import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
import ContactUs from './ContactUs.jsx'
import Register from './Register.jsx'
import SignIn from './SignIn.jsx'
import Header from './Header.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout.jsx'
import BookService from './Pages/BookService/index.jsx'
import "./App.css"
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

      <div className='w-full'>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Support" element={<ContactUs />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path='/BookService' element={<BookService />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default Main;