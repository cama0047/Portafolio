import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='images/Scrapp.png'
              text='Scrap-app: taking the show to another level'
              label='React'
              path='/github1'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Webscrapper to update the firebase database information'
              label='Python'
              path='/github2'
            />
          </ul>
          {/* line 2 */}
          <ul className='cards__items'>
            <CardItem
              src='images/AWS.png'
              text='DevOps: Deploying a webscraper using Docker in a AWS:Lambda '
              label='AWS'
              path='/'
            />
            <CardItem
              src='images/img-4.png'
              text='Restaurants.com: Restaurant app using yelp API and localization'
              label='React-Native'
              path='/github3'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Server - MongoDB'
              label='MongoDB CRUD'
              path='/github4'
            />
            
          </ul>
          {/* Line3 */}
          <ul className='cards__items'>
            <CardItem
              src='images/movie-finder.png'
              text='Movie Finder '
              label='React+API'
              path='/github5'
            />
            <CardItem
              src='images/RFire.png'
              text='ChatApp'
              label='React+Firebase'
              path='/github6'
            />
            <CardItem
              src='images/RRouter.png'
              text='React Router'
              label='React'
              path='/github7'
            />
            
          </ul>
          {/* Line 4 */}
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Weather app '
              label='Javascript'
              path='/github8'
            />

            <CardItem
              src='images/adobe.jpeg'
              text='Adobe XD Plug-In '
              label='React + AdobeConsole'
              path='/github9'
            />
            <CardItem
              src='images/RExpendTracker.png'
              text='Expense Tracker '
              label='React+LocalStorage+Bootstrap'
              path='/github10'
            />
            
          </ul>
          {/* Line 5 */}
          <ul className='cards__items'>
            
            <CardItem
              src='images/img-1.jpg'
              text='Weather app '
              label='Javascript'
              path='/github11'
            />
            <CardItem
              src='images/c.png'
              text='File Explorer in C# and Xaml'
              label='C#'
              path='/github12'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Music Player'
              label='Cordova'
              path='/github13'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
