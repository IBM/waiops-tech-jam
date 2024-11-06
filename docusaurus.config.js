// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "IBM AIOps Automation SWAT",
  tagline: "SWAT TechJams & Guides",
  url: "https://github.com/",
  baseUrl: "/waiops-tech-jam/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ibm", // Usually your GitHub org/user name.
  projectName: "waiops-tech-jam", // Usually your repo name.
  deploymentBranch: "gh-pages",
  // Required for search to function correctly
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "labs",
          routeBasePath: "/labs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/IBM/waiops-tech-jam/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/IBM/waiops-tech-jam/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-7WTTHT6SEH",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsDir: "labs",
        docsRouteBasePath: "labs",
        highlightSearchTermsOnTargetPage: true,
        // explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "IBM SWAT",
        logo: {
          alt: "Logo",
          src: "/img/ibm-watson-logo.png",
        },
        items: [
          {
            // type: "doc",
            // docId: "intro",
            to: "/labs/jam-in-a-box",
            position: "left",
            label: "Labs",
          },
          {to: "/blog", label: "Guides", position: "left"},
          // TODO: Automations coming soon
          // {
          //   to: "/automations",
          //   label: "Automations",
          //   position: "left",
          // },
          {
            href: "https://github.com/IBM/waiops-tech-jam",
            label: "GitHub",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "CP4AIOps",
                href: "https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops",
              },
              {
                label: "NOI",
                href: "https://www.ibm.com/docs/en/noi/",
              },
              {
                label: "Instana",
                href: "https://www.ibm.com/docs/en/obi/current",
              },
              {
                label: "Turbonomic",
                href: "https://docs.turbonomic.com/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "IBM",
                href: "https://www.ibm.com/au-en",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/IBM/waiops-tech-jam",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: {start: "highlight-start", end: "highlight-end"},
          },
          {
            className: "code-block-error-line",
            line: "highlight-next-line-error",
            block: {start: "highlight-error-start", end: "highlight-error-end"},
          },
          {
            className: "code-block-correct-line",
            line: "highlight-next-line-correct",
            block: {
              start: "highlight-correct-start",
              end: "highlight-correct-end",
            },
          },
          {
            className: "code-block-emphasis-line",
            line: "highlight-next-line-emphasise",
            block: {
              start: "highlight-emphasis-start",
              end: "highlight-emphasis-end",
            },
          },
        ],
        additionalLanguages: ["php"],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
}

module.exports = config
