// src/components/UploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }
    formData.append('title', title);
    formData.append('description', description);

    axios.post('http://localhost:5000/api/images/bulk-upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data);
      // Handle success
    })
    .catch(error => {
      console.error('Error uploading images:', error);
      // Handle error
    });
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-4">
        <input type="file" multiple onChange={handleFileChange} />
      </div>
      <div className="mb-4">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <button onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Upload Images</button>
      </div>
    </div>
  );
};

export default UploadForm;
