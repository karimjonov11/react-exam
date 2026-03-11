import React from 'react'
import './Signup.css'
import { auth, provider } from './Firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import { useTranslation } from 'react-i18next'

const Signup = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  let loginWithGoogle = async () => {
    try {
      let res = await signInWithPopup(auth, provider)
      if (res.user) {
        navigate("/")
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className='signup'>
      <div className="signupimg">
        <img src={img1} alt="side-img" />
      </div>
      <div className='signuptext'>
        <h3>{t('signup.title')}</h3>
        <p>{t('signup.subtitle')}</p>
        
        <input type="text" placeholder={t('signup.name')} /><br />
        <input type="text" placeholder={t('signup.email_phone')} /><br />
        <input type="password" placeholder={t('signup.password')} /><br />
        
        <button className='btn1'>{t('signup.create_btn')}</button><br />
        
        <button className='btn2' onClick={loginWithGoogle}>
          <img src={img2} alt="google-icon" /> {t('signup.google_btn')}
        </button><br />
        
        <small>
          {t('signup.already')} 
          <span onClick={() => navigate("/login")} style={{ cursor: 'pointer', marginLeft: '5px' }}>
            {t('signup.login')}
          </span>
        </small>
      </div>
    </section>
  )
}

export default Signup;