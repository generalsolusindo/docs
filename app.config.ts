export default defineAppConfig({
    docus: {
        title: 'Docs',
        description: 'Develop. Connect. Shipped. Tenang Pakai #JualLagi.Biz',
        image: '/cover.png',
        socials: {
            github: 'juallagi.biz',
            instagram: 'juallagi.biz_official'
        },
        github: {
            dir: '/content',
            root: '/content',
            edit: true,
            releases: true,
            owner: 'juallagi.biz',
            repo: 'docs',
            branch: 'main'
        },
        aside: {
            level: 1,
            exclude: [
                '/'
            ]
        },
        header: {
            logo: true,
            showLinkIcon: true,
            exclude: []
        },
        footer: {
            credits: {
                icon: '',
                text: '© Powered by JualLagi.Biz Tech',
                href: 'https://www.instagram.com/juallagi.biz_official/',
            }
        }
    }
})
