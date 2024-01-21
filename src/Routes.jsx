import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ExchangePage1 = React.lazy(() => import("./pages/exchange/onepage"));
const CreaturesOfWorkPage1 = React.lazy(() => import("./pages/creaturesOfwork/onepage"));
const Register = React.lazy(() => import("./pages/register/index"));
const LoginPage1 = React.lazy(() => import("./pages/login/onepage"));
const FeaturedWorksPage1 = React.lazy(() => import("./pages/featuredworks/onepage"));
const Home = React.lazy(() => import("./pages/Home/index"));
const WorkPage = React.lazy(() => import("./pages/createanorder/work/index"));
const PostOrderPage = React.lazy(() => import("./pages/createanorder/postorder/index"));
const WeAbout = React.lazy(() => import("./pages/weabout/index"));
const HowItWorksPage = React.lazy(() => import("./pages/howitworks/index"));
const ServiceRules = React.lazy(() => import("./pages/servicerules/index"));
const SecurityPolicy = React.lazy(() => import("./pages/securitypolicy/index"));
const LoginPage2 = React.lazy(() => import("./pages/login/twopage"));
const ProfilePage1 = React.lazy(() => import("./pages/profile/onepage"));
const Search = React.lazy(() => import("./pages/profile/search/index"));
const MyOrderPage = React.lazy(() => import("./pages/createanorder/myorder/index"));
const OrderCreatorPage = React.lazy(() => import("./pages/createanorder/orderforcreator/index"));



const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchangePage1" element={<ExchangePage1 />} />
          <Route path="/CreaturesOfWorkPage1" element={<CreaturesOfWorkPage1 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginPage1" element={<LoginPage1 />} />
          <Route path="/featuredWorksPage1" element={<FeaturedWorksPage1 />} />
          <Route path="/workPage" element={<WorkPage />} />
          <Route path="/postOrderPage" element={<PostOrderPage/>} />
          <Route path="/weAbout" element={<WeAbout/>} />
          <Route path="/howItWorksPage" element={<HowItWorksPage/>} />
          <Route path="/securityPolicy" element={<SecurityPolicy/>} />
          <Route path="/serviceRules" element={<ServiceRules/>} />
          <Route path="/loginPage2" element={<LoginPage2/>} />
          <Route path="/profilePage1" element={<ProfilePage1/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/myOrderPage" element={<MyOrderPage/>} />
          <Route path="/orderCreatorPage" element={<OrderCreatorPage/>} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
