// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Layotto',
  tagline: 'Layotto (L8): To be the next layer of OSI layer 7',
  favicon: 'https://gw.alipayobjects.com/zos/bmw-prod/65518bfc-8ba5-4234-a5c5-2bc065e3a5f0.svg',

  // Set the production url of your site here
  url: 'https://mosn.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mosn', // Usually your GitHub org/user name.
  projectName: 'layotto', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "en".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en','zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: './sidebars.js',
          // sidebarPath: require.resolve('./sidebar.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //https://github.com/mosn/layotto/edit/main/docs/zh/start/README.md
          editUrl:({  docPath, locale }) => {
            //把docPath 拆分，中间加上对应的路径。
            let newDocPath;

            if (locale != 'en') {
              const pathSegments = docPath.split('/');
              newDocPath = ['docs', 'zh', ...pathSegments].join('/');
              return `https://github.com/mosn/layotto/edit/main/`+newDocPath;
            }else{
              const pathSegments = docPath.split('/');
              newDocPath = ['docs', 'en', ...pathSegments].join('/');
              return `https://github.com/mosn/layotto/edit/main/`+newDocPath;
            }

          },
        },
        blog: {
          blogSidebarTitle: '全部博客',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: '',
        logo: {
          alt: 'Layotto Logo',
          src: 'https://gw.alipayobjects.com/zos/bmw-prod/65518bfc-8ba5-4234-a5c5-2bc065e3a5f0.svg',
        },
        items: [
          {
            // type: 'docSidebar',
            // sidebarId: 'mySideBar',
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: '文档',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/mosn/layotto',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'O9QSL985BS',
        apiKey: 'ceb5366064b8fbf70959827cf9f69227',
        indexName: 'ionicframework',
        contextualSearch: false,
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'OG7TJEDZ7X',
      //
      //   // Public API key: it is safe to commit it
      //   apiKey: '1774bf301af4818317c4e0d6aeb1def1',
      //
      //   indexName: 'sofastack',
      //
      //   // Optional: see doc section below
      //   contextualSearch: true,
      // },
    }),
};

export default config;


