import './App.css';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>My Articles</h1>
        {['Home', 'About', 'Contact'].map((lk) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: 'block',
                background: isActive ? '#333' : '',
                textDecoration: 'none',
                padding: '4px 10px',
                borderRadius: '5px',
                color: isActive ? 'white' : '#333',
              };
            }}
            to={lk === 'Home' ? '/' : lk.toLowerCase()}
            key={lk}
          >
            {lk}
          </NavLink>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
