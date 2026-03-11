import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removefromCart } from '../redux/shopSlice';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart() {
  const { t } = useTranslation();
  const CartItems = useSelector(state => state.shop.cart);
  const dispatch = useDispatch();

  const calculateSubtotal = () => {
    return CartItems.reduce((acc, item) => {
      const price = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
      return acc + (price * (item.quantity || 1));
    }, 0);
  };

  return (
    <div className="cart-page-container"> 
      {CartItems.length === 0 ? (
        <p className="empty-msg">{t('cart.empty')}</p>
      ) : (
        <div className="cart-content-wrapper">
          <table className="cart-table-exclusive">
            <thead>
              <tr>
                <th>{t('cart.product')}</th>
                <th>{t('cart.price')}</th>
                <th>{t('cart.quantity')}</th>
                <th>{t('cart.subtotal')}</th>
              </tr>
            </thead>
            <tbody>
              {CartItems.map((item) => {
                const itemPrice = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
                return (
                  <tr key={item.id}>
                    <td className="product-cell">
                      <div className="img-wrapper">
                        <img src={item.image} alt={item.model} />
                        <div className="remove-badge" onClick={() => dispatch(removefromCart(item.id))}>
                          <X size={12} color="white" />
                        </div>
                      </div>
                      <span>{item.model}</span>
                    </td>
                    <td>${itemPrice}</td>
                    <td>
                      <div className="quantity-box">
                        <input type="number" placeholder='0' defaultValue={item.quantity || 1} min="1" />
                      </div>
                    </td>
                    <td>${itemPrice * (item.quantity || 1)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="cart-footer-actions">
            <button className="btn-return-shop">{t('cart.return_shop')}</button>
            <button className="btn-update-cart">{t('cart.update_cart')}</button>
          </div>

          <div className="cart-summary-section">
            <div className="coupon-area">
              <input type="text" placeholder={t('cart.coupon_placeholder')} />
              <button className="btn-apply">{t('cart.apply_coupon')}</button>
            </div>

            <div className="total-calculation-card">
              <h3>{t('cart.cart_total')}</h3>
              <div className="summary-row">
                <span>{t('cart.subtotal')}:</span>
                <span>${calculateSubtotal()}</span>
              </div>
              <hr />
              <div className="summary-row">
                <span>{t('cart.shipping')}:</span>
                <span>{t('cart.free')}</span>
              </div>
              <hr />
              <div className="summary-row bold-text">
                <span>{t('cart.total')}:</span>
                <span>${calculateSubtotal()}</span>
              </div>
              <Link to="/checkout">
                <button className="checkout-btn-red">{t('cart.checkout_btn')}</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart