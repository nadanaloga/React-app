import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaPlus } from 'react-icons/fa';

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);
    const [selectedPhotos, setSelectedPhotos] = useState([]);

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/photos');
            setPhotos(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFileUpload = async (e) => {
        const files = e.target.files;
        const formData = new FormData();
        for (let file of files) {
            formData.append('photos', file);
        }

        try {
            await axios.post('http://localhost:5000/api/photos/upload', formData);
            fetchPhotos();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeletePhoto = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/photos/${id}`);
            fetchPhotos();
        } catch (error) {
            console.error(error);
        }
    };

    const handleBulkDelete = async () => {
        try {
            await axios.post('http://localhost:5000/api/photos/bulk-delete', { ids: selectedPhotos });
            setSelectedPhotos([]);
            fetchPhotos();
        } catch (error) {
            console.error(error);
        }
    };

    const handleSelectPhoto = (id) => {
        setSelectedPhotos(prev => prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <input type="file" multiple onChange={handleFileUpload} className="hidden" id="upload-input" />
                <label htmlFor="upload-input" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer inline-flex items-center">
                    <FaPlus className="mr-2" /> Upload Photos
                </label>
                {selectedPhotos.length > 0 && (
                    <button onClick={handleBulkDelete} className="bg-red-500 text-white px-4 py-2 rounded ml-4">
                        Delete Selected ({selectedPhotos.length})
                    </button>
                )}
            </div>
            <div className="grid grid-cols-3 gap-4">
                {photos.map(photo => (
                    <div key={photo._id} className="relative">
                        <img src={`http://localhost:5000/${photo.imageUrl}`} alt={photo.title} className="w-full h-48 object-cover" />
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                            <button onClick={() => handleDeletePhoto(photo._id)} className="bg-red-500 text-white p-1 rounded">
                                <FaTrash />
                            </button>
                        </div>
                        <input type="checkbox" className="absolute bottom-0 left-0 mb-2 ml-2" onChange={() => handleSelectPhoto(photo._id)} checked={selectedPhotos.includes(photo._id)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
