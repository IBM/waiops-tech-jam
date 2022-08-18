module.exports = {
  siteMetadata: {
    title: 'IBM AIOps SWAT Tech Jam',
    description: 'Tutorials for the AIOps portfolio',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/waiops-tech-jam`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/ibm/waiops-tech-jam',
          branch: 'main',
          subDirectory: '/',
        },
      },
    },
  ],
};
