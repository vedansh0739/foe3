import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Post from './components/Post';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Vedansh Bagadia';
  }, []); 
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/vedansh_bagadia" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
