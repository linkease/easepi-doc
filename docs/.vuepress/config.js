module.exports = {
    host: "0.0.0.0",
    port: 8080,
    dest: "build",
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
    themeConfig: {
        // 站点logo
        logo: '/image/logo.png',
        nav: [
            {
                text: '下载',
                items: [
                    { text: '哔哩哔哩', link: 'https://space.bilibili.com/626572404' },
                    { text: '头条号', link: 'https://bit.ly/3cFVAuY' },
                ]
            },
            {
                text: '指南', link: '/language/chinese/'

            },
            {
                text: '关于',
                items: [
                    { text: '哔哩哔哩', link: 'https://space.bilibili.com/626572404' },
                    { text: '头条号', link: 'https://bit.ly/3cFVAuY' },
                ]
            },
        ]
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/palette.styl";`
            }

        }
    }


}