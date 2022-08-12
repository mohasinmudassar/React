import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Footer from './Footer';
import data from "./Data";


export default function App() {
/*
    const carddata = Data.map(data => {
        return <Card image ={img.coverImg}  rating = {rat.rating} reviews = {rev.status(reviewCount)} location = {local.location} title = {tit.title} price = {pr.price} /> })
*/    
  return (
    <div>
      <Navbar/>
      <Hero/>
      
  
      <Card
      image="../images/person-1.png"
      rating="5.0"
      reviews={42}
      location="England"
      title="Stay at home and do nothing"
      price={10}
      />
      <Card
      image="../images/person-3.jpeg"
      rating="4.0"
      reviews={22}
      location="USA"
      title="Stay at home and Live Life"
      price={20}
      />   
      
    </div>
  );
}