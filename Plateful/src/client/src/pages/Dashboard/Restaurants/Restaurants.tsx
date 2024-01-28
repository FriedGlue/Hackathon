import { Container, Card, Button } from 'react-bootstrap';
import './Restaurants.css';

// Assuming you have the ImageData interface defined
interface ImageData {
  id: number;
  src: string;
  title: string;
  description: string;
}

interface RestaurantsProps {
  images: ImageData[];
}

function Restaurants({ images }: RestaurantsProps) {
  return (
    <Container>
      <div className="card-container">
        {images.map((image) => (
          <div key={image.id} className="card-wrapper">
            <Card className="restaurant-card">
              <Card.Img variant="top" src={image.src} className="card-img-top"/>
              <Button variant="primary" className="red-button full-width-button">
                {image.title}
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Restaurants;
