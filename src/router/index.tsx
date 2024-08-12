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
import TermsForm from '@/components/signup/TermsForm';
import POIPage from '@/pages/poi';
import POIListPage from '@/pages/poi-list';
import SearchRoutesPage from '@/pages/search-routes';
import PoiModifyPage from '@/pages/poi-modify';
import MyPage from '@/pages/mypage';
import ProfileDetailsForm from '@/components/signup/profileDetailsForm/ProfileDetailsForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route index element={<MainPage />} />
        <Route path='/search/poi' element={<SearchPage />} />
        <Route path='/search/routes' element={<SearchRoutesPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='/pois' element={<POIListPage />} />
        <Route path='/pois/:id' element={<POIPage />} />
        <Route path='/pois/:id/modify' element={<PoiModifyPage />} />
        <Route path='/my' element={<MyPage />} />
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
