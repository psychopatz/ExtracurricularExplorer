import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const EventDisplayerComponent = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()

  const handleCardClick = () => {
    // Navigate to the event page or handle the click as needed
    navigate(`/event/${event.id}`);
  };

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        alt={event.name}
        height="140"
        image={event.banner}
      />
      <CardContent>
        <Typography variant="h5">{event.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Date: {event.date}, Time: {event.time}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Venue: {event.venue}
        </Typography>
        {isHovered && (
          <Typography variant="body2" color="textSecondary">
            Details: {event.details}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default EventDisplayerComponent;