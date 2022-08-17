module.exports = {
    host: "0.0.0.0",
    port: 8080,
    dest: "build",
    // 部署站点的基础路径
    base: "/",
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': 'public/assets/',
                '@posts': 'public/posts/',
                '@components': 'components/'
            }
        }
    },
    // 站点标题
    title: 'EasePi 官网',
    // 网站的描述
    description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理',
    head: [
        [
            'link', { rel: 'icon', href: '/favicon.png' }
        ],
        [
            'meta', { name: "keywords", content: "DDNSTO,内网穿透,设备原理,远程下载,远程开机,远程桌面,远程文件管理" },
        ],
        // [
        //     'meta', {
        //         name: "viewport", content: "width=500, initial-scale=1.0"
        //     }
        // ],
        [
            'script', { src: "/script/fit-screen.js" }
        ],
        [
            'script', { src: "/script/google-analytics.js" }
        ],
        [
            'script', { src: "/script/analytics.js" }
        ]
    ],
    // 多语言
    locales: {
        '/': {
            lang: 'zh-CN',
            // title: 'DDNSTO',
            description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理'
        },
    },
    themeConfig: {
        // 站点logo
        logo: '/image/logo.png',
        locales: {
            // 中文
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    { text: '首页', link: '/' },
                    { text: '文档', link: 'https://doc.linkease.com/' },
                    {
                        text: '视频号', items: [
                            { text: '哔哩哔哩', link: 'https://space.bilibili.com/626572404' },
                            { text: '头条号', link: 'https://bit.ly/3cFVAuY' },
                        ]
                    },
                    { text: '固件', link: 'https://fw.koolcenter.com/binary/ars2/' },
                    { text: '关于我们', link: 'https://www.linkease.com/about' },
                ],
                sidebar: {
                    '/zh/guide/': [
                        {
                            title: "使用指南",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "产品介绍"],
                                ["quick", "快速使用"],
                                ["common", "基础玩法"],
                                ["advanced", "高阶玩法"],
                                ["opensource", "固件开源"],
                                ["question", "常见问题"],
                                ["about", "关于我们"],
                            ]
                        },
                    ],
                }
            },
        },
    },
}
