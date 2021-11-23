// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rev",
  tagline: "Roblox account linking, made easy.",
  url: "https://your-docusaurus-test-site.com",
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
          editUrl: "https://github.com/grid-rbx/rev/edit/main/website/",
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
    // announcementBar: {
    //   id: "support_us",
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: "#fafbfc",
    //   textColor: "#091E42",
    //   isCloseable: false,
    // },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
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
              to: "/docs/",
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
      copyright: `Copyright © ${new Date().getFullYear()} Grid, Inc. Built with ❤️.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
