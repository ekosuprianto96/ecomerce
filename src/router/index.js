import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductList from "../views/ProductList";
import ProductDetails from "../views/ProductDetails";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import ContactDetailsView from "../views/ContactDetailsView.vue";
import AddAddress from "../views/AddAddressView.vue";
import WishlistView from "../views/WishlistView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home",
    },
    component: HomeView,
  },
  {
    path: "/product-list",
    name: "product-list",
    meta: {
      title: "Product List",
    },
    component: ProductList,
  },
  {
    path: "/product-details/:id",
    name: "product-details",
    meta: {
      title: "Product Details",
    },
    component: ProductDetails,
  },
  {
    path: "/cart",
    name: "cart",
    meta: {
      title: "Cart",
    },
    component: CartView,
  },
  {
    path: "/checkout",
    name: "checkout",
    meta: {
      title: "Checkout",
    },
    component: CheckoutView,
  },
  {
    path: "/contact-details",
    name: "contact-details",
    meta: {
      title: "Contact Details",
    },
    component: ContactDetailsView,
  },
  {
    path: "/add-address",
    name: "add-address",
    meta: {
      title: "Add Address",
    },
    component: AddAddress,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    meta: {
      title: "Wishlist",
    },
    component: WishlistView,
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "Register",
    },
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login",
    },
    component: LoginView,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
  routes,
});

export default router;
