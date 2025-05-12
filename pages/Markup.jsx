import { Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Register from './Register';
import Login from './Login';

const Markup = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default Markup;
