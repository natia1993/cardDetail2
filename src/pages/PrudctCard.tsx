// import React from 'react'
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { products } from '../products';

// export function ProductCard({ product }) {
//   const [mainImage, setMainImage] = useState(product.image); // image ცვლადში ვინახავთ ძირითად სურათს

//   return (
//     <div className="product-card">
//       <img src={mainImage} alt={product.title} className="main-image" />

//       <div className="thumbnail-box">
//         <img
//           src={product.thumbnail}
//           alt={`${product.title} thumbnail`}
//           className="thumbnail"
//           onClick={() => setMainImage(product.thumbnail)} // thumbnail-ზე დაჭერით იცვლება mainImage
//         />
//       </div>

//       <h2>{product.title}</h2>
//       <p>${product.price}</p>
//       <Link to={`/product/${product.id}`}>დეტალურად ნახვა</Link>
//     </div>
//   );
// }
