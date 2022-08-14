import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Footer from './Footer';
import data from "./Data";


export default function App() {

    const cards = data.map(item => {
      return(
        <Card
          key={item.id} /*we use some unique key to identify each card*/
          image={item.coverImg}
          rating={item.stats.rating}
          reviews={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}

        />
      )
    })

  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className = "card-list"> 
        {cards}
      </section>
      <Footer/>
        
      
    </div>
  );
}

/*
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
      /> */