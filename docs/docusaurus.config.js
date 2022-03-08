// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rev",
  tagline: "Roblox account linking, made easy.",
  url: "https://rev.cursecode.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "grid-rbx", // Usually your GitHub org/user name.
  projectName: "rev", // Usually your repo name.
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/grid-rbx/rev/edit/master/docs/",
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: "WI835PYVDV",

      // Public API key: it is safe to commit it
      apiKey: "bdae8fedc0cb38f47764e503a2b632be",

      indexName: "rev-cursecode",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      //... other Algolia params
    },
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: "G-M7J72ZEVDG",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    // announcementBar: {
    //   id: "in_dev",
    //   content:
    //     'We are still in development. Please read <a target="_blank" rel="noopener noreferrer" href="/docs/intro#disclaimer">the disclaimer</a> to learn more.',
    //   backgroundColor: "#636363",
    //   textColor: "#ebebeb",
    //   isCloseable: true,
    // },
    navbar: {
      title: "Rev",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          href: "/docs/api-ref",
          position: "left",
          label: "API",
        },
        {
          href: "/changelog",
          position: "left",
          label: "Changelog",
        },
        {
          href: "https://github.com/grid-rbx/rev",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
            {
              label: "API Reference",
              to: "/docs/api-ref",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Changelog",
              to: "/changelog",
            },
            {
              label: "GitHub",
              href: "https://github.com/grid-rbx/rev",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grid, LLC`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
