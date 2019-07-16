module.exports = {
    siteMetadata: {
        title: `Pelvi-Active`,
        description: `Fizjoterapia uroginekologiczna.`,
        author: `@Wojciech Kuśmierczyk`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                useResolveUrlLoader: {
                    options: {
                        debug: true,
                        sourceMap: true,
                    }
                },

            },
        },

        // AFTER other css/postcss plugins
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true,
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
