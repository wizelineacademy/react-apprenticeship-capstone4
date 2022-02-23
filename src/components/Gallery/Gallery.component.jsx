import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Pagination } from 'swiper';
import './styles.css';
import { useSelector } from 'react-redux';
//import { filterImages } from '../../utils/selectors/filterImages';

function Gallery() {
  const { productImages } = useSelector((state) => state.cart);
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {productImages.map((image) => (
        <SwiperSlide key={image.url}>
          <img src={image.url} width={200} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Gallery;
