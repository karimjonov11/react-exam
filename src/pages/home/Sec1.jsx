import React from 'react';
import './Sec1.css';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

// Swiper CSS lari
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Kerakli modullarni to'g'ri import qilish
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import img1 from './assets/img1.png';
import img2 from './assets/img2.png';

const Sec1 = () => {
  const { t } = useTranslation();

  return (
    <section className='sec1'>
      <div className="sec1text">
        <p>{t('sec1.categories.women')}<span><ChevronRight /></span></p>
        <p>{t('sec1.categories.men')}<span className='p2'><ChevronRight /></span></p>
        <p>{t('sec1.categories.electronics')}</p>
        <p>{t('sec1.categories.home')}</p>
        <p>{t('sec1.categories.medicine')}</p>
        <p>{t('sec1.categories.sports')}</p>
        <p>{t('sec1.categories.baby')}</p>
        <p>{t('sec1.categories.groceries')}</p>
        <p>{t('sec1.categories.health')}</p>
      </div>

      <div className="swiper-container">
        <Swiper
          direction={'horizontal'} 
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]} 
          className="mySwiper"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {/* Slaydlarni map orqali yozish xatolikni kamaytiradi */}
          {[1, 2, 3].map((item) => (
            <SwiperSlide key={item}>
              <div className='swiper2'>
                <div className="swipertext">
                  <div className="series">
                    <img src={img1} alt="brand" />
                    <h4>{t('sec1.hero.series')}</h4>
                  </div>
                  <h2>{t('sec1.hero.offer')}</h2>
                  <div className="hdkkr">
                    <h3>{t('sec1.hero.shop')}</h3>
                    <span><ArrowRight /></span>
                  </div>
                </div>
                <div className="swiperimg">
                  <img src={img2} alt="product" />
                </div>  
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Sec1;