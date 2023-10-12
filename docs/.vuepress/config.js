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
                    text: 'Deployment & Operations',
                    link: '/operation/'
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
                    ],
                    '/operation/': [
                    {
                        title: 'Deployment',
                        collapsable: false,
                        children: [
                            ['', 'Getting started'],
                        ]
                    },
                    {
                        title: 'Configurations',
                        collapsable: false,
                        children: [
                            ['market-config.md', 'Droplet config', "https://github.com/ipfs-force-community/droplet/blob/master/docs/en/droplet-configurations.md"],
                            ['client-config.md', 'Client config', "https://github.com/ipfs-force-community/droplet/blob/master/docs/en/droplet-client-configurations.md"],
                        ]
                    },
                    {
                        title: 'Operations',
                        collapsable: false,
                        children: [
                            ['prep-datasets.md', 'Preping large datasets'],
                        ]
                    },
                    {
                        title: 'Migration',
                        collapsable: false,
                        children: [
                            ['migrate-v1-to-v2.md', 'Upgrading to droplet 2.x'],
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
                    text: '功能介绍',
                    link: '/zh/intro/'
                },
                {
                    text: '部署/运维',
                    link: '/zh/operation/'
                },
                {
                    text: '研发/设计',
                    link: '/zh/developer/'
                },
                {
                    text: '关于',
                    link: '/zh/about/'
                },
                ],
                sidebar: {
                    '/zh/intro/': [{
                        title: '功能特性',
                        collapsable: false,
                        children: [
                            ['', '概要'],
                            ['architecture.md', '架构'],
                        ]
                    },
                    ],
                    '/zh/operation/': [
                    {
                        title: '部署',
                        collapsable: false,
                        children: [
                            ['', '快速启用', "https://github.com/ipfs-force-community/droplet/blob/master/docs/zh/%E5%BF%AB%E9%80%9F%E5%90%AF%E7%94%A8.md"],
                        ]
                    },
                    {
                        title: '配置',
                        collapsable: false,
                        children: [
                            ['market-client-config.md', 'droplet-client 配置', "https://github.com/ipfs-force-community/droplet/blob/master/docs/zh/droplet-client%E9%85%8D%E7%BD%AE%E8%A7%A3%E9%87%8A.md"],
                            ['market-config.md', 'droplet 配置', "https://github.com/ipfs-force-community/droplet/blob/master/docs/zh/droplet%E9%85%8D%E7%BD%AE%E8%A7%A3%E9%87%8A.md"],
                        ]
                    },
                    {
                        title: '运维',
                        collapsable: false,
                        children: [
                            ['prep-datasets.md', '大数据集准备'],
                            ['migrate-offline-deal.md', '迁移离线订单', "https://github.com/ipfs-force-community/droplet/blob/master/docs/zh/%E8%BF%81%E7%A7%BB%E8%AE%A2%E5%8D%95.md"],
                            ['batch-deal.md', '批量发单', "https://github.com/ipfs-force-community/droplet/blob/master/docs/zh/%E6%89%B9%E9%87%8F%E5%8F%91%E5%8D%95.md"],
                            ['extend-claim.md', 'DC 订单续期', "https://github.com/ipfs-force-community/droplet/blob/master/docs/zh/datacap%E7%BB%AD%E6%9C%9F.md"],
                            ['http-retrieval.md', 'http 检索', "https://github.com/ipfs-force-community/droplet/blob/master/docs/zh/%E6%A8%A1%E6%8B%9F%E5%AE%98%E6%96%B9%E6%9C%BA%E5%99%A8%E4%BA%BAHTTP%E6%96%B9%E5%BC%8F%E6%A3%80%E7%B4%A2.md"],
                            ['deal-filter.md', '订单过滤器', "https://github.com/ipfs-force-community/droplet/blob/master/docs/zh/%E8%AE%A2%E5%8D%95%E8%BF%87%E6%BB%A4%E5%99%A8.md"],
                            ['metrics.md', 'Metrics 指标', "https://github.com/ipfs-force-community/droplet/blob/master/docs/zh/metric%E6%8C%87%E6%A0%87%E8%A7%A3%E9%87%8A.md"],
                            ['rebuild-signature.md', '签名重构', "https://github.com/ipfs-force-community/droplet/blob/master/docs/zh/%E7%AD%BE%E5%90%8D%E9%87%8D%E6%9E%84.md"],
                        ]
                    },
                    ],
                    '/zh/developer/': [{
                        title: '功能设计',
                        collapsable: false,
                        children: [
                            ['', '多节点配置文件支持'],
                            ['batch-deals.md', '批量发单'],
                        ]
                    },
                    {
                        title: '探索/调研',
                        collapsable: false,
                        children: [
                            ['understand-boost.md', 'Boost 调研'],
                            ['boost-mk-1-2.md', 'Boost 协议集成'],
                        ]
                    },
                    {
                        title: 'RPC 接口参考',
                        collapsable: false,
                        children: [
                            ['market-api-v1.md', 'Droplet API v1', "https://github.com/filecoin-project/venus/blob/master/venus-shared/api/market/v1/method.md"],
                            ['market-api-v0.md', 'Droplet API v0', "https://github.com/filecoin-project/venus/blob/master/venus-shared/api/market/v0/method.md"],
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
