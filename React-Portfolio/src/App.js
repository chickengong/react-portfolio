import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

function App() {
  // const [selectedPage, setselectedPage] = useState("about");

  const title = 'Ellexandra Cox || React - Portfolio';
  useEffect(() => {
    document.title = title;
  }, []);

  document.body.style.backgroundColor = '#2d2d30';
  document.body.style.paddingBottom = '120px'

  return (
    <div className="App">
      <Router>
        <Nav />
          <Routes>
            <Route
              path='/'
              element={<About />}
            />
            <Route
              path='/projects'
              element={<Projects />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
            <Route
              path='/resume'
              element={<Resume />}
            />
            <Route
              path='*'
              element={<About />}
            />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
