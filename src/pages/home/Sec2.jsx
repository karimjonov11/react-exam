import { useState, useEffect } from 'react';
import { Phones } from '../../components/Phones';
import './Sec2.css';
import { useDispatch, useSelector } from 'react-redux'; // useSelector qo'shildi
import { addtoCart, addtoWishlist } from '../../redux/shopSlice';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Sec2 = () => {
  const { t } = useTranslation(); 
  const dispatch = useDispatch();
  
  // Wishlist holatini tekshirish uchun
  const wishlist = useSelector((state) => state.shop.wishlist);

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    let deadline = new Date();
    deadline.setDate(deadline.getDate() + 3); 

    const interval = setInterval(() => {
      let now = new Date().getTime();
      let t_diff = deadline.getTime() - now;

      if (t_diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(t_diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((t_diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((t_diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((t_diff % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='sec2'>
      <div className="time">
        <div className='box'></div>
        <p>{t('sec2.today')}</p>
      </div>
      <div className="timer">
        <h1>{t('sec2.title')}</h1>
        <div className="countdown">
          <div>
            <p>{t('sec2.timer.days')}</p>
            <span>{String(timeLeft.days).padStart(2, '0')}</span>
          </div>
          <div className='timer_dots'>:</div>
          <div>
            <p>{t('sec2.timer.hours')}</p>
            <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          </div>
          <div className='timer_dots'>:</div>
          <div>
            <p>{t('sec2.timer.minutes')}</p>
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          </div>
          <div className='timer_dots'>:</div>
          <div>
            <p>{t('sec2.timer.seconds')}</p>
            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      <div className="Cardlist">
        {Phones.map((item) => (
          <div key={item.id} className="Card">
            <div className="addtocart">
              <div className="mapcon1">
                {item.discount && <p className="discount-badge">{item.discount}</p>}
                <div className="mapicons">
                  <span onClick={() => dispatch(addtoWishlist(item))} >
                    <item.icon1 
                      className={`redheart ${wishlist.some(fav => fav.id === item.id) ? 'active' : ''}`} 
                    />
                  </span>
                  {/* '/product' oldiga / qo'shildi, shunda yo'l xato bo'lmaydi */}
                  <Link className='see' to={`/product/${item.id}`}>
                    <item.icon2 className='eye-icon' />
                  </Link>
                </div>
              </div>
              <img className='mapimg1' src={item.image} alt={item.model} />
            </div>
            <h2 className="add-btn" onClick={() => dispatch(addtoCart(item))} >{t('sec2.add_cart')}</h2>
            
            <div className="card-info">
              <h3>{item.model}</h3>
              <div className="mapmodels">
                <span className="price">{item.price}</span>
                {item.del && <span className="old-price">{item.del}</span>}
              </div>
              <div className="mapimgcon">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} className='mapimg2' src={item.image2} alt="star" />
                  ))}
                </div>
                <span className="colors">({item.color})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-con">
        <button className='view_all_btn'>{t('sec2.view_all')}</button>
      </div>
      <hr className="sec2-hr" />
    </section>
  );
};

export default Sec2;