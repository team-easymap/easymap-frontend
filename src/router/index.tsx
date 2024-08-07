import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/main';
import SearchPage from '@/pages/search';
import LoginPage from '@/pages/login';
import SignupPage from '@/pages/signup';
import UserInfoForm from '@/components/signup/UserInfoForm';
import ProfileDetailsForm from '@/components/signup/ProfileDetailsForm';
import TermsForm from '@/components/signup/TermsForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route index element={<MainPage />} />
        <Route path='/search/location' element={<SearchPage />} />
        <Route path='/search/routes' element={<SearchPage />} />
        <Route path='login' element={<LoginPage />} />
      </Route>
      <Route path='/signup' element={<SignupPage />}>
        <Route index element={<UserInfoForm />} />
        <Route path='profileDetails' element={<ProfileDetailsForm />} />
        <Route path='Terms' element={<TermsForm />} />
      </Route>
    </>
  )
);

export default router;
