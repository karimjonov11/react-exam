import React from 'react'
import './Footer.css'
import { Instagram, SendHorizontal, Facebook, Twitter, Linkedin, Copyright } from 'lucide-react'
import img1 from '../assets/img1.png'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="textcon">
                <div className="text1">
                    <h2>Exclusive</h2>
                    <h3>{t('footer.subscribe')}</h3>
                    <p>{t('footer.get_off')}</p>
                    <button>
                        {t('footer.email_placeholder')} <span><SendHorizontal /></span>
                    </button>
                </div>
                <div className="text1">
                    <h3>{t('footer.support')}</h3>
                    <p>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className="text1">
                    <h3>{t('footer.account')}</h3>
                    <p>{t('footer.my_account')}</p>
                    <p>{t('footer.login_register')}</p>
                    <p>{t('footer.cart')}</p>
                    <p>{t('footer.wishlist')}</p>
                    <p>{t('footer.shop')}</p>
                </div>
                <div className="text1">
                    <h3>{t('footer.quick_link')}</h3>
                    <p>{t('footer.privacy_policy')}</p>
                    <p>{t('footer.terms_of_use')}</p>
                    <p>{t('footer.faq')}</p>
                    <p>{t('footer.contact')}</p>
                </div>
                <div className="text1">
                    <h3>{t('footer.download_app')}</h3>
                    <small>{t('footer.save_app_user')}</small><br />
                    <img src={img1} alt="App" />
                    <div className="icons1">
                        <span><Facebook /></span>
                        <span><Twitter /></span>
                        <span><Instagram /></span>
                        <span><Linkedin /></span>
                    </div>
                </div>
            </div>
            <h4><span><Copyright /></span>Copyright {t('footer.copyright')}</h4>
        </footer>
    )
}

export default Footer