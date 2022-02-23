import { useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../../actions/products';
import { finishProductsLoading, startProductsLoading } from '../../actions/ui';
//import { setCategories } from '../../actions/categories';
export function useFeaturedProducts() {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    dispatch(startProductsLoading());
    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&pageSize=16`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        const { results } = data;
        const products = results.map((result) => {
          return {
            id: result.id,
            type: result.type,
            name: result.data.name,
            idCategory: result.data.category.id,
            image: result.data.mainimage.url,
            height: result.data.mainimage.dimensions.height,
            width: result.data.mainimage.dimensions.width,
            alt: result.data.alt,
            description: result.data.short_description,
            stock: result.data.stock,
            price: result.data.price,
            href: result.href,
          };
        });

        dispatch(loadProducts(products));
        dispatch(finishProductsLoading());
      } catch (err) {
        console.log(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);
}
