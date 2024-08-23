import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Home from '../../pages/home/Home';
import ProjectApps from '../../pages/projects-apps/Projects-Apps';
import ProjectLayouts from '../../pages/projects-layouts/Projects-Layouts';
import ProjectPage from '../../pages/project/Project-page';
import Contacts from '../../pages/contacts/Contacts';
import ScrollToTop from '../../utils/scrollToTop';

const App = () => (
  <div className='App'>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apps' element={<ProjectApps />} />
        <Route path='/layouts' element={<ProjectLayouts />} />
        <Route path='/apps/:id' element={<ProjectPage />} />
        <Route path='/layouts/:id' element={<ProjectPage />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
