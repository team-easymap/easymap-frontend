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
import PoiReviewMidifyPage from '@/pages/poi-review-modify';
import SearchPOIResultPage from '@/pages/search-poi-result';
import PoiRegisterPage from '@/pages/poi-register';
import ProfileEdit from '@/pages/profileEdit';
import SearchRoutesResultPage from '@/pages/search-routes-result';
import MyReviews from '@/pages/myReviews';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route index element={<MainPage />} />
        <Route path='/search/poi' element={<SearchPage />} />
        <Route path='/search/poi/:id' element={<SearchPOIResultPage />} />
        <Route path='/search/routes' element={<SearchRoutesPage />} />
        <Route
          path='/search/routes/:type'
          element={<SearchRoutesResultPage />}
        />
        <Route path='login' element={<LoginPage />} />
        <Route path='/pois' element={<POIListPage />} />
        <Route path='/pois/:id' element={<POIPage />} />
        <Route path='/pois/:id/modify' element={<PoiModifyPage />} />
        <Route path='/pois/register' element={<PoiRegisterPage />} />
        <Route path='/my' element={<MyPage />} />
        <Route path='/my/reviews' element={<MyReviews />} />
        <Route path='/profileEdit' element={<ProfileEdit />} />
        <Route
          path='/pois/:id/review/modify'
          element={<PoiReviewMidifyPage />}
        />
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
