import './Checkout.css';
import { useSelector } from 'react-redux'; // Redux'dan ma'lumot olish uchun

const Checkout = () => {
  const cartItems = useSelector((state) => state.shop.cart);
  
  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + price * (item.quantity || 1);
  }, 0);

  return (
    <div className="checkout-container">
      <nav className="breadcrumb">
        Account / My Account / Product / View Cart / <span>CheckOut</span>
      </nav>

      <h1 className="billing-title">Billing Details</h1>

      <div className="checkout-content">
        {/* Chap taraf: Forma */}
        <form className="billing-form">
          <div className="input-group">
            <label>First Name<span>*</span></label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Company Name</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Street Address<span>*</span></label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Apartment, floor, etc. (optional)</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Town/City<span>*</span></label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Phone Number<span>*</span></label>
            <input type="tel" required />
          </div>
          <div className="input-group">
            <label>Email Address<span>*</span></label>
            <input type="email" required />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="save-info" />
            <label htmlFor="save-info">Save this information for faster check-out next time</label>
          </div>
        </form>

        {/* O'ng taraf: Buyurtma xulosasi */}
        <div className="order-summary">
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <div className="item-info">
                  <img src={item.image} alt={item.model} />
                  <span>{item.model}</span>
                </div>
                <span className="item-price">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="calc-row">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <hr />
          <div className="calc-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="calc-row total">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          <div className="payment-options">
            <div className="payment-method">
              <div className="radio-item">
                <input type="radio" name="payment" id="bank" />
                <label htmlFor="bank">Bank</label>
              </div>
              <div className="payment-icons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" alt="visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="mastercard" />
              </div>
            </div>
            <div className="payment-method">
              <div className="radio-item">
                <input type="radio" name="payment" id="cash" defaultChecked />
                <label htmlFor="cash">Cash on delivery</label>
              </div>
            </div>
          </div>

          <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply-coupon">Apply Coupon</button>
          </div>

          <button className="place-order">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;