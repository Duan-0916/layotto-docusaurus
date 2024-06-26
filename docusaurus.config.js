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
  baseUrl: '/layotto-docusaurus/',

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
    locales: ['en-US','zh-Hans'],
    localeConfigs: {
      "en-US": {
        label:"English"
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // sidebarPath:
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //https://github.com/mosn/layotto/edit/main/docs/zh/start/README.md
          editUrl:({  docPath, locale }) => {
            //把docPath 拆分，中间加上对应的路径。
            let newDocPath;

            if (locale !== 'en-US') {
              const pathSegments = docPath.split('/');
              newDocPath = ['docs', ...pathSegments].join('/');
              return `https://github.com/mosn/layotto/edit/main/`+newDocPath;
            }else{
              const pathSegments = docPath.split('/');
              newDocPath = ['i18n/en-US/docusaurus-plugin-content-docs/current', ...pathSegments].join('/');
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
          // editUrl: "http://github.com/layotto/mosn"
          // editUrl: ({ locale, blogDirPath, blogPath }) => {
          //   if (locale !== 'en-US') {
          //     return `https://crowdin.com/project/verdaccio/${locale}`;
          //   }
          //   return `https://github.com/verdaccio/verdaccio/edit/master/website/${blogDirPath}/${blogPath}`;
          // },
          editUrl:({  locale,blogDirPath, blogPath }) => {
            //把docPath 拆分，中间加上对应的路径。
            let newDocPath;
            if (locale !== 'en-US') {
              // const pathSegments = docPath.split('/');
              // newDocPath = ['blog', ...pathSegments].join('/');
              return `https://github.com/mosn/layotto/edit/main//${blogDirPath}/${blogPath}`;
            }else{
              // const pathSegments = docPath.split('/');
              // newDocPath = ['i18n/en-US/docusaurus-plugin-content-blog', ...pathSegments].join('/');
              return `https://github.com/mosn/layotto/edit/main//${blogDirPath}/${blogPath}`;
            }

          }
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
          autoCollapseCategories: true,
        },
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
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
          appId: 'B0I4Q5CLN8',
          apiKey: '79f410a7e620927c50c3ae6c8c9af5bb',
          indexName: 'layotto',
          contextualSearch: true,
      },
    }),
};

export default config;


