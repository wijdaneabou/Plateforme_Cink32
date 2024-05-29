import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCamera } from "react-icons/fa";
import axios from 'axios';
import '../../styles/Admin/_AddNewEvent.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

const AddNewEvent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isEditMode, event } = location.state || {};

  const [eventName, setEventName] = useState('');
  const [locationName, setLocationName] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [participants, setParticipants] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    if (isEditMode && event) {
      const formattedStartDate = new Date(event.startDate).toISOString().split('T')[0];
      const formattedEndDate = new Date(event.endDate).toISOString().split('T')[0];

      setEventName(event.name);
      setLocationName(event.location);
      setDateStart(formattedStartDate);
      setDateEnd(formattedEndDate);
      setParticipants(event.participantNumber);
      setOrganizer(event.organizerName);
      setDescription(event.description);
      setImages(event.photos ? event.photos.map(photo => new File([photo.data], photo.originalName)) : []);
    }
    else {
      // Si ce n'est pas en mode édition, réinitialise les images
      setImages([]);
    }
  }, [isEditMode, event]);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    setImages([...images, ...newImages]);
  };

  const handleCameraIconClick = () => {
    fileInputRef.current.click();
  };

  const resetForm = () => {
    setEventName('');
    setLocationName('');
    setDateStart('');
    setDateEnd('');
    setParticipants('');
    setOrganizer('');
    setDescription('');
    setImages([]);
    setUploadProgress(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', eventName);
    formData.append('location', locationName);
    formData.append('startDate', dateStart);
    formData.append('endDate', dateEnd);
    formData.append('participantNumber', participants);
    formData.append('description', description);
    formData.append('organizerName', organizer);
  
    images.forEach((image) => {
      formData.append('photos', image); // Assurez-vous que le champ est correctement nommé pour les images
    })
    
    try {
      const url = isEditMode && event ? `http://localhost:3000/api/events/${event._id}` : 'http://localhost:3000/api/events';
      const method = isEditMode && event ? 'put' : 'post';
      await axios({
        method,
        url,
        data: formData,
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(progress);
        },
      });
      toast.success(isEditMode ? 'Event updated successfully!' : 'Event created successfully!');
      resetForm();
      setTimeout(() => {
        navigate('/events');
      }, 1000);
    } catch (error) {
      toast.error(isEditMode ? 'Failed to update event.' : 'Failed to create event.');
    }
  };
  
  return (
    <div className="app">
      <Header />
      <ToastContainer />
      <main>
        <div className="head-bar">
          <h2>{isEditMode ? 'Update Event' : 'Add New Event'}</h2>
        </div>
        <div className="add-event">
          <div className="upload-cover-photo">
            <div className="upload-icon-container" onClick={handleCameraIconClick}>
              {images.length > 0 ? (
                images.map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt={`Cover ${index}`} />
                ))
              ) : (
                <FaCamera />
              )}
            </div>
            <label
              htmlFor="event-image"
              className="upload-label"
              onClick={handleCameraIconClick}
            >
              {images.length > 0 ? 'Edit Image' : 'Upload Cover Photo'}
            </label>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
              multiple
            />
            {uploadProgress > 0 && (
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${uploadProgress}%` }}>
                  {uploadProgress}%
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="eventName">Event Name</label>
              <input
                type="text"
                id="eventName"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter event name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="participants">Participants Number</label>
              <input
                type="number"
                id="participants"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
                placeholder="Enter number of participants"
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                placeholder="Enter location"
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizer">Organizer</label>
              <input
                type="text"
                id="organizer"
                value={organizer}
                onChange={(e) => setOrganizer(e.target.value)}
                placeholder="Enter organizer name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateStart">Date Start</label>
              <input
                type="date"
                id="dateStart"
                value={dateStart}
                onChange={(e) => setDateStart(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateEnd">Date End</label>
              <input
                type="date"
                id="dateEnd"
                value={dateEnd}
                onChange={(e) => setDateEnd(e.target.value)}
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter event description"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              {isEditMode ? 'Update Now' : 'Add Now'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddNewEvent;
