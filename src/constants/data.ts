import { CategoryClimbingImage, CategoryCrossTrainingImage, CategoryHikingImage, CategoryMenImage, CategoryRunningImage, CategoryWomenImage, CtaCrossTrainingImage, CtaRunningImage, IconDelivery, IconFacebook, IconInstagram, IconPayment, IconPinterest, IconReturn, IconX, LogoLight } from "@/assets"

export const heroContent = {
    paragraph: "Where adventure meets performance! Discover a wide range of running, climbing, and cross-training shoes designed to elevate your athletic journey, Whether you're hitting the trails, scaling new heights, or pushing your limits in the gym.",
    heading: 'step into greatness'
}

export const featuresContent = [
    {
        id: 'features-item-delivery',
        icon: IconDelivery,
        description: 'Delivery within 5 day working.',
    },
    {
        id: 'features-item-payment',
        icon: IconPayment,
        description: 'Using Stripe API for secure payments.'
    },
    {
        id: 'features-item-return',
        icon: IconReturn,
        description: 'Free returns within 45 day work.'
    }
]

export const footerContent = {
    intro: {
        image: LogoLight,
        paragraph: 'Your first choice for high quality athletic shoes for running, cross training, climbing, and our newest collection hiking.',
        
        copyright: '© 2024 - All rights reserved | website by YCF.'
    },
    navigation: [
        {
            id: 'footer-nav-shop-by',
            title: 'Shop By',
            links: [
                {
                    id: 'footer-nav-link-men',
                    title: 'Men',
                    route: '/shop/men'
                },
                {
                    id: 'footer-nav-link-women',
                    title: 'Women',
                    route: '/shop/women'
                }
            ]
        },
        {
            id: 'footer-nav-sports',
            title: 'Sports',
            links: [
                {
                    id: 'footer-nav-link-running',
                    title: 'Running',
                    route: '/shop/category/running'
                },
                {
                    id: 'footer-nav-link-Cross-training',
                    title: 'Cross Training',
                    route: '/shop/category/cross-training'
                },
                {
                    id: 'footer-nav-link-climbing',
                    title: 'Climbing',
                    route: '/shop/category/climbing'
                },
                {
                    id: 'footer-nav-link-hiking',
                    title: 'Hiking',
                    route: '/shop/category/hiking'
                },
            ]
        },
        {
            id: 'footer-nav-collections',
            title: 'collections',
            links: [
                {
                    id: 'footer-nav-link-best-seller',
                    title: 'best seller',
                    route: '/shop/badges/best-seller'
                },
                {
                    id: 'footer-nav-link-new',
                    title: 'new',
                    route: '/shop/badges/new'
                },
                {
                    id: 'footer-nav-link-sale',
                    title: 'sale',
                    route: '/shop/badges/sale'
                },
            ]
        },
        {
            id: 'footer-nav-account',
            title: 'account',
            links: [
                {
                    id: 'footer-nav-link-register',
                    title: 'register',
                    route: '/register'
                },
                {
                    id: 'footer-nav-link-login',
                    title: 'login',
                    route: '/login'
                },
                {
                    id: 'footer-nav-link-checkout',
                    title: 'checkout',
                    route: '/checkout'
                },
            ]
        },
    ],
    socialLinks: [
        {
            id: 'footer-social-link-twitter',
            icon: IconX,
            link: 'https://www.twitter.com/'
        },
        {
            id: 'footer-social-link-pinterest',
            icon: IconPinterest,
            link: 'https://www.pinterest.com/'
        },
        {
            id: 'footer-social-link-instagram',
            icon: IconInstagram,
            link: 'https://www.instagram.com/'
        },
        {
            id: 'footer-social-link-facebook',
            icon: IconFacebook,
            link: 'https://www.facebook.com/'
        }
    ],
}

export const climbingContent = {
    paragraph: "Experience the thrill of vertical conquest with our range of climbing shoes. Engineered for precision, grip, and durability, these shoes are your ultimate companion on the rock face.",
    heading: 'climb new heights'
}

export const hikingContent = {
    paragraph: "Embark on unforgettable outdoor adventures with our range of hiking shoes. Built for durability, traction, and comfort, our hiking shoes will accompany you through rugged terrains and varying conditions. .",
    heading: 'explore the outdoors'
}

export const crossTrainingContent = {
    heading: 'cross training',
    paragraph: 'Our cross-training shoes are built to handle any workout, from intense gym sessions to high-intensity interval training. With superior stability, flexibility, and breathability, these shoes are designed to support your every move.',
    link: '/shop/category/cross training',
    image: CtaCrossTrainingImage
}

export const runningContent = {
    heading: 'running',
    paragraph: "Our running shoe collection is designed to enhance your running experience, whether you're a seasoned marathoner or a beginner hitting the pavement for the first time. From responsive cushioning to lightweight designs, our shoes are engineered to provide optimal support.",
    link: '/shop/category/running',
    image: CtaRunningImage
}

export const categories = [
    {
        id: 'category-men',
        title: 'men',
        image: CategoryMenImage,
        link: '/shop/gender/men'
    },
    {
        id: 'category-women',
        title: 'women',
        image: CategoryWomenImage,
        link: '/shop/gender/women'
    },
    {
        id: 'category-running',
        title: 'running',
        image: CategoryRunningImage,
        link: '/shop/category/running'
    },
    {
        id: 'category-cross-training',
        title: 'cross training',
        image: CategoryCrossTrainingImage,
        link: '/shop/category/cross training'
    },
    {
        id: 'category-climbing',
        title: 'climbing',
        image: CategoryClimbingImage,
        link: '/shop/category/climbing'
    },
    {
        id: 'category-hiking',
        title: 'hiking',
        image: CategoryHikingImage,
        link: '/shop/category/hiking'
    },
]