import React from 'react'
import './ProfileEdit.css'
import profile from "../ProfileView/assets/profile.png"
import { useState, useRef, useEffect } from 'react'
import { getDownloadURL, ref, getStorage, uploadBytesResumable } from "firebase/storage"
import { app } from '../../../firebase'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStart, updateUserSuccess, updateUserFailure, } from '../../../redux/user/userSlice'







const ProfileEdit = () => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({
  });
  const [updateSuccess, setUpdateSuccess] = useState(null);

  const { currentUser, loading, error } = useSelector((state) => state.user);
  console.log(currentUser.role);

  const [profilePic, setProfilePic] = useState(profile);
  // const handleFileChange = (event) => {
  //     const files = event.target.files;
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //         setProfilePic(reader.result);
  //         setInputdata({ ...inputdata, pic: files });
  //     };

  //     if (files.length > 0) {
  //         reader.readAsDataURL(files[0]);
  //     }
  // };
  // const handleReset = () => {
  //     setProfilePic(profile); // Reset profile picture to default
  //     setInputdata({ ...inputdata, pic: "" }); // Clear the pic field in inputdata
  // };



  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     // console.log(`Name: ${name}, Value: ${value}`);

  //     if (name === 'pic') {
  //         setInputdata({ ...inputdata, [name]: e.target.files[0] });
  //     } else {
  //         // For other input fields (funame, email, password)
  //         setInputdata({ ...inputdata, [name]: value });
  //     }
  // }

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);



  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      console.log("ok");
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(formData),
      });
      console.log("ok");
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        setUpdateSuccess("Somthing Wrong");
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess('Update success fully');
    } catch (error) {
      dispatch(updateUserFailure(error));
      setUpdateSuccess(error);

    }
  };



  console.log(formData);








  return (

    <div>

      <div className="tab-pane fade active show" id="account-general">
        <form action="" onSubmit={handleSubmit}>
          <div className="card-body media align-items-center">
            <img src={formData.profilePicture || currentUser.profilePicture}
              alt='profile' onClick={() => fileRef.current.click()} height={100} width={100} id="pfp" className='mb-2 object-cover rounded-full bg-white' />

            <div className="media-body ml-4">
              <label className="btn btn-outline-primary">
                Upload new photo
                <input type="file" name='pic' accept='image/*'
                  onChange={(e) => setImage(e.target.files[0])}
                  ref={fileRef} className="account-settings-fileinput" />
              </label> &nbsp;
              <button type="reset" className="btn btn-default md-btn-flat">Reset</button>
              <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
            </div>
          </div>
          <hr className="border-light m-0" />
          <div className="card-body pt-0">
            <div className="form-group">
              <label className="form-label">Username</label>
              <input type="text" name='username' className="form-control mb-1" defaultValue="" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" name='fullname' className="form-control" defaultValue="" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">E-mail</label>
              <input type="text" name='email' className="form-control mb-1" defaultValue="" onChange={handleChange} />
            </div>

            <div className="form-group flex items-center justify-center p-2 mb-0">
              <button
                type='submit'
                className='SubmitButton border border-black w-24 pt-3 pb-3 bg-blue-600 text-white rounded-md' style={{ backgroundColor: "#26B4FF", transition: "background-color 0.3s" }}
                onMouseOver={(e) => { e.target.style.backgroundColor = "#FFFFFF"; }}
                onMouseOut={(e) => { e.target.style.backgroundColor = "#26B4FF"; }}
              > Submit
              </button>

            </div>

          </div>
          {updateSuccess && <p>{updateSuccess}</p>}
        </form>
      </div>

    </div>
  )
}

export default ProfileEdit
