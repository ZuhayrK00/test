import React, { useState } from 'react';
import Card from './BrowseCard';
import { initialState } from './CardData';
import { TransitionGroup, CSSTransition } from 'react-transition-group'; // Import TransitionGroup and CSSTransition
import 'src/app/CardAnimation.css'; // Import CSS file for animations

const Browse = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedCards = showAll ? initialState : initialState.slice(0, 4);

  return (
    <div className="mt-12 text-black">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-black mb-4">Discover More</h1>
        <p className="text-lg font-semibold text-purple-500">Explore the communities you might like</p>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <TransitionGroup component={null}>
          {displayedCards.map((card) => (
            <CSSTransition
              key={card.idx}
              timeout={500} // Adjust the duration as needed
              classNames="card-animation" // Define your CSS animation classes
            >
              <div className="p-4">
                <Card
                  title={card.title}
                  description={card.description}
                  img={card.img}
                />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

      {showAll ? (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={toggleShowAll}>
            Show Less
          </button>
        </div>
      ) : (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={toggleShowAll}>
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default Browse;
