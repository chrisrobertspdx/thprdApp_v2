import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { Card } from './app/views/Card.js';
import { Video } from './app/views/Video.js';
import { VideoDetail } from './app/views/VideoDetail.js';
import { createStackNavigator } from 'react-navigation';

const MyRoutes = createStackNavigator( {
  Home: {
    screen: Home
  },
  Contact: {
    screen: Contact
  },
  Card: {
    screen: Card
  },
  Lessons: {
    screen: Video
  },
  VideoDetail: {
    screen: VideoDetail
  }
},
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}




