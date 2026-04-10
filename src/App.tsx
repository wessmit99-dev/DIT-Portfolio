import { Routes, Route } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HomePage from '@/pages/home';
import ServicesPage from '@/pages/services';
import ProjectsPage from '@/pages/projects';
import ContactPage from '@/pages/contact';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#131313', color: '#f5f5f5', fontFamily: "'Inter', sans-serif" }}>
      <Nav />
      <main>
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
