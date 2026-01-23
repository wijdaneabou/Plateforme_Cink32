import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/_EventsPage.scss';
import HeaderUser from './HeaderUser';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const eventsPerPage = 3;
  const navigate = useNavigate();
  const [latestEvent, setLatestEvent] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [showAlreadyParticipatedNotification, setShowAlreadyParticipatedNotification] = useState(false);
  const [participantName, setParticipantName] = useState('');

  useEffect(() => {
    const storedParticipantName = localStorage.getItem('participantName');
    if (storedParticipantName) {
      setParticipantName(storedParticipantName);
    }
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/eventspage?page=${currentPage}&limit=${eventsPerPage}`);
        if (response.data && Array.isArray(response.data.events)) {
          setEvents(response.data.events);
          setTotalPages(response.data.totalPages);
          if (response.data.events.length > 0) {
            setLatestEvent(response.data.events[0]);
          }
        } else {
          console.error('La structure des données des événements est incorrecte :', response.data);
        }
      } catch (error) {
        console.error('Échec de la récupération des événements :', error);
      }
    };
    
    fetchEvents();
  }, [currentPage]);

  const navigateToDetails = (eventId) => {
    navigate(`/details/${eventId}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleParticipate = async (eventId, eventName, eventLocation, eventStartDate, eventEndDate) => {
    try {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (!userData) {
        throw new Error('User data not found');
      }
  
      const response = await axios.post(`http://localhost:3000/api/eventspage/${eventId}/participate`, {
        eventId,
        userId: userData.id,
        participantName,
        event: eventName,
        eventLocation,
        eventStartDate,
        eventEndDate
      });
  
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
  
  return (
    <div className="events-page">
     <HeaderUser/>
      
      {latestEvent && (
        <div className="latest-event">
          {/* Contenu du dernier événement */}
        </div>
      )}
      <div className="event-list">
        {events.map((event, index) => (
          <div className={`event ${index % 2 === 1 ? 'reverse' : ''}`} key={event._id}>
            <img className="image" src={`http://localhost:3000/api/eventspage/images/${event._id}`} alt={event.name} />
            <div className="details">
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <div className="buttons">
                <button className="read-more" onClick={() => navigateToDetails(event._id)}>Read more</button>
                <button className="participate" onClick={() => handleParticipate(event._id, event.name, event.location, event.startDate, event.endDate)}>Participer</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="previous"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="next"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {showNotification && (
        <div className="notification">
          <p>Votre ticket pour l´événement a été préparé avec succès. Merci de participer et à bientôt !</p>
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

export default EventsPage;
