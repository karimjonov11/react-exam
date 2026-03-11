import React from 'react'
import "./Sec4.css"
import { Phones2 } from '../../components/Phones'
import { useDispatch } from 'react-redux'
import { addtoCart, addtoWishlist } from '../../redux/shopSlice'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const Sec4 = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()

  return (
    <section className='Sec4'>
      <div className="time">
        <div className='box'></div>
        <p>{t('sec4.subtitle')}</p>
      </div>

      <div className='icons3'>
        <h1>{t('sec4.title')}</h1>
        <div className='icon3'>
          <span><ArrowLeft /></span>
          <span><ArrowRight /></span>
        </div>
      </div>

      <div className="Cardlist">
        {Phones2.map((item) => (
          <div key={item.id} className="Card">
            <div className="addtocart">
              <div className="mapcon1">
                <p>{item.discount}</p>
                <div className="mapicons">
                  <span onClick={() => dispatch(addtoWishlist(item))}>
                    <item.icon1 className='redheart' />
                  </span>
                  <Link className='see' to={`/product/${item.id}`}>
                   <item.icon2 className='redheart' />
                  </Link>
                </div>
              </div>
              <img className='mapimg1' src={item.image} alt={item.model} />
            </div> 

            <h2 onClick={() => dispatch(addtoCart(item))}>{t('sec4.add_cart')}</h2> 

            <h3>{item.model}</h3>
            <div className="mapmodels">
              <h4>{item.price}</h4>
              <h5>{item.del}</h5>
            </div>

            <div className="mapimgcon">
              {[1, 2, 3, 4, 5].map((star) => (
                <img key={star} className='mapimg2' src={item.image2} alt="rating" />
              ))}
              <span>{item.color}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sec4