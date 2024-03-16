import React from 'react'
import Header from '../../Home/Header/Header'
import './Join.css'
import HeroChar from './assets/heroChar.png'
import Tjourney from './assets/Tjourney.png'
import Tinspire from './assets/Tinspire.png'
import Tearn from './assets/Tearn.png'
import TTeacher from './assets/TTeacher.png'
import TForm from './assets/TForm.jpg'
import Footer from '../../Home/Footer/Footer'

const Join = () => {
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
          <form action="your-server-endpoint">
            <h2>Send Your Details</h2>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>Email</span>
            </div>

            <div className="inputBox">
              <input type="text" required="required" />
              <span>Phone No.</span>
            </div>


            <div className="inputBox ">
              <input type="text" required="required" />
              <span>Current Organization</span>
            </div>
            <div className="inputBox">
              <input type="file" id="idProofInput" accept=".pdf" style={{ display: "none" }} onChange={(e) => handleFileSelect(e, 'idProof')} />
              <span>ID Proof (PDF only)</span>
              <br />
              <label htmlFor="idProofInput" className="fileButton">Select File</label>
            </div>
            <div className="inputBox ">
              <input type="file" id="resumeInput" accept=".pdf,.jpg,.png" style={{ display: "none" }} onChange={(e) => handleFileSelect(e, 'resume')} />
              <span>Resume Upload (PDF, JPG, PNG)</span>
              <br />
              <label htmlFor="resumeInput" className="fileButton">Select File</label>
            </div>

            <div className="inputBox flex justify-end">
              <button type="submit" className="fileButton">Send</button>
            </div>

          </form>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Join
