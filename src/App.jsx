import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Profile from "./components/Profile.jsx"
import { createContext, useState } from "react"

export const ProfileContext = createContext();

function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
      mutations: {

      },
    }
  });

  const [username, setUsername] = useState('Default')

  return (
    <div>
      <QueryClientProvider client={client}>
        <ProfileContext.Provider value={
          {
            username, setUsername,
          }
        }>
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
        </ProfileContext.Provider>
      </QueryClientProvider>
    </div>
  )
}

export default App
