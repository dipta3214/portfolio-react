import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="box">
      <header className="row header">
        <Nav />
      </header>
      <main className="content row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="row footer">Footer</footer>
    </div>
  );
}

export default App;
