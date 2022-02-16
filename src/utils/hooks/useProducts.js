import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../../actions/products';
import { setPage, setTotalPages } from '../../actions/page';
export function useProducts(page) {
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
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&page=${page}&pageSize=12`,
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
        dispatch(setPage(data.page));
        dispatch(setTotalPages(data.total_pages));
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
  }, [apiRef, isApiMetadataLoading, page]);

  return featuredBanners;
}
