import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Profile from "./components/Profile.jsx"

function App() {


  return (
    <div>
      <Router>
        <div>This Is Header</div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:name?" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
