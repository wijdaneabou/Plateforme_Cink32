import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaRedo, FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import AddNewEvent from './AddNewEvent';
import '../../styles/Admin/_EventDashboard.scss';

import { format } from 'date-fns';
import { fr } from 'date-fns/locale'; 

function EventDashboard() {
  const [showAddNewEvent, setShowAddNewEvent] = useState(false);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/events');
        setEvents(response.data);
        setFilteredEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  function getEventStatus(dateString) {
    const eventDate = new Date(dateString);
    const today = new Date();

    if (eventDate < today) {
      return 'Completed';
    } else if (eventDate > today) {
      return 'Pending';
    } else {
      return 'Ongoing';
    }
  }

  const handleEditEvent = (event) => {
    navigate('/addevent', { state: { isEditMode: true, event: event } });
  };

  const handleDeleteEvent = async (eventId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');

    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:3000/api/events/${eventId}`);
        
        if (response.status === 200) {
          console.log('Event deleted successfully:', eventId);
          setEvents(events.filter(event => event._id !== eventId));
          setFilteredEvents(filteredEvents.filter(event => event._id !== eventId));
        } else {
          console.error('Failed to delete event:', eventId);
        }
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
    setFilterValue('');
    filterEvents(e.target.value, '');
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
    filterEvents(filterBy, e.target.value);
  };

  const filterEvents = (filterBy, filterValue) => {
    if (filterBy && filterValue) {
      const filteredEvents = events.filter(event => {
        if (filterBy === 'title') {
          return event.name.toLowerCase().includes(filterValue.toLowerCase());
        } else if (filterBy === 'location') {
          return event.location.toLowerCase().includes(filterValue.toLowerCase());
        } else if (filterBy === 'date') {
          return event.startDate.includes(filterValue);
        }
        return true;
      });
      setFilteredEvents(filteredEvents);
    } else {
      setFilteredEvents(events);
    }
  };

  const resetFilter = () => {
    setFilterBy('');
    setFilterValue('');
    filterEvents('', '');
  };
  
  const handleCreateEvent = () => {
    navigate('/addevent', { state: { isEditMode: false } });
  };

  // Formatage de l'ID MongoDB
  const formatMongoId = (id, index) => {
    const formattedId = (index + 1).toString().padStart(4, '0');
    return formattedId;
  };

  const formatDate = (dateString) => {
    const eventDate = new Date(dateString);
    return format(eventDate, 'dd MMM yyyy', { locale: fr });
  };

  return (
    <div className="App">
      <Header />
      <main>
        {showAddNewEvent ? (
          <AddNewEvent 
            setShowAddNewEvent={setShowAddNewEvent} 
          />
        ) : (
          <>
            <div className="head-bar">
              <h1>Événements</h1>
              <button className='effect' onClick={handleCreateEvent}>
                Create Event
              </button>
            </div>
            <div className="filter-bar">
              <FaFilter className="filter-icon" />
              <div className="filter-separator"></div>
              <label htmlFor="filter-by">Filter By:</label>
              <div className="filter-separator"></div>
              <select id="filter-by" value={filterBy} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="title">Title</option>
                <option value="location">Location</option>
                <option value="date">Date</option>
              </select>
              <div className="filter-separator"></div>
              <input
                type="text"
                id="filter-value"
                placeholder="Enter filter value"
                value={filterValue}
                onChange={handleFilterValueChange}
              />
              <div className="filter-separator"></div>
              <button onClick={resetFilter} className="reset-button">
                <FaRedo />
                Reset Filter
              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Titre</th>
                  <th>Lieu</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map((event, index) => (
                  <tr key={event._id}>
                    <td>{formatMongoId(event._id, index)}</td>
                    <td>{event.name}</td>
                    <td>{event.location}</td>
                    <td>{formatDate(event.startDate)}</td>
                    <td>
                      <div className={`status ${getEventStatus(event.startDate).toLowerCase()}`}>
                        {getEventStatus(event.startDate)}
                      </div>
                    </td>
                    <td>
                      <button className="edit-button" onClick={() => handleEditEvent(event)}><FaEdit /></button>
                      <button className="delete-button" onClick={() => handleDeleteEvent(event._id)}><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  );
}

export default EventDashboard;
