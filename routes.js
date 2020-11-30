const routes = [
    {
        route: '/', name: 'home' 
    },
    {
        route: '/about', name: 'about' 
    },
    {
        route: '/about2', name: 'about2' 
    },
    {
        route: '/setting', name: 'setting', children: [
            {
                route: '/setting/global', name: 'global'
            },
            {
                route: '/setting/network', name: 'network'
            },
        ]
    },
    {
        route: '/calculator', name: 'calculator'
    },
    {
        route: '/post', name: 'post'
    }
];

export default routes;