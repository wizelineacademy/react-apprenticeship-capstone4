export const properties = {
  duration: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  indicators: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
