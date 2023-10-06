require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Pelvi-Active - Fizjoterapia uroginekologiczna`,
        description: `Fizjoterapia dolegliwości kobiecych - nietrzymanie moczu, obniżenie narządów, rozejście mięśnia prostego brzucha, blizna po cesarskim cięciu i wiele innych.`,
        siteUrl: process.env.GATSBY_HOST_ADDRESS,
        author: `@Wojciech Kuśmierczyk`,
        menuLinks: [
            {
                link: '#start',
                name: 'Start'
            },
            {
                link: '#o-mnie',
                name: 'O mnie'
            },
            {
                link: '#kursy',
                name: 'Kursy'
            },
            {
                link: '#oferta',
                name: 'Oferta'
            },
            {
                link: '#cennik',
                name: 'Cennik'
            },
            {
                link: '#kontakt',
                name: 'Kontakt'
            }
        ],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options:
                {
                    name: `images`,
                    path: `${__dirname}/src/images`,
                },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    process.env.GA_ID, // Google Analytics / GA
                ],
                gtagConfig: {
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: process.env.PIXEL_ID,
            },
        },
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
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Open Sans\:300,400,700`, // you can also specify font weights and styles
                ],
            },
        },

        // AFTER other css/postcss plugins
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
