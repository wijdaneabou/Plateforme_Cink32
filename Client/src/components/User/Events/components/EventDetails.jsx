import PropTypes from 'prop-types'; 
import { useNavigate, useParams } from 'react-router-dom'; 
import { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import '../styles/_EventDetails.scss'; 

const EventDetails = () => {
  const { id } = useParams(); // Getting the event ID from URL parameters
  const navigate = useNavigate(); // Using useNavigate for navigation
  const [event, setEvent] = useState(null); // State to store event details
  const [loading, setLoading] = useState(true); // State to indicate loading state
  const [showNotification, setShowNotification] = useState(false); // Affichage de la notification
  // Déclaration de l'état pour la notification de participation déjà effectuée
 const [showAlreadyParticipatedNotification, setShowAlreadyParticipatedNotification] = useState(false);
 const [participantName, setParticipantName] = useState('');

// Effet pour charger le nom du participant lors du chargement du composant
useEffect(() => {
  // Récupérer le nom du participant depuis le localStorage lors du chargement du composant
  const storedParticipantName = localStorage.getItem('participantName');
  if (storedParticipantName) {
    setParticipantName(storedParticipantName);
  }
}, []);

  // Function to determine event status based on its dates
  const getEventStatus = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const today = new Date();

    if (end < today) {
      return 'Finished';
    } else if (start > today) {
      return 'Pending';
    } else {
      return 'Ongoing';
    }
  };

  // Effect to fetch event details on initial load and when ID changes
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/eventspage/${id}`);
        if (response.data) {
          setEvent(response.data); // Updating event details
        } else {
          console.error('No data returned by API');
        }
        setLoading(false); // Loading finished
      } catch (error) {
        console.error('Failed to fetch event:', error);
        setLoading(false); // Loading finished
      }
    };

    if (id) {
      fetchEvent(); // Calling function to fetch event details
    } else {
      console.error('No ID found in parameters'); // Displaying error if no ID found in parameters
      setLoading(false); // Loading finished
    }
  }, [id]); // Triggering effect when ID changes

  // Conditional rendering during loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Conditional rendering if no event found
  if (!event) {
    return <div>Event not found</div>;
  }

  // Determining event status
  const eventStatus = getEventStatus(event.startDate, event.endDate);

  // Function to handle event participation
  const handleParticipate = async (eventId, eventName, eventLocation, eventStartDate, eventEndDate) => {
    try {
      // Récupérer les données de l'utilisateur depuis le localStorage
      const userData = JSON.parse(localStorage.getItem('user'));
      if (!userData) {
        throw new Error('User data not found');
      }
  
      // Requête pour enregistrer la participation à un événement dans la table eventparticipant
      const response = await axios.post(`http://localhost:3000/api/eventspage/${eventId}/participate`, {
        eventId: eventId,
        userId: userData.id,
        participantName: participantName,
        event: eventName,
        eventLocation: eventLocation,
        eventStartDate: eventStartDate,
        eventEndDate: eventEndDate
      });
  
      console.log('Participation réussie :', response.data);
  
      // Gérer la notification de participation réussie
      if (response.data.alreadyParticipated) {
        setShowAlreadyParticipatedNotification(true);
        setTimeout(() => {
          setShowAlreadyParticipatedNotification(false);
        }, 3000);
      } else {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Erreur lors de la participation :', error);
    }
  };

  // Rendering the EventDetails component
  return (
    <div className="event-detail-page">
      {/* Event header */}
      <div className="event-header">
        <h1>{event.name || 'No Title'}</h1>
      </div>
      {/* Main content of the event */}
      <div className="event-main">
        {/* Displaying event image */}
        {event.photos && event.photos.length > 0 && event.photos[0].data ? (
          <img src={`data:${event.photos[0].contentType};base64,${btoa(
            String.fromCharCode(...new Uint8Array(event.photos[0].data.data))
          )}`} alt={event.name} />
        ) : (
          <p>No image available</p>
        )}
        <div className="event-info">
          <div className="description">
            <h2>Description</h2>
            <p>{event.description || 'No description available'}</p>
          </div>
          <div className="details">
            <h2>Details</h2>
            <p>Start Date: {event.startDate ? new Date(event.startDate).toLocaleDateString() : 'No start date available'}</p>
            <p>End Date: {event.endDate ? new Date(event.endDate).toLocaleDateString() : 'No end date available'}</p>
            <p>Location: {event.location || 'No location available'}</p>
            <p>Number of Participants: {event.participantNumber !== undefined ? event.participantNumber : 'No participant number available'}</p>
            <p>Organizer: {event.organizerName || 'No organizer name available'}</p>
            <p>Status: {eventStatus}</p>
          </div>
        </div>
      </div>
      <div className="event-footer">
        <div className="button-container">
          {(eventStatus === 'Pending' || eventStatus === 'Ongoing') && (
            <button className="participate" onClick={() => handleParticipate(event._id, event.name, event.location, event.startDate, event.endDate, participantName)}>Participate</button>
          )}
          <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
      {/* Notification de participation réussie */}
      {showNotification && (
        <div className="notification">
          <p>Votre ticket pour l´événement a été préparé avec succès . Merci de participer et à bientôt !</p>
        </div>
      )}
      {showAlreadyParticipatedNotification && (
        <div className="notification">
          <p>Vous avez déjà participé à cet événement. Merci pour votre engagement !</p>
        </div>
      )}
    </div>
  );
};

// Type validation for props
EventDetails.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      data: PropTypes.object,
      contentType: PropTypes.string,
      originalName: PropTypes.string,
    })),
    participantNumber: PropTypes.number,
    organizerName: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default EventDetails; 
