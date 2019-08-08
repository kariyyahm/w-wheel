module.exports = {
    title: 'W-Wheel UI',
    description: '好用的 UI 框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '欢迎 Stars', link: 'https://github.com/kariyyahm/w-wheel'},
            {text: 'Github', link: 'https://github.com/kariyyahm'},
        ],
        sidebar: [
            {
                title: '介绍',
                children: [
                    '/introduction/',
                ]
            },
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/collapse',
                    '/components/popover',
                    '/components/toast',
                ]
            }
        ],

    }
}