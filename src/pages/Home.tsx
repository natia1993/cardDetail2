import { addItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { products } from '../products';
import './home.css';
import Carousel from '../Carousel/Carousel';
import { useEffect, useState } from 'react';

export default function Home() {
  const [image, setImage] = useState(products[0].image);
  const [choose, setChoose] = useState(true); // default to true so product is selected on mobile
  const [showCarousel, setShowCarousel] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // Show carousel and select product automatically on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth <= 768) {
        setShowCarousel(true);
        setChoose(true);
        setImage(products[0].image);
      } else {
        setShowCarousel(false);
      }
    };

    checkIfMobile(); // on mount
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  function choosePicture(newImage: string) {
    setImage(newImage);
    setQuantity(1);
    setChoose(true);
  }

  function handleImageClick() {
    setShowCarousel(true);
  }

  function handleAddToCart() {
    const product = products.find(p => p.image === image);
    if (product) {
      dispatch(addItem({
        id: product.id,
        image: product.image,
        description: product.description,
        price: product.price,
        quantity,
        name:product.title
      }));
    }
  }

  const selectedProduct = products.find(p => p.image === image);

  return (
    <section className="main-page">
      <div className="products-list responsive-hide">
        {!showCarousel && (
          <img
            onClick={handleImageClick}
            className="product-img"
            src={image}
            alt="Selected product"
          />
        )}

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

      <div className="FullProduct responsive-hide">
        {choose && selectedProduct && (
          <>
            <h1 className="title">{selectedProduct.title}</h1>
            <p className="description">{selectedProduct.description}</p>
            <div>
              <span className="price">${selectedProduct.price}</span>
            </div>
            <div className="main-quantity">
              <div className="input-field">
                <button className="quantity-btn" onClick={handleDecrease}>–</button>
                <input
                  className="quantity-input"
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={e => setQuantity(Number(e.target.value))}
                />
                <button className="quantity-btn" onClick={handleIncrease}>+</button>
              </div>
              <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </>
        )}
      </div>

      {showCarousel && (
        <div className="carousel-overlay">
          <Carousel
            image={image}
            products={products}
            choosePicture={choosePicture}
            onClose={() => setShowCarousel(false)}
          />
        </div>
      )}
    </section>
  );
}
