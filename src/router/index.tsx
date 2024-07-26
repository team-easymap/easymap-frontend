import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/main';
import SearchPage from '@/pages/search';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<MainPage />} />
      <Route path='/search' element={<SearchPage />} />
    </Route>
  )
);

export default router;
