import { types } from '../types/types';

export const setBanners = (banners) => ({
  type: types.bannerSet,
  payload: banners,
});
