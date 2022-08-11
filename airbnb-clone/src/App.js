import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Footer from './Footer';



export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card
      image="../person-1.png"
      rating="5.0"
      reviews=" 42 "
      country="England"
      title="Stay at home and do nothing"
      price="10"
      />
      <Card
      image="../person-2.jpeg"
      rating="4.0"
      reviews="22 "
      country="USA"
      title="Stay at home and Live Life"
      price="20"
      />    
      
    </div>
  );
}