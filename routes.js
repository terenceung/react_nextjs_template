export const routes = [
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
    }
];