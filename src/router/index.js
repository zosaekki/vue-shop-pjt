import { createRouter, createWebHistory } from 'vue-router'
// import KakaoLogin from '../views/KakaoLogin';
import ProductList from '../views/ProductList';
import ProductDetail from '../views/ProductDetail';
import ProductCreate from '../views/ProductCreate';
import ProductUpdate from '../views/ProductUpdate';
import SalesList from '../views/SalesList';
import ImageInsert from '../views/ImageInsert';
import store from '@/store';
import swal from 'sweetalert2';

// 네비게이션 가드
const requireAuth = () => (to, from, next) => {
  if(store.state.user.iuser === undefined) {
    swal.fire('로그인을 하세요', '', 'warning');
    return;
  }
  next();
}


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
    component: ProductCreate,
    beforeEnter: requireAuth()
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
    component: ImageInsert,
    beforeEnter: requireAuth()
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
