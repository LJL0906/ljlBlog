import type { RouteRecordRaw } from 'vue-router'

const Layouts = () => import('@/pages/layouts/index.vue')
const Redirect = () => import('@/pages/redirect/index.vue')

// 首页
const Dashboard = () => import('@/pages/dashboard/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layouts,
    meta: {
      hidden: true
    },
    children: [
      {
        path: ":path(.*)",
        component: Redirect
      }
    ]
  },
  {
    path: "/",
    component: Layouts,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: Dashboard,
        name: "Dashboard",
        meta: {
          title: "首页",
          svgIcon: "dashboard",
          affix: true
        }
      }
    ]
  },
]

export default routes