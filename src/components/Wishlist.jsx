import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removefromWishlist } from '../redux/shopSlice';

function Wishlist(){

  const Wish = useSelector(state => state.shop.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="Wishlist" style={{ paddingLeft:"145px", paddingTop:"100px", display:"flex", gap:"30px", flexWrap:"wrap"}} >
            {
            Wish.length === 0 ? <p>Your wishlist is empty</p> : Wish.map((item) => (
                  <div key={item.id} className="Card">
                    <div className="addtocart">
                      <div className="mapcon1">
                        <p>{item.discount}</p>
                        <div className="mapicons">
                          <span onClick={() => dispatch(addtoWishlist(item))} ><item.icon1 /></span>
                          <span><item.icon2 /></span>
                        </div>
                      </div>
                      <img className='mapimg1' src={item.image} alt="" />
                    </div>
                    <h3>{item.model}</h3>
                    <div className="mapmodels">
                      <h4>{item.price}</h4>
                      <h5>{item.del}</h5>
                    </div>
                    <div className="mapimgcon">
                      <img className='mapimg2' src={item.image2} alt="" />
                      <img className='mapimg2' src={item.image2} alt="" />
                      <img className='mapimg2' src={item.image2} alt="" />
                      <img className='mapimg2' src={item.image2} alt="" />
                      <img className='mapimg2' src={item.image2} alt="" />
                      <span>{item.color}</span>
                    </div>
                    <button style={{border:"none", background:"#DB4444", color:"white", padding:"6px 115px", borderRadius:"4px", cursor:"pointer", marginTop:"10px"}} onClick={() => dispatch(removefromWishlist(item.id))}>remove</button>
                  </div>
                ))}
    </div>
  )
}

export default Wishlist