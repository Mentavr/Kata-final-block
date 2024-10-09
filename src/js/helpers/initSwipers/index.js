import { initBrandsSwiper } from "../../app/brands-repairs";
import { initPriceSwiper } from "../../app/price-repairs";
import { initTypesSwiper } from "../../app/types-repairs";
import { enableOnlyMobileSwiper } from "../helpers";

export const initSwipers = () => {


  initBrandsSwiper;
  initTypesSwiper;
  initPriceSwiper;

  enableOnlyMobileSwiper('#brands-menu-button', initBrandsSwiper);
  enableOnlyMobileSwiper('#types-menu-button', initTypesSwiper);
  enableOnlyMobileSwiper(false, initPriceSwiper);
}