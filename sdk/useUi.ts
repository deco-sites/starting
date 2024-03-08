/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const showArticle = signal("00");

const state = {
  showArticle,
};

export const useUI = () => state;
