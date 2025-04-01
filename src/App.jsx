import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Safety from './pages/Safety';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogPostDetail from './components/blog/BlogPostDetail';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import BookRide from './pages/BookRide';
import Press from './pages/Press';
import Corporate from './pages/Corporate';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book-ride" element={<BookRide />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
