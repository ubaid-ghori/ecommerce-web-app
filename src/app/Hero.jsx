"use client"
import { useState } from 'react';
// import  './globals.'
const images = [
  'https://images.unsplash.com/photo-1576158114131-f211996e9137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1576158114254-3ba81558b87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1579159278991-f698b0667a16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',  // default hero image
];

export default function Hero() {
  const [heroImage, setHeroImage] = useState(images[3]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-center my-4">
        <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
        <p className="text-xl mt-2">Your catchy hero section text goes here</p>
      </div>
      <div className="hero-image w-40 h-64 bg-cover bg-center my-4" style={{ backgroundImage: `url(${heroImage})` }}></div>
      <div className="flex space-x-4">
        {images.slice(0, 3).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            className="w-10 h-10  cursor-pointer object-cover"
            onClick={() => setHeroImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
