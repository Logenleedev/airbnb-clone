import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import "./index.css"



function App() {
            // <Hero />

    const card = data.map(item => {
      return (
          <div>
             
              <Card 
                  key={item.id}
                  img={item.coverImg}
                  rating={item.stats.rating}
                  reviewCount={item.stats.reviewCount}
                  location={item.location}
                  title={item.title}
                  price={item.price}
                  openspots={item.openSpots}
              />
          </div>
      )
    })
    return(
      <div>
        
        <Navbar />
        <Hero />
        <section className="cards-list">
                {card}
        </section>
      </div>
    
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);