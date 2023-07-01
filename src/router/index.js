import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductList from '../views/ProductList';
import ProductDetails from '../views/ProductDetails';
import CartView from '../views/CartView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import ContactDetailsView from '../views/ContactDetailsView.vue';

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: 'Home'
    },
    component: HomeView,
  },
  {
    path: "/product-list",
    name: "product-list",
    meta: {
      title: 'Product List'
    },
    component: ProductList
  },
  {
    path: '/product-details',
    name: 'product-details',
    meta: {
      title: 'Product Details'
    },
    component: ProductDetails
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: 'Cart'
    },
    component: CartView
  },
  {
    path: '/checkout',
    name: 'checkout',
    meta: {
      title: 'Checkout'
    },
    component: CheckoutView
  },
  {
    path: '/contact-details',
    name: 'contact-details',
    meta: {
      title: 'Contact Details'
    },
    component: ContactDetailsView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
