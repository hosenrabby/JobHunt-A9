import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import RootLayout from "../RootLayout/RootLayout";
import CompanyDetails from "../Pages/CompanyDetails";
import { Suspense } from "react";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import Ragister from "../auth/Ragister";
import SignIn from "../auth/SignIn";
import AuthLayout from "../auth/AuthLayout";
import PrivateRoute from "../Private/PrivateRoute";
import AboutUs from "../Pages/AboutUs";
import ForgotPassword from "../auth/ForgotPassword";
import UpdateProfile from "../Pages/UpdateProfile";

const companyData = fetch("/companysData.json").then(res => res.json())
const companyJobData = fetch("/companyJobData.json").then(res => res.json())
const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout></RootLayout>,
        errorElement: <div>nai ei page</div>,
        children: [
            { index: true, element: <Home></Home> },
            {
                path: '/companydetails/:compID',
                errorElement: <ErrorPage></ErrorPage>,
                element: <PrivateRoute>
                    <Suspense fallback={<div className="min-h-screen text-center"><span className="loading loading-bars loading-xl"></span></div>}>
                        <CompanyDetails companyData={companyData} companyJobData={companyJobData}></CompanyDetails>
                    </Suspense>
                </PrivateRoute>
            },
            {
                path: '/about',
                errorElement: <ErrorPage></ErrorPage>,
                element: <AboutUs></AboutUs>
            },
            {
                path: '/profile',
                errorElement: <ErrorPage></ErrorPage>,
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
                children: [
                    {
                        path: '/profile/update',
                        errorElement: <ErrorPage></ErrorPage>,
                        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
                    },
                ]
            },
        ]

    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/register',
                errorElement: <ErrorPage></ErrorPage>,
                element: <Ragister></Ragister>
            },
            {
                path: '/auth/signin',
                errorElement: <ErrorPage></ErrorPage>,
                element: <SignIn></SignIn>
            },
            {
                path: '/auth/forgot-password',
                errorElement: <ErrorPage></ErrorPage>,
                element: <ForgotPassword></ForgotPassword>
            },
        ]
    },
    {
        path: '/*', element: <ErrorPage></ErrorPage>
    }
])

export default router