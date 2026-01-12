import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/authentication/Login';
import ForgetPassword from '../pages/authentication/ForgetPassword';
import VerifyOtp from '../pages/authentication/VerifyOtp';
import NewPassword from '../pages/authentication/NewPassword';
import Dashboard from '../pages/dashboard/dashboard';
import TermsAndCondition from '../pages/dashboard/terms-and-condition';
import Profile from '../pages/dashboard/profile';
import PrivacyPolicy from '../pages/dashboard/privacy-policy';
import ErrorPage from '../pages/error/ErrorPage';
import FAQCategoryPage from '../pages/dashboard/faq';
import NotificationPage from '../pages/dashboard/notification';
import Administrators from '../pages/dashboard/administrators';
import CustomersPage from '../pages/dashboard/customers';
import ReviewsPage from '../pages/dashboard/reviews';
import SubscribersPage from '../pages/dashboard/subscriber';
import SubscriptionPage from '../pages/dashboard/subscription';
import AboutPage from '../pages/dashboard/about';
import ProvidersPage from '../pages/dashboard/providers';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'customer-management', element: <CustomersPage /> },
            { path: 'reviews', element: <ReviewsPage /> },
            { path: 'subscribers', element: <SubscribersPage /> },
            { path: 'provider-management', element: <ProvidersPage /> },
            { path: 'subscriptions', element: <SubscriptionPage /> },
            { path: 'administrators', element: <Administrators /> },
            { path: 'profile', element: <Profile /> },
            { path: 'notification', element: <NotificationPage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'privacy-policy', element: <PrivacyPolicy /> },
            { path: 'terms-and-condition', element: <TermsAndCondition /> },
            { path: 'faq', element: <FAQCategoryPage /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
]);

export default router;
