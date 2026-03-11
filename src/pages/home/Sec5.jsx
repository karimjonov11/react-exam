import React from 'react'
import './Sec5.css'
import img3 from './assets/img3.png'
import { useTranslation } from 'react-i18next'

const Sec5 = () => {
  const { t } = useTranslation();

  return (
    <section className='Sec5'>
      <div className="speaker">
        <div className="speakertext">
          <p>{t('sec5.category')}</p>
          <h1>{t('sec5.title').split(' ').map((word, i) => i === 2 ? <React.Fragment key={i}><br />{word} </React.Fragment> : word + ' ')}</h1>
          
          <div className="sptime">
            <span><h6>05</h6> <br /> {t('sec5.timer.days')}</span>
            <span><h6>23</h6> <br /> {t('sec5.timer.hours')}</span>
            <span><h6>59</h6> <br /> {t('sec5.timer.minutes')}</span>
            <span><h6>35</h6> <br /> {t('sec5.timer.seconds')}</span>
          </div>
          
          <button className='spbtn'>{t('sec5.buy_now')}</button>
        </div>
        
        <div className="speakerimg">
          <img src={img3} alt="speaker" />
        </div>
      </div>
    </section>
  )
}

export default Sec5