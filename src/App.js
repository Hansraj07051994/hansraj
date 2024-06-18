import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './cmp/homepage/index.jsx';
import Resume from './cmp/resume/index.jsx';
import Project from './cmp/project/index.jsx';
import Contact from './cmp/contact/index.jsx';
import NotFound from './cmp/pagenotfound/index.jsx';

function App() {
  return (
    <>
      <Router>
        
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        
      </Router>
    </>
  );
}

export default App;
