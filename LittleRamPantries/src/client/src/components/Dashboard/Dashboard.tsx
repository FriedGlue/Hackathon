import { useEffect, useState } from 'react';
import DashboardItem from './DashboardItem/DashboardItem.tsx';
import { PantryJson } from '../../types/types.tsx';
import './Dashboard.css';
const Dashboard = ({ pantryData }: { pantryData: PantryJson[] }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const localStorageFavorites = localStorage.getItem('favorites');
      return localStorageFavorites ? JSON.parse(localStorageFavorites) : [];
    } catch (error) {
      console.error('Error reading favorites from Local Storage:', error);
      return [];
    }
  });

  useEffect(() => {
    // Read favorites from Local Storage when the component mounts
    const localStorageFavorites = localStorage.getItem('favorites');
    if (localStorageFavorites) {
      setFavorites(JSON.parse(localStorageFavorites));
    }
  }, []);

  useEffect(() => {
    // Write favorites to Local Storage whenever the favorites state changes
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (publicKey: string) => {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.includes(publicKey) 
        ? prevFavorites.filter(key => key !== publicKey)
        : [publicKey, ...prevFavorites];
      return newFavorites;
    });
  };

  const sortedPantryData = [...pantryData].sort((a, b) => {
    const isAFavorited = favorites.includes(a.public_key);
    const isBFavorited = favorites.includes(b.public_key);
    return isAFavorited === isBFavorited ? 0 : isAFavorited ? -1 : 1;
  });

  return (
    <div className="Dashboard">
      {sortedPantryData.map((item) => (
        <DashboardItem 
          key={item.public_key} 
          pantryJson={item} 
          onFavorite={handleFavorite} 
          isFavorited={favorites.includes(item.public_key)}
        />
      ))}
    </div>
  );
};

export default Dashboard;
