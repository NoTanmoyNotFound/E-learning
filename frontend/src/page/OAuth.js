import React from 'react'
import { GoogleAuthProvider, signInWithPopup , getAuth } from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signinSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

function OAuth() {
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
    
      const handelGoogleClick = async () => {
    
        try {
          const provider = new GoogleAuthProvider();

    
          const auth = getAuth(app);
          const result = await signInWithPopup(auth, provider);
          const storeduser = result.user;
          const res = await fetch('http://localhost:8000/api/auth/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: storeduser.displayName,
              email: storeduser.email,
              photo : storeduser.photoURL
            })

           
          })

    
          const data = await res.json();
          dispatch(signinSuccess(data)) 
    
          navigate('/');
    
    
        } catch (error) {
          console.log("can't login",error)
          
        }
    
    
    
      }
      const buttonStyles = {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '2rem',    // rounded-lg
        textTransform: 'uppercase', // uppercase
        color: '#000',            // text-white
        padding: '0.10rem',         // p-3
        hoverOpacity: '0.95',       // hover:opacity-95
        transition: 'opacity 0.3s ease', // Hover transition (optional)
        cursor: 'pointer'            // Cursor pointer (optional)
    };
    const iconStyles = {
      marginRight: '0.5rem',
  };
    
      return (
        <button type='button' onClick={handelGoogleClick} style={buttonStyles} className=' bg-red-700 rounded-lg uppercase text-white p-2 hover:opacity-95 text-center'><p className='flex flex-row text-center items-center justify-center gap-1 text-black tex-tbold'><FcGoogle size={14} />  google</p></button>

    
      )
    }
 

export default OAuth
