import Restaurants from './Restaurants/Restaurants.tsx'; // Import Restaurants component
import './Dashboard.css';
import pandaLogo from '../../assets/panda_logo_1.png'; // Import image
import Navbar from './Navbar/Navbar.tsx'

function Dashboard() {
  const images = [
    { id: 1, src: pandaLogo, title: 'Panda Express', description: 'Description 1' },
    { id: 2, src: pandaLogo, title: 'Panda Express', description: 'Description 1' },
    { id: 3, src: pandaLogo, title: 'Panda Express', description: 'Description 1' },
    { id: 4, src: pandaLogo, title: 'Panda Express', description: 'Description 1' },
    { id: 5, src: pandaLogo, title: 'Panda Express', description: 'Description 1' },
    { id: 6, src: pandaLogo, title: 'Panda Express', description: 'Description 1' },
    // Add more images here
    // { id: 2, src: 'url-to-image2', title: 'Image 2', description: 'Description 2' },
    // ...
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Navbar />
        {/* Other dashboard content can go here */}
      </div>

      <div className="dashboard-content">
        <Restaurants images={images} />
      </div>
    </div>
  );
}

export default Dashboard;
