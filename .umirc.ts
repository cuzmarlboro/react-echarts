import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: '可视化图表库调研',
    // layout: 'side',
  },
  routes: [
    // { path: '/', component: '@/pages/index', title: 'Home' },
    {
      path: '/',
      component: '@/pages/ECharts',
      name: 'echarts', // 兼容此写法
      icon: 'AreaChartOutlined',
      // 更多功能查看
      // https://beta-pro.ant.design/docs/advanced-menu
      // ---
      // 新页面打开
      // target: '_blank',
      // 不展示顶栏
      // headerRender: false,
      // 不展示页脚
      // footerRender: false,
      // 不展示菜单
      // menuRender: false,
      // 不展示菜单顶栏
      // menuHeaderRender: false,
      // 权限配置，需要与 plugin-access 插件配合使用
      // access: 'canRead',
      // 隐藏子菜单
      // hideChildrenInMenu: true,
      // 隐藏自己和子菜单
      // hideInMenu: true,
      // 在面包屑中隐藏
      // hideInBreadcrumb: true,
      // 子项往上提，仍旧展示,
      // flatMenu: true,
    },
    {
      path: '/EChartsforReact',
      component: '@/pages/EChartsforReact',
      name: 'echarts-for-react',
      icon: 'AreaChartOutlined',
    },
    {
      path: '/Antv',
      component: '@/pages/Antv',
      name: 'Antv',
      icon: 'AreaChartOutlined',
    },
  ],
  fastRefresh: {},
});
