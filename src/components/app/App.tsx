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
import { useEffect } from 'react';
import { useAppDispatch } from '../../services/store';
import { LanguageMode } from '@utils-types';
import { setLanguage } from '../../services/slices/language-slice';
import { NotFound404 } from '../not-fount-404/not-fount-404';

const App = () => {
  const dispatch = useAppDispatch();

  const currientLanguageFromLocalStorage =
    localStorage.getItem(`currientLanguage`);

  useEffect(() => {
    if (!currientLanguageFromLocalStorage) {
      dispatch(setLanguage(LanguageMode.Russian));
    }

    if (currientLanguageFromLocalStorage) {
      dispatch(setLanguage(currientLanguageFromLocalStorage));
    }
  }, [dispatch]);

  return (
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
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
