import React, { Suspense } from 'react';
import {Routes} from 'react-router';
import { HashRouter, Route} from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/main.scss'; // All of our styles
import About from './pages/About';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

const { PUBLIC_URL } = process.env;



const App = () => (
  <HashRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route element={<NotFound />} status={404} />
      </Routes>
    </Suspense>
  </HashRouter>
);

export default App;
