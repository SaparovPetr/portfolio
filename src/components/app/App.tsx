import './styles/main.css';

import { useEffect } from 'react';

import { LanguageMode } from '@utils-types';
import { Routes, Route } from 'react-router-dom';

import { projectsApps } from '../../helpers/projectsAppList';
import { projectsLayouts } from '../../helpers/projectsLayoutList';
import Contacts from '../../pages/contacts/Contacts';
import Home from '../../pages/home/Home';
import MyProjects from '../../pages/my-projects/my-projects';
import ProjectPage from '../../pages/project/Project-page';
import { setLanguage } from '../../services/slices/language-slice';
import { useAppDispatch } from '../../services/store';
import ScrollToTop from '../../utils/scrollToTop';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
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
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apps' element={<MyProjects array={projectsApps} />} />
        <Route path='/apps/:id' element={<ProjectPage />} />
        <Route
          path='/layouts'
          element={<MyProjects array={projectsLayouts} />}
        />
        <Route path='/layouts/:id' element={<ProjectPage />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
