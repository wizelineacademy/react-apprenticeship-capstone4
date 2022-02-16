import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';
import { useDispatch } from 'react-redux';
import { setBanners } from '../../actions/banners';
export function useFeaturedBanners() {
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
            '[[at(document.type, "banner")]]'
          )}&lang=en-us&pageSize=5`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        const { results } = data;
        const banners = results.map((result) => {
          return {
            id: result.id,
            title: result.data.title,
            description: result.data.description[0].text,
            imageAlt: result.data.main_image.alt,
            height: result.data.main_image.dimensions.height,
            width: result.data.main_image.dimensions.width,
            imageUrl: result.data.main_image.url,
            href: result.href,
          };
        });
        dispatch(setBanners(banners));
        setFeaturedBanners({ data: banners, isLoading: false });
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
