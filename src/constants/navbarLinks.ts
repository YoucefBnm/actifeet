import { NavMenImage, NavWomenImage, NavSportsImage } from "@/assets"

export const navbarLinks = [
    {
        id: 'nav-link-main-shop',
        title: 'shop all',
        route: '/shop/all',
    },
    {
        id: 'nav-link-dropdown-men',
        title: 'men',
        submenu: [
            {
                mainTitle: 'men',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/men'
                    }
                ]
            },
            {
                mainTitle: 'collections',
                links: [
                    {
                        title: 'sale',
                        route: '/shop/men/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/men/new',
                    },
                    {
                        title: 'best seller',
                        route: '/shop/men/best seller'
                    },
                ]
            },
            {
                mainTitle: 'sports',
                links: [
                    {
                        title: 'running',
                        route: '/shop/men/running'
                    },
                    {
                        title: 'cross training',
                        route: '/shop/men/cross training',
                    },
                    {
                        title: 'climbing',
                        route: '/shop/men/climbing'
                    },
                    {
                        title: 'hiking',
                        route: '/shop/men/hiking'
                    }
                ]
            },
            {
                mainTitle: 'brands',
                links: [
                    {
                        title: 'adidas',
                        route: '/shop/men/adidas'
                    },
                    {
                        title: 'altra',
                        route: '/shop/men/altra'
                    },
                    {
                        title: 'asics',
                        route: '/shop/men/asics'
                    },
                    {
                        title: 'brooks',
                        route: '/shop/men/brooks'
                    },
                    {
                        title: 'columbia',
                        route: '/shop/men/columbia'
                    },
                    {
                        title: 'nike',
                        route: '/shop/men/nike'
                    },
                    {
                        title: 'salomon',
                        route: '/shop/men/salomon'
                    },
                    {
                        title: 'scarpa',
                        route: '/shop/men/scarpa'
                    },
                    {
                        title: 'under armour',
                        route: '/shop/men/under armour'
                    },
                ]
            }
        ],
        ctaImage: NavMenImage
    },
    {
        id: 'nav-link-dropdown-women',
        title: 'women',
        submenu: [
            {
                mainTitle: 'women',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/women'
                    }
                ]
            },
            {
                mainTitle: 'collections',
                links: [
                    {
                        title: 'sale',
                        route: '/shop/women/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/women/new',
                    },
                    {
                        title: 'best seller',
                        route: '/shop/women/best seller'
                    },
                ]
            },
            {
                mainTitle: 'sports',
                links: [
                    {
                        title: 'running',
                        route: '/shop/women/running'
                    },
                    {
                        title: 'cross training',
                        route: '/shop/women/cross training',
                    },
                    {
                        title: 'climbing',
                        route: '/shop/women/climbing'
                    },
                    {
                        title: 'hiking',
                        route: '/shop/women/hiking'
                    }
                ]
            },
            {
                mainTitle: 'brands',
                links: [
                    {
                        title: 'adidas',
                        route: '/shop/women/adidas'
                    },
                    {
                        title: 'altra',
                        route: '/shop/women/altra'
                    },
                    {
                        title: 'asics',
                        route: '/shop/women/asics'
                    },
                    {
                        title: 'brooks',
                        route: '/shop/women/brooks'
                    },
                    {
                        title: 'columbia',
                        route: '/shop/women/columbia'
                    },
                    {
                        title: 'new balance',
                        route: '/shop/women/new balance'
                    },
                    {
                        title: 'salomon',
                        route: '/shop/women/salomon'
                    },
                    {
                        title: 'la sportiva',
                        route: '/shop/women/la sportiva'
                    },
                    {
                        title: 'under armour',
                        route: '/shop/women/under armour'
                    },
                ]
            }
        ],
        ctaImage: NavWomenImage
    },
    {
        id: 'nav-link-dropdown-sports',
        title: 'sports',
        submenu: [
            {
                mainTitle: 'cross training',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/cross training'
                    },
                    {
                        title: 'men',
                        route: '/shop/men/cross training'
                    },
                    {
                        title: 'women',
                        route: '/shop/women/cross training'
                    },
                    {
                        title: 'sale',
                        route: '/shop/cross training/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/cross training/new'
                    },
                ]
            },


            {
                mainTitle: 'running',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/running'
                    },
                    {
                        title: 'men',
                        route: '/shop/men/running'
                    },
                    {
                        title: 'women',
                        route: '/shop/women/running'
                    },
                    {
                        title: 'sale',
                        route: '/shop/running/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/running/new'
                    },
                ]
            },

            {
                mainTitle: 'climbing',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/climbing'
                    },
                    {
                        title: 'unisex',
                        route: '/shop/unisex/climbing'
                    },
                    {
                        title: 'men',
                        route: '/shop/men/climbing'
                    },
                    {
                        title: 'women',
                        route: '/shop/women/climbing'
                    },
                    {
                        title: 'sale',
                        route: '/shop/climbing/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/climbing/new'
                    },
                ]
            },

            {
                mainTitle: 'hiking',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/hiking'
                    },
                    {
                        title: 'unisex',
                        route: '/shop/unisex/hiking'
                    },
                    {
                        title: 'men',
                        route: '/shop/men/hiking'
                    },
                    {
                        title: 'women',
                        route: '/shop/women/hiking'
                    },
                    {
                        title: 'sale',
                        route: '/shop/hiking/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/hiking/new'
                    },
                ]
            },
        ],
        ctaImage: NavSportsImage
    },
    {
        id: 'nav-link-main-sale',
        title: 'sale',
        route: '/shop/sale',
    },
    {
        id: 'nav-link-main-new',
        title: 'new',
        route: '/shop/new',
    },
]


