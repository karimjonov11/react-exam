import React, { useState } from 'react'; // Bitta import yetarli
import './Header.css';
import { Search, Heart, ShoppingCart, User, ShoppingBag, XCircle, Star, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Header = () => {
    // Redux va i18n hooks
    const wishlistLength = useSelector((state) => state.shop.wishlist.length);
    const cartlength = useSelector((state) => state.shop.cart.length);
    const { t, i18n } = useTranslation();

    // Dropdown holati (state)
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav>
                <div className='navbar'>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
                        <h1>Exclusive</h1>
                    </Link>
                    <ul>
                        <li><Link to="/">{t('nav_home')}</Link></li>
                        <li><Link to="/contact">{t('nav_contact')}</Link></li>
                        <li><Link to="/about">{t('nav_about')}</Link></li>
                        <li><Link to="/signup">{t('nav_signup')}</Link></li>
                    </ul>
                    <div className="tillar">
                        <button onClick={() => i18n.changeLanguage('uz')}>uz</button>
                        <button onClick={() => i18n.changeLanguage('ru')}>ru</button>
                        <button onClick={() => i18n.changeLanguage('en')}>en</button>
                    </div>
                    <div className='basket'>
                        <div className="search">
                            <input type="text" placeholder={t('search_placeholder')} />
                            <span className='search2'><Search /></span>
                        </div>
                        <div className="cart">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/wishlist'}>
                                <span><Heart /><p className='wishlength'>{wishlistLength}</p></span>
                            </Link>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/cart'}>
                                <span><ShoppingCart /><p className='wishlength'>{cartlength}</p></span>
                            </Link>
                            <div className="user-menu-container">
                                <button className={`user-icon-btn ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                                    <User size={20} color={isOpen ? "white" : "black"} />
                                </button>                               
                                
                                {isOpen && (
                                    <div className="dropdown-menu">
                                        <ul className="menu-list">
                                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/profile"><li><User size={18} /> <span>Manage My Account</span></li></Link>
                                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/cart"><li><ShoppingBag size={18} /> <span>My Order</span></li></Link>
                                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><li><XCircle size={18} /> <span>My Cancellations</span></li></Link>
                                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><li><Star size={18} /> <span>My Reviews</span></li></Link>
                                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><li><LogOut size={18} /> <span>Logout</span></li></Link>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;