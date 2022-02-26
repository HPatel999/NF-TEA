import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import CreateAccountFront from '../components/CreateAccountFront';
import DeleteAccountFront from '../components/DeleteAccountFront';
import editPasswordAccount from "@/components/EditPasswordAccount";
import editUsernameAccount from "@/components/EditUsernameAccount";
import APILoginPage from "../components/APILoginPage";
import UserProfilePage from "@/components/UserProfilePage";
import Login from "@/components/Login";
import NFTPage from "@/components/NFTPage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path:'/create',
    name: 'CreateAccountFrons',
    component: CreateAccountFront
  },
  {
    path:'/user-account/editPassword',
    name: 'EditPasswordAccountFrontS',
    component: editPasswordAccount
  },
  {
    path:'/user-account/editUsername',
    name: 'EditUsernameAccountFrontS',
    component: editUsernameAccount
  },
  {
    path:'/api-login',
    name: 'APILoginPage',
    component: APILoginPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/delete',
    name: 'DeleteAccountFront',
    component: DeleteAccountFront
  },
  {
    path: '/userProfile',
    name: 'UserProfile',
    component: UserProfilePage

  },
  {
    path: '/NFTPage',
    name: 'NFTPage',
    component: NFTPage

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
