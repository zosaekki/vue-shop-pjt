import { createRouter, createWebHistory } from 'vue-router'
// import KakaoLogin from '../views/KakaoLogin';
import ProductList from '../views/ProductList';
import ProductDetail from '../views/ProductDetail';
import ProductCreate from '../views/ProductCreate';
import ProductUpdate from '../views/ProductUpdate';
import SalesList from '../views/SalesList';
import ImageInsert from '../views/ImageInsert';

const routes = [
  // {
  //   path: '/kakaologin',
  //   name: 'kakaologin',
  //   component: KakaoLogin
  // },
  {
    path: '/',
    name: 'Home',
    component: ProductList
  },
  {
    path: '/detail',
    name: 'productDetail',
    component: ProductDetail
  },
  {
    path: '/create',
    name: 'productCreate',
    component: ProductCreate
  },
  {
    path: '/update',
    name: 'productUpdate',
    component: ProductUpdate
  },
  {
    path: '/sales',
    name: 'salesList',
    component: SalesList
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',
    component: ImageInsert
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
