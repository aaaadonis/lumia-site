import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Personal from './pages/Personal'
import Press from './pages/Press'
import Fashion from "./pages/Fashion";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Press" element={<Press />} />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/Fashion" element={<Fashion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
