import React, { useEffect, useState } from 'react';
import './MyCourses.css';
import axios from 'axios';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { app } from '../../../firebase';

const MyCourses = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    price: '',
    duration: ''
  });
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);

  useEffect(() => {
    if (videoFile) {
      uploadFile(videoFile, "videoUrl");
    }
  }, [videoFile]);

  useEffect(() => {
    if (thumbnailFile) {
      uploadFile(thumbnailFile, "imageUrl");
    }
  }, [thumbnailFile]);

  const uploadFile = async (file, fileType) => {
    const storage = getStorage(app);
    const folder = fileType === 'image' ? 'images/' : 'videos/';
    const filename = new Date().getTime() + '_' + file.name;
    const storageRef = ref(storage, folder + filename);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (fileType === 'image') {
          setImgPerc(Math.round(progress));
        } else {
          setVideoPerc(Math.round(progress));
        }

        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at:', downloadURL);
          setInputs((prev) => ({
            ...prev,
            [fileType]: downloadURL,
          }));
          if (inputs.video && inputs.image) {
            await handleSubmit(); // Call handleSubmit when both files are uploaded
          }
        } catch (error) {
          console.error("Error getting download URL:", error);
        }
      }
    );
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:8000/api/upload/course`, { ...inputs });
      window.location.reload();
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="main">
      <h1 className='headName'>Course Upload Form</h1>
      <form className="formSec" onSubmit={(e) => { e.preventDefault(); }}>
        <div className="mb-3">
          <label htmlFor="video" className="form-label">Video</label>
          <input
            type="file"
            accept="video/*"
            id="video"
            onChange={(e) => setVideoFile(e.target.files[0])}
          />
          {videoPerc > 0 &&
            <span style={{ backgroundColor: 'lightblue', padding: '2px 5px', borderRadius: '3px' }}>
              {"uploading: " + videoPerc + "%"}
            </span>
          }
        </div>

        <div className="mb-3">
          <label htmlFor="img" className="form-label">Thumbnail Image</label>
          <input
            type="file"
            accept="image/*"
            id="img"
            onChange={(e) => setThumbnailFile(e.target.files[0])}
          />
          {imgPerc > 0 && "uploading: " + imgPerc + "%"}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            value={inputs.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={inputs.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={inputs.duration}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default MyCourses;
