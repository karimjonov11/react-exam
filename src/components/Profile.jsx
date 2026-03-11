import React from 'react';
import './Profile.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className="account-container">
      <div className="account-wrapper">
        <aside className="account-sidebar">
          <div className="sidebar-group">
            <h4>{t('profile.manage_account')}</h4>
            <ul>
              <li className="active">
                <Link to="/profile">{t('profile.my_profile')}</Link>
              </li>
              <li>{t('profile.address_book')}</li>
              <li>{t('profile.payment_options')}</li>
            </ul>
          </div>

          <div className="sidebar-group">
            <h4>{t('profile.my_orders')}</h4>
            <ul>
              <li>{t('profile.my_returns')}</li>
              <li>{t('profile.my_cancellations')}</li>
            </ul>
          </div>

          <div className="sidebar-group">
            <h4>{t('profile.my_wishlist')}</h4>
          </div>
        </aside>

        <main className="account-main-form">
          <h3>{t('profile.edit_title')}</h3>
          
          <form className="profile-form">
            <div className="form-row">
              <div className="input-group">
                <label>{t('profile.first_name')}</label>
                <input type="text" placeholder="Md" />
              </div>
              <div className="input-group">
                <label>{t('profile.last_name')}</label>
                <input type="text" placeholder="Rimel" />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>{t('profile.email')}</label>
                <input type="email" placeholder="rimel1111@gmail.com" />
              </div>
              <div className="input-group">
                <label>{t('profile.address')}</label>
                <input type="text" placeholder="Kingston, 5236, United State" />
              </div>
            </div>

            <div className="password-section">
              <label>{t('profile.pass_changes')}</label>
              <input type="password" placeholder={t('profile.curr_pass')} />
              <input type="password" placeholder={t('profile.new_pass')} />
              <input type="password" placeholder={t('profile.conf_pass')} />
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel">{t('profile.cancel')}</button>
              <button type="submit" className="btn-save">{t('profile.save')}</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Profile;