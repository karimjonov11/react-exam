import React from 'react'
import './About.css'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img8 from './assets/img8.png'
import img9 from './assets/img9.png'
import img10 from './assets/img10.png'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation();

  return (
    <section className='About'>
      <div className="girls">
        <div className="girlstext">
          <h1>{t('about.story_title')}</h1>
          <p>{t('about.story_desc1')}</p>
          <p>{t('about.story_desc2')}</p>
        </div>
        <div className="girlsimg">
          <img src={img1} alt="Story" />
        </div>
      </div>

      <div className='Sec8'>
        <div className="servise9">
          <img src={img8} alt="" />
          <h3>10.5k</h3>
          <p>{t('about.stats.sellers')}</p>
        </div>
        <div className="servise9">
          <img src={img9} alt="" />
          <h3>33k</h3>
          <p>{t('about.stats.monthly_sale')}</p>
        </div>
        <div className="servise9">
          <img src={img10} alt="" />
          <h3>45.5k</h3>
          <p>{t('about.stats.customer_active')}</p>
        </div>
        <div className="servise9">
          <img src={img10} alt="" />
          <h3>25k</h3>
          <p>{t('about.stats.annual_sale')}</p>
        </div>
      </div>

      <div className="workers">
        <div className="worker1">
          <img src={img2} alt="Tom Cruise" />
          <h1>Tom Cruise</h1>
          <p>{t('about.jobs.founder')}</p>
        </div>
        <div className="worker1">
          <img src={img3} alt="Emma Watson" />
          <h1>Emma Watson</h1>
          <p>{t('about.jobs.managing_director')}</p>
        </div>
        <div className="worker1">
          <img src={img4} alt="Will Smith" />
          <h1>Will Smith</h1>
          <p>{t('about.jobs.product_designer')}</p>
        </div>
      </div>

      <div className='Sec8'>
        <div className="servise8">
          <img src={img8} alt="" />
          <h3>{t('about.services.delivery_title')}</h3>
          <p>{t('about.services.delivery_desc')}</p>
        </div>
        <div className="servise8">
          <img src={img9} alt="" />
          <h3>{t('about.services.service_title')}</h3>
          <p>{t('about.services.service_desc')}</p>
        </div>
        <div className="servise8">
          <img src={img10} alt="" />
          <h3>{t('about.services.money_title')}</h3>
          <p>{t('about.services.money_desc')}</p>
        </div>
      </div>
    </section>
  )
}

export default About