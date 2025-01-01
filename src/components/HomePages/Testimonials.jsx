"use client";
import React from 'react';
const Testimonials = () => {
    const testimonials = [
      { hotel: "Laccis Mommos", location: "Pune", owner: "Mahesh Biradar", message: "This solution is a game-changer for our business!" },
      { hotel: "Big Burger Factory", location: "Viman Nagar Pune", owner: "Sachin Sugdare", message: "Our customers love the convenience and speed!" },
      { hotel: "Cafe Durga", location: "Wagholi", owner: "Saurabh", message: "Managing menus has never been easier!" },
      { hotel: "Mountain Retreat", location: "Baner", owner: "Siddharaj Mali", message: "super easy to update our menu anytime. Highly recommend it!" },
      { hotel: "Crazy Cheesy", location: "Nhare, Pune", owner: "Narayan Ghospurkar", message: "just scan, browse, and order. It’s quick, modern, and hassle-free!" },
    ];
  
    return (
      <section className="bg-gray-100 rounded-md py-12 px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
           Testimonials
        </h2>
        <div className="overflow-x-scroll no-scrollbar flex space-x-4">
          {testimonials.map((item, index) => (
            <div key={index} className="min-w-[300px] p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{item.hotel}</h3>
              <p className="text-sm text-gray-600">{item.location}</p>
              <p className="italic mt-4">"{item.message}"</p>
              <p className="mt-2 text-sm font-semibold">- {item.owner}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  
  export default Testimonials;