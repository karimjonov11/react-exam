import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. i18next importi
import { Phones, Phones2, Phones3 } from '../components/Phones';
import { Heart, Truck, RotateCcw, Star } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation(); // 2. t funksiyasini chaqiramiz
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  const allProducts = [...Phones, ...Phones2, ...Phones3];
  const product = allProducts.find((p) => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="not-found" style={{ textAlign: 'center', padding: '100px' }}>
        <h2>{t('product.not_found')}</h2>
        <p>ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="pd-container">
      {/* Breadcrumb */}
      <nav className="pd-breadcrumb">
        Account / Shop / <span className="current">{product.model}</span>
      </nav>

      <div className="pd-main-content">
        {/* Chap taraf: Galereya */}
        <div className="pd-gallery">
          <div className="pd-thumbnails">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="thumb-box">
                <img src={product.image} alt="thumbnail" />
              </div>
            ))}
          </div>
          <div className="pd-main-img">
            <img src={product.image} alt={product.model} />
          </div>
        </div>

        {/* O'ng taraf: Ma'lumotlar */}
        <div className="pd-details">
          <h1 className="pd-title">{product.model}</h1>
          
          <div className="pd-rating-row">
            <div className="stars">
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} color="#ccc" />
            </div>
            <span className="reviews">(150 {t('product.reviews')})</span>
            <span className="divider">|</span>
            <span className="stock-status" style={{color: '#00FF66'}}>{t('product.in_stock')}</span>
          </div>

          <div className="pd-price">{product.price}</div>

          <p className="pd-description">
            {/* Agar JSONda har bir mahsulot tavsifi bo'lsa product.desc ishlating */}
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive 
            for easy bubble free install & mess free removal Pressure sensitive.
          </p>

          <hr className="pd-hr" />

          {/* Ranglar va o'lchamlar */}
          <div className="pd-option-row">
            <span className="option-label">{t('product.colours')}</span>
            <div className="color-options">
              <div className="color-circle blue active"></div>
              <div className="color-circle red"></div>
            </div>
          </div>

          <div className="pd-option-row">
            <span className="option-label">{t('product.size')}</span>
            <div className="size-options">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button 
                  key={size} 
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Harakatlar (Quantity & Buy) */}
          <div className="pd-action-row">
            <div className="pd-quantity-box">
              <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>−</button>
              <div className="qty-num">{quantity}</div>
              <button className="plus-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            <button className="pd-buy-btn">{t('product.buy_now')}</button>
            <button className="pd-wish-btn">
              <Heart size={20} />
            </button>
          </div>

          {/* Yetkazib berish xizmati */}
          <div className="pd-delivery-card">
            <div className="delivery-item">
              <Truck size={32} />
              <div className="del-text">
                <p className="del-title">{t('product.free_delivery')}</p>
                <p className="del-sub">{t('product.delivery_sub')}</p>
              </div>
            </div>
            <hr />
            <div className="delivery-item">
              <RotateCcw size={32} />
              <div className="del-text">
                <p className="del-title">{t('product.return_delivery')}</p>
                <p className="del-sub">{t('product.return_sub')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;