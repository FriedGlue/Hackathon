import React from 'react';
import { useParams } from 'react-router-dom';
import '../../../output.css'
import sushi from '../../../shafer/348s.jpg'
import blackbeanburger from '../../../shafer/beanburger.jpg'
import peppizza from '../../../shafer/pizza.jpg'
import fries from '../../../shafer/fries.jpg'
// Define the type for your restaurantsData
interface RestaurantData {
  name: string;
  description: string;
  image: string;
  menuItems: {
    name: string;
    description: string;
    image: string;
    calories: string;
    protein: string;
    carbs: string
  }[];
}

const RestaurantPage: React.FC = () => {
  const { restaurantName } = useParams();

  const restaurantsData: Record<string, RestaurantData> = {
    'chick-fil-a': {
      name: 'Chick-fil-A',
      description: 'Delicious chicken sandwiches',
      image: 'path-to-chick-fil-a-image.jpg',
      menuItems: [
        {
          name: 'Chicken Sandwich',
          description: 'classNameic chicken sandwich',
          image: '',
          calories: '440 calories',
          protein: '28 grams of protein',
          carbs: '40 grams of carbs'
        },
        // ... other menu items
      ],
    },
    'Shafer': {
      name: 'Shafer Dining Hall',
      description: 'Amazing pizza varieties',
      image: 'path-to-pizza-hut-image.jpg',
      menuItems: [
        {
          name: 'Sushi',
          description: 'Yummy sushi',
          image: sushi,
          calories: '320 calories',
          protein: '20 grams of protein',
          carbs: '54 grams of carbs'
        },
        {
          name: 'Black Bean Burger',
          description: 'Yummy Burger',
          image: blackbeanburger,
          calories: '240 calories',
          protein: '16 grams of protein',
          carbs: '42 grams of carbs'
        },
        {
          name: 'Pepperoni Pizza',
          description: 'Yummy Pizza',
          image: peppizza,
          calories: '360 calories',
          protein: '17 grams of protein',
          carbs: '52 grams of carbs'
        },
        {
          name: 'Homestyle Fries',
          description: 'Yummy fries',
          image: fries,
          calories: '240 calories',
          protein: '1 gram of protein',
          carbs: '30 grams of carbs'
        }
        // ... other menu items
      ],
    }
    // ... other restaurants
  };

  // Ensure that restaurantName is defined before accessing it as an index
  if (!restaurantName || !restaurantsData[restaurantName]) {
    return <div className='pt-60'>Restaurant not found</div>;
  }

  const restaurant = restaurantsData[restaurantName];

  return (
    <div className="bg-white pt-12 lg:pt-0 ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center font-bold text-4xl">{restaurant.name}</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {restaurant.menuItems.map((menuItem, index) => (
            <a key={index} href={menuItem.image} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={menuItem.image}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-lg text-gray-70 hover:underline">{menuItem.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{menuItem.description}</p>
              <p className="mt-1 text-base font-medium text-gray-900">{menuItem.calories}</p>
              <p className="mt-1 text-base font-medium text-gray-900">{menuItem.protein}</p>
              <p className="mt-1 text-base font-medium text-gray-900">{menuItem.carbs}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
};

export default RestaurantPage;
