import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import './styles.css';
import { useSelector } from 'react-redux';
//import { filterImages } from '../../utils/selectors/filterImages';

function Gallery() {
  const { productImages } = useSelector((state) => state.cart);
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {productImages.map((image) => (
        <SwiperSlide key={image.url}>
          <img
            src={image.url}
            width={image.width / 2}
            height={image.height / 2}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Gallery;
