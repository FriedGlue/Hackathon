import React, { useState } from 'react';
import Shafer from '../../../assets/shafhall.jpeg';

interface Card {
  id: number;
  title: string;
  image: string | JSX.Element;
  
}

const CardContainer: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, title: 'Chick-fil-a',  image: Shafer},
    { id: 2, title: 'Shafer',  image: Shafer},
    { id: 3, title: 'Shake Smart', image: Shafer},
    { id: 4, title: 'Rams Coop', image: Shafer},
  ]);

  return (
    <div className='flex flex-col'>
      <section className='pt-16 bg-black'>
        <img src='/src/assets/health.png' className="w-full shadow-md" alt="Health Icon"/>
        <div className='text-4xl pt-72 font-bold text-white text-center'>Your Options!</div>
      </section>
      <div className="flex flex-wrap gap-4 p-4">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg p-4 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={Shafer}
                className="h-full w-full object-cover object-center"
                alt={card.title}
              />
            </div>
            <button className="mt-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300">
              <a href='/Restaurants/Shafer'>Check it out!</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
