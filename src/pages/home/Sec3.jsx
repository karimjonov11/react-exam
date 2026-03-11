import React from 'react'
import './Sec3.css'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Programs } from '../../components/Phones'
import { useTranslation } from 'react-i18next'

const Sec3 = () => {
  const { t } = useTranslation();

  return (
    <section className='Sec3'>
      <div className="time">
        <div className='box'></div>
        <p>{t('sec3.subtitle')}</p>
      </div>
      
      <div className='icons4'>
        <h1>{t('sec3.title')}</h1>
        <div className='icon3'>
          <span><ArrowLeft /></span>
          <span><ArrowRight /></span>
        </div>
      </div>

      <div className="programs">
        {Programs.map((item) => (
          <div className="program" key={item.id}>
            <img src={item.img} alt={item.model} />
            <h2>{t(`sec3.categories.${item.model.toLowerCase()}`, { defaultValue: item.model })}</h2>
          </div>
        ))}
      </div>
      <hr />
    </section>
  )
}

export default Sec3