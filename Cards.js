import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Cards() {
  return( 
  <div className='cards'>
      <h1>Check out these epic places!</h1>
      <div className='cards_container'>
          <div className='cards_wrapper'>
            <ul className='cards_items'>
                <CardItem
                src = 'images/1.jpg'
                text = 'Explore the wildernessdqwwwww'
                label = 'Adventure'
                path = '/projects' /*need to update the name when you want the image to the page you want*/
                />
            </ul>
          </div>
      </div>
  </div>
  );
}

export default Cards;
