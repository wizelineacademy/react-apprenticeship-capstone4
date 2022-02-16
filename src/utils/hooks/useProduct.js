import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';
import { useDispatch } from 'react-redux';
import { setImagesProduct, setProduct } from '../../actions/cart';
import { filterImages } from '../selectors/filterImages';

export function useProduct(productId) {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    const controller = new AbortController();
    async function getFeaturedBanners() {
      try {
        setFeaturedBanners({ data: {}, isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${productId}%22%29+%5D%5D`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        const { results } = data;
        const product = {
          id: results[0].id,
          type: results[0].type,
          name: results[0].data.name,
          idCategory: results[0].data.category.id,
          image: results[0].data.mainimage.url,
          images: results[0].data.images,
          height: results[0].data.mainimage.dimensions.height,
          width: results[0].data.mainimage.dimensions.width,
          alt: results[0].data.alt,
          description: results[0].data.short_description,
          stock: results[0].data.stock,
          price: results[0].data.price,
          href: results[0].href,
          tags: results[0].tags,
          shortDescription: results[0].data.short_description,
          specs: results[0].data.specs,
        };
        const images = filterImages(product.images);
        dispatch(setImagesProduct(images));
        dispatch(setProduct(product));
        setFeaturedBanners({ data, isLoading: false });
      } catch (err) {
        setFeaturedBanners({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredBanners;
}
