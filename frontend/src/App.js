import { useState } from 'react';
import Home from "./components/Home/Home";
import AllCourses from "./components/AllCourses/AllCourses";
import SuperMain from './components/SuperAdmin/SuperMain';
import UploadCource from './components/UploadCource/UploadCource';
import SuperCourse from './components/SuperAdmin/SuperCourse/SuperCourseTitleUpload/SuperCourse';
import Homeblogs from './components/BlogsMain/Blogs/Homeblogs';
import SingleBlog from './components/BlogsMain/Blogs/Singleblog/SingleBlog';
import CategorySelection from './components/BlogsMain/Blogs/CategorySelection/CategorySelection';
import SuperCourseDash from './components/SuperAdmin/SuperCourse/SuperCourseDashboard/SuperCourseDash';
import ProfileView from './components/Profile/ProfileView/ProfileView';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ProfileEdit from './components/Profile/ProfileEdit/ProfileEdit';
import EditSidebar from './components/Profile/ProfileEdit/EditSidebar';
import ProfileEdit from './components/Profile/ProfileEdit/ProfileEdit';
import EditInfo from './components/Profile/ProfileEdit/EditInfo';
import EditSocial from './components/Profile/ProfileEdit/EditSocial';
import EditPassword from './components/Profile/ProfileEdit/EditPassword';
import Join from './components/TeacherJoin/JoinForm/Join';
import TeacherAdminMain from './components/TeacherDashbord/TeacherAdminMain';
import TA_Analytics from './components/TeacherDashbord/TA_Analytics/TA_Analytics';
import TA_Feedback from './components/TeacherDashbord/TA_Feedback/TA_Feedback';
import MyCourses from './components/TeacherDashbord/TA_MyCourses/MyCourses';
import TA_Payment from './components/TeacherDashbord/TA_Payment/TA_Payment';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allCourses' element={<AllCourses />} />
        <Route path='/superadmin' element={<SuperMain />} />
        <Route path='/dashBoard' element={<SuperMain />} />
        <Route path='/uploadd' element={<UploadCource />} />
        <Route path='/superCourseTitle' element={<SuperCourse />} />
        <Route path='/Homeblogs' element={<Homeblogs />} />
        <Route path='/blogs/:id' element={<SingleBlog />} />
        <Route path='/CategorySelection' element={<CategorySelection />} />
        <Route path='/SuperCourseDash' element={<SuperCourseDash />} />
        <Route path='/Profile' element={<ProfileView />} />


        <Route path='/EditProfile' element={<EditSidebar/>} >
        

        

        <Route index element={<ProfileEdit/>} />
        <Route path='EditInfo' element={<EditInfo/>}/>
        <Route path='EditSocial' element={<EditSocial/>} />
        <Route path='EditPassword' element={<EditPassword/>} />

        </Route>

        <Route path='/Join' element={<Join/>}/>
        <Route path='/techerDashbord'element={<TeacherAdminMain />}/>
        <Route path='/TeacherAnalytics' element={<TA_Analytics /> } />
        <Route path='/TeacherPayment' element={<TA_Payment/>} />
        <Route path='/TeacherFeedback' element={<TA_Feedback />} />
        <Route path='/TeacherCourse' element={<MyCourses />} />     

      </Routes>
    </BrowserRouter>
  );
}

export default App;
