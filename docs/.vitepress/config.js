/*
 * @Author: 朽木白
 * @Date: 2022-09-03 01:09:44
 * @LastEditors: xxx@xxx.com
 * @LastEditTime: 2022-09-12 15:40:42
 * @Description:
 */

import sidebarDemo from './sidebar/demo';

module.exports = {
  title: 'vivace',
  // baase: '/vitepress-demo/',
  description: 'frontend docs',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    siteTitle: 'Vivace',
    logo: '/logo.png',
    laslltUpdatedText: '最后更新',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xiumubai',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present xiumubai',
    },
    nav: [
      {
        text: 'demo',
        link: '/demo/',
        activeMatch: '/demo/',
      },
    ],
    sidebar: {
      '/demo/': sidebarDemo(),
    },
  },
};
