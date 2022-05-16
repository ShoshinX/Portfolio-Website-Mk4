// theme.config.js
export default {
  projectLink: "https://github.com/shuding/nextra", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/shuding/nextra/blob/master", // base URL for the docs repository
  titleSuffix: " - ShoshinPrograms",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  floatTOC: true,
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Shoshin.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>ShoshinPrograms</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Shoshin's code and art displayed" />
      <meta name="og:title" content="Shoshin's portfolio" />
    </>
  ),
};
