import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/src/AboutUs.jsx" element={<AboutUs />} />
        <Route path="/src/Support.jsx" element={<Support />} />
        {/* Add other pages here */}
      </Routes>
    </Router>
  );
}

export default App;