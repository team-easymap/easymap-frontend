import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import { lazy } from 'react';
const App = lazy(() => import('../App'));
const MainPage = lazy(() => import('../pages/main'));
const SearchPage = lazy(() => import('@/pages/search'));
const LoginPage = lazy(() => import('@/pages/login'));
const SignupPage = lazy(() => import('@/pages/signup'));
const UserInfoForm = lazy(() => import('@/components/signup/UserInfoForm'));
const TermsForm = lazy(() => import('@/components/signup/TermsForm'));
const POIPage = lazy(() => import('@/pages/poi'));
const SearchRoutesPage = lazy(() => import('@/pages/search-routes'));
const SearchRoutesResultPage = lazy(
  () => import('@/pages/search-routes-result')
);
const PoiModifyPage = lazy(() => import('@/pages/poi-modify'));
const ProfileDetailsForm = lazy(
  () => import('@/components/signup/profileDetailsForm/ProfileDetailsForm')
);
const PoiReviewRegisterPage = lazy(() => import('@/pages/poi-review-register'));
const PoiReviewModifyPage = lazy(() => import('@/pages/poi-review-modify'));
const SearchPOIResultPage = lazy(() => import('@/pages/search-poi-result'));
const PoiRegisterPage = lazy(() => import('@/pages/poi-register'));
const MyPage = lazy(() => import('@/pages/mypage'));
const MyReviews = lazy(() => import('@/pages/myReviews'));

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
        <Route path='/pois/:id' element={<POIPage />} />
        <Route path='/pois/:id/modify' element={<PoiModifyPage />} />
        <Route path='/pois/register' element={<PoiRegisterPage />} />
        <Route path='/my' element={<MyPage />} />
        <Route path='/my/reviews' element={<MyReviews />} />
        <Route
          path='/pois/:id/review/register'
          element={<PoiReviewRegisterPage />}
        />
        <Route
          path='/pois/:id/review/:reviewid/modify'
          element={<PoiReviewModifyPage />}
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
