import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/main';
import SearchPage from '@/pages/search';
import LoginPage from '@/pages/login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<MainPage />} />
      <Route path='/search/location' element={<SearchPage />} />
      <Route path='/search/routes' element={<SearchPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Route>
  )
);

export default router;
