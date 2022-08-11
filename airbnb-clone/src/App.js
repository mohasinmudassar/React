import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Footer from './Footer';
import Contact from './Contact';


export default function App() {
  return (
    <div>
      <Navbar/>
      <Contact
        img = "../cat1.jpeg"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="cat1@gmail.com"
      /> 
      <Contact
        img = "../cat-2.jpeg"
        name="Mr. tpmmy"
        phone="(312) 555-4321"
        email="cat2@gmail.com"
      />
      <Contact
        img = "../cat-3.jpg"
        name="Cutie"
        phone="(412) 555-1234"
        email="cat3@gmail.com"
      />
      <Contact
        img = "../cat-4.jpeg"
        name="Lala Cat"
        phone="(412) 555-1234"
        email="cat4@gmail.com"
      />
      
    </div>
  );
}