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
import MainCourse from "./components/AllCourses/MainCourse/MainCourse";
import Main_Course2 from "./components/AllCourses/MainCourse/Main_Course2";
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
import Bank_Details from "./components/TeacherDashbord/Bank_Details/Bank_Details";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import PrivateRouer from "./page/PrivateRouer";
import SuperPrivateRoute from "./page/SuperPrivateRoute";
import Signinprotact from "./page/Signinprotact";
import Careersuport from "./page/Careersuport";
import Formcareer from "./page/Formcareer";
import Contact from "./components/ContactUs/Contact";
import Error from "./components/Error/Error";
import Banned from "./components/Error/Banned";

//super-admin-routes start
import S_home from "./components/SuperAdmin/S_home/S_home";
import TeacherRequest from "./components/SuperAdmin/Request/TeacherRequest";
import Student from "./components/SuperAdmin/Student/Student";
import Category from "./components/SuperAdmin/Category/Category";
import Teachers from "./components/SuperAdmin/Teachers/Teachers";
import Users from "./components/SuperAdmin/Users/Users";
//super-admin-routes end

import ForgotPassword from "./page/ForgotPassword";
import ProfileCourse from "./components/Profile/ProfileView/ProfileCourse";
import DeleteProfile from "./components/Profile/ProfileView/DeleteProfile";
import UpdateCourse from "./components/TeacherDashbord/TA_Update/UpdateCourse";
import ChangeCourse from "./components/TeacherDashbord/TA_Update/ChangeCourse";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <BrowserRouter>
      <Routes>

      <Route path="*" element={<Error />} />
      <Route path="/not-found" element={<Banned />} />



   
        <Route path="/" element={<Home />} />
        <Route path="/allCourses" element={<AllCourses />} />
        <Route path="/course-details/:courseId" element={<SingleCourseDetails />} />
        <Route path="/MainCourse/:courseId" element={<MainCourse />} />
        <Route path="/Main_Course2" element={<Main_Course2 />} />






        <Route path="/Homeblogs" element={<Homeblogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/CategorySelection" element={<CategorySelection />} />

        <Route element={<PrivateRouer />}>
          <Route path="/Profile" element={<ProfileView />} />
          <Route path="/ProfileCourse" element={<ProfileCourse />} />
          <Route path="/DeleteProfile" element={<DeleteProfile />} />
        </Route>

        <Route path="/EditProfile" element={<EditSidebar />}>
          <Route index element={<ProfileEdit />} />
          <Route path="EditInfo" element={<EditInfo />} />
          <Route path="EditSocial" element={<EditSocial />} />
          <Route path="EditPassword" element={<EditPassword />} />
        </Route>

        <Route path="/Join" element={<Join />} />


        
        <Route path="/teacherDashbord"  element={<TeacherAdminMain />}>
          <Route index element={<TA_Analytics />} />
          <Route path="TeacherPayment" element={<TA_Payment />} />
          <Route path="TeacherFeedback" element={<TA_Feedback />} />
          <Route path="TeacherCourse" element={<MyCourses />} />
          <Route path="updateCourse" element={<UpdateCourse />} />
          <Route path="changeCourse/:courseId" element={<ChangeCourse />} />
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





      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
