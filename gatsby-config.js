module.exports = {
  assetPrefix: `/liange`,
  siteMetadata: {
    title: "Liange",
  },
  plugins: [
    "gatsby-plugin-emotion",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    `gatsby-plugin-typescript`,
    "gatsby-plugin-react-helmet",
  ],
};
