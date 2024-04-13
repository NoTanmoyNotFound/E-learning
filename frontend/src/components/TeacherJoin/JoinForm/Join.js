import React, { useState, useRef, useEffect } from 'react'
import Header from '../../Home/Header/Header'
import './Join.css'
import HeroChar from './assets/heroChar.png'
import Tjourney from './assets/Tjourney.png'
import Tinspire from './assets/Tinspire.png'
import Tearn from './assets/Tearn.png'
import TTeacher from './assets/TTeacher.png'
import TForm from './assets/TForm.jpg'
import Footer from '../../Home/Footer/Footer'
import { getDownloadURL, ref, getStorage, uploadBytesResumable } from "firebase/storage";
import { app } from '../../../firebase' 
const Join = () => {

  const fileRef = useRef(null);
  const [video, setVideo] = useState(undefined);
  const [idProof, setIdProof] = useState(undefined);
  const [resume, setResume] = useState(undefined);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState({
  });

  const [success , setSuccess] = useState(false);

  useEffect(() => {
      if (video) {
          handleVideoUpload(video);
      }

  }, [video]);

useEffect(() => {
    if (resume) {
      handleResumeUpload(resume);
    }

}, [resume]);

useEffect(() => {
  if (idProof) {
    handleidUpload(idProof);
  }

}, [idProof]);

  const handleVideoUpload = async (video) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + video.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, video);
      uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(Math.round(progress));
          },
          (error) => {
              
          },
          () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setFormData({ ...formData, video: downloadURL })
              });
          }
      );
  };

// id proff uploading
const handleidUpload = async (idProof) => {
  const storage = getStorage(app);
  const fileName = new Date().getTime() + idProof.name;
  const storageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(storageRef, idProof);
  uploadTask.on(
      'state_changed',
      (snapshot) => {
        console.log("ok");
      },
      (error) => {
          
      },
      () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData({ ...formData, idProof: downloadURL })
          });
      }
  );
};


const handleResumeUpload = async (resume) => {
  const storage = getStorage(app);
  const fileName = new Date().getTime() + resume.name;
  const storageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(storageRef, resume);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
    
    },
    (error) => {
      console.error("Error uploading resume:", error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFormData({ ...formData, resume: downloadURL });
      }).catch((error) => {
        console.error("Error getting resume download URL:", error);
      });
    }
  );
};














  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
     
      const res = await fetch("http://localhost:8000/api/teacher/teacherReq", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data);
        return;
      }

      if(data.success === true){


      setSuccess(true);
      setFormData({});
      setUploadProgress(0);
      setVideo(undefined);
      setIdProof(undefined);
      setResume(undefined);
      }
    } catch (error) {
      console.log(error);
      
    }
  }



  return (

    <div>
      <Header />

      <div className="Jhead-container">
        <div className="Jhero">
          <div className="baxo1">
            <h1>Teach with Us</h1>
            <h4> Inspire a global audience with us online.</h4>
          </div>
          <div className="baxo2">
            <img src={HeroChar} alt="" />
          </div>
        </div>
      </div>


      <div className='nd-container'>
        <div className='nd-head'>
          <h1>Let Your Passion for Teaching Emerge</h1>
          <h3>Unleash Your True Potential With Us</h3>
        </div>
        <div className="nd-body">
          <div className="pixx">
            <img src={Tjourney} />
            <p>Enhance Your Teaching Journey</p>
          </div>
          <div className="pixx">
            <img src={Tinspire} />
            <p>Reach Learners Worldwide</p>
          </div>
          <div className="pixx">
            <img src={Tearn} />
            <p>Teach Online and Earn</p>
          </div>
        </div>
      </div>


      <div className="rd-container">

        <div className="accordiano">
          <img src={TTeacher} className='mt-4' />
        </div>
        <div className="accordian">
          <li className='box-shadow'>
            <input type="radio" name="accordian" id="first" checked />
            <label htmlFor="first" id='label'>Design Your Curriculum</label>
            <div className="content ">

              <li>Choose a topic that aligns with your expertise and interests as an instructor.</li>
              <li>Develop a comprehensive curriculum that covers the essential concepts and learning outcomes related to the topic.</li>
              <li>Structure the curriculum in a logical and progressive manner, ensuring a smooth flow of knowledge for learners to easily comprehend.</li>
              <li className='pb-4'>Incorporate a variety of teaching materials, such as lectures, assignments, quizzes, and supplementary resources, to enhance the learning experience.
              </li>

            </div>
          </li>


          <li className='box-shadow'>
            <input type="radio" name="accordian" id="second" />
            <label htmlFor="second" id='label'>Course Creation and Publication</label>
            <div className="content">

              <li>Start recording your new course or you can publish your pre-existing courses as well. Simply Sign-Up/Sign-in with us to access your author dashboard.</li>
              <li className='pb-4'>Create your course draft, add the course information, upload the videos, and submit it for moderation. (Note: Adding thorough information about the course helps the students to get a better understanding)</li>

            </div>
          </li>

          <li className='box-shadow'>
            <input type="radio" name="accordian" id="third" />
            <label htmlFor="third" id='label'>Profile Optimization</label>
            <div className="content">

              <li className='pb-4'>Your Author Profile is the key to attracting more students. Upload your profile picture and write a bio as well to optimize your profile.</li>
            </div>
          </li>
        </div>

      </div>

      <div className="form-container">
        <div className='form-control1'>
          <img src={TForm} />
        </div>


        <div className="form-control mt-5">
          <form action='' onSubmit={handleSubmit}>
            <h2>Send Your Details</h2>
            <div className="inputBox">
              <input type="text" required="required" name='fullname' onChange={handleChange} />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" required="required" name='email' onChange={handleChange} />
              <span>Email</span>
            </div>

            <div className="inputBox">
              <input type="text" required="required" name='phone' onChange={handleChange} />
              <span>Phone No.</span>
            </div>


            <div className="inputBox ">
              <input type="text" required="required" name='organization' onChange={handleChange} />
              <span>Current Organization</span>
            </div>
            <div className="inputBox">
              <input type="file" id="idProofInput" accept=".pdf" style={{ display: "none" }} name='idProof'  onChange={(e) => setIdProof(e.target.files[0])} />
              <span>ID Proof (PDF only)</span>
              <br />
              <label htmlFor="idProofInput" className="fileButton">Select File</label>
            </div>
            <div className="inputBox ">
              <input type="file" id="resumeInput" accept=".pdf,.jpg,.png" style={{ display: "none" }} name='resume'  onChange={(e) => setResume(e.target.files[0])}  />
              <span>Resume Upload (PDF, JPG, PNG)</span>
              <br />
              <label htmlFor="resumeInput" className="fileButton">Select File</label>
            </div>
            <div className="inputBox ">

              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[0])}
                ref={fileRef}
                id='videoUplode'
                
              />
              <br />
              <label htmlFor="videoUplode" className="fileButton">Select File</label>
              {uploadProgress > 0 && <p className=' text-2xl text-green-300'>Upload Progress: {uploadProgress}%</p>}
            </div>

            <div className="inputBox flex justify-end">
              <button type="submit" className="fileButton" disabled={uploadProgress !== 100}>Send</button>
            </div>

            {success && (<div className="success-message" style={{ color: 'green' }}>Form submitted successfully!</div>)}



          </form>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Join