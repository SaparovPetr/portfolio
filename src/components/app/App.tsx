import './styles/main.css';
import { Routes, Route } from 'react-router-dom';
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
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/apps' element={<ProjectApps />} />
      <Route path='/apps/:id' element={<ProjectPage />} />
      <Route path='/layouts' element={<ProjectLayouts />} />
      <Route path='/layouts/:id' element={<ProjectPage />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
    <Footer />
  </div>
);
export default App;
