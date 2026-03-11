import {ArrowLeft, ArrowRight} from 'lucide-react'
import './Sec7.css'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import img8 from './assets/img8.png'
import img9 from './assets/img9.png'
import img10 from './assets/img10.png'


const Sec7 = () => {
  return (
    <section className='Sec7'>
        <div className="time">
                  <div className='box'></div>
                  <p>Featured</p>
                </div>
                <div className='icons5'>
                  <h1>New Arrival</h1>
                  <div className='icon3'>
                    <span><ArrowLeft /></span>
                    <span><ArrowRight /></span>
                  </div>
                </div>
                <div className="lastsec">
                  <div className="playstation">
                    <img src={img4} alt="" />
                    <h2>Playstation 5</h2>
                    <p>Black and White version of the PS5 <br /> coming out on sale.</p>
                    <h4>Shop Now</h4>
                  </div>
                   <div className="playstation2">
                    <img src={img5} alt="" />
                    <div className="gucci">
                      <div className="gucci1">
                        <img src={img6} alt="" />
                      </div>
                      <div className="gucci2">
                        <img src={img7} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Sec8'>
                        <div className="servise8">
                            <img src={img8} alt="" />
                            <h3>FREE AND FAST DELIVERY</h3>
                            <p>Free delivery for all orders over $140</p>
                        </div>
                        <div className="servise8">
                            <img src={img9} alt="" />
                            <h3>FREE AND FAST DELIVERY</h3>
                            <p>Free delivery for all orders over $140</p>
                        </div>
                        <div className="servise8">
                            <img src={img10} alt="" />
                            <h3>FREE AND FAST DELIVERY</h3>
                            <p>Free delivery for all orders over $140</p>
                        </div>
                </div>
    </section>
  )
}

export default Sec7