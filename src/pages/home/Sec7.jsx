import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './Sec7.css'
import { useTranslation } from 'react-i18next'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import img8 from './assets/img8.png'
import img9 from './assets/img9.png'
import img10 from './assets/img10.png'

const Sec7 = () => {
  const { t } = useTranslation();

  return (
    <section className='Sec7'>
      <div className="time">
        <div className='box'></div>
        <p>{t('sec7.featured')}</p>
      </div>
      
      <div className='icons5'>
        <h1>{t('sec7.new_arrival')}</h1>
        <div className='icon3'>
          <span><ArrowLeft /></span>
          <span><ArrowRight /></span>
        </div>
      </div>

      <div className="lastsec">
        <div className="playstation">
          <img src={img4} alt="PS5" />
          <div className="ps-info">
            <h2>{t('sec7.ps5_title')}</h2>
            <p>{t('sec7.ps5_desc')}</p>
            <h4>{t('sec7.shop_now')}</h4>
          </div>
        </div>
        <div className="playstation2">
          <img src={img5} alt="Women Collection" />
          <div className="gucci">
            <div className="gucci1">
              <img src={img6} alt="Speakers" />
            </div>
            <div className="gucci2">
              <img src={img7} alt="Perfume" />
            </div>
          </div>
        </div>
      </div>

      <div className='Sec8'>
        <div className="servise8">
          <img src={img8} alt="Delivery" />
          <h3>{t('sec7.delivery_title')}</h3>
          <p>{t('sec7.delivery_desc')}</p>
        </div>
        <div className="servise8">
          <img src={img9} alt="Customer Service" />
          <h3>{t('sec7.support_title')}</h3>
          <p>{t('sec7.support_desc')}</p>
        </div>
        <div className="servise8">
          <img src={img10} alt="Money Back" />
          <h3>{t('sec7.guarantee_title')}</h3>
          <p>{t('sec7.guarantee_desc')}</p>
        </div>
      </div>
    </section>
  )
}

export default Sec7;