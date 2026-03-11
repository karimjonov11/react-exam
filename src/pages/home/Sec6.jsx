import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './Sec6.css'
import { Phones3 } from '../../components/Phones'
import { addtoCart, addtoWishlist } from '../../redux/shopSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'; 
import { Link } from 'react-router-dom';

const Sec6 = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <section className='Sec6'>
      <div className="time">
        <div className='box'></div>
        <p>{t('sec6.subtitle')}</p>
      </div>
      
      <div className='icons3'>
        <h1>{t('sec6.title')}</h1>
        <div className='icon3'>
          <span><ArrowLeft /></span>
          <span><ArrowRight /></span>
        </div>
      </div>

      <div className="Cardlist">
        {Phones3.map((item) => (
          <div key={item.id} className="Card">
            <div className="addtocart">
              <div className="mapcon1">
                {/* Agar discount bo'lsa ko'rsatadi */}
                {item.discount && <p className="discount-badge">{item.discount}</p>}
                
                <div className="mapicons">
                  <span onClick={() => dispatch(addtoWishlist(item))} className="icon-span">
                    <item.icon1 className='redheart' size={20} />
                  </span>
                  
                  {/* Mahsulot sahifasiga o'tish linki */}
                  <Link className='see' to={`/product/${item.id}`}>
                    <item.icon2 className='redheart' size={20} />
                  </Link>
                </div>
              </div>
              <img className='mapimg1' src={item.image} alt={item.model} />
            </div>

            {/* Savatchaga qo'shish tugmasi */}
            <h2 className="add-to-cart-btn" onClick={() => dispatch(addtoCart(item))}>
              {t('sec6.add_cart')}
            </h2>

            <div className="card-info">
              <h3>{item.model}</h3>
              <div className="mapmodels">
                <span className="current-price">{item.price}</span>
                {item.del && <span className="old-price">{item.del}</span>}
              </div>

              <div className="mapimgcon">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img key={star} className='mapimg2' src={item.image2} alt="rating" />
                  ))}
                </div>
                <span className="color-count">{item.color}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sec6;