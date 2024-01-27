import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { PantryJson } from '../../../types/types.tsx';
import './DashboardItem.css';

const apiUrl = import.meta.env.VITE_API_URL;

function DashboardItem({ pantryJson, onFavorite, isFavorited }:
  { pantryJson: PantryJson, onFavorite: (publicKey: string) => void, isFavorited: boolean }) {

  const [showImage, setShowImage] = React.useState(false);
  const buttonText = showImage ?  "see whats inside" : "See more info";

  const handleButtonClick = () => {
    setShowImage(!showImage);
  };

  const handleFavoriteClick = () => {
    onFavorite(pantryJson.public_key);
  };

  const imageSource = showImage 
    ? `${apiUrl}/exteriors/${pantryJson.pantry_exterior_url}`
    : `${apiUrl}/latest/${pantryJson.latest_contents_url}`;
  const imageAlt = showImage 
    ? `Image of the contents of ${pantryJson.name}`
    : `An image of the exterior of ${pantryJson.name}`;

  const infoList = showImage ? (
    <ul className="info-list">
      <li>Facility: {pantryJson.facility}</li>
      <li>Campus: {pantryJson.campus}</li>
      <li>Floor: {pantryJson.floor}</li>
    </ul>
  ) : (
    <ul className="info-list">
      <li>{pantryJson.name}</li>
      <li>Open: {pantryJson.hours}</li>
      <li>Directions: {pantryJson.directions}</li>
    </ul>
  );

  return (
    <Card className="dashboard-item-card">
      <Card.Img className="cardImage" src={imageSource} alt={imageAlt} />
      <Button 
        onClick={handleFavoriteClick} 
        variant="light" 
        className={`favorite-star-button ${isFavorited ? 'favorite-active' : ''}`}
      />
      <Card.Body>
        <Card.Text className="info-container">
          {infoList}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-grid">
        <Button onClick={handleButtonClick} variant="primary" className="btn-custom" size="lg">{buttonText}</Button>
      </Card.Footer>
    </Card>
  );
}

export default DashboardItem;
