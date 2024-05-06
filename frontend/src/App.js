import { useState } from "react";
import Home from "./components/Home/Home";
import SuperMain from "./components/SuperAdmin/SuperMain";
import Homeblogs from "./components/BlogsMain/Blogs/Homeblogs";
import SingleBlog from "./components/BlogsMain/Blogs/Singleblog/SingleBlog";
import CategorySelection from "./components/BlogsMain/Blogs/CategorySelection/CategorySelection";
import ProfileView from "./components/Profile/ProfileView/ProfileView";

//course routes start
import AllCourses from "./components/AllCourses/AllCourses";
import SingleCourseDetails from "./components/AllCourses/SingleCourseDetails/SingleCourseDetails";
//course routes end

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProfileEdit from './components/Profile/ProfileEdit/ProfileEdit';
import EditSidebar from "./components/Profile/ProfileEdit/EditSidebar";
import ProfileEdit from "./components/Profile/ProfileEdit/ProfileEdit";
import EditInfo from "./components/Profile/ProfileEdit/EditInfo";
import EditSocial from "./components/Profile/ProfileEdit/EditSocial";
import EditPassword from "./components/Profile/ProfileEdit/EditPassword";
import Join from "./components/TeacherJoin/JoinForm/Join";
import TeacherAdminMain from "./components/TeacherDashbord/TeacherAdminMain";
import TA_Analytics from "./components/TeacherDashbord/TA_Analytics/TA_Analytics";
import TA_Feedback from "./components/TeacherDashbord/TA_Feedback/TA_Feedback";
import MyCourses from "./components/TeacherDashbord/TA_MyCourses/MyCourses";
import TA_Payment from "./components/TeacherDashbord/TA_Payment/TA_Payment";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import PrivateRouer from "./page/PrivateRouer";
import SuperPrivateRoute from "./page/SuperPrivateRoute";
import Signinprotact from "./page/Signinprotact";
import Careersuport from "./page/Careersuport";
import Formcareer from "./page/Formcareer";
import Contact from "./components/ContactUs/Contact";
import Error from "./components/Error/Error";

//super-admin-routes start
import S_home from "./components/SuperAdmin/S_home/S_home";
import TeacherRequest from "./components/SuperAdmin/Request/TeacherRequest";
import Student from "./components/SuperAdmin/Student/Student";
import Category from "./components/SuperAdmin/Category/Category";
import Teachers from "./components/SuperAdmin/Teachers/Teachers";
import Users from "./components/SuperAdmin/Users/Users";
//super-admin-routes end

import ForgotPassword from "./page/ForgotPassword";
import Payment from "./page/Payment";


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/error-not-found" element={<Error />} />



   
        <Route path="/" element={<Home />} />
        <Route path="/allCourses" element={<AllCourses />} />
        <Route path="/course-details/:courseId" element={<SingleCourseDetails />} />






        <Route path="/Homeblogs" element={<Homeblogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/CategorySelection" element={<CategorySelection />} />

        <Route element={<PrivateRouer />}>
          <Route path="/Profile" element={<ProfileView />} />
        </Route>

        <Route path="/EditProfile" element={<EditSidebar />}>
          <Route index element={<ProfileEdit />} />
          <Route path="EditInfo" element={<EditInfo />} />
          <Route path="EditSocial" element={<EditSocial />} />
          <Route path="EditPassword" element={<EditPassword />} />
        </Route>

        <Route path="/Join" element={<Join />} />


        
        <Route path="/techerDashbord"  element={<TeacherAdminMain />}>
          <Route index element={<TA_Analytics />} />
          <Route path="TeacherPayment" element={<TA_Payment />} />
          <Route path="TeacherFeedback" element={<TA_Feedback />} />
          <Route path="TeacherCourse" element={<MyCourses />} />
        </Route>

        <Route path="/ForgotPassword" element={<ForgotPassword />} />

       

        <Route path="/careersuport" element={<Careersuport />} />
        <Route path="/careerform" element={<Formcareer />} />
        <Route path="/Contact" element={<Contact />} />
       




        <Route element={<SuperPrivateRoute />}>
          <Route path="/superadmin" element={<SuperMain />}>
            <Route index element={<S_home />} />
            <Route path="request" element={<TeacherRequest />} />
            <Route path="students-details" element={<Student />} />
            <Route path="category-details" element={<Category />} />
            <Route path="teachers-details" element={<Teachers />} />
            <Route path="users-details" element={<Users />} />
          </Route>
        </Route>




        <Route element={<Signinprotact />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>











        <Route path="payment" element={<Payment/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
