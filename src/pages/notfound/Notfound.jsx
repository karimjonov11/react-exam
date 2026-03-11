import React from 'react'
import { Link } from 'react-router-dom'
import './Notfound.css'
import { useTranslation } from 'react-i18next'

const Notfound = () => {
  const { t } = useTranslation();

  return (
    <div className='notfound'>
      <h1>{t('notfound.title')}</h1>
      <p>{t('notfound.message')}</p>
      <Link to="/">{t('notfound.back_home')}</Link>
    </div>
  )
}

export default Notfound;