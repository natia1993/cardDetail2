import React from 'react';
import "./carousel.css"
import nextArrow from "../images/icon-next.svg"
import prevArrow from "../images/icon-previous.svg"
import shutDown from "../images/icon-close.svg"
import { useState } from 'react';

type Product = {
  id: number;
  title: string;
  thumbnail: string;
  image: string;
};

type CarouselProps = {
  image: string;
  products: Product[];
  choosePicture: (image: string) => void;
  onClose: () => void; // ✅ საჭიროა overlay-ზე დაკლიკებისას დახურვისთვის
};



const Carousel: React.FC<CarouselProps> = ({ image, products, choosePicture, onClose }) => {
 function getNextImage(products: Product[], image: string): string {
  const currentIndex = products.findIndex(p => p.image === image);
  const nextIndex = (currentIndex + 1) % products.length;
  return products[nextIndex].image;
}
function getPrevImage(products: Product[], currentImage: string): string {
  const currentIndex = products.findIndex(p => p.image === currentImage);
  const prevIndex = (currentIndex - 1 + products.length) % products.length;
  return products[prevIndex].image;
}

  return (
  
    <div className="carousel-overlay" >
        <img
         className="close-icon"
         onClick={onClose} 
         style={{position:"absolute",
          top:"150px",
          right:"550px"}}
          src={shutDown} alt="" />
      
      <div className="products-list" onClick={e => e.stopPropagation()}>
        <img className="product-img" src={image} alt="Selected Product" />
      
         <div className="arrow">
          <div className="prev" onClick={() => choosePicture(getPrevImage(products, image))}>  
             <img src={prevArrow} alt="" />
          </div>
         <div onClick={() => choosePicture(getNextImage(products, image))} className="next">
           <img src={nextArrow} alt="" />
           </div>
        
        </div>
        <div className="product-list1">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img
                className="product-card1"
                src={product.thumbnail}
                alt={product.title}
                onClick={() => choosePicture(product.image)}
                style={{ cursor: 'pointer' }}
              />
              

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;


