import { burger } from './burger-menu/index.js';
import { initBrandsSwiper } from './brands-swiper/index.js';
import { initTypesSwiper } from './types-swiper/index.js';
import { enableOnlyMobileSwiper, openSwiperMenu } from '../helpers/helpers.js';
import { initPriceSwiper } from './price-swiper/index.js';
import { phone } from './phone-menu/index.js';
import { feedback } from './feedback-menu/index.js';
import { description } from './description-menu/index.js'

const app = () => {
  burger();
  phone();
  feedback();
  openSwiperMenu('.brands__button-text', '.brands__button-icon', '.brands-repairs__castom-swiper-wrapper', '.brands__button');
  openSwiperMenu('.types__button-text', '.types__button-icon', '.types-repairs__castom-swiper-wrapper', '.types__button');

  initBrandsSwiper;
  initTypesSwiper;
  initPriceSwiper;

  description();

  enableOnlyMobileSwiper('#brands-menu-button', initBrandsSwiper);
  enableOnlyMobileSwiper('#types-menu-button', initTypesSwiper);
  enableOnlyMobileSwiper(false, initPriceSwiper);
}

export default app;