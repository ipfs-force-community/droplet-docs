module.exports = {
    title: 'Droplet',
    description: 'Droplet, formerly known as Venus Deal Service, is THE Filecoin storage deal solution.',
    base: '/',
    markdown: {
        config: md => {
            md.set({
                linkify: true
            })
            md.use(require('markdown-it-emoji'))
            md.use(require('markdown-it-container'))
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-deflist'))
            md.use(require('markdown-it-task-lists'))
        }
    },
    plugins: [
        'vuepress-plugin-check-md',
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        '@vuepress/medium-zoom',
        '@vuepress-plugin-zooming',
        ['vuepress-plugin-code-copy', true]
    ],
    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/droplet-icon.png'
        }],
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-GRVZ8072DQ',
            },
        ],
        [
            'script',
            {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-GRVZ8072DQ');",
            ],
        ],
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Droplet',
            description: 'Droplet, formerly known as Venus Deal Service, is THE Filecoin storage deal solution.',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '水滴',
            description: '水滴，原Venus订单服务，是一个Filecoin存储订单解决方案',
        }
    },
    themeConfig: {
        logo: '/assets/droplet-icon.png',
        lastUpdated: 'Last Updated',
        // Optional options for generating "Edit this page" link
        // if your docs are in a different repo from your main project:
        docsRepo: 'ipfs-force-community/damocles-docs',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'main',
        // defaults to false, set to true to enable
        editLinks: true,
        // end Edit on Github section
        displayAllHeaders: false,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                lang: 'en-US',
                title: 'Droplet',
                description: 'Droplet (formerly known as Venus Deal Service) is THE Filecoin storage deal solution.',
                nav: [{
                    text: 'Introduction',
                    link: '/intro/'
                },
                {
                    text: 'About',
                    link: '/about/'
                },
                ],
                sidebar: {
                    '/intro/': [{
                        title: 'Introduction',
                        collapsable: false,
                        children: [
                            ['', 'Overview'],
                            ['architecture.md', 'Architecture'],
                        ]
                    },
                    {
                        title: 'Deployment',
                        collapsable: false,
                        children: [
                            ['Using-venus-market.md', 'Getting started'],
                            ['migrate_market_v1_to_v2.md', 'Upgrading to version 2.0'],
                        ]
                    },
                    {
                        title: 'Storage deals',
                        collapsable: false,
                        children: [
                            ['prep-datasets.md', 'preping large datasets'],
                        ]
                    },
                    {
                        title: 'Other Features',
                        collapsable: false,
                        children: [
                            ['other.md', 'More features...'],
                        ]
                    },
                    ],
                    '/about/': [{
                        title: '',
                        collapsable: false,
                        children: [
                            ['', 'About Us'],
                        ]
                    },
                    ],
                }
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                title: '执剑人',
                description: '执剑人（原Venus算力服务）是一个Filecoin存储算力解决方案',
                nav: [
                {
                    text: '介绍',
                    link: '/zh/intro/'
                },
                {
                    text: '关于',
                    link: '/zh/about/'
                },
                ],
                sidebar: {
                    '/zh/intro/': [{
                        title: '简述',
                        collapsable: false,
                        children: [
                            ['', '概要'],
                            ['architecture.md', '架构'],
                        ]
                    },
                    {
                        title: '部署',
                        collapsable: false,
                        children: [
                            ['getting-started.md', '部署'],
                        ]
                    },
                    {
                        title: '配置',
                        collapsable: false,
                        children: [
                            ['market-client-config.md', 'market-client配置', "https://github.com/filecoin-project/venus-market/blob/master/docs/zh/market-client%E9%85%8D%E7%BD%AE%E8%A7%A3%E9%87%8A.md"],
                            ['market-config.md', 'venus-market配置', "https://github.com/filecoin-project/venus-market/blob/master/docs/zh/venus-market%E9%85%8D%E7%BD%AE%E8%A7%A3%E9%87%8A.md"],
                        ]
                    },
                    {
                        title: '订单',
                        collapsable: false,
                        children: [
                            ['prep-datasets.md', '大数据集准备'],
                            ['migrate-offline-deal.md', '迁移离线订单', "https://github.com/filecoin-project/venus-market/blob/master/docs/zh/%E5%A6%82%E4%BD%95%E8%BF%81%E7%A7%BB%E7%A6%BB%E7%BA%BF%E8%AE%A2%E5%8D%95.md"],
                        ]
                    },
                    {
                        title: '其他',
                        collapsable: false,
                        children: [
                            ['other.md', '其他'],
                        ]
                    },
                    ],
                    '/zh/about/': [{
                        title: '',
                        collapsable: false,
                        children: [
                            ['', '关于我们'],
                        ]
                    },
                    ]
                }
            }
        }
    }
}
