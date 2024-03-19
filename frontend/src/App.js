import { useState } from 'react';
import Home from "./components/Home/Home";
import AllCourses from "./components/AllCourses/AllCourses";
import SuperMain from './components/SuperAdmin/SuperMain';
import UploadCource from './components/UploadCource/UploadCource';
import Homeblogs from './components/BlogsMain/Blogs/Homeblogs';
import SingleBlog from './components/BlogsMain/Blogs/Singleblog/SingleBlog';
import CategorySelection from './components/BlogsMain/Blogs/CategorySelection/CategorySelection';
import SuperCourseDash from './components/SuperAdmin/SuperCourse/SuperCourseDashboard/SuperCourseDash';
import S_TeacherVE from './components/SuperAdmin/S_TeacherViewEdit/S_TeacherVE';
import Test from './components/TestPage/Test';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        <Route path='/Homeblogs' element={<Homeblogs />} />
        <Route path='/blogs/:id' element={<SingleBlog />} />
        <Route path='/CategorySelection' element={<CategorySelection />} />
        <Route path='/SuperCourseDash' element={<SuperCourseDash />} />
        <Route path='/superTeachers' element={<S_TeacherVE />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
