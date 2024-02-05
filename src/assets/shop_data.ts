import { ProductProps } from '@/types/product';
import { v4 as uuidv4 } from 'uuid';
 
export const SHOP_DATA:ProductProps[] = [
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: "Brooks Launch 9",
        amazonLink: "https://www.amazon.com/Brooks-Mens-Launch-Neutral-Running/dp/B09MGC9QPY/ref=pd_ci_mcx_mh_ci_mcx_mr_mp_d_1?pd_rd_w=Vleun&content-id=amzn1.sym.f5df7e34-0b7b-4623-b833-4bc428eb1494%3Aamzn1.symc.c0e3441f-e8db-463a-beb3-b6fa76b89153&pf_rd_p=f5df7e34-0b7b-4623-b833-4bc428eb1494&pf_rd_r=044HGZKX5QMYHS58VFKV&pd_rd_wg=AkhnK&pd_rd_r=a2b66d05-bf32-443d-81b8-8eaedca669b3&pd_rd_i=B09MGC9QPY",
        badges: ['best seller'],
        price: 79.95,
        sizes: [8,8.5,9,9.5,10,10.5,11],
        colors: ['black', 'grey', 'white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Yt-rT+TEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81yvV6kozqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81hBZw+Bh9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wn2KUpBXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/814QG5oq6RL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/817oUS11rkL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71FgXrO+USL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71iLysE3p4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61jDi7mMlSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61P2RDaAGUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Y-GCm5oiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71bIVO4sKFL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81PIrQqw53L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81mYMULW1+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/817KxjJ7haL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71k6sDU4TeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Winp3OxTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81koXJe5QPL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions: Machine Wash",
            "Origin: Made in the USA or Imported",
            "Outer material: Synthetic",
            "Closure type: Lace-Up",
            "THIS MEN’S SHOE IS FOR: The Launch 9 is for neutral runners who want a dependable, lightweight shoe with DNA cushioning and a highly breathable upper that helps runners go fast on every run. We recommend ordering Brooks running shoes 1/2 to one size larger than your dress shoe.",
            "NEUTRAL SUPPORT: Lightweight, streamlined, with even more BioMoGo DNA cushioning, the Launch 9 offers neutral support to keep you running faster mile after mile.",
            "ENHANCED BREATHABILITY: Reengineered upper features Creel Warp mesh, designed to be extremely light and breathable. Hints of reflectivity on the upper to increase visibility on the road.",
            "LIGHTWEIGHT CUSHIONING: We have added more BioMoGo DNA cushioning to the midsole for an even faster ride without the extra weight. A dynamically responsive ride for days when you are working on your speed.",
            "RESPONSIVE TRANSITIONS: Redesigned midsole increased by 2 mm to provide runners with more responsiveness while the Green Rubber Outsole helps your foot move quickly from heel to toe.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'nike',
        name: "Nike Pegasus 39",
        amazonLink: "https://www.amazon.com/Nike-Pittsburgh-DR2059-001-Black-University-Sneakers/dp/B0CFPYSKSC/ref=sr_1_23?crid=24Z2OZNLLYSFY&keywords=nike+Pegasus&qid=1703444512&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=nike+pegasus%2Caps%2C221&sr=8-23",
        badges: ['best seller', 'limited'],
        price: 199,
        sizes: [9,11],
        colors: ['black', 'blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617d2XDTj1L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61t78yusYoL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71atk7oou2L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61cN5X9Ll0L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619wJgsJ3CL._AC_SX695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Sa3aHuMmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vQyIu06rL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61maeqAKnuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71YGMEpkAsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61d3PUnK1OL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole materia: Rubber",
            "Closure type: Lace-Up",
            "Water resistance level: Not Water Resistant",
            "Extra padding at the tongue and collar helps keep your feet feeling comfortable. Engineered mesh—stronger and more flexible than regular mesh—throughout the top provides lightweight breathability.",
            "Flywire technology integrates with a midfoot band for support that helps keep your feet in place.",
            "Nike React technology is a lightweight, durable foam that delivers a smooth, responsive ride. We paired it with a Zoom Air unit at the forefoot and the heel for an energized feel.",
            "The heel shape optimizes landing, helping you easily transition from heel to toe. We paired it with thick foam for a responsive ride.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'new balance',
        name: "Dynasoft Nergize V2",
        amazonLink: "https://www.amazon.com/New-Balance-DynaSoft-Nergize-Trainer/dp/B0BHKMJF4N/ref=sr_1_16?crid=2WUETS0THNK3T&keywords=cross%2Btrainer%2Bshoes%2Bwomen&qid=1703445265&sprefix=cross%2Btrainer%2Bshoes%2Bwome%2Caps%2C182&sr=8-16&th=1",
        badges: ['best seller', 'sale'],
        price: 89.97,
        discount: 18,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5],
        colors: ['green', 'blue', 'black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51SDOQsCq+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51phAUVYKLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51eruir1iRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51d89yN7I6L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''), 
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51v3z0A36AL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51cpiRsdz1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51f8auqjQnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51p49+3bPWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51v75jxwzYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51vDrD5ayZL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51w5ccumAjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51z-QcpK4bL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51w9QkYbA6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Hf4I4IeEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51fycVuRoVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51-ejADj7pL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Origin: Imported",
            "Sole material: Rubber",
            "Outer material: Rubber",
            "Closure type: Lace-Up",
            "DynaSoft midsole couples ultra-responsive performance with plush comfort",
            "Upper features no-sew construction for a sleek fit and feel",
            "Synthetic/textile upper",
            "Durable rubber outsole",
            "Adjustable lace closure for a customized fit",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'altra',
        name: "Solstice XT 2",
        amazonLink: "https://www.amazon.com/ALTRA-Womens-AL0A547Y-Solstice-Training/dp/B0929F6WVN/ref=zg_bs_g_679351011_sccl_22/132-4220382-8388525?th=1&psc=1",
        badges: ['best seller'],
        price: 129.95,
        sizes: [6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TwfKt5GKL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61o8FM3fiGL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61aVXiUAeQL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61jR-Uq68XL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Get Comfortable: Signature Altra Balanced Cushioning and FootShape toe boxes allow your toes to spread and encourages proper, low-impact form",
            "Stay Focused: Engineered mesh uppers are light, breathable and ready for anything",
            "Push Yourself: InnerFlex midsole technology ensures increased flexibility and performance",
            "Improved caged upper for added durability",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'new balance',
        name: "New Balance WX577V4",
        amazonLink: "https://www.amazon.com/New-Balance-Womens-Trainer-Moonbeam/dp/B08ZJW4N5L/ref=zg_bs_g_679351011_sccl_18/132-4220382-8388525?psc=1",
        badges: ['best seller', 'limited'],
        price: 89.87,
        sizes: [6,11],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51dHkaGdS3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/517KkvV96KL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51E3mlYLQLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51IsB7HeB0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51MnarYfy+L._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Cush+ midsole cushioning delivers ultra-soft, all-day comfort without sacrificing support",
            "Upper features no-sew overlays for a sleek fit and feel",
            "Combination synthetic/mesh upper",
            "NB Memory Sole Comfort Insert",
            "Lace-up closure for an adjustable fit",

        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: "HOVR Phantom 3",
        amazonLink: 'https://www.amazon.com/Under-Armour-Phantom-Black-White/dp/B0BR19ZSSC/ref=sr_1_40?crid=1AIC7CF4Z2RFG&keywords=project%2Brock%2Bshoes&qid=1703445134&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=project%2Brock%2Bshoes%2Caps%2C192&sr=8-40&th=1',
        badges: ['new'],
        price: 140,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12.5,13],
        colors: ['white','black','lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616fl9cr1CL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hi7swz9oL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KZM7jOkZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/719rC+3fd+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61+3tebXjEL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61mCr3eyjjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61kAQXsTcEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71C1y+jVp1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/710vvBl-i8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ksRblFwEL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61rQev319LL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nc9vJ4trL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Mq3yeW6+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wzPpXPgwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61K25vnLKtL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TMSRRGOPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615-4LEFEOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615H916LGrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tger2ci5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BsHm4IQ4L._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: "Scarpa Boostic Rock",
        amazonLink: "https://www.amazon.com/SCARPA-Boostic-Climbing-Shoes-Bouldering/dp/B08WJXPMJ2/ref=sr_1_8?crid=24HCFFWF5F6VX&keywords=scarpa+climbing+shoes&qid=1703448078&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=scarpa+%2Caps%2C203&sr=8-8",
        badges: ['new'],
        price: 218.95,
        sizes: [6.5,7,7.5,8,8.5,9,10,11.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Gi0SEWfhS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51PSrR0UWCS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51y0hpNSYUS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51SAYRCXFPS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61aci5bjjnL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instruction Machine Wash",
            "Sole material Vibram XS Edge (3.5mm)",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "EU Size: 38.5 – US Size: 7-7.5 Women/6-6.5 Men | Technical By Design | Made for long pitches and small edges, the redesigned Boostic features and aggressive downturn and high asymmetry for all-around face climbing performance.",
            "Curved Midsole | Offering maximum support, the curved midsole increases the stability and stiffness of the shoe without losing sensitivity.",
            "Vibram XS Edge Rubber | Stiff enough to let you stand on the thinnest edges, the XS Edge outsole makes these rock shoes ideal for technical face climbing on small footholds.",
            "DTS Active Rand | The highly asymmetric design is amplified by the DTS system which transfers power directly to your big toe and helps the shoe retain its downturned shape.",
            "Sizing Advice – Synthetic climbing shoes should fit snugly and will not stretch much over time. An ideal fit should have no dead space out of the box. Use the sizing chart in the product images or description to find your size, then downsize ½ to 2 sizes for premium performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: "Scarpa Quantix SF Rorck",
        amazonLink: 'https://www.amazon.com/SCARPA-Quantix-Climbing-Shoes-Sport/dp/B09R3Q5ZFT/ref=sr_1_3?crid=24HCFFWF5F6VX&keywords=scarpa+climbing+shoes&qid=1703448078&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=scarpa+%2Caps%2C203&sr=8-3',
        badges: ['new'],
        price: 198.95,
        sizes: [4,4.5,6.5,7,7.5,8,8.5,9,9.5,11,11.5,12,12.5,13,13.5,14.5,15],
        colors: ['orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vnTt0i5uL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71E4C9Qwa1L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/611pMvb5CcL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61OngB6OYOL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71u3eEoTSjL._AC_SX695_.jpg',

                ]
            }
        ],
        details: [
            "Sole material Vibram, Rubber",
            "EU Size: 35 – US Size: 4-4.5 Women/3-3.5 Men | Versatility Expert | With a subtle downturn, supportive midsole, and fast break-in time, the Quantix SF blends comfort and performance from gym climbing to outdoor sport routes.",
            "SF Tension System | This rubber rand wraps the shoe from below, starting from the toe area, to keep your foot in a performance position and ensure your new climbing shoes maintain their shape over time.",
            "Flexan Dynamic Midsole | The medium-stiff Flexan midsole reduces foot fatigue on long climbs and offers a powerful platform for toeing down on small footholds.",
            "Vibram XS Grip 2 Rubber | Ideal for any rock type, the XS Grip 2 rubber is both stiff and sticky, giving you the grip you need for steeper walls and overhanging boulders.",
            "Sizing Advice – Synthetic climbing shoes should fit snugly and will not stretch much over time. An ideal fit should have no dead space out of the box. Use the sizing chart in the product images or description to find your size, then downsize ½ to 2 sizes for premium performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: "Scarpa Vapor V Rock",
        amazonLink: "https://www.amazon.com/SCARPA-Vapor-Climbing-Shoe-Womens/dp/B07L9J72RP/ref=sr_1_1?crid=24HCFFWF5F6VX&keywords=scarpa%2Bclimbing%2Bshoes&qid=1703448069&sprefix=scarpa%2B%2Caps%2C203&sr=8-1&th=1",
        price: 198.95,
        sizes: [4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61egVw6hAEL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ItXR4meZL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51daH9zOswL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51my7QQNfTL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Suede",
            "Closure type Pull On",
            "EU Size: 35 – US Size: 4-4.5 Women/3-3.5 Men | Versatility In Form | Built with a moderate downturn and slightly asymmetric profile, the Vapor V blends performance in steep terrain with the sensitivity and comfort you need when the angle eases off.",
            "Suede In Spades | A microsuede upper with a reduced tongue volume keeps the shoe supple, while a suede foot base conforms to the shape of your foot, providing all-day comfort.",
            "Vibram XS Grip 2 Rubber | The mid-stiff Vibram XS Grip 2 outsole pairs nicely in the forefoot with the softer M70 rubber in the heel to give you a highly technical shoe that won’t shy away from any style of climbing.",
            "Women’s Last | These climbing shoes feature a more narrow last and lower-volume heel cup for a women’s-specific fit.",
            "Sizing Advice – Synthetic climbing shoes should fit snugly and will not stretch much over time. An ideal fit should have no dead space out of the box. Use the sizing chart in the product images or description to find your size, then downsize ½ to 2 sizes for premium performance.",
        ]
    },


    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'scarpa',
        name: "Scarpa Vapor lace Rock",
        amazonLink: "https://www.amazon.com/SCARPA-Vapor-Climbing-Shoes-Bouldering/dp/B09R3QHT2S/ref=sr_1_5?crid=24HCFFWF5F6VX&keywords=scarpa%2Bclimbing%2Bshoes&qid=1703448078&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=scarpa%2B%2Caps%2C203&sr=8-5&th=1",
        price: 198.95,
        sizes: [8.5,9,9.5,10,10.5,11,11.5,12,12.5],
        colors: ['grey','blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ZHXLL2GrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51VAywbL28L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51-beBiF+cL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/415od58QNcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51OVN2A9LmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51j0H8GGxYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51JGLsR92ML._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61JknKA8u1L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615HytgMkyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61OJ8gBMNXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71HBR3aNUrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51v8DzW7ebL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Vibram, Rubber",
            "Closure type Lace-Up",
            "EU Size: 40.5 – US Size: 8.5-9 Women/7.5-8 Men | Technical Expert | From featureless slabs to crack multi-pitches, the updated Vapor climbing shoe offers underfoot support on technically demanding routes.",
            "Fantastic Fit | The soft, supple microfiber upper is strategically designed to mold to the shape of your foot and reduce pressure points for lasting comfort.",
            "Vibram XS Edge Rubber | Stiff enough to let you stand on the thinnest edges, the XS Edge outsole is complemented by the sticky D2 rubber toe cap for extra protection and friction in cracks.",
            "Bi-Tension Rand | This unique system connects the heel of the shoe to the toe, resulting in less foot discomfort and more power being driven towards your primary edging surface.",
            "Sizing Advice – Synthetic climbing shoes should fit snugly and will not stretch much over time. An ideal fit should have no dead space out of the box. Use the sizing chart in the product images or description to find your size, then downsize ½ to 2 sizes for premium performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: "men",
        category: "climbing",
        brand: "scarpa",
        name: "Scarpa Reflex V Rock",
        amazonLink: "https://www.amazon.com/SCARPA-Reflex-Climbing-Black-Flame/dp/B08JQNQV22/ref=sr_1_9?crid=24HCFFWF5F6VX&keywords=scarpa%2Bclimbing%2Bshoes&qid=1703448078&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=scarpa%2B%2Caps%2C203&sr=8-9&th=1",
        price: 118.95,
        sizes: [7,7.5,8,9,9.5,10,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sqMVvOVcL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61lW4UIQ5pL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ud9tzoyXL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/517nPi5b8LL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61QSdaifpJL._AC_SX679_.jpg'
                ]
            }
        ],
        details: [
            "Scarpa's dual velcro tabs to adjust the fit and sight rubber complement the unique performance and aesthetics of this new radical model.",
            "Zonal stretch knit upper is breathable, durable and washable",
            "SCARPA patented Vision rubber provides adhesion and durability",
            "Durable flat construction for all-day comfort and performance",
            "Dual power strap closure allows for maximum adjustment",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: "Scarpa Instinct",
        amazonLink: "https://www.amazon.com/SCARPA-Instinct-Slip-Climbing-Bouldering/dp/B09R3QJ7R3/ref=sr_1_4?crid=24HCFFWF5F6VX&keywords=scarpa%2Bclimbing%2Bshoes&qid=1703448078&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=scarpa%2B%2Caps%2C203&sr=8-4&th=1",
        price: 208.95,
        sizes: [5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71pl74vgzRL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61N7kqmpFoL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61C9wUv7FfL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612aufzmXDL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vUjki+aWL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Vibram",
            "Outer material Rubber",
            "Closure type Pull On",
            "EU Size: 36.5 – US Size: 5.5 Women/4.5 Men | Soft & Sensitive | A soft, flexible slipper climbing shoe that offers responsiveness and precision for gym climbing and steep boulders alike.",
            "CTS Technology | Elastic tension rubber down the length of the shoe offers support for the big toe for precision and power on small footholds.",
            "The Best of Both Rubbers | With SCARPA’s soft, ultra-sticky M50 rubber on the toe and heel cup and stiffer Vibram XS Grip rubber on the sole, this shoe excels in steep terrain letting you toe and heel hook to your heart’s content.",
            "Fits Like a Glove | A five-paneled microfiber upper with reinforced elastic offers a custom-fit feel that won’t stretch out over time.",
            "Sizing Advice – Synthetic climbing shoes should fit snugly and will not stretch much over time. An ideal fit should have no dead space out of the box. Use the sizing chart in the product images or description to find your size, then downsize ½ to 2 sizes for premium performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'altra',
        name: "Altra Solstice XT",
        amazonLink: "https://www.amazon.com/Altra-Footwear-Solstice-XT-Black/dp/B093XQ2W6T/ref=sr_1_26?crid=2J0AY3TZEO5QP&keywords=cross%2Btraining%2Bshoes&qid=1703450065&refinements=p_n_availability%3A2661601011&rnid=2941120011&s=apparel&sprefix=cross%2Btrianing%2Bshoe%2Caps%2C234&sr=1-26&th=1",
        badges: ['best seller'],
        price: 129.95,
        sizes: [7,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,15],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61IX3tNlTCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6182+Qez39L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613nVXVHXVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61r6xA3ekEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71foynP8nSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61CZFctjTcL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Get Comfortable: Signature Altra Balanced Cushioning and FootShape toe boxes allow your toes to spread and encourages proper, low-impact form",
            "Stay Focused: Engineered mesh uppers are light, breathable and ready for anything",
            "Push Yourself: InnerFlex midsole technology ensures increased flexibility and performance",
            "Allows your toes to rest and extend naturally for more comfort and stability",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'altra',
        name: "Altra Solstice XT",
        amazonLink: "https://www.amazon.com/ALTRA-AL0A4PE7-Solstice-Cross-Training/dp/B07TSX1BLQ/ref=sr_1_35?crid=2J0AY3TZEO5QP&keywords=cross+training+shoes&qid=1703450065&refinements=p_n_availability%3A2661601011&rnid=2941120011&s=apparel&sprefix=cross+trianing+shoe%2Caps%2C234&sr=1-35",
        badges: ['best seller', 'limited'],
        price: 129.95,
        sizes: [15],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81A3DI1ojjL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81R+LtEPlUL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bL28SLdhL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/810hQfsnycL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "OriginImported",
            "Sole materialRubber",
            "Closure typeLace-Up",
            "Weight: 8.4 oz / 238 g",
            "Other Features: 3D printed pattern on upper",
            "Insole: 3mm diecut footbed",
            "Midsole: High Abrasion EVA",
            "Outsole: Full rubber outsole",
            "Cushion: Low",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'nike',
        name: "Air Max Alpha",
        amazonLink: 'https://www.amazon.com/Nike-Alpha-Trainer-White-DK-DM0829/dp/B0B6G2FDGF/ref=sr_1_36?crid=2J0AY3TZEO5QP&keywords=cross%2Btraining%2Bshoes&qid=1703450565&refinements=p_n_availability%3A2661601011&rnid=2941120011&s=apparel&sprefix=cross%2Btrianing%2Bshoe%2Caps%2C234&sr=1-36&th=1',
        badges: ['best seller'],
        price: 147.02,
        sizes: [6,6.5,7,7.5,8,9,9.5,10,10.5,11,11.5,12,12.5,13],
        colors: ['lightblue','green'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61aJRB5Tn1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LDltu51hL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614Rr64NglL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71G-HVa-m+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XjCInkPuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+og+h4e2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pw47c17rL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71aqV2vCdxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71JGe1Z7zwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/810hdM1pGaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81SN+o-TNNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81JFOPhr1xL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71xBgXjQxCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+zQ2O5SXL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole materialRubber",
            "Outer materialDurable, breathable mesh in upper",
            "Closure typeHook & Loop",
            "Leather reinforcements on the forefoot",
            "Light and dynamic cushioning",
            "Upper and breathable mesh upper",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: "Dynamic Select",
        amazonLink: "https://www.amazon.com/Under-Armour-Dynamic-Select-Trainer/dp/B0BGQLRPGY/ref=sr_1_27?crid=2J0AY3TZEO5QP&keywords=cross%2Btraining%2Bshoes&qid=1703450565&refinements=p_n_availability%3A2661601011&rnid=2941120011&s=apparel&sprefix=cross%2Btrianing%2Bshoe%2Caps%2C234&sr=1-27&th=1",
        badges: ['sale'],
        price: 99.43,
        discount: 15,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uuJIDqWIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ETX7F95ZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61kCFfXLezL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61t4wg6NvzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71WNdn4fZ0L._AC_SY695_.jpg',
                ]
            },
        ],
        details: [
            "Fabric type 100% Polyester",
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Lightweight, super-durable ripstop upper",
            "Molded TPU clip for added lateral support",
            "Cushioned sockliner molds to your foot, eliminating slippage & providing ideal underfoot comfort",
            "Charged Cushioning midsole absorbs impact & converts it into a responsive burst",
            "Durable rubber outsole with strategically placed flex grooves for multi-surface traction & flexibility",
            "Offset: 8mm",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'under armour',
        name: "PR5",
        amazonLink: "https://www.amazon.com/Under-Armour-Womens-Trainers-Decorose/dp/B0C6H7NY2N/ref=sr_1_45?crid=2P5AS9KOSQYF0&keywords=under%2Barmour&qid=1704634394&refinements=p_89%3AUnder%2BArmour%2Cp_n_availability%3A2661601011&rnid=7141123011&s=apparel&sprefix=under%2Barmour%2Caps%2C198&sr=1-45&th=1",
        price: 267.38,
        sizes: [6.5,7.5,8.5,9.5,10.5],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61AnpmswN-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BnfN3bSgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71uf+WTM20L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71R1tlXmjzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61xz6DddpIL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Sole material Synthetic",
            "Shaft height Ankle",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Under Armour PR5 Home Gym Womens Trainers",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: "Project Rock BSR3",
        amazonLink: 'https://www.amazon.com/Under-Armour-Project-Training-Shoes/dp/B0C4HX2CY7/ref=sr_1_104?crid=2J0AY3TZEO5QP&keywords=cross+training+shoes&qid=1703451437&refinements=p_n_availability%3A2661601011&rnid=2941120011&s=apparel&sprefix=cross+trianing+shoe%2Caps%2C234&sr=1-104',
        badges: ['new', 'limited'],
        price: 130.42,
        sizes: [10,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51wQ73uVq8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51FP9c3k3AL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/513DvxUxWJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51lEY-mYRcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LihB9BiWL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Synthetic",
            "Shaft height Ankle",
            "Outer material Synthetic",
            "Under Armour Mens Project Rock BSR 3 Trainers",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: "Adrenaline GTS 22",
        amazonLink: "https://www.amazon.com/Brooks-Adrenaline-Womens-Supportive-Running/dp/B0BHLCK4QH/ref=sr_1_67?crid=3KBQ0IOQ3DWWD&keywords=cross%2Btraining%2Bshoes&qid=1703451777&s=fashion-womens-intl-ship&sprefix=cross%2Btraining%2Bshoes%2Cfashion-womens-intl-ship%2C195&sr=1-67&th=1",
        badges: ['best seller'],
        price: 126.95,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['darkblue', 'lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614vAlfawEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Q0bo1W-2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61h6Z+NLrDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71j2wbrPHrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61fUO8rmlvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6137ePKzigL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71mYBk21X8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71QLuphyVWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81zHYNTks+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ouHX2AaZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81DW+fFBsPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71QivwLLJ6L._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "THIS WOMEN'S SHOE IS FOR: Runners looking for a smooth ride, with great cushion and trusted GuideRails support that won’t distract from the fun of the run. This Brooks Adrenaline GTS 22 is a certified PDAC A5500 Diabetic shoe and has been granted the APMA Seal of Acceptance. We recommend ordering Brooks running shoes 1/2 to one size larger than your dress shoe.",
            "SUPPORT AND CUSHION: Provides just the right amount of stability and support, great for overpronation while providing high energizing cushioning. Ideal for road running, cross training, the gym or wherever you might want to take them! Predecessor: Adrenaline GTS 21",
            "BALANCED, SOFT CUSHIONING: The updated midsole is now 100% DNA LOFT cushioning paired with the Segmented Crash Pad for an even softer, smoother ride and easier flow from landing to toe-off.",
            "MODERNIZED FIT: More strategic use of the 3D Fit Print upper technology offers the structure and proven fit the Adrenaline is known for without excess bulk.",
            "GUIDERAILS HOLISTIC SUPPORT SYSTEM: We've shifted our focus beyond the feet to the most injury-prone part of a runner’s body: the knees. GuideRails keep you moving comfortably by keeping excess movement in check.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: "Charged Revitalize",
        amazonLink: "https://www.amazon.com/Under-Armour-Charged-Revitalize-Trainer/dp/B0BGQR51ND/ref=sr_1_34?crid=2J0AY3TZEO5QP&keywords=cross%2Btraining%2Bshoes&qid=1703450565&refinements=p_n_availability%3A2661601011&rnid=2941120011&s=apparel&sprefix=cross%2Btrianing%2Bshoe%2Caps%2C234&sr=1-34&th=1",
        badges: ['sale'],
        price: 95,
        discount: 15,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['blue', 'grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51oIx2Q4cHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51w8gaDX2BL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/517tJer1PBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51HmX5j5qcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51qYU-kPYCL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51BfqSxyEeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51+oAZxr5ZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61G+BKmeTVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51zz59OeUHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61oIds83JRL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type80% Cotton,20% Polyester",
            "Care instructionsMachine Wash",
            "OriginMade in the USA or Imported",
            "Sole materialRubber",
            "Lightweight, heathered textile upper is breathable & durable",
            "Deluxe comfort system sockliner molds to your foot for ultimate underfoot comfort",
            "Charged Cushioning midsole is responsive & durable for optimal energy-return & all-day comfort",
            "Durable rubber outsole with strategic pattern for traction & flexibility where you need it",
            "Offset: 8mm",
            "Weight: 11.1 oz.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'asics',
        name: 'Versablast 3',
        amazonLink: 'https://www.amazon.com/ASICS-VERSABLAST-Running-Sapphire-Illuminate/dp/B0CFNSJ1D7/ref=sr_1_32?crid=27OE8GDKZMMZB&keywords=asics&qid=1703509343&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=asic%2Caps%2C189&sr=8-32&th=1&psc=1',
        price: 159.95,
        sizes: [5.5,6,6.5,7,7.5,8,9],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61eMK0lY-sL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613LWoQw3PL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61zhONERtjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61fHAZxyK4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61bh97e0tBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612AlFUKBvL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nMyOYIF0L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Closure type Lace-Up",
            "Russel mesh upper: Helps provide good breathability",
            "Midsole foam: Provides soft cushioning with a responsive rebound",
            "Vegan Friendly: For this product, no materials of animal origin are applied in the design and material selection stages, including: the yarns, glues or other adhesives applied in the product. *The product is not certified as vegan by an independent third party",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: "Men's GT-2000",
        amazonLink: "https://www.amazon.com/ASICS-GT-2000-Running-Shoes-Storm/dp/B0BYBQRNHC/ref=sr_1_72?crid=27OE8GDKZMMZB&keywords=asics&qid=1703509631&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=asic%2Caps%2C189&sr=8-72&th=1",
        badges: ['best seller'],
        price: 176.4,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['grey','lightblue','slateblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61kBLLmHPiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61gKu66Kj0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/610Tm29rneL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61l+TnjycxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61reedLEOqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-HoqzEQxL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71SxujXiIiL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61cq4QueWYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61A4kLSm2xL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61+JyZAac2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617tCrfJ5DL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61XIzzJ5TsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Ba3XtKEwL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61thIE4nTjL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'slateblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617Wf+YXXqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qePB+QIaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nBF2tFpFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61CIUWgV33L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hRi4AFxXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61DEL198ViL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61V0adC-39L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Jacquard mesh upper: Offers a supportive and comfortable foothold",
            "At least 50% of the shoe's main upper material is made with recycled content to reduce waste and carbon emissions:",
            "The sockliner is produced with the solution dyeing process that reduces water usage by approximately 33% and carbon emissions by approximately 45% compared to the conventional dyeing technology:",
            "Rearfoot GEL technology: Improves impact absorption and creates a softer feeling at footstrike",
            "FF BLAST technology: Cushioning provides lightweight cushioning and a responsive rebound",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Launch 9',
        amazonLink: "https://www.amazon.com/Brooks-Womens-Launch-Black-Purple/dp/B0B7625ZQC/ref=sr_1_8?crid=3FF5QX22QCS4S&keywords=brooks%2Bshoes&qid=1703521025&sprefix=brooks%2Bshoes%2Caps%2C231&sr=8-8&th=1",
        badges: ['best seller'],
        price: 79.95,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,11],
        colors: ['black','slateblue','pink'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81CfBMtXB2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XnL5xkZoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Rfd66izaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71n-cQpK2qL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8189dgX2O9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81kgVSV4JqL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'slateblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71iD6NWxUOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71jfiYgKFLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71XMj0YY6xL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-SfVrEQvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Fk+mmFDrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71t2eoRKAsL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'pink',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81BzoCcLzHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/817YnPnCSeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Mlr8iIcCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71eN0zCuaPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/815vP1oVczL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81d8jwSeH-L._AC_SY695_.jpg',
                ]
            },
            
        ],
        details: [
            "Care instructions Machine Wash",
            "OriginM ade in the USA or Imported",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "THIS WOMEN’S SHOE IS FOR: The Launch 9 is for neutral runners who want a dependable, lightweight shoe with DNA cushioning and a highly breathable upper that helps runners go fast on every run. We recommend ordering Brooks running shoes 1/2 to one size larger than your dress shoe.",
            "NEUTRAL SUPPORT: Lightweight, streamlined, with even more BioMoGo DNA cushioning, the Launch 9 offers neutral support to keep you running faster mile after mile.",
            "ENHANCED BREATHABILITY: Reengineered upper features Creel Warp mesh, designed to be extremely lightweight and breathable. Hints of reflectivity on the upper to increase visibility on the road.",
            "LIGHTWEIGHT CUSHIONING: We have added more BioMoGo DNA cushioning to the midsole for an even faster ride without the extra weight. A dynamically responsive ride for days when you are working on your speed.",
            "RESPONSIVE TRANSITIONS: Redesigned midsole increased by 2 mm to provide runners with more responsiveness while the Green Rubber Outsole helps your foot move quickly from heel to toe.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: "Ghost 15 GTX",
        amazonLink: "https://www.amazon.com/Brooks-Womens-Waterproof-Neutral-Running/dp/B0BMTN1SXT/ref=sr_1_8?crid=3FF5QX22QCS4S&keywords=brooks%2Bshoes&qid=1703521046&sprefix=brooks%2Bshoes%2Caps%2C231&sr=8-8&th=1",
        badges: ['new'],
        price: 169.95,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['black','darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/815FpH+WBJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/710NY1ul6yL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71XdAUDzoVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81L+5kFCwEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ibHqaEetL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614Lpj+XnEL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91rFYafXkBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91HMEpwedEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81xaKQkdLPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8176x9h3SRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91PaJucJb8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81nE5KqJV2L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "THIS WOMEN'S SHOE IS FOR: Runners looking for a smooth ride that won’t distract from the fun of the run. The Ghost 15 GTX offers a refined 3D Fit Print to create a more seamless, secure fit and waterproof protection. This Brooks Ghost 15 GTX is a certified PDAC A5500 Diabetic shoe and has been granted the APMA Seal of Acceptance.",
            "WATERPROOF AND CUSHION: The Ghost 15 GTX offers neutral support while providing high energizing cushioning and GORE-TEX waterproof protection. Ideal for road running, cross training, the gym or wherever you might want to take them!",
            "BALANCED, SOFT CUSHIONING: New midsole features soft and lighter-weight DNA LOFT V2 cushioning to provide distraction free cushioning under your feet with each stride.",
            "SMOOTH, STABLE RIDE: No matter how your foot lands, our soft midsole and Segmented Crash Pad - an integrated system of shock absorbers - team up for easy flow from landing to toe-off.",
            "ENHANCED UPPER: Engineered air mesh upper provides comfort and breathability with 3D Fit Print for added structure.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: "Ghost Max",
        amazonLink: "https://www.amazon.com/Brooks-Cushion-Neutral-Running-Walking/dp/B0CGKKM4RK/ref=sr_1_4?crid=3FF5QX22QCS4S&keywords=brooks%2Bshoes&qid=1703521046&sprefix=brooks%2Bshoes%2Caps%2C231&sr=8-4&th=1",
        badges: ['new'],
        price: 259.52,
        sizes: [7.5,8,8.5,9,9.5,10,10.5,11,12,13],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/712aNk08C7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71J8e0Pyl9L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric typeFabric-and-synthetic",
            "Care instructionsMachine Wash",
            "OriginMade in the USA or Imported",
            "Sole materialRubber",
            "THIS MEN’S SHOE IS FOR: Runners and walkers alike who want maximized cushion, and a maximized protective ride with effortless, smooth heel-toe transitions and secure, stable landings. The Ghost Max is a certified PDAC A5500 Diabetic shoe.",
            "PROTECTIVE CUSHIONING: A high stack of DNA Loft v2 cushioning specifically in the forefoot, combined with a unique GlideRoll Rocker work together to decrease pressure underfoot for enhanced yet protective comfort from the arch of the foot all the way up to the knee.",
            "STABLE RIDE: A broad base offers inherent stability for a secure feel that doesn’t interfere with your stride. Raised sidewalls offer optimal bending stiffness for a comfortably secure fit. Unique linear last construction makes fit inclusive of foot shapes and orthotics.",
            "ASSISTED TRANSITIONS: GlideRoll Rocker transition technology actively promotes smooth heel-toe transitions for an effortless feeling as you move that won’t interfere with a neutral stride.",
            "VERSATILITY: An ideal choice for runners which aids by keeping people moving in their habitual motion path thereby reducing the odds for running related injuries. Additionally, the Ghost Max is also an ideal choice for walkers as it actively reduces energy absorption in foot soft tissues.",
        ]
    },

    
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: "Adrenaline GTS 23",
        amazonLink: "https://www.amazon.com/Brooks-Mens-Adrenaline-Supportive-Running/dp/B0CD15LHM5/ref=sr_1_1?crid=3FF5QX22QCS4S&keywords=brooks%2Bshoes&qid=1703521046&sprefix=brooks%2Bshoes%2Caps%2C231&sr=8-1&th=1",
        badges: ['new'],
        price: 139.95,
        sizes: [7,7.5,8.5,9,9.5,10,10.5,11,11.5,12,13,14,15],
        colors: ['grey','white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81GwMt1hEEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81MW0f2LMeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/813K7nTHJWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818DMKQvVUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818EXPe7DdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81wCL7r7o6L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RSq4LtoQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71naF0Mm4EL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71uSZ55TFpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71v0fkGmYRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714PXXnGSWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81AQNNpXpuL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "OriginMade in the USA or Imported",
            "Sole material Rubber",
            "THIS MEN’S SHOE IS FOR: The Adrenaline GTS 23 is for runners who need support and want a smooth, reliable ride. This Brooks Adrenaline GTS 23 is a certified PDAC A5500 Diabetic shoe and has been granted the APMA Seal of Acceptance. Predecessor: Adrenaline GTS 22",
            "GUIDERAILS HOLISTIC SUPPORT SYSTEM: Our unique technology aligns your body in its natural motion path while keeping excess movement in check.",
            "SOFT, LIGHTWEIGHT CUSHIONING: New midsole features soft and lighter weight DNA LOFT v2 cushioning.",
            "ENHANCED UPPER: Engineered air mesh upper provides comfort and breathability with 3D Fit Print for added structure.",
            "TRUSTED, SECURE FIT: Engineered Air Mesh and use of 3D Fit Print to enhance upper and deliver the structure and proven fit the Adrenaline is known for.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'salomon',
        name: "Salomon Outpulse",
        amazonLink: "https://www.amazon.com/Salomon-Outpulse-Climbing-Black-Green/dp/B0983WS284/ref=sr_1_44?crid=CZ8IAFDXTGQE&keywords=salomon%2Bshoes&qid=1703535668&sprefix=salomon%2Bshoes%2Caps%2C205&sr=8-44&th=1",
        badges: ['new'],
        price: 115,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81qwKnq363L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81QKJ3kX0UL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/810-2AdKk1L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61U9OPIoUML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81l0VW2yhqL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71HbG7e0ScL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Water resistance level Not Water Resistant",
            "Energy Blade Outdoor: Engineered into the forefoot area of the bottom unit, Energy Blade is a lightweight TPU plate works in cohesion with the soft and springy midsole to filter the ground and deliver a smooth, dynamic stride.",
            "Fuze Surge: Made up of one of our softest EVA compounds and 30% natural rubber, Fuze Surge foam is pillowy for instant comfort and responsive enough to keep rebound levels high. Engineered using less artificial polymers, this midsole compound delivers a more earth-conscious, smooth yet dynamic stride.",
            "Reverse Camber: Inspired by Salomon's ski heritage, this curved midsole geometry helps you feel like you are floating over the ground.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'puma',
        name: "Velocity Nitro 2",
        amazonLink: "https://www.amazon.com/PUMA-Velocity-Nitro-Black-Sunset/dp/B09TGZWKWH/ref=sr_1_24?crid=1RNRLXYJNHEAD&keywords=puma%2Bnitro&qid=1703536048&sprefix=puma%2Bnitro%2Caps%2C179&sr=8-24&th=1",
        price: 115.92,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['black','orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51FVVoGyibL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619nkmy4MnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/516Huqb5MVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/516RAEoMDBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51JTTIt-DEL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61jlle0E98L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Q2QinoncL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51V0G3ROQPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51LOf0ZcVxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51A2R8zSx6L._AC_SY695_.jpg'
                ]
            },
        ],
        details: [
            "Fabric type Fabric",
            "Care instructions Machine Wash",
            "Origin Made in USA and Imported",
            "Sole material Rubber",
            "Engineered mesh upper",
            "Pumagrip rubber outsole for traction and durability",
            "Lace closure for a snug fit",
            "Thermoplastic polyurethane heel piece for added stability",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'puma',
        name: "Voyage Nitro 2",
        amazonLink: "https://www.amazon.com/PUMA-Voyage-Nitro-Adriatic-Black/dp/B0BQDYM8QD/ref=sr_1_23?crid=1RNRLXYJNHEAD&keywords=puma%2Bnitro&qid=1703536048&sprefix=puma%2Bnitro%2Caps%2C179&sr=8-23&th=1",
        price: 117,
        sizes: [7.5,8,8.5,9,9.5,10,11,11.5,12,13,14],
        colors: ['lightblue','orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51e91wOG62L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GZD0FHKEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/5154bCu+N6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51tOeLJ9xXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51xMZvw8UyL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51rqJtWgjmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61T5pxNko0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51yMB6vmzeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51263kjnGiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51HlIZWcwXL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Fabric",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Mono-mesh upper",
            "Lace up closure",
            "Lightweight EVA midsole",
            "Rubber outsole", 
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'puma',
        name: 'Puma Twitch Runner',
        amazonLink: "https://www.amazon.com/PUMA-Sneaker-Blazing-Blue-Lime-Squeeze/dp/B09S2KGBZJ/ref=sr_1_2?content-id=amzn1.sym.9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e%3Aamzn1.sym.9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e&keywords=puma%2Bnitro%2Belite%2B2&pd_rd_r=123a38ca-f2cc-48db-826c-a92aba77a2d6&pd_rd_w=KWxMT&pd_rd_wg=dE3FM&pf_rd_p=9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e&pf_rd_r=CK1JKA6KMVCYT8BJ45C8&qid=1703536852&sr=8-2&th=1",
        badges: ['best seller', 'sale'],
        price: 96.06,
        discount: 25,
        sizes: [6,6.5,7,9.5,10,10.5,11,12,13,14,],
        colors: ['darkblue','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/718H4BsN35L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71MYtuHwd5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hV1bnmHDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/819hkzW34RL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71BbcGAAMHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81hPcVLiKeL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-FcwOcJ4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71XcK1s06ZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71c5jpDWWJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714XVZyszkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RbWa5EXuL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Canvas",
            "Care instructions Machine Wash",
            "Sole material Ethylene Vinyl Acetate",
            "Outer material Rubber",
            "Lugged rubber outsole for increased traction",
            "Closed ripstop upper for durability",
            "SOFTFOAM+ sockliner for added cushion and comfort",
            "Lace closure for a snug fit",
            "PUMA branding for added style",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'puma',
        name: 'Puma Electron 2.0',
        amazonLink: "https://www.amazon.com/PUMA-Electron-DOUBLEKNIT-Sneaker-White/dp/B0C6CRFBJ8/ref=sr_1_fkmr3_1?content-id=amzn1.sym.9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e%3Aamzn1.sym.9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e&keywords=puma%2Bnitro%2Belite%2B2&pd_rd_r=123a38ca-f2cc-48db-826c-a92aba77a2d6&pd_rd_w=KWxMT&pd_rd_wg=dE3FM&pf_rd_p=9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e&pf_rd_r=CK1JKA6KMVCYT8BJ45C8&qid=1703536852&sr=8-1-fkmr3&th=1&psc=1",
        badges: ['best seller','sale'],
        price: 70,
        discount: 21,
        sizes: [7,7.5,8,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['black','white','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71SIlVQiJRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sJnrlQ2gL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71d8o4CW6sL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71np5gvIfCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81qTa8WAf2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717i7JKRZjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71d8g8wBfeL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Tz0hd-e5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71VlOs0eriL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71C4+0qIqoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71LR9JXbzcL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Fabric",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Ethylene Vinyl Acetate",
            "Bootie construction with SoftFoam+ sockliner, Unconventional lacing system, IMEVA Midsole and rubber outsole, SoftFoam+ sockliner",
            "Unconventional lacing system",
            "IMEVA Midsole and rubber outsole",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'adidas',
        name: "Adizero SL",
        amazonLink: "https://www.amazon.com/adidas-Adizero-Running-Shoes-Mens/dp/B0CH4TMNFM/ref=sr_1_97?crid=29ZTGYDFGWRZ7&keywords=adidas%2Bshoes&qid=1703537716&sprefix=adidas%2B%2Caps%2C206&sr=8-97&th=1",
        price: 90,
        sizes: [8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71FVyCi3uXL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+tQ1eGN0L._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71A8przv-YL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hMZZ2N9UL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KysO-ig1L._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71iMnVRnrJL._AC_SX679_.jpg'
                ]
            }
        ],
        details: [
            "Imported",
            "Lace closure for premium lockdown",
            "Lightstrike & Lightstrike Pro cushioning",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'adidas',
        name: "Adidas Racer TR23",
        amazonLink: "https://www.amazon.com/adidas-Racer-Carbon-Arctic-Night/dp/B0CF3HTH7B/ref=sr_1_125?crid=29ZTGYDFGWRZ7&keywords=adidas%2Bshoes&qid=1703537716&sprefix=adidas%2B%2Caps%2C206&sr=8-125&th=1",
        badges: ['new'],
        price: 79.99,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714DEl05oVL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717JDhMn6KL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hqliTzWmL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71oRzJgo5bL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717iZb71aIL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71MAfSIhb9L._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Origin Made in the USA or Imported",
            "Outer material Leather",
            "Take a walk in the town or go for easy trails nearby wearing adidas Running Racer TR23 footwear. The round toe and pull-tabs on heel and instep allows convenient choice. Shoes have textile/synthetic upper, textile/synthetic lining, and textile footbe",
            "Synthetic rubber outsole.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'asics',
        name: "ASICS GT-2000 10",
        amazonLink: "https://www.amazon.com/ASICS-Womens-GT-2000-Running-Shoes/dp/B099C9J5L2/ref=sr_1_246?crid=29ZTGYDFGWRZ7&keywords=adidas%2Bshoes&qid=1703538349&sprefix=adidas%2B%2Caps%2C206&sr=8-246&th=1",
        badges: ['best seller'],
        price: 130,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,12],
        colors: ['lightblue','black','red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619XfuxYvdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61W9520gRxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61xT5TNxpWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nXeODe4xL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sZnSL9NkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61QmhSorrOS._AC_SX695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LZ2hYEcDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61oZo6XZInL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61H-+3Iga6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LcMcZ7QOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61tH77JHHZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61xM1hHBEYS._AC_SX695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BgExodJ+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61bEQnYO-qL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61gWz7Qy+1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PhT4h9lbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61iOobtDr9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71x1bhqJMyL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Polyester",
            "Engineered knit upper: Offers a supportive and comfortable foothold.",
            "Rearfoot and Forefoot GEL Technology Cushioning System: Attenuates shock during impact and toe-off phases, and allows movement in multiple planes as the foot transitions through the gait cycle.",
            "The sockliner's sustainable dyeing process helps reduce overall water usage by approx. 33% and carbo: Attenuates shock during impact and toe-off phases, and allows movement in multiple planes as the foot transitions through the gait cycle.",
            "FLYTEFOAM Technology: Provides lightweight cushioning.",
            "The upper's main material is designed with approx. 30% recycled polyester: Provides lightweight cushioning.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'black diamond',
        name: "Shadow LV",
        amazonLink: "https://www.amazon.com/Black-Diamond-Shadow-Climbing-Shoes/dp/B084KJKN89/ref=sr_1_17?crid=NAVN6UN292GH&keywords=black+diamond+climbing+shoes&qid=1703539480&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=black+diamond+clim%2Caps%2C211&sr=8-17",
        badges: ['limited'],
        price: 244.31,
        sizes: [11,11.5,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Ta7BO69pS._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/7168dXmnyyS._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qfuPgc+TS._AC_SX679_.jpg'
                ]
            }
        ],
        details: [
            "LV last—for low volume feet",
            "Aggressive, downturned last for steep routes and bouldering",
            "4.3mm rubber outsole is molded for superior grip, optimal consistency, and performance",
            "Engineered Knit Technology tongue provides exceptional breathability and comfort",
            "Minimalist midsole for extra sensitivity on steep terrain",
            "A combination of printed and molded high friction rubber on top of the foot maximizes durability, dexterity and grip for toe-hooking",
            "Velcro strap for fit adjustability",
            "Unisex",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'black diamond',
        name: 'Momentum',
        amazonLink: "https://www.amazon.com/Sportiva-Womens-Aragon-Climbing-Hibiscus/dp/B08B7P6Y1H/ref=zg_bs_g_679350011_sccl_5/132-4220382-8388525?th=1&psc=1",
        badges: ['best seller'],
        price: 188.95,
        sizes: [8,8.5,9,9.5,10,10.5,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71sHiwPpoMS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81a27bcT1FS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71qgO8b+uSS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/711wtkQbGJS._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Water resistance levelNot Water Resistant",
            "Neutral, flat last for vertical climbing or all-day comfort",
            "Updated midsole for improved edging ability",
            "Lace entry for fit adjustability?",
            "4.3mm rubber is built for durability and molded for optimal consistency and performance",
            "Soft flex midsole for added sensitivity and comfort",
            "Materials in entire shoe are completely vegan",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Aragon',
        amazonLink: "https://www.amazon.com/Sportiva-Womens-Aragon-Climbing-Hibiscus/dp/B08B7P6Y1H/ref=zg_bs_g_679350011_sccl_5/132-4220382-8388525?th=1&psc=1",
        badges: ['best seller'],
        price: 118.95,
        sizes: [4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Mqbs2EEpL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/610a5oMf5dL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ESz50KG7L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SSzdhQCGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61RJQxcaMiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51i3jEQ4JmL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Leather, Rubber",
            "Outer material Leather",
            "Closure type Hook & Loop",
            "A super comfortable climbing shoe for beginners who are ready for a performance upgrade",
            "Soft unlined leather uppers and durable rubber for all-day comfort and longevity",
            "UPPER: Leather/Padded Mesh Tongue w/ wicking cotton lining/Dual Hook & Loop Closure System/2 Heel Pull-Tabs/1.8mm Frixion RS Rand Rubber",
            "MIDSOLE: Women's: 0.8mm LaspoFlex",
            "SOLE: 1.8mm FriXion RS rubber (heel) & 5mm Frixion RS 1/2 sole rubber (toe)",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Futura',
        amazonLink: 'https://www.amazon.com/Sportiva-Futura-Climbing-Shoe-Womens/dp/B071G5DVFQ/ref=zg_bs_g_679350011_sccl_12/132-4220382-8388525?th=1&psc=1',
        badges: ['sale'],
        price: 198.95,
        discount: 25,
        sizes: [6,7.5,8,8.5,9,9.5,10],
        colors: ['green'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61JKHglxwcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61cRpLoLwwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61j2VJECXlL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SuqeUxjcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51mIY2VnekL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Vb3zqkBWL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructionsMachine Wash",
            "Sole materialRubber",
            "Outer materialSynthetic",
            "Closure typeLace-Up",
            "Patented No-Edge Technology from the Speedster gives you the maximum edging advantage right out of the box",
            "P3 technology lets you crank on overhangs",
            "Fast Lacing System from the Solution gives you a snug, precise fit",
            "Excellent sensitivity for extremely technical projects",
            "AWARDS: Climbing Magazine - Editors' Choice GREEN",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'columbia',
        name: "Columbia Trailstorm",
        amazonLink: "https://www.amazon.com/Columbia-Trailstorm-Beyond-Trail-Running/dp/B0CP5K6JJ8/ref=sr_1_3?keywords=columbia+shoes&qid=1703540105&sr=8-3",
        badges: ['sale'],
        price: 97.95,
        discount: 20,
        sizes: [5.5,6,6.5,7,7.5,8],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61yNH6Q0uEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616pbe+Wm7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61prLdz9QBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TNvWctDwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51VnVCzdqKL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614uEgV3K6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hAKTcRKVL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Upper Material: mesh",
            "Closure: lace",
            "Claimed Weight: 9.1oz",
            "Midsole: Techlite",
            "Last: wide",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'columbia',
        name: 'Columbia',
        amazonLink: "https://www.amazon.com/Columbia-Trail-Walking-Water-Black/dp/B0B4KM471X/ref=sr_1_7?keywords=columbia%2Bshoes&qid=1703540135&refinements=p_n_availability%3A2661601011&rnid=2661599011&sr=8-7&th=1",
        badges: ['best seller'],
        price: 105.45,
        sizes: [8.5,9,10.5,11,11.5,12,14],
        colors: ['teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71cssAGetwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71HYeeprs2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-Lq6fjx0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61yaxBvIKWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61HCBkjO2pL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61DCFCB6wJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71lwC3lG8bL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Polyester",
            "Inner material Synthetic",
            "Closure typeLace-Up",
            "Omni-Grip non-marking traction rubber. Supportive welded textile overlays with breathable mesh. Synthetic toecap., Techlite lightweight midsole for long lasting comfort, superior cushioning, and high energy return. Midsole ports for air ventilation and cooling.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'columbia',
        name: "Montrail FKT",
        amazonLink: "https://www.amazon.com/Columbia-Montrail-Womens-Sneaker-Regular/dp/B07RHQ5F4C/ref=sr_1_78?keywords=columbia+shoes&qid=1703540162&refinements=p_n_availability%3A2661601011&rnid=2661599011&sr=8-78",
        price: 79.75,
        sizes: [6,6.5,7,7.5],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51xUXbo+gLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/516Wscp0ecL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/518s4eyDNzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Cjfq7cgYL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Shaft height Low-top",
            "Country of Origin Vietnam",
            "Full length rubber outsole with directional lugs for durability and traction",
            "Ride heights: 18mm heel/ 13mm forefoot",
            "A high abrasion woven jacquard upper with a power-mesh sock fit and secondary lace Cage forms unparalleled fit and support",
            "Tri-density trail Reaction system: mid-density EVA with integrated trail Shield protection plate layered on top of soft, Reactive TPU foam that absorbs uneven terrain while keeping your foot stable",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'on',
        name: "Cloudnova",
        amazonLink: "https://www.amazon.com/Running-Cloudnova-Textile-Synthetic-Trainers/dp/B0BN4B19JQ/ref=sr_1_4?crid=NI22E7TEPWH2&keywords=on%2Bshoes&qid=1703549978&sprefix=on%2Bshoes%2Caps%2C189&sr=8-4&th=1",
        badges: ['new'],
        price: 195,
        sizes: [7,7.5,8.5,9,9.5,10,10.5,13],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51NRoYKVHdL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61AXCq2yLzL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51dAyH85hEL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61FY9Di9wWL._AC_SX695_.jpg'
                ]
            },
            
        ],
        details: [
            "Fabric type Mesh",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "Fabric: Performance mesh",
            "Rubber sole",
            "Perforated panels, Reflective accents throughout, Cushioned collar and super-soft insole, Engineered for the needs of multi-functional athletes and movement-based workouts, Ultra lightweight design, Helion superfoam injected CloudTec sole, Signature speed-lacing system",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'nike',
        name: "Pegasus Trail 3",
        amazonLink: "https://www.amazon.com/Nike-Pegasus-Trainers-Sneakers-Habanero/dp/B0C2BSP9KY/ref=sr_1_20?crid=NI22E7TEPWH2&keywords=on%2Bshoes&qid=1703549989&sprefix=on%2Bshoes%2Caps%2C189&sr=8-20&th=1",
        badges: ['best seller'],
        price: 215,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['black','red','yellow'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Xt7tBvvrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51OYnxW+yKL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/618CDfrKJEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/719Zj6ng0SL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61yv6H6R2uL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51IaMQksAiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619qDcTTv1L._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51cRSs2+SJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51eWvjhBVNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/512zjau5i8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614YAr74zFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51EGEAf7nlL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ARo3Y00UL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'yellow',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Z6imIrnxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GvvlLgCZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ORiNk9v4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61czN0G9lnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51p3tEhsGhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ryhbvVuwL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'nike',
        name: "React Phantom Flyknit 2",
        amazonLink: "https://www.amazon.com/Nike-React-Phantom-Running-Cj0277-003/dp/B08KSGBMP4/ref=sr_1_85?crid=NI22E7TEPWH2&keywords=on%2Bshoes&qid=1703550704&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=on%2Bshoes%2Caps%2C189&sr=8-85&th=1",
        badges: ['new'],
        price: 150,
        sizes: [7,8.5,9,9.5,10],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ZY5e0GgaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61wnNN8jkNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51wmEltNdHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71aZH6xxrDL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric typeSynthetic-and-rubber",
            "Care instructionsMachine Wash",
            "Sole materialLeather, Suede",
            "Outer materialLeather",
            "The Women’s Air Jordan 1 Mid “Iridescent” is a flashy look for the women’s sizing of Michael Jordan’s first signature shoe in mid-top form",
            "The unique appearance of the release can be attributed to the iridescent leather collar and heel which emits a reflective shine",
            "Barely Rose suede covers the mid-panel, toe cap, and collar",
            "A dotted black nylon Swoosh contrasts the mid-panel",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'on',
        name: "On Cloudswift",
        amazonLink: "https://www.amazon.com/Running-Cloudswift-Womens-Magnet-lightblue/dp/B096XF3NFS/ref=sr_1_51?crid=NI22E7TEPWH2&keywords=on%2Bshoes&qid=1703550704&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=on%2Bshoes%2Caps%2C189&sr=8-51&th=1",
        badges: ['new'],
        price: 180,
        sizes: [6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616tk82b36L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61HRtIwcuSL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71NCM9bMSYL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/610QRzV092L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31-txPBDieL._AC_.jpg',
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "Fabric: Lightweight performance knit",
            "Rubber sole",
            "Structured arch support, Reflective accents, Helion superfoam injected CloudTec sole for cushioned, yet responsive movement, Speedboard technology and supportive side panels, Signature speed-lacing system",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'on',
        name: "ON Cloud 5",
        amazonLink: "https://www.amazon.com/Cloud-Running-Shoes-Track-Field/dp/B0BYJ8FBK8/ref=sr_1_229?crid=NI22E7TEPWH2&keywords=on+shoes&qid=1703551362&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=on+shoes%2Caps%2C189&sr=8-229",
        price: 195.9,
        sizes: [7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51oYwUANYzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51jas3Ph4BL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51P-D51CbmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LDYnQnDsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61JL73cGwBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51kghSIbeiL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Outer",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Origin Rock',
        amazonLink: 'https://www.amazon.com/SCARPA-Origin-Climbing-Shoe-Maldive/dp/B0838P6DN9/ref=sr_1_20?crid=19QCMP2NBGG39&keywords=la+sportiva+climbing+shoes+women&qid=1703788863&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=la+sportiva+climbing+shoes+women%2Caps%2C272&sr=8-20',
        badges: ['best seller'],
        price: 119,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['green'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61WynmDr9QL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51WG44a4+XL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616rrWf0EvL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51vh7QBkREL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71oLZMAMtIL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Vision (5mm)",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "EU Size: 36 – US Size: 5-5.5 Women/ 4-4.5 Men",
            "Start Comfy, Stay Comfy | Featuring a flat-last and only slight asymmetry, the Origin climbing shoe puts your comfort first while still giving you the stick you need to develop a solid foundation of climbing techniques.",
            "Women’s Last | These climbing shoes feature a more narrow last and lower-volume heel cup for a women’s-specific fit.",
            "Vision Rubber | The thick rubber outsole is highly durable, giving you the wiggle room you need to learn the nuances of proper footwork.",
            "Pressure Absorbing Fit | This unique heel system spreads the force of the heel tension, reducing pressure on your Achilles heel while still providing active forward pressure.",
            "Passive Rand | Prioritizing comfort over power, the passive rand is tensioned perfectly to let you wear these climbing shoes all day, without feeling any foot fatigue.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'black diamond',
        name: 'Zone LV',
        amazonLink: 'https://www.amazon.com/Black-Diamond-Climbing-Shoes-Curry/dp/B07KXXGD4V?ref_=ast_sto_dp&th=1&psc=1',
        price: 98.4,
        sizes: [5.5,7,7.5,8,8.5,10],
        colors: ['white','yellow','blue','red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71V0t+LcIwS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71m9SWJfgnS._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'yellow',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71JUa0lOH9S._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71mIEqDeTvS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61OnGf-sekS._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hK4nu7s2S._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71WQPJgrAHS._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71xKNdL8DDS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71gHd85qzaS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61p-7vlTpIS._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Water resistance levelNot Water Resistant",
            "Downturned last for steep pulli",
            "Minimalist midsole for extra sensitivity on",
            "Upper Material: synthetic",
            "Closure: hook-and-loop",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'on',
        name: "ON Cloudstratus",
        amazonLink: "https://www.amazon.com/Running-Cloudstratus-Black-Shadow-Running/dp/B093NYWJL7/ref=sr_1_117?crid=NI22E7TEPWH2&keywords=on%2Bshoes&qid=1703551318&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=on%2Bshoes%2Caps%2C189&sr=8-117&th=1&psc=1",
        badges: ['new'],
        price: 174.85,
        sizes: [7.5,8.5,9,9.5,10,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619+PLZKTjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51di0fTOcSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ZKB5NjVvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71CS4Z1ihxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61mxzjtePzL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'adidas',
        name: "Solarcontrol",
        amazonLink: "https://www.amazon.com/adidas-Solarcontrol-Running-Shoes-Womens/dp/B0BJQJ8VYS/ref=sr_1_8?crid=QB076J96OH84&keywords=adidas%2Bshoes%2Bwomen&qid=1703552065&sprefix=adidas%2Bshoes%2Bwomen%2Caps%2C185&sr=8-8&th=1",
        badges: ['sale'],
        price: 97.37,
        discount: 15,
        sizes: [5.5,6,6.5,7,7.5,8,8.5,9,9.5,10.5,11],
        colors: ['beige'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'beige',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ZDCzhAfZL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nreQAxYGL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61kkcmn08UL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61HBI6FVPfL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Closure type Lace-Up",
            "BOOST midsole",
            "Dual-density EVA platform",
            "Engineered mesh upper",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'adidas',
        name: "Alpha Magma Guard",
        amazonLink: "https://www.amazon.com/adidas-AlphaMagma-Guard-Shoe-Running/dp/B09RBFV9VB/ref=sr_1_129?crid=QB076J96OH84&keywords=adidas%2Bshoes%2Bwomen&qid=1703552114&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=adidas%2Bshoes%2Bwomen%2Caps%2C185&sr=8-129&th=1",
        price: 99.9,
        sizes: [5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51B4Cy5fG4L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/518Es6OwG5L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41UKANTNA-L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51E9QsDQeJL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Synthetic-and-rubber",
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Adidas",
            "Unisex Shoes",
            "Running Shoes",
            "Black",
            "Synthetic & Rubber",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'new balance',
        name: "FuelCore Nergize V1",
        amazonLink: "https://www.amazon.com/New-Balance-FuelCore-Nergize-Training/dp/B005ATNKM6/ref=zg_bs_g_679351011_sccl_2/132-4220382-8388525?th=1",
        badges: ['best seller'],
        price: 64.99,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61FvpgLmibL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/618f65EOvxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61CQddsyEoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61IBjJHBRUL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "These shoes have a performance fit. We recommend ordering a 1/2 size bigger than your typical NB size.",
            "Midsole Cushioning: These New Balance sneakers feature a REVlite midsole that delivers incredibly lightweight cushioning and provides a responsive ride for comfortable all-day wear",
            "Underfoot Comfort: With an NB Memory Sole Comfort Insert that offers a plush feel with every step, this everyday shoe for women was made for wearing anywhere and everywhere",
            "Sleek Design and Supportive Fit: Stay comfortable and stylish as you go about your day with the contemporary bootie design. The bootie upper construction hugs your foot for a snug, supportive fit",
            "Lightweight Feel: The modern, eye-catching upper on these cross-trainers uses mesh and synthetic materials for a super lightweight feel that helps keep you light on your feet",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'adidas',
        name: "Race TR23",
        amazonLink: "https://www.amazon.com/adidas-Womens-Racer-Sneaker-Bright/dp/B0BHPTQW4C/ref=zg_bs_g_679351011_sccl_38/132-4220382-8388525?th=1&psc=1",
        badges: ['best seller'],
        price: 98,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LHSOimtEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71JsQOVn0GL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71dAlMknapL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71fV4x7nm7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yQGR-i-4L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Made in the USA or Imported",
            "Sole material Synthetic Rubber",
            "Outer material Leather",
            "Closure type Lace-Up",
            "adidas womens Sneaker",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: "Revel 6",
        amazonLink: "https://www.amazon.com/Brooks-Womens-Revel-Neutral-Running/dp/B0BHKN42WT/ref=zg_bs_g_6127771011_sccl_92/132-4220382-8388525?th=1&psc=1",
        badges: ['best seller'],
        price: 140.51,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['black','white','lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71JUchfZY7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71pS7QUyb6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81eOYLRwSxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81EVI4klAfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Nv1BHjdJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/815MdOwZXyL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81TiZG47e8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/711+VdgI9HL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81cJ-ByDaaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Xlti2RfxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/811auPC6K-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wYzZESK+L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/814bxUHW5mL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tTfgYwgCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81d+y-joFAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gDubbB47L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81QDn3qRyFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-9C74KbfL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Fabric-and-synthetic",
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "THIS WOMEN'S SHOE IS FOR: For runners looking for a versatile shoe that’s springy on the run, stylish off the run, and comfortable for the long run. Styled to perform, the Revel 6 delivers a springy ride and all-day comfort. Predecessor: Revel 5",
            "BALANCED, SOFT CUSHIONING: Reengineered midsole has more of our adaptable BioMoGo DNA cushioning that adapts to your stride, weight, and speed to help protect you by deflecting impact away from your body.",
            "QUICK, SPRINGY TRANSITIONS: The arrow-point pattern in the outsole lets your foot move from heel to toe quickly. Our Green Rubber outsole, made from environmentally friendly silica, delivers a springy and responsive ride.",
            "FRESH LOOK AND FEEL: Updated Fit Knit construction offers a sleeker look and feel, plus upgraded structure and breathability. Additional 2mm of BioMoGo DNA in the heel provides a more comfortable ride.",
            "REFRESHED UPPER: The Engineered Air Mesh and 3D Fit Print on the upper create the right blend of stretch and structure for supreme comfort and stability.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'nike',
        name: "Free Metcon",
        amazonLink: 'https://www.amazon.com/Nike-Trainer-Sequoia-Voltage-Light-Voltage/dp/B0C4LNZZVH/ref=sr_1_1?crid=100AXKR0GQSDR&keywords=nike+cross+trainers+for+men&qid=1703620294&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=nike+cross+t%2Caps%2C313&sr=8-1',
        price: 179.95,
        sizes: [8,8.5,9,9.5,10,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71F13UhPIbL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71C-tuhyuxL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81NL9eP+pGL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Xsu5H2HNL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/712m3c62AKL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/716BpXdFbfL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714s1h0CqBL._AC_SX679_.jpg',
                ]
            }
        ],
        details: [
            "Model Name	Free Metcon",
            "Brand	Nike",
            "Color	Sequoia High Voltage Light Sil",
            "Moulded heel clip offers support",
            "Webbing eyelets offer dynamic containment",
            "Rubber tread in high-wear areas gives you durable traction",
            "Highly durable",
            "Elegant design",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'nike',
        name: "Metcon 7",
        amazonLink: "https://www.amazon.com/Nike-Womens-Metcon-Training-Metallic/dp/B09NMJX16P/ref=sr_1_17?content-id=amzn1.sym.9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e%3Aamzn1.sym.9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e&keywords=nike%2Bmetcon%2B8&pd_rd_r=284066bd-4825-4c9c-9f34-2081066d925c&pd_rd_w=zxNaO&pd_rd_wg=ZNno2&pf_rd_p=9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e&pf_rd_r=EFNVG51QT8BNJGX58NYH&qid=1703620859&sr=8-17&th=1",
        badges: ['new'],
        price: 169,
        sizes: [9,10,11,12,14],
        colors: ['black','grey','lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61E9g36CV7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51gG1EARaGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61C7fkBSRUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615nVWoYZ2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71VrOqz7MuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61UkHKg8T9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/718udCejNfL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61DxCnadH+L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61NRMPdwzvL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61oOEv3sZrL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51KsTcPsEjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61jzNcySnHL._AC_SX695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61to2lmiOPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71gWKum5zhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tid7WK0uL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71lY6B19Z5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81mcY22+IAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KUvtI7gxL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Closure type Hook & Loop",
            "The wide, flat heel gets even more stable with an inner plate that distributes weight from edge to edge. It also flexes to make it comfortable for cardio intervals.",
            "Nike React foam makes a comfortable, cushioned base that feels lightweight and springy when you kick it into high gear for cardio and sprints.",
            "Revamped rubber wraps up your arch for intense grip during rope climbs. Rubber tread gives you traction from the training room floor to the pavement.",
            "Lightweight mesh with textured overlays in high-wear areas helps keep your foot cool without sacrificing durability.",
            "Tab locks down the laces with a hook-and-loop closure to keep them out of the way.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'nike',
        name: "Nike Metcon",
        amazonLink: "https://www.amazon.com/Nike-Metcon-Sport-Training-White/dp/B07HDS49FB/ref=sr_1_15?crid=2CNP2NTYRPXRI&keywords=nike+metcon&qid=1703621226&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=nike+metcon%2Caps%2C185&sr=8-15",
        badges: ['limited'],
        price: 129.85,
        sizes: [8,8.5],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61wgfis-qhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51VBc2yakKL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61QD3C0Cw2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616P0NkJIIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61i0ahUdTFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/5194tHL6gIL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            'Closure type Pull On'
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: "Launch 10",
        amazonLink: "https://www.amazon.com/Brooks-Womens-Launch-Neutral-Running/dp/B0BJNPYBXB/ref=sr_1_5?crid=1QQ5OJYKZCNUK&keywords=brooks%2Bshoes&qid=1703679206&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bsho%2Caps%2C301&sr=8-5&th=1",
        badges: ['new'],
        price: 99.95,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5],
        colors: ['grey','white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81KnpGyO9RL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81x-TpH6V2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81DA9Av5NRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81nQSjDoJCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81CJAfagWpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/816YsGiShNL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81g3d6ND4TL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81kqrnI6yuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ldeD+eN3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Z4S1WYuZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91hy8CoRURL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81JReintzQL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Fabric-and-synthetic",
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "THIS WOMEN’S SHOE IS FOR: The Launch 10 is for runners who need a shoe that will offer dependable speed for all types of workouts and even races.",
            "QUICK, SMOOTH TRANSITIONS: Our outsole is shaped to encourage transitions from heel to toe for an efficient toe-off.",
            "SOFT, LIGHTWEIGHT CUSHIONING: Lightweight DNA cushioning is soft and responsive and adapts to each runner’s unique weight and stride for a fast experience.",
            "PERFORMANCE FIT: An updated upper to deliver a locked-down fit that will hold your foot securely in place during fast workouts and races.",
            "BREATHABLE UPPER: New engineered warp knit upper provides targeted breathability.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'under armour',
        name: 'Charged Verssert',
        amazonLink: 'https://www.amazon.com/Under-Armour-Charged-Verssert-Speckle/dp/B0BGQM33J2/ref=sr_1_18?crid=10W80E6LUCTA&keywords=women%2Bathletic%2Bshoes&qid=1703689675&sprefix=women%2Bathe%2Caps%2C185&sr=8-18&th=1',
        badges: ['best seller', 'sale'],
        price: 95,
        discount: 13,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,12],
        colors: ['slateblue','darkblue','pink'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'slateblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61s-k4aTYLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61XO-wXLYbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61+899u23xL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71bPYSZwQZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61+899u23xL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6143uyInIJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61W6vWmrHNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Q4X0CuqAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71DkaCRY0ZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/716+dYc9q+L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'pink',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61E0D9OxlvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61dt54TTCbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uKYcB+zmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714V7mVyAjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/715lbsQIWGL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Water resistance levelNot Water Resistant",
            "Mix-material upper with durable suede & leather overlays & breathable mesh details",
            "EVA sockliner provides soft, step-in comfort",
            "Charged Cushioning midsole uses compression molded foam for ultimate responsiveness & durability",
            "Solid rubber outsole covers high impact zones for greater durability with less weight",
            "Warning: This product can expose you to chemicals including chromium (hexavalent compounds), which is known in the State of California to cause cancer and birth defects or other reproductive harm.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'under armour',
        name: "HOVR Rise",
        amazonLink: 'https://www.amazon.com/Under-Armour-Womens-Cross-Trainer/dp/B07HKGFNFH/ref=sr_1_118?crid=1AK5AQ9UX9Z59&keywords=cross%2Btrainer%2Bshoes%2Bfor%2Bwomen&qid=1703690240&refinements=p_n_availability%3A2661601011%2Cp_72%3A2661618011&rnid=2661617011&sprefix=women%2Bcross%2Bshoes%2Caps%2C210&sr=8-118&th=1',
        badges: ['best seller'],
        price: 129.99,
        sizes: [5,5.5,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,12],
        colors: ['pink'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'pink',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hvJBMlt-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61olQomIYTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619k+do1TmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71prEHb9LHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ZgQEReeDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619k+do1TmL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Textile",
            "Origin Imported",
            "Sole material Rubber",
            "Shaft height Low-top",
            "UA HOVR technology provides 'zero gravity feel' to maintain energy return that helps eliminate impact step after step",
            "Compression mesh Energy Web contains & molds UA HOVR foam to give back the energy you put in",
            "Lightweight, abrasion-resistant mesh upper with 3D print for maximum durability & breathability to withstand any workout",
            "Overlapping films & dual-external heel counter hug your foot for added stability",
            "Full rubber outsole to enhanced multi-direction", 
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'red chili',
        name: "Fusion VCR",
        amazonLink: "https://www.amazon.com/Red-Chili-Fusion-Climbing-Shoes/dp/B01MU99ZHQ?ref_=ast_sto_dp",
        badges: ['sale'],
        price: 99.98,
        discount: 18,
        sizes: [4,4.5,5,5.5,6,6.5,7],
        colors: ['red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61VnrgTdSAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51GTlFIW8RL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Closure type Pull On",
            "Upper Material: leather",
            "Midsole: leather-lined Powerflex, Impact Zone",
            "Rubber: Vibram XS Grip",
            "Profile: moderate curve",
            "Asymmetrical Curvature: low",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'salomon',
        name: "Outpulse Goretex",
        amazonLink: 'https://www.amazon.com/Salomon-Outpulse-Climbing-Magnet-Wrought/dp/B0983W2CCS/ref=sr_1_28_sspa?crid=1H71XFNNGUIOR&keywords=project%2Brock%2Bshoes&qid=1703691280&sprefix=project%2Brock%2Bshoes%2Caps%2C245&sr=8-28-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&psc=1',
        badges: ['sale'],
        price: 135,
        discount: 6,
        sizes: [7,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61IQcf7FoYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613giRNhuwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nsT04CUAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61P3dx6AVDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ueo77efVL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure typeLace-Up",
            "Country of OriginVietnam",
            "Energy Blade Outdoor: Engineered into the forefoot area of the bottom unit, Energy Blade is a lightweight TPU plate works in cohesion with the soft and springy midsole to filter the ground and deliver a smooth, dynamic stride.",
            "Fuze Surge: Made up of one of our softest EVA compounds and 30% natural rubber, Fuze Surge foam is pillowy for instant comfort and responsive enough to keep rebound levels high. Engineered using less artificial polymers, this midsole compound delivers a more earth-conscious, smooth yet dynamic stride.",
            "Reverse Camber: Inspired by Salomon's ski heritage, this curved midsole geometry helps you feel like you are floating over the ground.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: "Project Rock 5",
        amazonLink: "https://www.amazon.com/Under-Armour-Project-Training-Shoes/dp/B0C5S8Y558/ref=sr_1_2?crid=1H71XFNNGUIOR&keywords=project%2Brock%2Bshoes&qid=1703691262&sprefix=project%2Brock%2Bshoes%2Caps%2C245&sr=8-2&th=1",
        badges: ['limited'],
        price: 272.38,
        sizes: [9,11],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/517vdQEnntL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51GHDBWGUML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51EDHvIhi3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51lU9pY4U8L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'salomon',
        name: "Outbound Prism",
        amazonLink: 'https://www.amazon.com/Salomon-Outbound-Prism-Hiking-Lunar/dp/B094QXPRBL/ref=sr_1_56_sspa?crid=1H71XFNNGUIOR&keywords=project%2Brock%2Bshoes&qid=1703691743&sprefix=project%2Brock%2Bshoes%2Caps%2C245&sr=8-56-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&psc=1',
        badges: ['best seller'],
        price: 95.84,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13],
        colors: ['black','white','green'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71pqieDG8JL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71N5K6wKFwL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717STFFuxvL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-CesYWhwL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612VkYJ0T7L._AC_SX695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61QAVtoN3JL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717ezMF7fbL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91I9sm7NZpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81EMpoG8EyL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Ikc6PjffL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61esaVjrIIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714egM+aK4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61osocw5iOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71M37DrQeAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51eDz5PsvHL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Contagrip MA: Contagrip MA is built for the widest variety of surfaces. It balances both the geometry and the rubber compound to deliver confidence on wet, dry, hard or loose surfaces, and offer long-term durability.",
            "EnergyCell: A high performance EVA foam that provides shock attenuation.",
            "S.Café recycled sockliner cover: Based on innovative S.Café technology, this sockliner cover is made from coffee grounds, which are great at managing moisture and controlling odor.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'puma',
        name: "Mercedes AMG Nitro",
        amazonLink: 'https://www.amazon.com/Mercedes-Petronas-Motorsport-Inspired-Sneakers/dp/B0CM8PMJVK/ref=sr_1_57?crid=68PQUUSX8W3Z&dib=eyJ2IjoiMSJ9.yMzsORc-j3Ji68L6rfCyOe8fRTeJDux5nMoPeevtPd6rOKdTgG1G5cDdim8D5_bFGPOsr0WhcEcM1P4o4GNxKg.mFW7lE2GXjM3YI_KqRHSPbRf71e56Lvjq2ur7iQZjD8&dib_tag=se&keywords=puma+shoes&qid=1703694106&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=puma+shoes%2Caps%2C325&sr=8-57',
        price: 129.99,
        sizes: [8,8.5,9,9.5,11,13],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61tVi3wQzLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71CBlSAf6AL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61D-VBLG5BL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81n5y+sCqDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hccF9z2CL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RxfQnjLdL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure typeLace-Up",
            "MAPF1 Mercedes AMG Petronas Extent Nitro",
            "30791602",
            "Puma Black Light Mint Puma White",
            "Medium (D, M)",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'puma',
        name: 'Puma Nitro',
        amazonLink: 'https://www.amazon.com/PUMA-Eliminate-NitroTM-Handball-Persian/dp/B0BKG8PJHZ/ref=sr_1_145?crid=68PQUUSX8W3Z&dib=eyJ2IjoiMSJ9.9hTxSWkozbTz9gxgG92MpAz6ZppzkVgfYm6tiIarMXxK3VBgORKPKcwxdqwmRAxRirj3q4XIjK8nqOG_cNWA3g.ukYejO_VzyfQ95_IUovwMGk9SZF7Zrsq0-wvfi8I3_0&dib_tag=se&keywords=puma%2Bshoes&qid=1703694449&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=puma%2Bshoes%2Caps%2C325&sr=8-145&th=1',
        price: 157.99,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,10],
        colors: ['lightblue','white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zCgnR9ttL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71sb2nqaLQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81atXh4nq9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71mdgvl1UuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/813ZXp5ESyL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sYAQcVD-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612tXTpf6ZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61jztkPeIYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71GnRn4CYnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/718MqdFi-iL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71CpuWh8FkL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Synthetic / Textile",
            "Care instructions Please refer to the product description",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Mesh upper",
            "PWRCAGE provides extra midfoot support to provide more stability during multi-directional movements",
            "The FUSIONFIT design allows for a comfortable fit and a perfect fit",
            "NITRO SQD midsole",
            "Rubber outsole",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'puma',
        name: "Puma Electron 2.0",
        amazonLink: 'https://www.amazon.com/PUMA-Electron-Running-Sneakers-Casual/dp/B0C1HKV4HK/ref=sr_1_262?crid=68PQUUSX8W3Z&dib=eyJ2IjoiMSJ9.033NGbeGvp4Ga8dLtc4u8lCClJtXQ1Tfg9cyX11lkVHxmIF4zTRkOEkzbyCWq1DDIZ-o5T4GuU4yOChrwD8v-g.y-wPGNk1vGlskfDYQmNsxlPqrnuWH6ygCaoabB23wBc&dib_tag=se&keywords=puma+shoes&qid=1703694498&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=puma+shoes%2Caps%2C325&sr=8-262',
        badges: ['sale'],
        price: 99.95,
        discount: 25,
        sizes: [8,8.5,9,9.5,10,11.5,12,13,14],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51M2b92hZZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61EQjLQ-zAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51qRLn4KotL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51JZ6R0QBEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ivTR5LvCL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "100% Authentic",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'altra',
        name: "AL0A547K Mont Blanc",
        amazonLink: 'https://www.amazon.com/ALTRA-AL0A547K-Blanc-Trail-Running/dp/B09RK12TY7/ref=sr_1_13?crid=1CXY0SDO9EWKN&dib=eyJ2IjoiMSJ9.TfgeyTTjk01-RJENYK-n1TaYI7nIBUXq9z63Ll-ihaSU3i8GP0qk5dOeIibHp9Wl8lQv-tGqPaoUL_Kq7QKUtw.jLJS0SBl4muCKJK43Uy0USybHkMfwHKSFTdMnk4mVoA&dib_tag=se&keywords=altra%2Bshoes&qid=1703697737&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra%2Bshoes%2Caps%2C193&sr=8-13&th=1',
        badges: ['new'],
        price: 179.99,
        sizes: [7,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['darkblue','green','white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ygu7V2WfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71v4ILsMiNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71BEAt6DQBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61btFyVJL+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71xLYM5WwXL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71F3eD3KbBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71J5vhSOH2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-lJIBnjPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RHl0ro+HL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RXW4wfAQL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zB8UlMBiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71V48MgOsiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/610PioxaswL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Pom7QYKFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61yu2f5gBQL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'altra',
        name: "AL0A7R6Y Rivera 3",
        amazonLink: 'https://www.amazon.com/ALTRA-AL0A7R6Y-Rivera-Running-Orange/dp/B09Y7374F4/ref=sr_1_14?crid=1CXY0SDO9EWKN&dib=eyJ2IjoiMSJ9.TfgeyTTjk01-RJENYK-n1TaYI7nIBUXq9z63Ll-ihaSU3i8GP0qk5dOeIibHp9Wl8lQv-tGqPaoUL_Kq7QKUtw.jLJS0SBl4muCKJK43Uy0USybHkMfwHKSFTdMnk4mVoA&dib_tag=se&keywords=altra%2Bshoes&qid=1703697737&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra%2Bshoes%2Caps%2C193&sr=8-14&th=1',
        badges: ['best seller'],
        price: 133.9,
        sizes: [8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13],
        colors: ['lightblue','black','yellow'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/711qxcWj1IL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71mKCWIXK5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71I56zeF7jL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612PpuB393L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71l1Utvj7mL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Bie3FS+GL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-mhHX-wuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615XotAVoaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vN7vle4qL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71UagCmyizL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'yellow',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71gpEFChd9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71PP0O-HxkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71xLEunMpHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/618AjPYphOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71gy-L+z2XL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Go Further: Our original Altra EGO foam is designed to provide added energy return and a responsive, yet soft, comfortable feel",
            "Stay Comfortable: Altra's FootPod Technology maps the bones and tendons of your foot to encourage natural movement underfoot",
            "Run Naturally: Balanced Cushioning places your heel and forefoot the same distance from the ground to encourage proper, low-impact form throughout your run",
            "Push Yourself: InnerFlex midsole technology ensures increased flexibility and performance",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'altra',
        name: "SUPERIOR 6",
        amazonLink: 'https://www.amazon.com/ALTRA-AL0A82CB-Superior-Trail-Running/dp/B0BK2M26W4/ref=sr_1_35?crid=1CXY0SDO9EWKN&dib=eyJ2IjoiMSJ9.TfgeyTTjk01-RJENYK-n1TaYI7nIBUXq9z63Ll-ihaSU3i8GP0qk5dOeIibHp9Wl8lQv-tGqPaoUL_Kq7QKUtw.jLJS0SBl4muCKJK43Uy0USybHkMfwHKSFTdMnk4mVoA&dib_tag=se&keywords=altra%2Bshoes&qid=1703697737&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra%2Bshoes%2Caps%2C193&sr=8-35&th=1',
        badges: ['best seller'],
        price: 129.95,
        sizes: [7,8,8.5,9.5,10,10.5,11,11.5,12,12.5,13],
        colors: ['blue','black','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71FFQAmVeNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71QLTq-LFNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zok-halqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71BV7c4MaQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71HLRBSgqpL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71BPcQ4e-vL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zEjVsls4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/7145wQHEOSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71dpNyRvfYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71uqbiUl6dL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-m+XEQrsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71gamASaEiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71LHxuAFB9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Yw7jnhd6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71GseC28TgL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Stay Focused: With our MaxTrac outsole and multi-directional TrailClaw lug pattern for grippy traction, you can focus on the trail infront of you",
            "Go Further: Balanced Cushioning platform places the heel and forefoot the same distance from the ground, which encourages low-impact landings",
            "Stay Comfortable: Signature Altra FootShape toe boxes allow your toes to spread and encourages proper, low-impact form throughout your run",
            "Go Further: Our original Altra EGO foam is designed to provide added energy return and a responsive, yet soft, comfortable feel",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'altra',
        name: "Altra AL0A7R6J",
        amazonLink: "https://www.amazon.com/ALTRA-Lone-Peak-All-WTHR-Low/dp/B09Y6FTGWT/ref=sr_1_48?crid=1CXY0SDO9EWKN&dib=eyJ2IjoiMSJ9.TfgeyTTjk01-RJENYK-n1TaYI7nIBUXq9z63Ll-ihaSU3i8GP0qk5dOeIibHp9Wl8lQv-tGqPaoUL_Kq7QKUtw.jLJS0SBl4muCKJK43Uy0USybHkMfwHKSFTdMnk4mVoA&dib_tag=se&keywords=altra%2Bshoes&qid=1703697737&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra%2Bshoes%2Caps%2C193&sr=8-48&th=1",
        badges: ['new'],
        price: 178.95,
        sizes: [7.5,8,8.5,9,9.5,10.5,11,11.5,12,13],
        colors: ['teal','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PM8BtHgfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ROIoWzu+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717yo6Y-QVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GxVOZh3TL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71UPJ2z-OGL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hMEkj144L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61owWXw6EmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61q4Ip24LbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619gF+P7aIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/712KKEWVT9L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'under armour',
        name: "HOVR Phantom 3",
        amazonLink: 'https://www.amazon.com/Under-Armour-Phantom-Synthetic-Trainers/dp/B0CG9DT1YZ/ref=sr_1_19?crid=2RSK6O2LC3HUC&keywords=under+armour+hovr&qid=1703708397&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=under+armour+hovr%2Caps%2C261&sr=8-19',
        badges: ['new'],
        price: 108.31,
        sizes: [9.5,10,11,11.5,12,12.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61WDCiEB9IL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51YCOfpgUJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BTlZiOdGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71xYzl4+HGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SQz0pUCsL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole materialRubber",
            "Outer materialSynthetic",
            "Inner materialFabric",
            "Closure typeLace-Up",
            "Engineered synthetic textile upper that is soft and flexible",
            "Textile lining that is soft and breathable",
            "Cushioned foam insole that reduces impact, returns energy and helps propel you forward",
            "Functional lacing system for flexible fit",
            "Rubber sole that is flexible and slip resistant",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'under armour',
        name: "HOVR Sonic 2",
        amazonLink: 'https://www.amazon.com/Under-Armour-Womens-Running-Downpour/dp/B07HKGC1SQ/ref=sr_1_102?crid=2RSK6O2LC3HUC&keywords=under%2Barmour%2Bhovr&qid=1703708693&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=under%2Barmour%2Bhovr%2Caps%2C261&sr=8-102&th=1',
        badges: ['best seller'],
        price: 159.99,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Pc1+To57L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TFa2sqSkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61rhHO9LNsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71YbwfzM5gL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/513wZ9uysfL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Man Made",
            "NEUTRAL: For runners who need flexibility, cushioning & versatility",
            "DIGITALLY CONNECTED: UA’s Record Sensor technology tracks, analyzes & stores virtually every running metric so you know exactly what you need to do to get better. Connectivity to Map My Run will expire on March 31, 2025",
            "UA HOVR technology provides ‘zero gravity feel’ to maintain energy return that helps eliminate impact step after step",
            "Compression mesh Energy Web contains & molds UA HOVR foam to give back the energy you put in",
            "Microthread upper",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'under armour',
        name: "Hovr Grdian",
        amazonLink: 'https://www.amazon.com/Under-Armour-Guardian-Running-Summit/dp/B07HKK4P9N/ref=sr_1_104?crid=2RSK6O2LC3HUC&keywords=under%2Barmour%2Bhovr&qid=1703708693&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=under%2Barmour%2Bhovr%2Caps%2C261&sr=8-104&th=1',
        price: 162.9,
        sizes: [7,7.5,8,8.5,9,9.5,10.5,11,11.5,12.5,15],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612ArbHaTAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61OA9WGFMoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zrfvEO17L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/711M1RWFSLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614BwgerclL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71DLhJ1MxoL._AC_SY695_.jpg',
                ]

            }
        ],
        details: [
            "Fabric type Textile and Synthetic",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "STABILITY: For runners that need extra structure & cushioning",
            "DIGITALLY CONNECTED: UA’s Record Sensor technology tracks, analyzes & stores virtually every running metric so you know exactly what you need to do to get better. Connectivity to Map My Run will expire on March 31, 2025",
            "UA HOVR technology provides ‘zero gravity feel’ to maintain energy return that helps eliminate impact step after step",
            "Compression mesh Energy Web contains & molds UA HOVR foam to give back the energy you put in",
            "Engineered mesh upper is",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'nike',
        name: "Vapor 11",
        amazonLink: 'https://www.amazon.com/NikeCourt-Vapor-Womens-Tennis-Shoes/dp/B0CJR7SG8B/ref=sr_1_8?crid=11MV530VK65D6&keywords=shoes%2Bvapor&qid=1703709230&sprefix=shoes%2Bvapor%2Caps%2C208&sr=8-8&th=1',
        price: 163.94,
        sizes: [5.5,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81N0bnsUQhL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8115IrkkAoL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ww8igsdEL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71AdAz39bDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81sIAr-HpNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71h+jUodcBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71OiyQXYHZL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Low-Cut Design",
            "1/2 in. Inner Sleeve",
            "Forefoot Air Zoom Unit",
            "Herringbone Outsole",
            "Reinforced Mesh wCollar",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Vapor V Rock',
        badges: ['new'],
        amazonLink: 'https://www.amazon.com/SCARPA-Vapor-Climbing-Shoe-Yellow/dp/B07G9PVL4W/ref=sr_1_169?crid=11MV530VK65D6&keywords=shoes+vapor&qid=1703709536&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=shoes+vapor%2Caps%2C208&sr=8-169',
        price: 241.13,
        sizes: [6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61a4Py6tHHL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61z5hNVAM3L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51wZLOrijvL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Ohic9e4fL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Vibram XS Edge (3.5mm)",
            "Outer material Suede",
            "Closure typeHook & Loop",
            "EU Size: 38.5 – US Size: 7-7.5 Women/6-6.5 Men | Versatility In Form | Built with a moderate downturn and slightly asymmetric profile, the Vapor V blends performance in steep terrain with the sensitivity and comfort you need when the angle eases off.",
            "Suede In Spades | A microsuede upper with a reduced tongue volume keeps the shoe supple, while a suede foot base conforms to the shape of your foot, providing all-day comfort.",
            "Vibram XS Edge Rubber | Stiff enough to let you stand on the thinnest edges, the XS Edge outsole pairs nicely with the softer M70 rubber in the heel for a shoe that can handle everything from short, technical boulders to long, vertical headwalls.",
            "Flexan Dynamic Midsole | Offsetting the softer upper, the redesigned Flexan midsole is slightly stiffer, offering plenty of support and reducing foot fatigue on multi-pitch routes.",
            "Sizing Advice – Synthetic climbing shoes should fit snugly and will not stretch much over time. An ideal fit should have no dead space out of the box. Use the sizing chart in the product images or description to find your size, then downsize ½ to 2 sizes for premium performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'adidas',
        name: 'Ultraboost 4',
        amazonLink: 'https://www.amazon.com/adidas-Ultra-Boost-Running-Shoes/dp/B07FMK6939/ref=sr_1_243?crid=11MV530VK65D6&keywords=shoes+vapor&qid=1703709817&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=shoes+vapor%2Caps%2C208&sr=8-243',
        price: 156.65,
        sizes: [8,8.5,9,9.5,10.5,11,12],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61zBmIaCFNL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61fOta0rSlL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SOpxqBy2L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61I3+E1NCeL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51HGFkKRzhL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'columbia',
        name: "Vent Aero Loafer",
        amazonLink: 'https://www.amazon.com/Columbia-womens-Loafer-Black-Velvet/dp/B089FF31RV/ref=sr_1_119?content-id=amzn1.sym.fcfd010d-2ce3-4590-b2a8-d0dd1049f962%3Aamzn1.sym.fcfd010d-2ce3-4590-b2a8-d0dd1049f962&crid=29KGTOX25YKR6&keywords=columbia%2Bshoes&pd_rd_r=c2532bc1-7865-4fae-899e-b2766d2eba05&pd_rd_w=EU6RU&pd_rd_wg=CQEPa&pf_rd_p=fcfd010d-2ce3-4590-b2a8-d0dd1049f962&pf_rd_r=MYNS6K93B378Y0DJDSGC&qid=1703711775&refinements=p_89%3AColumbia&rnid=7141123011&s=apparel&sprefix=columbia%2B%2Caps%2C247&sr=1-119&wi=llzookzh_3&th=1',
        badges: ['best seller', 'sale'],
        price: 87.19,
        discount: 20,
        sizes: [5,6,6.5,7,7.5,8,8.5,9,9.5,11,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-HCokCKrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612i3SfpnCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TskVfK7iL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61fNcQKS2tL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51bFZgp+O2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Qpo1JrC3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613W7wW42wL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "COMFORT MEETS FUNCTION: Born in performance, designed for the street. Delivering superior breathability, all surface traction, and sock like fit for comfort in all conditions",
            "NIMBLE PERFORMANCE: High function and wide ranging capabilities are designed into this agile shoe, built to deliver nimble response wherever you go",
            "ADAPTIVE TERRAIN RESPONSE: Our TechLite lightweight midsole offers long lasting support, superior cushioning, and high energy return, with midsole ports for improved air ventilation and cooling",
            "STREET READY / INDOOR SAFE: Our signature Omni-GRIP non-marking traction rubber outsole provides versatility – for pavement-ready use, without worrying scuffs during indoor use",
            "BUILT TO LAST: Columbia’s attention to detail is what sets our footwear apart from others. We use only the highest quality materials, expert craftsmanship, and durable stitching. This is an excellent pair of shoes you will enjoy for seasons to come",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'salomon',
        name: "Outpulse Goretex",
        amazonLink: 'https://www.amazon.com/Salomon-Outpulse-Running-Weather-Vanilla/dp/B0984QRYMJ?ref_=ast_sto_dp&th=1&psc=1',
        badges: ['best seller'],
        price: 104.97,
        sizes: [6,6.5,7,7.5,8,8.5,9,9.5,11,12],
        colors: ['white','darkblue','orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81cNsihHvML._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81f+hsdu+wL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714bMMUi1UL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61bgMBpeVWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71OFzN-69NL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81fzwvQILTL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81kRxNH8VSL._AC_SX695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Xy3JuUPAL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717+jYHhwcL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ir33ynPiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61zQlap5fgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71BRMFyZb+L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71rAZKUZywL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/811b6X2vDDL._AC_SX695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ZGzuGssvL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81P1NFiiqoL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ZI27IqDXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wgeUuk36L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81MbO+rnv1L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bfcSFRbiL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81GtE-O1xbL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure typeLace-Up",
            "Water resistance levelWater Resistant",
            "Rubber sole",
            "No Heel",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'salomon',
        name: "Outpulse Mid GTX",
        amazonLink: 'https://www.amazon.com/Salomon-Womens-OUTpulse-Hiking-Arctic/dp/B0BWK91M2C/ref=sr_1_37?crid=31IJC88RVGYFB&keywords=women%2Bhiking%2Bshoes&qid=1703712576&sprefix=women%2Bhiking%2Bshoe%2Caps%2C205&sr=8-37&th=1',
        badges: ['new'],
        price: 165,
        sizes: [5,7.5,8,8.5,9,9.5,11,12],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51dbaN36ZNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51fRMKpH3DL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61QG4R+TlFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61UWthBHSBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/518dXi4sJXL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "Water resistance level Waterproof",
            "Our Fuze Foam compound delivers premium energy return and cushioning built on years of trail running expertise.",
            "Reverse camber technology keeps you rolling with a natural and fluid stride.",
            "Gore-Tex for superior shelter from the elements, a Contagrip rubber outsole to hold ground, full rubber toe cap for protection and higher cut that supports the ankle.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'adidas',
        name: "Swift R3",
        amazonLink: 'https://www.amazon.com/adidas-Terrex-Swift-Hiking-Womens/dp/B0BV9CNR6F/ref=sr_1_54?crid=31IJC88RVGYFB&keywords=women%2Bhiking%2Bshoes&qid=1703712598&sprefix=women%2Bhiking%2Bshoe%2Caps%2C205&sr=8-54&th=1',
        price: 170.95,
        sizes: [6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71LgDRwk3TL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71M-cw38anL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81qRBKN1DNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71qVG2OpAsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+ypfxlN7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71bP71h8ROL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructionsMachine Wash",
            "Sole materialRubber",
            "Closure typeLace-Up",
            "Abrasion-resistant mesh upper with seamless overlays",
            "Continental Rubber outsole",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'salomon',
        name: "Patrol Hiking",
        amazonLink: 'https://www.amazon.com/Salomon-Patrol-Climbing-Magnet-Tobacco/dp/B0983WHGBZ/ref=sr_1_8?crid=2UZOELFUGJKBH&keywords=salomon%2Bshoes%2Bmen&qid=1703713278&sprefix=salomon%2Bshoes%2Caps%2C189&sr=8-8&th=1',
        badges: ['best seller'],
        price: 79.99,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81xPba5wP9L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81CS2G52nxL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/819OTlapjNL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71LCGXfQMyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71GkBbakKBL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71HGNGlpogL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Ethylene Vinyl Acetate (EVA)",
            "Closure type Lace-Up",
            "EnergyCell: A high performance EVA foam that provides shock attenuation.",
            "Contagrip MD: Contagrip MD is focused on long-term wear. Using the most durable compound, it has a lug pattern that works equally well on both hard and smooth or soft and loose surfaces.",
            "SensiFit cradles the foot from the midsole to the lacing system, providing a secure, snug, and virtually customized fit all around the foot.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'salomon',
        name: "Outpulse Goretex",
        amazonLink: 'https://www.amazon.com/Salomon-Outpulse-Climbing-Wrought-Vibrant/dp/B0983Y53T3/ref=sr_1_9?crid=2UZOELFUGJKBH&keywords=salomon%2Bshoes%2Bmen&qid=1703713278&sprefix=salomon%2Bshoes%2Caps%2C189&sr=8-9&th=1',
        badges: ['new'],
        price: 123.75,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['black','darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+IJqxYyML._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81U9chznPOL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/810TU6gMDiL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zog6pm6iL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81PHATY2ASL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/719rfffqxcL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81jZ1YqC1rL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81qEVAv0S8L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Zc2KALnfL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717l1-YiMYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Odsj4JYgL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/817bUWZdBWL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Leather",
            "Closure type Lace-Up",
            "Energy Blade Outdoor: Engineered into the forefoot area of the bottom unit, Energy Blade is a lightweight TPU plate works in cohesion with the soft and springy midsole to filter the ground and deliver a smooth, dynamic stride.",
            "Fuze Surge: Made up of one of our softest EVA compounds and 30% natural rubber, Fuze Surge foam is pillowy for instant comfort and responsive enough to keep rebound levels high. Engineered using less artificial polymers, this midsole compound delivers a more earth-conscious, smooth yet dynamic stride.",
            "Reverse Camber: Inspired by Salomon's ski heritage, this curved midsole geometry helps you feel like you are floating over the ground.",

        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'salomon',
        name: 'Alphacross 5 GTX',
        amazonLink: 'https://www.amazon.com/Salomon-ALPHACROSS-Hiking-Print-Lapis/dp/B0BNW2HH9D/ref=sr_1_17?crid=2UZOELFUGJKBH&keywords=salomon+shoes+men&qid=1703713278&sprefix=salomon+shoes%2Caps%2C189&sr=8-17',
        badges: ['new'],
        price: 120,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71rlMeRLG5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81JiKKODJVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71flmQVRWVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91WPWv6vKyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81y2dWEhV6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71VitO-M47L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "Optimised ground connection thanks to grippy Contagrip rubber and a lug geometry specifically designed for better mud-shedding and adhesion.",
            "Featuring a Gore-Tex membrane to keep you fully sheltered from the elements.",
            "This shoe combines a soft lining, generous comfy fit and soft, Fuze Foam in the midsole.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'red chili',
        name: "Mystix",
        amazonLink: 'https://www.amazon.com/Red-Chili-Mystix-Climbing-Shoe/dp/B082VHVRF2?ref_=ast_sto_dp&th=1',
        price: 57.01,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81yaVwK5LcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61VLhhdUxFL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Shaft height Ankle",
            "Outer material Leather",
            "Closure type Hook & Loop",
            "High-end bouldering and climbing shoe for steep to extreme overhanging routes in the climbing gym and at the crag",
            "Especially soft forefoot with extra sensitive Vibram XS Grip sole (3.5 mm) for even more feeling when stepping or hooking",
            "Individual adjustment to the foot and toe shape thanks to crossed fasteners and leather in the toe area",
            "Powerful downturn, Specially designed 2-zone midsole",
            "Breathable tongue made of fine, elastic knitted fabric",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'brooks',
        name: "Caldera 7",
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Caldera-Trail-Running/dp/B0CGYX31HD/ref=sr_1_77?keywords=On&qid=1703717147&refinements=p_n_availability%3A2661601011&rnid=2661599011&sr=8-77&th=1',
        price: 149.95,
        sizes: [9,9.5,10,10.5,11,12],
        colors: ['yellow'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'yellow',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71bpnV1EGsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zcx2sU7EL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71FU5bogbmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71bD-+TbG2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8163+3yRDoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81TeKP23gEL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Origin Made in USA",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "THIS MEN'S SHOE IS FOR: The Caldera 7 provides ultra-cushion for ultra-distances with added support for trail runners, optimized to be lightweight, responsive, and durable for plush comfort. Predecessor: Caldera 6. The Caldera 7 is a certified carbon neutral product.",
            "SUPREME SOFTNESS: Super-soft nitrogen-infused DNA LOFT v3 cushioning, our softest cushioning is optimized to be lightweight, responsive, and durable for plush comfort.",
            "RUGGED OUTSOLE: New outsole made from TrailTrack Green design provides superior traction and grip and traction on both wet and dry trails and is made of 25% recycled materials.",
            "DURABLE & DYNAMIC: Improved upper features external vague for a more secure, adaptable fit at the midfoot, while breathable TPEE sandwich air mesh offers protective durability and moisture management over versatile terrain.",
            "STABLE RIDE: Strategically raised midsole foam walls offer added security and flexibility where you need it, while the widened base and added flex grooves in the outsole work to stabilize your landings and carry you smoothly over uneven terrain.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'on',
        name: "On Cloudflow 4",
        amazonLink: 'https://www.amazon.com/Cloudflow-Running-Sneakers-Footwear-Numeric/dp/B0CLB6L4XN/ref=sr_1_128?keywords=On&qid=1703717176&refinements=p_n_availability%3A2661601011&rnid=2661599011&sr=8-128&th=1',
        price: 158.91,
        sizes: [8,8.5,9,9.5,10.5,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51YC1GdhfvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61NDPRSnOcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61beKbIfZnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61KnyPww6vL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61M0eWU2CML._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Cloudfoam midsole for responsive cushioning and step-in comfort",
            "Breathable mesh upper with TPU heel counter for a secure fit",
            "Rubber outsole with traction pattern for grip on both road and light trails",
            "Lightweight and durable, ideal for running, training, and everyday wear",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'on',
        name: 'On Cloudrunner',
        amazonLink: 'https://amazon.com/CloudRunner-Running-Shoes-Mens-Cobalt/dp/B0BTM2YDCC/ref=sr_1_249?keywords=On&qid=1703717474&refinements=p_n_availability%3A2661601011&rnid=2661599011&sr=8-249&th=1',
        price: 189.99,
        sizes: [7,7.5,9],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51e9UHxP2aL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ffthpnK1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51X0kl7MoWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61UcjXVV0cL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619AbNs5clL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ZYf1BAgJL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            'Closure type Lace-Up'
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'new balance',
        name: "Dynasoft Beaya V1",
        amazonLink: 'https://www.amazon.com/New-Balance-DynaSoft-Trainer-Filament/dp/B0BHKRSLWR/ref=sr_1_4?crid=7DU3DT96VNUE&keywords=cross%2Btrainer%2Bshoes%2Bwomen&qid=1703717992&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=corss%2Btrainer%2Bshoes%2Bwome%2Caps%2C182&sr=8-4&th=1',
        badges: ['best seller', 'sale'],
        price: 93.62,
        discount: 30,
        sizes: [5,5.5,6,6.5,10,10.5,11,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Ootj5AQpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51CGuvxmH+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/511b3hhE6LL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/514uC5herDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51J2WGG6vNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51I-y88IFtL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "DynaSoft midsole couples ultra-responsive performance with plush comfort",
            "Low-profile synthetic and mesh upper",
            "No sew overlays",
            "Lightweight design",
            "Adjustable lace closure for a customized fit",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'Gel-Kinsei Blast',
        amazonLink: 'https://www.amazon.com/ASICS-Gel-Kinsei-Blast-Running-Island/dp/B0B484G9KQ/ref=sr_1_83?crid=2F6N9KU7KGYIT&keywords=asics%2Bshoes&qid=1703720998&sprefix=asics%2Bsho%2Caps%2C487&sr=8-83&th=1',
        badges: ['new'],
        price: 130.95,
        sizes: [8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/618+OzKmVXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61KNE2+cBML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pQfnfxicL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Xoy-h+FsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61mwck4mwHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GbSqoeBOL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61fcrclRD2L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Nexkin mesh upper: Improves airflow to help your feet keep cool",
            "At least 20% of the shoe's main upper material is made with recycled content to reduce waste and carbon emissions:",
            "The sockliner is produced with the solution dyeing process that reduces water usage by approximately 33% and carbon emissions by approximately 45% compared to the conventional dyeing technology:",
            "Pebax Propulsion Plate: Helps redirect your energy forward while creating a faster feel",
            "FF BLAST technology: Cushioning provides lightweight impact absorption and a responsive rebound",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'GT 2000',
        amazonLink: 'https://www.amazon.com/ASICS-GT-2000-Running-Shoes-Electric/dp/B09C1DNMJL/ref=sr_1_34?crid=2F6N9KU7KGYIT&keywords=asics%2Bshoes&qid=1703720941&sprefix=asics%2Bsho%2Caps%2C487&sr=8-34&th=1',
        price: 86.96,
        sizes: [8,8.5,9,9.5,11,11.5,12,13],
        colors: ['grey','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Kz6ZGdSQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pITKiPPGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Vgj5G9dQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qMNo-nKhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RCQ5mnLBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SjxVcZlDS._AC_SX695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61mhLUz6beL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BvQu6XmYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61IzxDNABxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613sVkCjymL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619pCyQRaDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61eY5l0YWpL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructionsMachine Wash",
            "OriginImported",
            "Sole materialRubber",
            "Outer materialSynthetic",
            "Engineered knit upper offers a supportive and comfortable foothold:",
            "Rearfoot and Forefoot GEL Technology Cushioning System: Attenuates shock during impact and toe-off phases, and allows movement in multiple planes as the foot transitions through the gait cycle.",
            "FLYTEFOAM Technology: Provides lightweight cushioning.",
            "FLYTEFOAM Propel Technology: ASICS energetic foam formulation that provides supreme bounce thanks to a unique elastomer compound.",
            "3D SPACE CONSTRUCTION feature improves compression at footstrike:",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'asics',
        name: 'GT 1000',
        amazonLink: 'https://www.amazon.com/ASICS-Womens-GT-1000-Shoes-Black/dp/B0BY3QY3PJ/ref=sr_1_41?crid=2F6N9KU7KGYIT&keywords=asics%2Bshoes&qid=1703720972&sprefix=asics%2Bsho%2Caps%2C487&sr=8-41&th=1',
        badges: ['best seller'],
        price: 100,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,12],
        colors: ['black','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61O3EYe0yAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ehpqc6lZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vcbqYulkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51+8Au9JR3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61syqgSn++L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612fOPS9FbL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71l1s82SwIL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LnTjpxxwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hfKLn8eCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uxTqfUxFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uaQD8H4dL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61JnTiSIRYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61MlhbIZolL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61zE0QWlUwL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Engineered mesh upper: Improves breathability and wraps the foot with a soft feel",
            "Tongue wing construction: Helps create a more supportive fit",
            "External back counter: Improves the fit and helps increase stability",
            "LITETRUSS technology: Improves medial support and midfoot integrity",
            "FLYTEFOAM cushioning: Provides lightweight impact absorption",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'asics',
        name: "Gel-Pulse 12 Mesh",
        amazonLink: 'https://www.amazon.com/ASICS-Womens-Gel-Pulse-Monosock-Running/dp/B082RMTJMF/ref=sr_1_203?crid=2F6N9KU7KGYIT&keywords=asics%2Bshoes&qid=1703722100&sprefix=asics%2Bsho%2Caps%2C487&sr=8-203&th=1',
        badges: ['sale'],
        price: 79.95,
        discount: 35,
        sizes: [8.5,9,9.5],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61YS3NQNlyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GCmTnZ1uL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616jxD+IXgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61FdEa9GnLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BQtQohIuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61M+Um57xWL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71aL-Zuv1zL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Synthetic-and-mesh",
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Mesh",
            "MONO-SOCK Technology Fit System: An elastic internal sleeve which replaces a traditional tongue providing a sock-like fit.",
            "AmpliFoam Midsole: Engineered to maintain durability at softer densities, providing better flexibility, comfort, and platform adaptability ideal for natural running.",
            "Rearfoot GEL technology cushioning system: Attenuates shock during impact phase and allows for a smooth transition to midstance.",
            "Guidance Line Midsole Technology: Vertical flex groove decouples the tooling along the line of progression for enhanced gait efficiency.",
            "AHAR Plus Outsole: Strategically positioned in critical areas of the outsole, this exceptionally durable compound is 50% more durable than standard ASICS High Abrasion Rubber.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'new balance',
        name: "Dynasoft Trnr V2",
        amazonLink: 'https://www.amazon.com/New-Balance-DynaSoft-Blacktop-Pineapple/dp/B09XRGG22R/ref=zg_bs_g_679271011_sccl_35/132-4220382-8388525?th=1&psc=1',
        badges: ['best seller'],
        price: 79.99,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14,15],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61OEvzlWquL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/719A2wkFlCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61KoO7Q3nvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71HQ75CsbDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-KzevIOGL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Fabric-and-synthetic",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "DynaSoft midsole couples ultra-responsive performance with plush comfort",
            "Breathable mesh upper",
            "Lightweight cushioned midsole for all-day comfort",
            "Lightweight solid rubber outsole with multi-directional traction",
            "Adjustable lace closure for customized fit",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Force V Rock',
        amazonLink: 'https://www.amazon.com/SCARPA-Force-Climbing-Mangrove-Papaya/dp/B01HTP30RS/ref=sr_1_34?crid=JEMA9E5GAVXX&keywords=climbing+shoes&qid=1703777308&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing+shoes%2Caps%2C279&sr=8-34',
        price: 169.99,
        sizes: [6.5,7,7.5,8,8.5,9.5,10,11,11.5,12,12.5,14,15],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61l-6HfiigL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51FGgAwO8bL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51rTxE3kUnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51MHrcSOBAL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type 100% Suede",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Vibram XS Grip 2 (3.5mm)",
            "EU Size: 39 – US Size: 7.5 Women/6.5 Men | All-Day Comfort | A flat profile and passive last make the Force V the perfect climbing shoe for beginner climbers who don’t want to sacrifice comfort for performance.",
            "Relaxed Heel Construction | Relieving pressure on your Achilles tendon, the relaxed heel design lets you climb all day without having to remove your shoes after every climb.",
            "Vibram XS Edge Rubber | Offering superb support, the XS Edge rubber is stiff, consistent, and durable — ideal for climbers learning the nuances of foot placements.",
            "Flexan Dynamic Midsole | Offsetting the softer upper, the redesigned Flexan midsole is slightly stiffer, offering plenty of support and reducing foot fatigue on multi-pitch routes.",
            "Sizing Advice – Leather climbing shoes should fit snugly, but they can also stretch over time. An ideal fit should have no dead space, even after stretching. Use the sizing chart in the product images or description to find your size, then downsize ½ to 1 size for premium performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'new balance',
        name: "FuelCell 100 V1",
        amazonLink: 'https://www.amazon.com/New-Balance-FuelCell-Cross-Trainer/dp/B08BMMN1SX/ref=zg_bs_g_679271011_sccl_85/132-4220382-8388525?th=1',
        badges: ['best seller'],
        price: 161.97,
        sizes: [7,8,8.5,9.5,10,10.5,11,11.5,12,13],
        colors: ['black','red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71OwL0RZ92L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71jrWi-IiPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gR2bM3mxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zsesmG+rL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Xl2UqZtdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-uA3iC6wL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TPgnIfhzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61z7wWS-5TL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "FuelCell foam midsole delivers a propulsive feel to help drive you forward",
            "Engineered knit mesh upper with Fit Weave delivers lightweight support",
            "Bootie upper hugs your foot for a snug, supportive fit",
            "No sew overlays deliver a sleek fit and feel",
            "Corded eyerow for lock-in and a custom fit",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'new balance',
        name: 'X Hierro V7',
        amazonLink: 'https://www.amazon.com/New-Balance-Womens-Hierro-Running/dp/B096NGJ7N4?ref_=ast_sto_dp&th=1',
        badges: ['new'],
        price: 139.95,
        sizes: [5,6.5,7,7.5,8,9,10,11],
        colors: ['slateblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'slateblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ieRSnKvTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71igu+YG3vL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71IpwvvyAVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81X2ar-AY6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/915SpsmBFbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71jWneBC4bL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Fresh Foam X midsole foam with approximately 3% bio-based content delivers our most cushioned Fresh Foam experience for incredible comfort. Bio-based content is made from renewable resources to help reduce our carbon footprint.",
            "GORE-TEX waterproof fabric protects feet from wind, rain and water without sacrificing breathability",
            "Synthetic material with no-sew overlays for added durability",
            "Toe Protect technology helps protect feet from rocks, roots and debris",
            "Vibram outsole provides superior grip. Vibram is a registered trademark of VIBRAM S.p.A All rights reserved.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'columbia',
        name: 'Montrail Fkt Lite',
        amazonLink: 'https://www.amazon.com/Columbia-Montrail-F-K-T-Hiking-Regular/dp/B07RGLZH33/ref=sr_1_104?crid=3TWIGT5PQTOGX&keywords=columbia%2Brunning%2Bshoes&qid=1703778961&sprefix=columbia%2Brunning%2Bshoes%2Caps%2C191&sr=8-104&th=1',
        badges: ['sale'],
        price: 97.05,
        discount: 15,
        sizes: [7,7.5,8,11,11.5,14,15],
        colors: ['black','orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/61K487AUXHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61kaCEKRR6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Ny4BPcJpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51dBFv6QjBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51sMDHImaGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51TdPzF7xNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51STVrZr8nL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SJ0eB08qL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61RNPfEvRrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61j-V7agqwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/610DXC89eXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51mejpuxqcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51v-gsOLZZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51-CHqZ6pTL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Shaft height Low-top",
            "COMFORT MEETS PERFORMANCE: Our lightest, fastest and strongest trail runner yet, the F.K.T. Lite offers fast paced reaction without sacrifice",
            "STABLE FOOTING: The Montrail F.K.T. Lite couples our Tri-density Trail Reaction System — a mid-density EVA with integrated Trail-Shield protection plate layered on top of soft, reactive TPU foam that absorbs uneven terrain while keeping your foot stable",
            "ENGINEERED OUTSOLE: The full length rubber outsole is designed with directional lugs for durability and maximum traction on the trail. 3.5 mm lug height provides for great running across gravel, over rocks, in the dirt, and on the street",
            "LIGHT & TOUGH: Created for trail performance, these lightweight shoes incorporate a high-abrasion woven jacquard upper with a power-mesh sock and secondary lace cage offers extra support",
            "BUILT TO LAST: Columbia’s attention to detail is what sets our apparel apart from others. We use only the highest quality materials, expert craftsmanship, and durable stitching. This is durable footwear you will enjoy for seasons to come",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'columbia',
        name: "Hatana",
        amazonLink: 'https://www.amazon.com/Columbia-Hatana-Breathe-Cloud-Black/dp/B0BKZ3M3GK/ref=sr_1_22?crid=3TWIGT5PQTOGX&keywords=columbia%2Brunning%2Bshoes&qid=1703778842&sprefix=columbia%2Brunning%2Bshoes%2Caps%2C191&sr=8-22&th=1',
        price: 75,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14,15],
        colors: ['white','sienna','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Iplz8tbsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61FMtZdM5gL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61wC7xtw-3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617BMP-IAkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51U+BqLu7ML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51YzbtwX7KL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Qq8gPr7BL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'sienna',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612nj0uWJZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61rdSYdgU6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61k1dBMqQSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61KDpKxO+7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Cq7ktCuAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51vzmP9JFZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61JY6G5jOwL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Ny1wdhOrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pD-iwAwLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61espMRF4zL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TSVForoiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51O57EgLZeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/517Z19y0BiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61tOPxJNSXL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Adapt Trax outsole provides exceptional traction in wet and dry conditions",
            "Techlite+ Single density foam midsole delivers a responsive underfoot cushioning experience while providing superior comfort and stability on the trail",
            "Breathable open cell mesh with synthetic overlays and TPU Midfoot Structure for extra protection. Navic Fit System delivers a natural midfoot lock down",
            "OrthoLite Eco insole is compromised of 17% of total eco content delivering enhanced breathability and lightweight long term cushioning.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'columbia',
        name: "Wildone Anthem",
        amazonLink: 'https://www.amazon.com/Columbia-Womens-Wildone-Anthem-Tradewinds/dp/B0B1RYTM64/ref=sr_1_43?crid=1VS2TYQNGOSBE&keywords=columbia%2Brunning%2Bshoes%2Bwomen&qid=1703779661&sprefix=columbia%2Brunning%2Bshoes%2Caps%2C410&sr=8-43&th=1',
        price: 89.99,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61yDngr2s-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61bVsq6Nh5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6179rnbnHYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61tKdfdX6wL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51UKIn+abeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/514kDwcPYKL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sCm9HoYyL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Shaft height Ankle",
            "STYLISH SNEAKER: This all-purpose sneaker will be your new go-to for work and play, in the city and beyond",
            "TECHLITE: For lightweight impact absorption on varied surfaces. Long-lasting cushioning with high energy return",
            "OMNI-GRIP: For multi-terrain traction in rock, dirt, and gravel, in wet/dry conditions. Specially formulated compounds and tread design for cross-terrain stability and grip with strategically blended lug patterns and rubber compounds",
            "READY FOR ANYTHING: A breathable mesh upper, stable and responsive cushioning, and a traction sole can keep up with wherever your day takes you",
            "BUILT TO LAST: Columbia’s attention to detail is what sets our footwear apart. Specifying only the highest quality materials, expert stitching, and craftsmanship. This is long-lasting footwear you will enjoy for seasons to come",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'columbia',
        name: 'Peakfreak Ii Outdry',
        amazonLink: 'https://www.amazon.com/Columbia-Womens-Peakfreak-Outdry-Kettle/dp/B09K2Z1XYV/ref=sr_1_11?crid=1VS2TYQNGOSBE&keywords=columbia%2Brunning%2Bshoes%2Bwomen&qid=1703779661&sprefix=columbia%2Brunning%2Bshoes%2Caps%2C410&sr=8-11&th=1',
        price: 98.87,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5],
        colors: ['beige','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'beige',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ItwvDz8YL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71F5WqZFlfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71nlut0wKXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71C-mzW2JnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61OruQo0ZnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612n4Ao9lFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71H7-VYMgIL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61gGm1W7RNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61HSIjWqgkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GjMa0qI5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613MCLK1OPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sHPQhs9XL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51RqSE7yAWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61W5b-MF4oL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "OUTDRY SUPERIOR WATERPROOFING: Discover our highest performing waterproof-breathable technology designed into a shoe ready to forge any stream, puddle, or muddy trail",
            "MULTI-SPORT PERFORMANCE: Lightweight and rugged, with a seamless mesh and 3D printed upper, designed to deliver exceptional fit and support",
            "SECURE FOOTING: Our Navic Fit System delivers a natural midfoot lockdown, while a molded toe cap provides durable protection",
            "ALL DAY COMFORT: Incorporating our TechLite+ midsole, this mid design boot delivers responsive underfoot cushioning, while providing superior comfort and stability on the trail",
            "ADVANCED TRACTION: Featuring Adapt Trax, an outsole that provides exceptional traction in wet and dry conditions. Deep lugs with angular front and rear orientations provide the optimal balance between traction and durability over a variety of terrain",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'columbia',
        name: "Vitesse Outdry",
        amazonLink: 'https://www.amazon.com/Columbia-Vitesse-Outdry-Hiking-Olive/dp/B081DNSLPH/ref=sr_1_37?crid=3TWIGT5PQTOGX&keywords=columbia%2Brunning%2Bshoes&qid=1703778866&sprefix=columbia%2Brunning%2Bshoes%2Caps%2C191&sr=8-37&th=1',
        badges: ['new'],
        price: 75.35,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['blue','sienna','teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SBTFniRnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61NQYsNmm1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Mi8HuZ7bL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51CfzJlCJXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51sJ1j1npPL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'sienna',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GZYNe5D+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-0fHY9NaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Lp--HBjoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51cSIngjKXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51EYxIDW3XL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61EQ6Rb4g5L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BEJsPjGUS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nYPp5EfDS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Ao21XMKZS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61L7+dLO8pS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61q+-LyyqLS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61EBWLtMoiS._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "WATERPROOF PERFORMANCE SHOES: Pinnacle multi-sport footwear with advanced technology, these shoes are designed to keep your feet dry and comfortable dashing through sun-drenched, to rain-drenched days.",
            "COMFORT MEETS FUNCTION: The ultralight Midsole utilizes our most advanced cushioning compound providing high energy return for all day comfort and performance.",
            "STREET READY / INDOOR SAFE: Our signature Omni-GRIP non-marking traction rubber outsole provides versatility for pavement ready use without worrying scuffs during indoor use.",
            "NIMBLE PERFORMANCE: High function and performance are designed into this agile all-purpose shoe, built to deliver nimble response wherever you go.",
            "BUILT TO LAST: Columbia’s attention to detail is what sets our footwear apart from others. We use only the highest quality materials, expert craftsmanship, and durable stitching. This is an excellent pair of shoes you will enjoy for seasons to come.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'La sportiva',
        amazonLink: 'https://www.amazon.com/Sportiva-Solution-Performance-Climbing-LilyOrange/dp/B078KR6GVC/ref=sr_1_4?crid=19QCMP2NBGG39&keywords=la%2Bsportiva%2Bclimbing%2Bshoes%2Bwomen&qid=1703788863&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=la%2Bsportiva%2Bclimbing%2Bshoes%2Bwomen%2Caps%2C272&sr=8-4&th=1',
        price: 198.95,
        sizes: [4,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61jlzXgvsrL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61tnwhqrLqL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615TiSWUiAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61mHplSjEXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61b1gVikPTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613LID2EdsL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "Upper Material: leather, Lorica",
            "Lining: [toe box, arch] HF",
            "Closure: hook-and-loop, Face Lacing System",
            "Midsole: [toe] LaspoFlex (0.9mm)",
            "Rubber: Vibram XS Grip2 (4mm)",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Force V',
        amazonLink: 'https://www.amazon.com/SCARPA-Force-Climbing-Shoe-Mandarin/dp/B07MVHVMZW/ref=zg_bs_g_679350011_sccl_30/132-4220382-8388525?th=1&psc=1',
        price: 168.95,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51-SkPjQQXL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61DunR0MIbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616dFu8uwCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51KASBFVY3L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Suede (1.8mm) Upper",
            "Origin Imported",
            "Sole material Vibram XS Edge (4mm)",
            "Outer material Rubber",
            "All-Day Comfort | A flat profile and passive last make the Force V the perfect climbing shoe for beginners climbers who don’t want to sacrifice comfort for performance.",
            "Relaxed Heel Construction | Relieving pressure on your Achilles tendon, the relaxed heel design lets you climb all day without having to remove your shoes after every climb.",
            "Vibram XS Edge Rubber | Offering superb support, the XS Edge rubber is stiff, consistent, and durable — ideal for climbers learning the nuances of foot placements.",
            "Women’s Last | These climbing shoes feature a more narrow last and lower-volume heel cup for a women’s-specific fit.",
            "V-Tension Rand | This active rand design runs under the sole, supporting your arch and forefoot, to give you the feel of a more aggressive shoe without the associated pressure on your big toes.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'puma',
        name: 'Pacer Future',
        amazonLink: 'https://www.amazon.com/PUMA-Womens-Future-Street-Sneakers/dp/B0CKTXHJSN/ref=sr_1_29?crid=3OB6PJEC44E5L&keywords=puma+shoes&qid=1703886942&sprefix=puma+shoes%2Caps%2C304&sr=8-29',
        badges: ['sale'],
        price: 79.95,
        discount: 25,
        sizes: [7,7.5,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['beige'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'beige',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51t5ai6PUiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51N9tVXgxfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51nPxVvhRtL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51oTid2uhIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41jF9SKDCNL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Fabric-and-synthetic",
            "Care instructions Machine Wash",
            "Origin Made in USA and Imported",
            "Sole material Rubber",
            "Upper made with knit-like mesh material",
            "IMEVA midsole",
            "Rubber outsole",
            "PUMA Formstrip on lateral and medial sides",
            "PUMA Wordmark on woven tongue label",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Trace 3',
        amazonLink: 'https://www.amazon.com/Brooks-Womens-Trace-Neutral-Running/dp/B0BMTBWLVW/ref=sr_1_4?crid=3QOBIBYPP61IP&keywords=brooks%2Bshoes&qid=1703887689&sprefix=brooks%2Bshoes%2Caps%2C189&sr=8-4&th=1',
        badges: ['best seller'],
        price: 99.95,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,12],
        colors: ['white','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zbPW4YSBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71QKrHlxynL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71o3yeHRy5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71W3UBvN+FL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81fdQyC1kkL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71smFHgbCeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71VYnzzR3HL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71FEYTvDcCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Ir-VPgcYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81tZD5FO7dL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81fV38TaiWL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Fabric-and-synthetic",
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "THIS WOMEN’S SHOE IS FOR: The Trace 3 is for runners who want a shoe that is going to be soft and dependable.",
            "SMOOTH TRANSITIONS: Segmented crash pad cushions your landing and creates a seamless transition from heel-to-toe.",
            "UPDATED, SECURE FIT: New engineered air mesh provides breathability and a soft feel.",
            "SOFT CUSHIONING: DNA LOFT cushioning is softer than before and also adaptable for lasting comfort mile after mile that reacts to your unique stride.",
            "BREATHABLE UPPER: Air-mesh upper offers more breathability",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Cascadia 17 GTX',
        amazonLink: 'https://www.amazon.com/Brooks-Womens-Cascadia-Waterproof-Running/dp/B0BMTXYMC9/ref=sr_1_13?crid=3QOBIBYPP61IP&keywords=brooks+shoes&qid=1703887689&sprefix=brooks+shoes%2Caps%2C189&sr=8-13',
        price: 169.95,
        sizes: [6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71qDodHrP5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71WsA1ImW5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71eu9UVmT9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yVof1zLlL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Q4EDo1k+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71TQlRjduZL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Shaft height Ankle Strap",
            "THIS WOMEN’S SHOE IS FOR: The Cascadia 17 GTX is for runners who want to explore any trail and feel confident across all terrain with added GORE-TEX waterproof protection.",
            "SOFT CUSHIONING: DNA LOFT v2 midsole technology provides soft cushioning over rugged terrain to deliver comfort on long trail runs.",
            "ENHANCED TRACTION: New TrailTack Green provides versatile traction on wet and dry surfaces for added stability over uneven terrain and is constructed from 25% recycled content.",
            "ADAPTABLE STABILITY: Our new Trail Adapt System utilizes an integrated midsole, rock plate, and zonal outsole pods to offer enhanced control and a stable ride over any terrain.",
            "WATERPROOF PROTECTION: Waterproof GORE-TEX Invisible Fit membrane is bonded directly to the upper for a lighter, more flexible protective fit.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Anthem 5',
        amazonLink: 'https://www.amazon.com/Brooks-Anthem-Oyster-Grey-Porcelain/dp/B0B1HW64YK/ref=sr_1_73?crid=3QOBIBYPP61IP&keywords=brooks%2Bshoes&qid=1703888307&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C189&sr=8-73&th=1',
        badges: ['best seller'],
        price: 74.95,
        sizes: [5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,11,11.5],
        colors: ['darkblue','white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-fZYpp4YL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81fwKuEH+sL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71aojGVtfnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81JMRZLCV-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/7183bTcviiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71bG5JyiNhL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81NBiNvssEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81rGBQo9juL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/819jNczM-ML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Fdnb+R0qL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81lyt+ZyG-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818+BNRLvSL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "THIS WOMEN’S SHOE IS FOR: The Anthem 5 is for runners looking for a running shoe at an excellent value with streamlined aesthetics.",
            "SOFT CUSHIONING: New midsole has even more BioMoGo DNA cushioning to better adapt to your stride, weight, and speed.",
            "BREATHABLE UPPER: All-new engineered air mesh upper delivers breathability with streamlined style.",
            "SMOOTH TRANSITIONS: Our segmented crash pad cushions every step for smooth heel-to-toe transitions.",
            "IMPROVED HEEL FIT: New heel fit for increased plush comfort fit.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Stealth Fit 5',
        amazonLink: 'https://www.amazon.com/Brooks-Levitate-StealthFit-Neutral-Running/dp/B09B2ZVFZ4/ref=sr_1_86?crid=3QOBIBYPP61IP&keywords=brooks%2Bshoes&qid=1703888307&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C189&sr=8-86&th=1',
        badges: ['best seller'],
        price: 97.8,
        sizes: [7,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['black','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81sggLJvyLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81w8sVxuE-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81F6R-zo9mL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81k6jVuUpTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81F1v9ysZFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-enm1rAAL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71aGoiE6YnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-5UsLHQDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-D5FwifrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71M0mGVN3ZL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "THIS MEN’S SHOE IS FOR: The Levitate StealthFit 5 is for runners who want a sleek look combined with a closer-to-foot fit, with ample stretch and compression. The Levitate StealthFit 5 offers a super springy ride that delivers high energy return that helps your foot spring off the ground with each step.",
            "NEUTRAL SUPPORT: The Levitate StealthFit 5 offers a perfect blend of neutral support, cushioning, and max energy return to keep you comfortable on all your runs.",
            "ENERGIZED CUSHIONING: The DNA AMP midsole technology provides an outstanding 71% energy return that aids your foot in springing off the ground with every step.",
            "SECURE, ADAPTABLE FIT: New StealthFit construction with integrated tongue and refined fit knit upper, offers improved adaptable fit, with stretch and compression to move with the foot.",
            "QUICK TRANSITIONS: The arrow-point pattern in the outsole allows the foot to move quickly from heel to toe which enhances the shoe’s springy feel.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Ghost 13',
        amazonLink: 'https://www.amazon.com/Brooks-Ghost-Black-Grey-Stormy/dp/B083WD7636/ref=sr_1_157?crid=3QOBIBYPP61IP&keywords=brooks%2Bshoes&qid=1703888931&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C189&sr=8-157&th=1',
        badges: ['best seller'],
        price: 149.99,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14,15],
        colors: ['white','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81nS5UbKyPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81b4XUSPcIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81YdfgN2liL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81zmjkgXNaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81jm+3aXpAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/810KGkZLPlL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81VhzQltmML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81DQ3CCRi7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81zH8RkWskL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81dAHQAcRNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81WBp-nGI8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81DPK15fUsL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Inner material Manmade",
            "THIS MEN'S SHOE IS FOR: The Ghost 13 is for runners looking for a reliable shoe that's soft and smooth. The Ghost 13 offers improved transitions for zero distractions so you can focus more on what matters most: your run. This Brooks Ghost 13 is a certified PDAC A5500 Diabetic shoe and has been granted the APMA Seal of Acceptance.",
            "SUPPORT AND CUSHION: The neutral support type provides high energizing cushioning. Ideal for road running, cross training, the gym or wherever you might want to take them! Predecessor: Ghost 12",
            "BALANCED, SOFT CUSHIONING: BioMoGo DNA and DNA LOFT cushioning work together to provide a just-right softness underfoot without losing responsiveness and durability - yet it feels lighter than ever.",
            "SMOOTH, STABLE RIDE: No matter how your foot lands, our Segmented Crash Pad - an integrated system of shock absorbers - will cushion every step and stride for smooth heel-to-toe transitions.",
            "SOFT, SECURE, FIT: The newly engineered mesh and 3D Fit Print practically disappears on your foot with strategically placed stretch and structure.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Brooks Divide',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Divide-Running-Shoe/dp/B083LH5TYM/ref=sr_1_245?crid=3QOBIBYPP61IP&keywords=brooks%2Bshoes&qid=1703888975&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C189&sr=8-245&th=1',
        badges: ['new'],
        price: 173.86,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11.5,12,12.5,13,14,15],
        colors: ['lightblue','teal','blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81dvTW7fiiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81waWRE20gL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/814rvjlo-GL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81b1xUPOHrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91d2nh0epwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8199mfG9wyL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/917nRuQIHsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81I7SHW5i9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81J1qK+wrfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ZTmWdYF1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ZGvlX28XL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81dAuUfJ4+L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/917zyRjhwwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81wrgAsF8NL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81YCB+H9tqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81hNbm3yyLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/910v8tPTX7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91H-OgiyQWL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric typ eSynthetic-and-mesh",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "THIS SHOE IS FOR: The Divide is perfect for runners who are venturing off road for the first time as well as runners who want a shoe with trail-ready features but a familiar road-shoe fit.",
            "RELIABLE TRACTION: Feel confident venturing off road thanks to the extra traction of our TrailTack sticky rubber outsole.",
            "APPROACHABLE FIT: A midfoot wrap and generous forefoot offer a secure fit without crowding the forefoot.",
            "COMFORTABLE PROTECTION: A lightweight rock plate protects feet from rocks and roots.",
            "ADAPTABLE DESIGN: The horseshoe-shaped heel groove allows shoe to adapt to uneven terrain.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Launch 6',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Launch-Peacoat-Blue/dp/B07D3ZGMDV/ref=sr_1_261?crid=3QOBIBYPP61IP&keywords=brooks%2Bshoes&qid=1703888975&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C189&sr=8-261&th=1',
        badges: ['best seller'],
        price: 136.94,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,14,15],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81t2UOjT7wL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81sOz+t9QFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Jp7lP55-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/814ZPQ0MjML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/815kauWVKmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Xg7NV13yL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Fabric",
            "Inner material Textile",
            "SHOE SIZE: 'D' = Medium width",
            "THIS SHOE IS FOR: This is a great option for neutral, efficient runners who don’t like a super soft shoe. It has just-right spring and is light enough to be a race shoe for longer distances like the marathon.",
            "ENERGIZED FEEL: Delivers a responsive and springy ride to add extra lift to your stride without compromising support or speed.",
            "SPRINGY CUSHIONING: BioMoGo DNA midsole cushioning and rebounding rubber create a springy feel underfoot.",
            "LIGHTWEIGHT FIT: The one-piece mesh upper and internal bootie are so light and breezy, they feel like they’re not even there.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Ghost 16',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Ghost-Neutral-Running/dp/B0CGYHFP94/ref=sr_1_295?crid=3QOBIBYPP61IP&keywords=brooks%2Bshoes&qid=1703889977&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C189&sr=8-295&th=1&psc=1',
        price: 175.95,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['black','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Ub716yUFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zOyPBxDGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vYr-xgxrL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71rvFTQb-cL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wymtoF8aL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61t5dnbyvSL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "THIS MEN’S SHOE IS FOR: Runners looking for a smooth ride that won’t distract from the fun of the run. The Ghost 16 offers a refined 3D Fit Print to create a more seamless, secure fit. This Brooks Ghost 16 is a certified PDAC A5500 Diabetic shoe and has been granted the APMA Seal of Acceptance. The Ghost 16 is a certified carbon neutral product. Predecessor: Ghost 15.",
            "SOFT CUSHIONING: The Ghost 16 offers neutral support while providing soft, nitrogen-infused DNA Loft v3 cushioning to deliver lightweight comfort. Ideal for road running, walking, cross training, the gym or wherever you might want to take them!",
            "SMOOTH TRANSITIONS: The soft midsole and Segmented Crash Pad promotes an easy flow from landing to toe-off to provide distraction- free cushioning under your feet with every stride.",
            "BREATHABLE UPPER: Engineered air mesh upper blends stretch and structure with just-right breathability to keep you comfortable.",
            "ROADTACK RUBBER OUTSOLE: New, do-it-all rubber compound includes recycled silica and is designed to be durable, lightweight, and rebound.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'salomon',
        name: 'Alphacross 4 GTX',
        amazonLink: 'https://www.amazon.com/Salomon-Womens-Alphacross-Trail-Running/dp/B09MS5MV57/ref=sr_1_24?crid=1N7GHTIRME8XZ&keywords=salomon+shoes&qid=1703890303&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=salomon+sh%2Caps%2C1118&sr=1-24',
        badges: ['limited'],
        price: 270.95,
        sizes: [7.5,8],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71NcSi1-CxL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71QcPnZxLUL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61tDwyYQ1eL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71DWoVpjzXL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61oP+PmMZlL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Ethylene Vinyl Acetate",
            "Closure type Lace-Up",
            "Water resistance levelNot Water Resistant",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'salomon',
        name: 'Salomon Patrol',
        amazonLink: 'https://www.amazon.com/Salomon-Womens-Patrol-Running-Legion/dp/B098447TL3/ref=sr_1_23?crid=1N7GHTIRME8XZ&keywords=salomon+shoes&qid=1703890303&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=salomon+sh%2Caps%2C1118&sr=1-23',
        badges: ['new'],
        price: 80,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51oq9Fva2UL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SBwOwuBaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/511BDULnQqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51g1x9ZLmZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BfMqSaSuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PFhqwchdL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Ethylene Vinyl Acetate (EVA)",
            "Closure type Pull On",
            "Energy Cell: A high performance EVA foam that provides shock attenuation.",
            "Contag rip MD is focused on long-term wear. Using the most durable compound, it has a lug pattern that works equally well on both hard and smooth or soft and loose surfaces.",
            "SensiFit cradles the foot from the midsole to the lacing system, providing a secure, snug, and virtually customized fit all around the foot.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'salomon',
        name: 'Ultra Flow',
        amazonLink: 'https://www.amazon.com/Salomon-Ultra-Hiking-Carbon-Tahitian/dp/B0C46KQ2WK/ref=sr_1_1?crid=1N7GHTIRME8XZ&keywords=salomon%2Bshoes&qid=1703890371&rnid=2941120011&s=apparel&sprefix=salomon%2Bsh%2Caps%2C1118&sr=1-1&th=1',
        badges: ['new'],
        price: 107.55,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['black','white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71pvyru7JHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71et4zEUFoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612E9IY4rhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81cLypvw85L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81n8UZDtVYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XeitNac3L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yfZD++VxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71vsKhxZevL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+-KEK8fNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81NU207dJHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hsyVOtDJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81tG0uJrmUL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "Developed and built with a soft instant fit that will have you hooked from the moment you step in.",
            "Designed specifically to accompany your switch from the streets to the trails, and then back again. Cushioned and plush on any surface.",
            "Featuring All Terrain Contagrip rubber for confidence and grip on any surface.",
            "All Terrain Contagrip: Our All Terrain Contagrip is built for the widest variety of surfaces. It delivers durability & confidence on wet, dry, hard or loose surfaces.",
            "Recycled material: Materials made from recycled products such as PET bottles or material waste",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'salomon',
        name: 'OUTPULSE Gore-TEX',
        amazonLink: 'https://www.amazon.com/Salomon-Mens-OUTpulse-Hiking-Magnet/dp/B0BWKCCVP8/ref=sr_1_9?crid=1N7GHTIRME8XZ&keywords=salomon%2Bshoes&qid=1703890371&rnid=2941120011&s=apparel&sprefix=salomon%2Bsh%2Caps%2C1118&sr=1-9&th=1',
        price: 127.97,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['grey','red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71bSRcyA-GL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717SRkuM+IL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71CWTvAKASL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61KsBR2BSxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6169VrJwbWL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81k6ou0ccAL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81y+KXofmdL._AC_SX695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71qNZbJNuqL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81X+ciev6wL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71JlrVJWF3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61XkmF76XaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71y8vzA2oCL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81yUd3zPbjL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8167Xgud3nL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure typeLace-Up",
            "Our Fuze Foam compound delivers premium energy return and cushioning built on years of trail running expertise.",
            "Reverse camber technology keeps you rolling with a natural and fluid stride.",
            "A Gore-Tex membrane for superior shelter from the elements, Contagrip rubber outsole to hold ground in unpredictable conditions and a full rubber toe cap for protection.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'salomon',
        name: 'Phantasm',
        amazonLink: 'https://www.amazon.com/Salomon-Phantasm-Running-Bunting-Kentucky/dp/B0B6VRV9Q1/ref=sr_1_26?crid=1N7GHTIRME8XZ&keywords=salomon+shoes&qid=1703890371&rnid=2941120011&s=apparel&sprefix=salomon+sh%2Caps%2C1118&sr=1-26',
        badges: ['limited'],
        price: 103.99,
        sizes: [13],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8170dyj5MqL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81aEadS0AVL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+lhjNIePL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71YuURF9tvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71pjinYs+8L._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Country of Origin Vietnam",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'salomon',
        name: 'Predict Soc 2',
        amazonLink: 'https://www.amazon.com/Salomon-Predict-Running-Evening-Primrose/dp/B08P6WDCR4/ref=sr_1_36?crid=1N7GHTIRME8XZ&keywords=salomon%2Bshoes&qid=1703890371&rnid=2941120011&s=apparel&sprefix=salomon%2Bsh%2Caps%2C1118&sr=1-36&th=1',
        badges: ['best seller'],
        price: 132.44,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11.5,12,12.5],
        colors: ['black','teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81DaxrJaFKL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Rqv6VNjiL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-9h83m2WL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sCD0hiVgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+6uM4dEuL._AC_SX695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71x2uQdg7mL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/812gbwyedKL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hNNOd9JqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61J+xitnymL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619arVJS7fL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tC19TkmCL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Water resistance levelNot Water Resistant",
            "360° Articulated Upper: A super flexible, decoupled upper that offers superior flex and foot wrapping.",
            "Anatomical Decoupling features unique grooves and independent platforms designed to cushion, guide, and propel the foot for an ultra-smooth forward transition.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'adidas',
        name: 'Terrex Free Hiker 2',
        amazonLink: 'https://www.amazon.com/adidas-Terrex-Hiker-Gore-TEX-Hiking/dp/B0BVCSMR5S/ref=sr_1_12?crid=26MYX0Z9YNKJ5&keywords=adidas+shoes&qid=1703896052&sprefix=adidas+shoes%2Caps%2C247&sr=8-12',
        badges: ['limited'],
        price: 126.47,
        sizes: [14],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-HmbtHWWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71nlzxAnPfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61G8Ut4eXHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71LA8ewj6xL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61+k5D30yIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616AXCDhJ0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71obFBH5WZL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Abrasion-resistant mesh upper with molded toe cap and external heel clip",
            "BOOST midsole",
            "Continental Rubber outsole",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'adidas',
        name: 'adidas',
        amazonLink: 'https://www.amazon.com/adidas-Unisexs-Trainers-Tinley-Ftwbla/dp/B0B2WZG6VG/ref=sr_1_49?crid=FY7P597C4IRL&keywords=adidas+shoes&qid=1704204346&refinements=p_89%3Aadidas%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=adidas+shoe%2Caps%2C269&sr=1-49',
        price: 171,
        sizes: [8,8.5,9,9.5,10,10.5,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717CAyFoZzL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/711anCRzPyL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71GcbffpXEL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71jZMdnBc0L._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Shaft height Tobillo",
            "Outer material Mesh",
            "Lace closure",
            "Knit textile upper",
            "Breathable feel",
            "Textile lining",
            "RECYCLED MATERIALS BASE",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Sport Rock',
        amazonLink: 'https://www.amazon.com/SCARPA-Climbing-Shoes-Bouldering-Sport/dp/B0CR5765ZV/ref=sr_1_248?crid=2Y10A91WNMG85&keywords=climbing+shoes&qid=1703953007&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing+shoes%2Caps%2C181&sr=8-248',
        price: 186.95,
        sizes: [5,5.5,6,6.5,8,12],
        colors: ['yellow'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'yellow',
                imagesUrls:[
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71JO-QGuEsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zQuAdoPDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71CSyDeneDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71YizfcCeUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714henE9ljL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Ogv3PJxyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tvnjeL0DL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Spot On | Precise climbing shoe balances comfort with performance for challenging routes and boulders inside and outside.",
            "Slightly Downturned | More curved than flat shoes but not as sharp as most downturned shoes for the perfect balance of comfort and performance.",
            "Vibram XS Grip 2 | Softer rubber compound gives a good grip on plastic and rock.",
            "Microsuede Upper | Strong synthetic upper fastened by two hook-and-loop straps and finished with a rubber toe cap for reduced stretch and excellent toe-hooking.",
            "Tech Specs | [Weight] (½ Pair, 40.5) 8.6oz; [Upper] Microsuede; [Insole] Dynamic Flexan; [Outsole] Vibram XS Grip2 (3.5mm); [Last] FKS – Slightly Downturned, Slightly Asymmetric; [Origin] Romania",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: "Sport LV Rock",
        amazonLink: 'https://www.amazon.com/SCARPA-Climbing-Shoes-Bouldering-Sport/dp/B0CR55N5PJ/ref=sr_1_249?crid=2Y10A91WNMG85&keywords=climbing+shoes&qid=1703953007&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing+shoes%2Caps%2C181&sr=8-249',
        price: 189.99,
        sizes: [4.5,5.5,6,7,8],
        colors: ['teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71M6HsiqJDL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Ft187kC0L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71xLj0P2drL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71cyPSpOO1L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wAwtIO5TL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6146LwUVvjL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61m3A4pdAuL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Lower-volume version of SCARPA’s Spot Climbing Shoe specialized for climbers with narrower feet.",
            "Slight Downturn | Not as downturned as aggressive climbing shoes, and more downturned than flat, comfortable climbing shoes for the perfect balance of performance and comfort.",
            "Vibram XS Grip 2 | Softer rubber compound gives a good grip on greasy footholds in and out of the gym.",
            "Microsuede Upper | Sturdy synthetic upper with hook-and-loop straps and a rub er toe patch for reduced stretching and solid toe-hooking.",
            "Tech Specs | [Weight] (½ Pair, 40.5) 8.6oz; [Upper] Microsuede; [Insole] Dynamic Flexan; [Outsole] Vibram XS Grip2 (3.5mm); [Last] FKS – Slightly Downturned, Slightly Asymmetric; [Origin] Romania",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Origin VS Rock',
        amazonLink: 'https://www.amazon.com/SCARPA-Origin-Climbing-Shoes-Bouldering/dp/B0CR53X6MW/ref=sr_1_250?crid=2Y10A91WNMG85&keywords=climbing+shoes&qid=1703953007&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing+shoes%2Caps%2C181&sr=8-250',
        badges: ['new'],
        price: 179.55,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5],
        colors: ['teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71rANDLzypL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71A9eqyo1TL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71A8LOhE+fL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/718u9raijkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61MN5CvZReL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61YCqHBF8aL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Step Into The Send | Starter climbing shoe keeps comfy from your first day in the gym to your first lead outside.",
            "Day Long Comfort | Flat profile and low asymmetry ensure all-day comfort for focusing on form instead of toe pain.",
            "SCARPA’s S72 Rubber | SCARPA’s Super sticky rubber compound ensures grip on plastic and rock.",
            "Microfiber Upper | Dual-ply synthetic upper includes a padded tongue and an oversized strap for a secure closure.",
            "Tech Specs | [Weight] (½ Pair, Size 40) 6.9oz; [Upper] Microfiber; [Midsole] Dynamic Flexan; [Outsole] S72 (4mm); [Last] FFX (Flat, Slightly Asymmetric); [Origin] Romania",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'climb x',
        name: 'E Motion',
        amazonLink: 'https://www.amazon.com/Climb-Motion-Performance-Climbing-Bouldering/dp/B0CP6HXFB9/ref=sr_1_290?crid=2Y10A91WNMG85&keywords=climbing+shoes&qid=1703953041&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing+shoes%2Caps%2C181&sr=8-290',
        price: 89.9,
        sizes: [5,7,8.5,11],
        colors: ['yellow'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'yellow',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51FPX-AXGTL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61dBEH8YPpL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51cDHnK8qmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ZV-sNoWML._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Outer material Rubber",
            "Closure type Hook & Loop",
            "Split design offers great breathability; wraps around feet comfortably.",
            "3D Heel Design; More Power to Heel Hook.",
            "Rubber sole",
            "Please refer to the Sizing Chart for Recommended Size.",
            "Padded Collar and Heel for Comfort.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'altra',
        name: 'Torin 4',
        amazonLink: 'https://www.amazon.com/Altra-Womens-Torin-Running-Black/dp/B07NBJS2DQ/ref=sr_1_91?crid=XCVG2BX4MI02&keywords=altra+shoes&qid=1703954203&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra+shoe%2Caps%2C186&sr=8-91',
        badges: ['new'],
        price: 165,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81uN6+0ZRUL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81CPBd5ulVL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gQjfpTToL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/819HP3N28rL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Quantic Midsole",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Weight: 7.6 oz / 215 g",
            "Insole: 5 mm Sculpted Footbed",
            "Midsole: Quantic",
            "Outsole: FootPod Technology",
            "Cushion: Moderate",
            "Stack Height: 26 mm",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'altra',
        name: 'Altra Paradigm',
        amazonLink: 'https://www.amazon.com/Altra-Womens-Paradigm-Road-Running/dp/B07NBLWNZ9/ref=sr_1_92?crid=XCVG2BX4MI02&keywords=altra+shoes&qid=1703954203&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra+shoe%2Caps%2C186&sr=8-92',
        badges: ['best seller','limited'],
        price: 129,
        sizes: [6,10],
        colors: ['green'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81H6BBwFiML._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Nt0SSqM2L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91RPbuHs3ZL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81QfPFHWj5L._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Altra Ego midsole",
            "Closure type Lace-Up",
            "Max cushioned shoe",
            "Integrated StabiliPods",
            "Stack Height: 30mm",
            "9.2 oz. / 261g",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'altra',
        name: "AL0A4PE9 TIMP 2",
        amazonLink: 'https://www.amazon.com/ALTRA-AL0A4PE9-Running-Moroccan-Yellow/dp/B07TRT9KLC/ref=sr_1_86?crid=XCVG2BX4MI02&keywords=altra+shoes&qid=1703954203&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra+shoe%2Caps%2C186&sr=8-86',
        badges: ['best seller', 'limited'],
        price: 169,
        sizes: [11.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8176ywZdxAL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/811BcFD6kJL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81AfZHbgkvL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81NUL043aAL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Leather",
            "Closure type Lace-Up",
            "Gain Traction: Maxtrac Outsole And Multi-Directional Lug Pattern For Best In Class Traction",
            "Designed to Perform: Trimmed Down Overall Design With An Updated Fit For Enhanced Performance",
            "Go Further: Highly Cushioned Softer Midsole For Miles And Miles Of Comfort",
            "Stack Height: 29mm",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'altra',
        name: 'Torin 5',
        amazonLink: 'https://www.amazon.com/ALTRA-Womens-AL0A5485-Torin-Running/dp/B098L7R6X5/ref=sr_1_53?crid=XCVG2BX4MI02&keywords=altra%2Bshoes&qid=1703954187&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra%2Bshoe%2Caps%2C186&sr=8-53&th=1',
        badges: ['new'],
        price: 160,
        sizes: [6.5,7.5,8,8.5,9.5,10,10.5],
        colors: ['lightblue','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/718+PUYmMGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71YdfxTfdBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/716o1qu5FkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71GjvLC1+iL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/715sbXqUPsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71BuxVsMwsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/715qKFmfo0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71srMx4Pc6L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Go Further: Sleek new engineered knit uppers provide comfort and breathability",
            "Stay Comfortable: Coupled with our FootShape toe box, the Torin Luxe also features the brand-new Altra EGO Max midsole foam is luxurious and light",
            "Go Anywhere: Ideal for walking, jogging, running, running errands, in the office and out on the town",
            "Traditional Lacing System - Secures shoe to foot",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'altra',
        name: 'Paradigm 5',
        amazonLink: 'https://www.amazon.com/ALTRA-AL0A4VQO-Paradigm-Running-Black/dp/B083GRYB4M/ref=sr_1_82?crid=XCVG2BX4MI02&keywords=altra%2Bshoes&qid=1703954203&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra%2Bshoe%2Caps%2C186&sr=8-82&th=1',
        price: 139.99,
        sizes: [8.5,9,11],
        colors: ['green','darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91urVYxvTjL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81xaIuE2jdL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/811Uty1qxfL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81m03tpr8PL._AC_SX695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91HenzYfc0L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81K7SDMfCAL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81iBt8mpjGL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bOYyrexsL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Weight: 11.2 oz / 318 g",
            "Insole: 5 mm Sculpted Footbed",
            "Midsole: Altra EGO",
            "Outsole: FootPod Technology",
            "Cushion: Max",
            "Stack Height: 30 mm",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'nike',
        name: 'TR 13',
        amazonLink: 'https://www.amazon.com/Nike-Season-Fitness-Running-Medium/dp/B0CDQG3B9X/ref=sr_1_fkmr3_2?crid=AB66E91A5LKB&keywords=nike%2BRetaliation%2BTR%2B3&qid=1703956302&sprefix=nike%2Bretaliation%2Btr%2B3%2Caps%2C177&sr=8-2-fkmr3&th=1',
        price: 169.95,
        sizes: [6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13],
        colors: ['darkblue','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/715Vb-m1nBL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XwDqEatZL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81V2-IEfBVL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81TIWsL-QaL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ASS5YPf4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/718ZhGuTxsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/719cgMVrPEL._AC_SX695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81M9YQ67inL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XvrKtq1SL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+jdME4o3L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81mbuBKNlML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Z2JBA72bL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81FDJ43VTIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81516ifLFQL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Mesh upper for high breathability no matter the workout",
            "Closure type Hook & Loop",
            "Plush cushioning in the midsole makes for a smooth ride on the treadmill—and seamless transitions from 1 set to the next.",
            "A midfoot strap goes across the laces and hugs your foot to help keep you secure for lateral movements.",
            "We paired the soft midsole with a stable platform that allows for side-to-side movements and short runs.",
            "Comfort collar offers a plush feel and support, helping you get in and out of the shoe with ease when you’re on the go.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'under armour',
        name: 'HOVR Phantom 3',
        amazonLink: 'https://www.amazon.com/Under-Armour-Phantom-Orchid-Yellow/dp/B0BW7DMLB9/ref=sr_1_5?crid=1PD9RHVGZHQV2&keywords=under%2Barmour%2BHovr%2BPhantom&qid=1703956952&sprefix=under%2Barmour%2Bhovr%2Bphantom%2Caps%2C202&sr=8-5&th=1',
        price: 94,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,11],
        colors: ['pink','beige'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'pink',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615cJmNlhCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61F5cfRUADL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61jFqZ4l+jL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71uAdofIShL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SyZ+qo+0L._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'beige',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SiQ0TmWIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616BVMZgiWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61CqzVm6vBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71IACIQNulL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71qrXT8TKKL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'under armour',
        name: 'HOVR Phantom 2',
        amazonLink: 'https://www.amazon.com/Under-Armour-Phantom-Synthetic-Trainers/dp/B09N2DQ832/ref=sr_1_9?crid=1PD9RHVGZHQV2&keywords=under%2Barmour%2BHovr%2BPhantom&qid=1703956952&sprefix=under%2Barmour%2Bhovr%2Bphantom%2Caps%2C202&sr=8-9&th=1',
        price: 201.7,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['black','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Qe1msKRUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Q-WiIsuHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61trcHeVXUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/719aqPptkaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qjnWCikAL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71nhUKEdt-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6170wvprbSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61myWFOo9zL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ctsmiLNlL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Nylon",
            "Closure type Lace-Up",
            "Lightweight Nylon Upper",
            "Under Armour Outsole Branding",
            "Padded Collar",
            "Intelliknit Upper",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'under armour',
        name: 'HOVR Phantom 2',
        amazonLink: 'https://www.amazon.com/Under-Armour-Phantom-Synthetic-Trainers/dp/B09N2DQ832/ref=sr_1_9?crid=1PD9RHVGZHQV2&keywords=under%2Barmour%2BHovr%2BPhantom&qid=1703956952&sprefix=under%2Barmour%2Bhovr%2Bphantom%2Caps%2C202&sr=8-9&th=1',
        price: 265.73,
        sizes: [8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['teal','blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61dfzQzHjOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61F0KqVaK6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ene-z1LEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71WyWxEg60L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61CFkQB3y8L._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/514yxXgQ4OL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51I+71fKR5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51LbfWwqckL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71g13KaCoOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61J30EC5qlL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructionsMachine Wash",
            "Sole material Polyurethane",
            "Outer material Rubber",
            "Closure type Pull On",
            "Responsive UA HOVR cushioning reduces impact, returns energy & helps propel you forward Engineered flat knit upper for zonal stretch & support where you need it with a sock-like fit & feel Molded midfoot panel for added structure & plush interior cushioning",
            "Ultra-breathable, SpeedForm 2.0 sockliner provides softer underfoot support Full rubber outsole features unique knobbed texture for elevated traction & durability External heel counter creates the ultimate in stable support",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'under armour',
        name: 'HOVR Phantom 3',
        amazonLink: 'https://www.amazon.com/Under-Armour-Phantom-us_Footwear_Size_System-Numeric_7/dp/B0B9GTHGTP/ref=sr_1_8?crid=1PD9RHVGZHQV2&keywords=under+armour+Hovr+Phantom&qid=1703956973&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=under+armour+hovr+phantom%2Caps%2C202&sr=8-8',
        price: 140,
        sizes: [6,6.5,7,7.5,8],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6192uBAOhkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61FHitHRVxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71PcptnK5DL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71SL-PGKWWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SKZ7oXfHL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Synthetic Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "The off-season is for getting better. That means lots of running. Fast, stretchy UA HOVR Phantom 3 helps you explode through interval after interval with even more energy-returning UA HOVR cushioning. Run now…win later.",
            "UA Storm technology treated upper repels water without sacrificing breathability",
            "Molded midfoot panel for added structure & plush interior cushioning",
            "Knit collar for ease of entry & a plush feel with an external heel counter for stable support",
            "Ultra-breathable, SpeedForm 2.0 sockliner provides softer underfoot support",
            "Responsive UA HOVR cushioning reduces impact, returns energy & helps propel you forward",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'under armour',
        name: 'Project Rock 3',
        amazonLink: 'https://www.amazon.com/Under-Armour-Training-us_Footwear_Size_System-Numeric_9_Point_5/dp/B0B9WL3YWP/ref=sr_1_83?crid=17SM21S228AJI&keywords=under+armour+cross+training&qid=1703956853&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=under+armour+cross+training%2Caps%2C176&sr=8-83',
        price: 149.7,
        sizes: [6.5,7,7.5,8],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51CSqSnCOjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51SCIcw7B4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61AY357S7dL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ZRLBnL8eL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51fubtCNxmL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Polyurethane",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "Responsive UA HOVR cushioning reduces impact, returns energy & helps propel you forward UA Tribase maximizes ground contact, promotes natural motion & provides flexibility to grip during lifts Upper is extremely comfortable & durable, while providing stability & containment where you need it",
            "Unique lacing structure for a locked-in fit & feel Knit bootie design gives you a locked-in but comfortable fit External heel counter combined with stability chassis creates the ultimate in stable support Full rubber outsole for elevated traction & durability",
            "Style #: 3023005 Offset: 8mm Imported",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: 'HOVR Sonic Special Edition',
        amazonLink: 'https://www.amazon.com/Under-Armour-Sonic-Special-Walking/dp/B095PTJB9D/ref=sr_1_117?crid=17SM21S228AJI&keywords=under%2Barmour%2Bcross%2Btraining&qid=1703956878&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=under%2Barmour%2Bcross%2Btraining%2Caps%2C176&sr=8-117&th=1',
        badges: ['new'],
        price: 95.56,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['white','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TMWVjLJVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61g-rU3r+wL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71WXM0mj1AL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/710eaMaubuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61XlAxuhHjL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ZgwVsXm9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61XaiXtA-IL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71IH50ZwB7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71WDIB8RahL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61zj7nzsIwL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "Under Armour’s mission is to make all athletes better through passion, design and the relentless pursuit of innovation",
            "Where we started? It all started with an idea to build a superior T-shirt",
            "The technology behind Under Armour's diverse product assortment for men, women and youth is complex, but the program for reaping the benefits is simple: wear HeatGear when it's hot, ColdGear when it's cold, and AllSeasonGear between the extremes.", 
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'under armour',
        name: 'HOVR Phantom 3 Special Edition',
        amazonLink: 'https://www.amazon.com/Under-Armour-Phantom-Special-Black/dp/B0CFF3J76C/ref=sr_1_100?crid=17SM21S228AJI&keywords=under%2Barmour%2Bcross%2Btraining&qid=1703956878&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=under%2Barmour%2Bcross%2Btraining%2Caps%2C176&sr=8-100&th=1&psc=1',
        badges: ['new'],
        price: 140,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['black','white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617Y7Y3dhOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/518vRT+C3qL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SaeuzbrkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61C3vhDlSrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61QakLjWLvL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61C8FcgrB8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-G+g0tlyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Rzz3fdTcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-RPGNYjXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61YqKGTd35L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Made in the USA or Imported",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: 'Project Rock 4',
        amazonLink: 'https://www.amazon.com/Under-Armour-Training-us_Footwear_Size_System-Numeric_9/dp/B08R69MZCZ/ref=sr_1_97?crid=17SM21S228AJI&keywords=under%2Barmour%2Bcross%2Btraining&qid=1703956878&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=under%2Barmour%2Bcross%2Btraining%2Caps%2C176&sr=8-97&th=1',
        badges: ['new'],
        price: 153.17,
        sizes: [7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['grey','teal','green','red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BCDNuXGIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61h3PniqDEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51gU6gT-loL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Dh8WQnlyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ewoBX42ZL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/716RJiFL0aL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71rsDG1j3VL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ZoVgCLHAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/710uLbPBGmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81va8C6IsiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Gjtlv4KfL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614DhS1g9jL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uTswzsCuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61iRf5VT04L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KPk0lB+eL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PW2fQU7rL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/610W2zNxRnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61bY1RPVROL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61dg+LfvAHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Ew62Ti+zL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612JXxOy36L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Synthetic Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Project Rock training gear was built to help you find boundaries, then push right through them. Everything in this collection was personally approved by Dwayne Johnson, the hardest worker in the room. ANY room.",
            "Lightweight, breathable engineered mesh upper with stretch & structure where you need it",
            "Plush knit collar for maximum comfort",
            "Medial & lateral TPU midfoot strap for lockdown during even the most demanding workouts",
            "Responsive UA HOVR cushioning reduces impact, returns energy & helps propel you forward",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'under armour',
        name: 'HOVR Infinite 4',
        amazonLink: 'https://www.amazon.com/Under-Armour-Infinite-Running-Illusion/dp/B09LS781Z4/ref=sr_1_14?crid=1PD9RHVGZHQV2&keywords=under%2Barmour%2BHovr%2BPhantom&qid=1703956973&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=under%2Barmour%2Bhovr%2Bphantom%2Caps%2C202&sr=8-14&th=1',
        badges: ['best seller'],
        price: 82.9,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['green','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Y-sr36OWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61yzXr+XXEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ioFleXN+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71R530gNkbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Ph1ffXfUL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ui6kiUwXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pmKVq6r4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-vFVi+ngL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71P+QtLpJEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-xo1s-pWL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Under Armour's mission is to make all athletes better through passion, design and the relentless pursuit of innovation.",
            "The technology behind Under Armour's diverse product assortment is complex, but the program for reaping the benefits is simple: wear HeatGear when it's hot, ColdGear when it's cold, and AllSeasonGear between the extremes.",
            "Where we started? It all started with an idea to build a superior T-shirt",
            "The technology behind Under Armour's diverse product assortment for men, women and youth is complex, but the program for reaping the benefits is simple: wear HeatGear when it's hot, ColdGear when it's cold, and AllSeasonGear between the extremes.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'La Sportiva',
        amazonLink: 'https://www.amazon.com/SPORTIVA-Otaki-Blue-Flame-Talla/dp/B01K7TMQQO/ref=sr_1_159?crid=3CTV1PJWRFNA8&keywords=climbing%2Bshoes&qid=1703971133&rnid=2941120011&s=apparel&sprefix=climbing%2Bsheos%2Caps%2C175&sr=1-159&th=1',
        price: 175,
        sizes: [7,7.5,8,8.5,9,9.5,10],
        colors: ['teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/713P1yB3NNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714a2XW9KgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PJugEnZrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616KWm5SVSL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Upper material: leather; lining and insole: textile; outsole: other material",
            "Care instructions Machine Wash",
            "Sole material Vibram XS Edge MM.4",
            "Outer material Calf Emi leather, microfibre",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Katana Lace',
        amazonLink: 'https://www.amazon.com/Sportiva-Katana-Climbing-Shoes-Yellow/dp/B09M84K1BN/ref=sr_1_113?crid=GPRW7D4CK9VR&keywords=climbing+shoes&qid=1704031765&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing+shoe%2Caps%2C235&sr=8-113',
        price: 218.95,
        sizes: [4.5,5,5.5,6,6.5,7,7.5,8,8.5],
        colors: ['yellow'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'yellow',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81PA8P318gL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81E55+ge0SL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81mPaU2PooL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/815fEgOI1OL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/811tLrT3u8L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Rbbp2a9bL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Leather, Rubber",
            "Outer material Leather",
            "Closure type Lace-Up",
            "User profile - Ideal for anyone looking for a high-performance climbing shoe they can wear for any type of climbing — whether it be overhanging sport routes, bouldering, gym climbing or technical face climbing.",
            "Breathable & Durable - The combination leather and microfiber upper placed durable leather in high wear areas and microfiber where breathability is needed. The highly breathable tongue works in conjunction with the shoe lining for moisture management",
            "Fit & Comfort - Updated heel pattern with narrower heel sole has increased rubber coverage to improve grip while heel hooking. Full length lacing made from recycled raw materials. Updated with two heel pull-tabs.",
            "Great Grip - Full length 4mm Vibram XS Edge provides unparalleled grip and durability. A ultra-thin LaSpoFlex midsole provides maximum torsional rigidity.",
            "Fit Tip - Slip lasted with medium asymmetry. Rock climbing shoes are designed to fit differently than other footwear; Be sure to reference the La Sportiva size chart in the product images for more accurate sizing; The fit should be tight, but not painful, and without pressure points.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'salomon',
        name: 'X Reveal 2',
        amazonLink: 'https://www.amazon.com/Salomon-Reveal-Climbing-Quiet-Quarry/dp/B094QW5B46/ref=sr_1_119?crid=GPRW7D4CK9VR&keywords=climbing+shoes&qid=1704031765&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing+shoe%2Caps%2C235&sr=8-119',
        price: 109.9,
        sizes: [7.5,8,9.5,10,10.5,11,11.5,12.5,13,14],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71v7dXsytsL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wSnF0STlL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71fs8tZASzL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613HyAyf2BL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61fRh83xzrL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Water resistance level Not Water Resistant",
            "Contagrip MD is focused on long-term wear. Using the most durable compound, it has a lug pattern that works equally well on both hard and smooth or soft and loose surfaces.",
            "Fuze Surge: Made up of one of our softest EVA compounds and 30% natural rubber, Fuze Surge foam is pillowy for instant comfort and responsive enough to keep rebound levels high. Engineered using less artificial polymers, this midsole compound delivers a more earth-conscious, smooth yet dynamic stride.",
            "Welded upper: Stitch-free upper construction provides a smooth, glove-like, fit and feel."
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'black diamond',
        name: 'Momentum',
        amazonLink: 'https://www.amazon.com/Black-Diamond-Momentum-Climbing-Shoe/dp/B077PLB1J5/ref=sr_1_25?crid=GPRW7D4CK9VR&keywords=climbing+shoes&qid=1704031647&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing+shoe%2Caps%2C235&sr=8-25',
        price: 189.7,
        sizes: [8,9,10.5,11,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51kzhXTdS1L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ozIYq0gZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51fWkPHkfEL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/4190nQKO9wL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Leather, Rubber",
            "Outer material Rubber",
            "Closure type Hook & Loop",
            "Water resistance level Not Water Resistant",
            "Upper Material: Engineered Knit Technology",
            "Lining: micro-fiber",
            "Closure: hook-and-loop",
            "Midsole: soft flex",
            "Rubber: NeoFriection (4.3mm)",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'black diamond',
        name: 'Momentum',
        amazonLink: 'https://www.amazon.com/Black-Diamond-Momentum-Vegan-Climbing/dp/B07TYKKDWT/ref=sr_1_230?crid=GPRW7D4CK9VR&keywords=climbing+shoes&qid=1704032562&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing+shoe%2Caps%2C235&sr=8-230',
        price: 179.9,
        sizes: [6.5,7,9,10],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51M2PUdf+4L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51edgfSOHdL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31nf6pTmHWL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Closure type Hook & Loop",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'climb x',
        name: 'CLIMBX Rave',
        amazonLink: 'https://www.amazon.com/Climb-Rave-Strap-Climbing-Shoe/dp/B07DRRD3X8/ref=sr_1_13?crid=GPRW7D4CK9VR&keywords=climbing+shoes&qid=1704031647&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing+shoe%2Caps%2C235&sr=8-13',
        badges: ['best seller'],
        price: 69.95,
        sizes: [6,6.5,7,8],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81yPx5Rd1JL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-I6Sq40tL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81aj7ND4ytL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/816JiqjPMUL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/813570nw5oL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71y2o9e16gL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71mAmfu0BXL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Hook & Loop",
            "Please refer to the Sizing Chart for Recommended Size.",
            "Padded Collar and Heel for Comfort.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: 'Project Rock BSR',
        amazonLink: 'https://www.amazon.com/Under-Armour-Project-Rock-Footwear/dp/B0C5S8KVPS/ref=sr_1_46?keywords=shoes%2Bfor%2Bunder%2Barmour%2Bproject%2Brock&qid=1704048365&sr=8-46&th=1',
        badges: ['new'],
        price: 134.99,
        sizes: [9.5,10,10.5,11],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51N3N8xHnAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51cjMn7nl9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51jsN00ILDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61+WHr4KdPL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Under Armour",
            "men",
            "Fitness",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: 'UA Tribase Reign 5',
        amazonLink: 'https://www.amazon.com/Under-Armour-Tribase-Reign-Sahara/dp/B0BNX9T5QR/ref=sr_1_13?keywords=shoes%2Bfor%2Bunder%2Barmour%2Bproject%2Brock&qid=1704048365&sr=8-13&th=1',
        badges: ['best seller'],
        price: 113.29,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14,15],
        colors: ['black','white','red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51nFzcntkPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51RqDhac4DL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61xWn3I2sYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ejCkQmoVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uKI23GaZL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614KavqHiYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sHew2Hb2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SGzM8Gd6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71lJWTTmh6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Ye4eowR1L._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61+JvJoWoDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61UZF4qd2RL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61I3djP+pzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71xA0vX9+ZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sjVrvwg9L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Rubber",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: 'Project Rock 3 ',
        amazonLink: 'https://www.amazon.com/Under-Armour-Project-Training-Numeric_9_Point_5/dp/B08Q3H1WGJ/ref=sr_1_31_sspa?crid=1QLEDL63JTOS6&keywords=under%2Barmour%2Bproject%2Brock&qid=1704048312&sprefix=under%2Barmour%2Bpro%2Caps%2C201&sr=8-31-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&smid=A2855ZHAXWNNHM&th=1&psc=1',
        badges: ['best seller'],
        price: 189.99,
        sizes: [8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['green','darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61rhZxtIcsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uY3PXFu6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51AXswXT2FL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71N74fmUSTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pS+8LOb5L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Cj81TRFML._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71lhInl0RJL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71P3xvsui0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71SbWe85nzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71PtRAjADrL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71sDZ+ktGUL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81qvLg-U3sL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Synthetic Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Responsive UA HOVR cushioning reduces impact, returns energy, and helps propel you forward",
            "UA Tribase maximizes ground contact, promotes natural motion & provides flexibility to grip during lifts",
            "Upper is extremely comfortable & durable, while providing stability & containment where you need it",
            "Unique lacing structure for a locked-in fit & feel",
            "Knit bootie design gives you a locked-in but comfortable fit",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'adidas',
        name: 'Everyset',
        amazonLink: 'https://www.amazon.com/adidas-Everyset-Footwear-Womens-Medium/dp/B0BGMHB8J7/ref=sr_1_52?keywords=Women%27s%2BCross%2BTraining%2BShoes&qid=1704049487&s=apparel&sr=1-52&th=1',
        price: 140.83,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71LEIvrHZ6L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61r+6I9CTbL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71j4f0bpe4L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71i0bclOe0L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71lMKOs3vbL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61lNDql65kL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Water resistance level Not Water Resistant",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'new balance',
        name: 'Fuel Cell',
        amazonLink: 'https://www.amazon.com/New-Balance-FuelCell-Trainer-Outerspace/dp/B08BN4CX5J/ref=sr_1_9?keywords=Women%27s%2BCross%2BTraining%2BShoes&qid=1704049487&s=apparel&sr=1-9&th=1',
        badges: ['best seller'],
        price: 94.89,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5],
        colors: ['lightblue','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61jSLcuQjUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61V+MY88bxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LcQgCJjXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sd18WwAGL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617zzBPNa-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81jhFELeCyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614Irx0lMoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pW0rOeY6L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Cotton",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "FuelCell foam midsole delivers a propulsive feel to help drive you forward",
            "Reaction diffusion engineered knit mesh upper with Fit Weave delivers lightweight support",
            "Bootie upper with Ariaprene tongue hugs your foot for a snug, supportive fit",
            "No sew overlays deliver a sleek fit and feel",
            "Corded eyerow for lock-in and a custom fit",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'new balance',
        name: 'Nergize V3',
        amazonLink: 'https://www.amazon.com/New-Balance-DynaSoft-Nergize-Trainer/dp/B093R3GYKN/ref=sr_1_66_sspa?keywords=Women%27s%2BCross%2BTraining%2BShoes&qid=1704049522&s=apparel&sr=1-66-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&psc=1',
        badges: ['best seller'],
        price: 86.9,
        sizes: [6,6.5,7,7.5,8,8.5],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61RGQqsyrML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GXrPnIyoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61FVI1tcVAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613DwrbBrlL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hKfaJNO6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614Dnz9AjcL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type 100% Fabric",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "DynaSoft midsole couples ultra-responsive performance with plush comfort",
            "Bio-based Foam",
            "Synthetic air mesh upper for stretch and breathability",
            "NB Memory Sole Comfort Insert offers plush feel with every step",
            "Rubber outsole in high traction areas for durability and performance",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'new balance',
        name: '577 V5',
        amazonLink: 'https://www.amazon.com/New-Balance-Womens-Trainer-Vibrant/dp/B08BMTNWXS/ref=sr_1_115?keywords=Women%27s%2BCross%2BTraining%2BShoes&qid=1704050046&s=apparel&sr=1-115&th=1',
        badges: ['best seller'],
        price: 99,
        sizes: [5,5.5,6,6.5,7,7.5,8.5,9.5],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ShRHEIxIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/519iAjSFauL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61QSNT8LjAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/610W7yOZLaL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Synthetic material",
            "Closure type Lace-Up",
            "Water resistance level Not Water Resistant",
            "Cush+ midsole cushioning delivers ultra-soft, all-day comfort without sacrificing support",
            "Synthetic upper with no sew overlays",
            "Lightweight cushioned midsole for all-day comfort",
            "Memory sole",
            "Lace-up closure for a secure fit",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'puma',
        name: 'Star Vital',
        amazonLink: 'https://www.amazon.com/PUMA-Womens-Vital-Training-Sneakers/dp/B0BZ7BBC4Z/ref=sr_1_236?keywords=Women%27s+Cross+Training+Shoes&qid=1704050554&s=apparel&sr=1-236',
        badges: ['sale'],
        price: 84.95,
        discount: 30,
        sizes: [6,6.5,8,8.5,11],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51pZPLre83L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51NIPjNDWRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51VVE+-ofGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51RD-lDOjsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/515QrRHpqVL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Fabric",
            "Care instructions Machine Wash",
            "Origin Made in USA and Imported",
            "Sole material Rubber",
            "Mesh upper",
            "Lace up closure",
            "Cushioned footbed",
            "Rubber outsole",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'puma',
        name: 'Softride Sophia Dazzle',
        amazonLink: 'https://www.amazon.com/PUMA-Womens-Softride-Castlerock-Metallic/dp/B0BCVWJYGP/ref=sr_1_228?keywords=Women%27s+Cross+Training+Shoes&qid=1704050890&refinements=p_n_availability%3A2661601011%2Cp_72%3A2661618011&rnid=2661617011&s=apparel&sr=1-228',
        badges: ['sale'],
        price: 65,
        discount: 39,
        sizes: [5.5,6.5,7,8],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/514gTxWhx-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vfVSacX0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51r6+ATiwRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51SWhBOUmQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51PzADwOUCL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Canvas",
            "Origin Made in USA and Imported",
            "Sole material Rubber",
            "Outer material Textile",
            "Softride Sophia Dazzle",
            "37717701",
            "Castlerock Metallic Silver",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'new balance',
        name: 'FuelCell 100 V2',
        amazonLink: 'https://www.amazon.com/New-Balance-FuelCell-Trainer-Virtual/dp/B0BHKKMKN7/ref=sr_1_347?keywords=Women%27s+Cross+Training+Shoes&qid=1704051149&refinements=p_n_availability%3A2661601011%2Cp_72%3A2661618011&rnid=2661617011&s=apparel&sr=1-347',
        price: 87.99,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Oas76zxkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51JGOjvy-TL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51FLlAI3DLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/510P9164M7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ljMo8SUxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GhhcyuHsL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Ethylene Vinyl Acetate (EVA)",
            "FuelCell midsole foam with approximately 3% bio-based content delivers a propulsive feel to help drive you forward. Bio-based content is made from renewable resources to help reduce our carbon footprint",
            "Lightweight textile upper with Ariaprene synthetic foam fabric tongue and gore",
            "Bootie upper construction hugs your foot for a snug, supportive fit",
            "Upper features no-sew overlays for a sleek fit and feel",
            "Lightweight EVA foam cushioning in the midsole and heel increases comfort",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'nike',
        name: 'Metcon 4',
        amazonLink: 'https://www.amazon.com/Nike-Metcon-Womens-Shoes-Color/dp/B0BNKBFKR9/ref=sr_1_98?crid=2B9S0QPAXNE4Y&keywords=nike%2Bshoes&qid=1704119652&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=nike%2Bshoe%2Caps%2C198&sr=1-98&th=1',
        badges: ['new'],
        price: 105.93,
        sizes: [5,7.5,8,9.5,10,10.5,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71IHz4HX4XL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+uVmn4e4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71eZYrOdsqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71MU6yYWU3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71c9V4-XXML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71q3WEXq+xL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91+xnhUy1PL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Synthetic Rubber",
            "Outer material Synthetic material",
            "Closure type Lace-Up",
            "Lace Up",
            "Shoe width: medium",
            "Heel shape: no heel",
            "Inner material: synthetic",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'nike',
        name: 'Air Zoom',
        amazonLink: 'https://www.amazon.com/Nike-Womens-Structure-Trainers-Anthracite/dp/B09N9TBGY7/ref=sr_1_246?crid=2B9S0QPAXNE4Y&keywords=nike+shoes&qid=1704119985&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=nike+shoe%2Caps%2C198&sr=1-246',
        price: 125,
        sizes: [8,8.5,9,10,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61V0z7iB0BL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51JW7f2BdkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Iy6jiyTdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61d2VCCSjDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71K6wN4+zlL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-HzeoibbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zjSlvVgML._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Shaft height Wadenhoch",
            "Outer material Mesh",
            "Inner material Manmade",
            "Cushioned responsiveness",
            "Flexible and durable",
            "Mesh is designed for durability",
            "The laces can be tightened for a secure feel",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'nike',
        name: 'Free RN TR 7',
        amazonLink: 'https://www.amazon.com/Nike-Womens-Training-Shoes-Anthracite/dp/B01M3NHVD3/ref=sr_1_107?crid=2B9S0QPAXNE4Y&keywords=nike+shoes&qid=1704120352&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=nike+shoe%2Caps%2C198&sr=1-107',
        price: 125,
        sizes: [5,5.5,7,7.5,8,8.5],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ZwdCatfFL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71FgOJu46XL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+Xefc5K1L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81oz3w8RnzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71WH1L-+5eL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Skwama',
        amazonLink: 'https://www.amazon.com/Sportiva-Womens-Performance-Climbing-Turquoise/dp/B0BBN9L4PZ/ref=sr_1_8?crid=2K1ACE565N1D4&keywords=climbing+shoes&qid=1704132482&refinements=p_n_availability%3A2661601011%2Cp_72%3A2661618011&rnid=2661617011&s=apparel&sprefix=climbing+shoes%2Caps%2C197&sr=1-8',
        price: 198.95,
        sizes: [5.5,6,6.5,7.5,8,8.5,9],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81r1ACxbWzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81AKW9-lL2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81P6rkQdRcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81zZFnDbdsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81YngAxzNxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Vq8O6MprL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "The Vegan Skinlike Microbase Insole Is A Three-Layer Material Constructed Of 0.6 Mm Absorbent/Antiodor Microfiber, Breathable Adhesive, And 1.6 Mm Structural Microfiber",
            "Single-strap slipper for technical routes and bouldering",
            "Patented S-Heel for optimal heel hooking and precision fit",
            "Vibram XS Grip 2 sole",
            "Two- heel pull tabs",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Katana Lace',
        amazonLink: 'https://www.amazon.com/Sportiva-Womens-Katana-Climbing-Shoes/dp/B09M82LR7G/ref=sr_1_13?crid=2K1ACE565N1D4&keywords=climbing+shoes&qid=1704132482&refinements=p_n_availability%3A2661601011%2Cp_72%3A2661618011&rnid=2661617011&s=apparel&sprefix=climbing+shoes%2Caps%2C197&sr=1-13',
        price: 218.95,
        sizes: [3,3.5,4,5.5,6,6.5,7,7.5,8,8.5],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71YQKS35S0L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71V0i5CehfL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/7107uatQm4L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71jOUt+c6nL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615YW0S3v-L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71mKL8-zLYL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Vibram",
            "Outer material Leather",
            "Closure type Pull On",
            "User profile - Ideal for anyone looking for a high-performance climbing shoe they can wear for any type of climbing — whether it be overhanging sport routes, bouldering, gym climbing or technical face climbing.",
            "Breathable & Durable - The combination leather and microfiber upper placed durable leather in high wear areas and microfiber where breathability is needed. The highly breathable tongue works in conjunction with the shoe lining for moisture management",
            "Fit & Comfort - Updated heel pattern with narrower heel sole has increased rubber coverage to improve grip while heel hooking. Full length lacing made from recycled raw materials. Updated with two heel pull-tabs.",
            "Great Grip - 4mm Vibram XS Grip 1/2 Sole provides unparalleled grip and durability and is easily re-soleable. A ultra-thin LaSpoFlex midsole provides maximum torsional rigidity.",
            "Fit Tip - Slip lasted with medium asymmetry. Rock climbing shoes are designed to fit differently than other footwear; Be sure to reference the La Sportiva size chart in the product images for more accurate sizing; The fit should be tight, but not painful, and without pressure points.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Vapor lace Rock',
        amazonLink: 'https://www.amazon.com/SCARPA-Womens-Vapor-Climbing-Bouldering/dp/B09R3V4NK2/ref=sr_1_19?crid=2K1ACE565N1D4&keywords=climbing+shoes&qid=1704132482&refinements=p_n_availability%3A2661601011%2Cp_72%3A2661618011&rnid=2661617011&s=apparel&sprefix=climbing+shoes%2Caps%2C197&sr=1-19',
        badges: ['new'],
        price: 198.95,
        sizes: [5.5,6,6.5,7,7.5,8,8.5,9,9.5],
        colors: ['white','pink'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71FJHti4qUL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61svXOeNPdL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71jNcGfkCOL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61NgqtxZqaL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Q0WGSlx7L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ZBorwS6sL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'pink',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61z3eaC1TTL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/5197G4QLabL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61iYjIywaUL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ooy6e88LL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613yKTaKXDL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71JxSNhSZwL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Vibram",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "EU Size: 36.5 – US Size: 5.5 Women/4.5 Men | Technical Expert | From featureless slabs to crack multi-pitches, the updated Vapor climbing shoe offers underfoot support on technically demanding routes.",
            "Fantastic Fit | The soft microfiber upper is designed to mold to the shape of your foot and reduce pressure points, while the women’s-specific last ensures an anatomical fit for lower-volume feet.",
            "Vibram XS Edge Rubber | Stiff enough to let you stand on the thinnest edges, the XS Edge outsole is complemented by the sticky D2 rubber toe cap for extra protection and friction in cracks.",
            "Bi-Tension System | This unique rand connects the heel of the shoe to the toe, resulting in less foot discomfort and more power being driven towards your primary edging surface.",
            "Sizing Advice – Synthetic climbing shoes should fit snugly and will not stretch much over time. An ideal fit should have no dead space out of the box. Use the sizing chart in the product images or description to find your size, then downsize ½ to 2 sizes for premium performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Skwama',
        amazonLink: 'https://www.amazon.com/Sportiva-Skwama-Climbing-Shoe-Womens/dp/B078KJ1KVF/ref=sr_1_43?crid=2K1ACE565N1D4&keywords=climbing%2Bshoes&qid=1704132482&refinements=p_n_availability%3A2661601011%2Cp_72%3A2661618011&rnid=2661617011&s=apparel&sprefix=climbing%2Bshoes%2Caps%2C197&sr=1-43&th=1',
        price: 198.95,
        sizes: [3.5,4,5.5,6,6.5,7,7.5,8,8.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71z24FX8+AL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71DNj-MmciL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Oy2ofMs6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71nZIcTXIfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71kmcBoiGhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RYvuUAX1L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RmSplAdVL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Care instruction Machine Wash",
            "Sole material Leather, Suede, Rubber",
            "Outer material Suede",
            "Closure type Hook & Loop",
            "Patented S-Heel construction provides optimal heel hooking maneuverability and the perfect heel cup fit",
            "P3 patented technology coupled with the new innovative split-sole construction allows the sole to spread when weighted, reducing edge deformation",
            "Sticky rubber toe patch for toe hooks and scums",
            "AWARDS: Climbing Magazine - Editors' Choice 2017, OutdoorGearLab - Best Buy 2017",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Otaki',
        amazonLink: 'https://www.amazon.com/Sportiva-Otaki-Climbing-Shoe-Sulphur/dp/B010160AE8/ref=sr_1_51?crid=2K1ACE565N1D4&keywords=climbing+shoes&qid=1704132528&refinements=p_n_availability%3A2661601011%2Cp_72%3A2661618011&rnid=2661617011&s=apparel&sprefix=climbing+shoes%2Caps%2C197&sr=1-51',
        price: 208.95,
        sizes: [4,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61T37d0cJXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61T37d0cJXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51c7EAM1-KL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Z2PcI+L6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sMtjdA2OL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ECIFDvQhL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Velcro",
            "The Otaki is the go to shoe when you need ultra-precision",
            "Patented P3 technology for a down-turned performance fit",
            "S-heel construction for the best fit and powerful heel hooks",
            "Laser cut uppers reduce stitching and bulk",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'climbx',
        name: 'CLIMBX Rave',
        amazonLink: 'https://www.amazon.com/Climb-Ravestrap-Climbing-Phantom-Blacs/dp/B0C2DYW4PG/ref=sr_1_54?crid=2K1ACE565N1D4&keywords=climbing%2Bshoes&qid=1704132252&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing%2Bshoes%2Caps%2C197&sr=8-54&th=1',
        badges: ['best seller'],
        price: 99.95,
        sizes: [5,5.5,6,7,7.5,8,8.5,9],
        colors: ['grey','blue','red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tI0WRoxZL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81AzxSKGq6L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/815NbIg1mHL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gnK-ZiazL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81RRYWJY+1L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81YP+RcTm3L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81l7lgV4CVL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81i9S2piw4L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81v86d72IHL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71w5pQ+xomL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81DDGTkssDL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81y1WO9cePL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8123zMLC9WL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71XDm9bj3cL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81vflS0vlkL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818x6y1hTGL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Hook & Loop",
            "Water resistance level Not Water Resistant",
            "Soft ankle padding and flat last for all-day comfort",
            "Nylon midsole for improved edging ability",
            "Two Velcro straps for fit adjustability",
            "4.2mm sticky rubber outer sole for better performance",
            "Hemp insole for less smell . The entire shoes are made of recyclable materials.", 
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Mantra',
        amazonLink: 'https://www.amazon.com/Sportiva-Mantra-Climbing-Shoes-Arctic/dp/B09M831WQJ/ref=sr_1_86?crid=2K1ACE565N1D4&keywords=climbing+shoes&qid=1704132252&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=climbing+shoes%2Caps%2C197&sr=8-86',
        price: 168.95,
        sizes: [8,9,9.5,10,11,12,12.5],
        colors: ['teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6159NlVgjDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ENef6QFvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61yPJE1k1qL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51IATL89BrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51lVyLrVwAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vVmV+xslL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Leather, Rubber",
            "Closure type Pull On",
            "One of the lightest and most sensitive rock climbing shoes in the market designed for modern competition climbing and futuristic maneuvers.",
            "A deconstructed upper combines microfiber & leather for soft and supple feel. The Mantra unlined for maximum sensitivity.",
            "The absence of a midsole allows easy movement of your toes both up and down for total forefoot control and increased grip on large volumes in the gym. Pointed, large down-turned performance fit with high asymmetry for slicing and dicing where needed. Overall a soft and sensitive climbing shoe with mid volume for top performance.",
            "Maximum rock proximity using 1-2mm of Vibram XS Grip2 Rubber in a 1/2 Sole construction. Sportivas No-Edge concept with D-Tech Technology (Dynamic Technology) wraps the sole of the shoe laterally for a total absence of edges.",
            "2 heel pull-tabs for easy on/off as well as hooking to a carabiner. One tongue tab for slip on assistance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Futura',
        amazonLink: 'https://www.amazon.com/Sportiva-Futura-Climbing-Shoe-Yellow/dp/B005DLRG8A/ref=sr_1_386?crid=2AL1OBRGNN5S4&keywords=climbing%2Bshoes&qid=1704136640&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=%2Caps%2C272&sr=1-386&th=1',
        price: 245.42,
        sizes: [6,6.5,7,10.5,12,12.5],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71H1F5atIiL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8197NN90DCL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81uQ-tN-mKL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Pull On",
            "Upper Material: leather, synthetic",
            "Lining: unlined",
            "Closure: hook-and-loop",
            "Midsole: [toe] LaspoFlex (1.1mm)",
            "Rubber: Vibram XS Grip 2",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'climb x',
        name: "Point Rocking",
        amazonLink: 'https://www.amazon.com/Climb-Gear-Point-Climbing-Shoe/dp/B07DQ8JQ52/ref=sr_1_391?crid=2AL1OBRGNN5S4&keywords=climbing+shoes&qid=1704136640&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=%2Caps%2C272&sr=1-391',
        badges: ['best seller','limited'],
        price: 89.97,
        sizes: [11,12.5],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zOwBHocTL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vLeAznvZL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BKRNf8PmL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Fabric-and-leather",
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Leather",
            "Padded Ankle Cuff",
            "Sticky 3D molded heel cup",
            "Odorless organic hemp footbed",
            "Contoured Arch for better fit and performance.",
            "An excellent all-around climbing shoe",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'black diamond',
        name: 'Shadow',
        amazonLink: 'https://www.amazon.com/Black-Diamond-Shadow-Climbing-Shoe/dp/B07846XPF4/ref=sr_1_393?crid=2AL1OBRGNN5S4&keywords=climbing+shoes&qid=1704136640&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=%2Caps%2C272&sr=1-393',
        badges: ['limited'],
        price: 169.9,
        sizes: [5.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617FQsKpZGS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/618b4EAQ4AS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71B5TN+UEMS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51d6BNX6oTS._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Pull in on",
            "Country of Origin China",
            "Aggressive, downturned last for steep routes and bouldering",
            "4.3mm rubber is printed and molded for superior grip, optimal consistency, and performance",
            "Engineered Knit Technology tongue provides exceptional breathability and comfort",
            "Minimalist midsole for extra sensitivity on steep terrain",
            "A combination of printed and molded high friction rubber maximizes durability, dexterity and grip for toe-hooking",
            "Velcro strap for fit adjustability",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'black diamond',
        name: 'Focus',
        amazonLink: 'https://www.amazon.com/DIAMOND-Womens-Climbing-Caspian-570107Cspn/dp/B078NGV7NF/ref=sr_1_385?crid=2AL1OBRGNN5S4&keywords=climbing%2Bshoes&qid=1704136640&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=%2Caps%2C272&sr=1-385&th=1',
        price: 129,
        sizes: [6.5,7,7.5,8],
        colors: ['blue','red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/710dtH4kZTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PV4wdKLtL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61J8CFA0DuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Dx8raM0rL._AC_SY695_.jpg',

                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61dDBtyxLrS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71A0FKNErBS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51p3yIBoW0S._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "material Leather",
            "Closure type Hook & Loop",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Instinct VS',
        amazonLink: 'https://www.amazon.com/SCARPA-Instinct-Climbing-Black-Orange/dp/B008PTD67C/ref=sr_1_367?crid=2AL1OBRGNN5S4&keywords=climbing%2Bshoes&qid=1704136619&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=%2Caps%2C272&sr=1-367&th=1',
        badges: ['new'],
        price: 209,
        sizes: [6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5],
        colors: ['orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61utIsM1HJS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Aq+urhW1S._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51KrenekQwS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51RmJYJ39FS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/519E-5u0HMS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51zpFmIdxrS._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Textile",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Vibram XS Edge (3.5mm) & Vibram XS Grip 2 (2mm)",
            "EU Size: 38 – US Size: 6.5-7 Women/5.5-6 Men | Built To Train | Featuring a moderate downturn and slight asymmetry, this climbing shoe offers the high-level performance you’ve come to expect from the Instinct series, with the sensitivity you want for bouldering and gym climbing.",
            "Vibram XS Grip 2 Rubber | Ideal for any rock type and style, the XS Grip 2 rubber is both stiff and sticky, giving you the grip you need for steeper walls and overhanging boulders.",
            "Flexan Dynamic Midsole | Offsetting the softer upper, the redesigned Flexan midsole is slightly stiffer, offering plenty of support and reducing foot fatigue on multi-pitch routes.",
            "Bi-Tension Rand | Using a reverse slingshot design, this system connects your heel to your toe, resulting in a more comfortable fit and more power being driven towards your primary edging surface.",
            "Sizing Advice – Synthetic climbing shoes should fit snugly and will not stretch much over time. An ideal fit should have no dead space out of the box. Use the sizing chart in the product images or description to find your size, then downsize ½ to 2 sizes for premium performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Scarpa Reflex V Rock',
        amazonLink: 'https://www.amazon.com/Scarpa-Vapor-ocean-yellow-49/dp/B08TK6X9BC/ref=sr_1_338?crid=2AL1OBRGNN5S4&keywords=climbing%2Bshoes&qid=1704136619&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=%2Caps%2C272&sr=1-338&th=1',
        price: 276.17,
        sizes: [7,7.5,8.5,9,10,11,11.5,12.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LJXUOoe9L._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LJXUOoe9L._AC_SX679_.jpg'
                ]
            }
        ],
        details: [
            "Scarpa's dual velcro tabs to adjust the fit and sight rubber complement the unique performance and aesthetics of this new radical model.",
            "Zonal stretch knit upper is breathable, durable and washable",
            "SCARPA patented Vision rubber provides adhesion and durability",
            "Durable flat construction for all-day comfort and performance",
            "Dual power strap closure allows for maximum adjustment",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Boostic Rock',
        amazonLink: 'https://www.amazon.com/SCARPA-Booster-Climbing-Shoes-Orange/dp/B08JQNR83J/ref=sr_1_242?crid=2AL1OBRGNN5S4&keywords=climbing+shoes&qid=1704136577&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=%2Caps%2C272&sr=1-242',
        price: 218.95,
        sizes: [4,4.5,5,5.5,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5],
        colors: ['orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Q0jJUnk0L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RJ0MUfPWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71XSzTcJ8WL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61FVeZth9uL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Vibram XS Grip 2 (3.5mm)",
            "Outer material Rubber",
            "Closure type Hook & Loop",
            "EU Size: 35 – US Size: 4-4.5 Women/3-3.5 Men | Aggressive and Powerful | A sharp downturn lets you toe-in on micro-edges in steep terrain, while retaining a soft and supportive fit for added sensitivity on rock.",
            "Microsuede Upper | The vegan, synthetic microsuede material stretches just slightly, molding perfectly to the shape of your foot.",
            "Vibram XS Grip 2 Rubber | Ideal for any rock type and style, the XS Grip 2 rubber is both stiff and sticky, giving you the grip you need for steeper walls and overhanging boulders.",
            "DTS Active Rand | The highly asymmetric design is amplified by the DTS system which transfers power directly to your big toe and helps the shoe retain its downturned shape.",
            "Sizing Advice – Synthetic climbing shoes should fit snugly and will not stretch much over time. An ideal fit should have no dead space out of the box. Use the sizing chart in the product images or description to find your size, then downsize ½ to 2 sizes for premium performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Instinct VSR',
        amazonLink: 'https://www.amazon.com/SCARPA-Instinct-Climbing-Black-Azure/dp/B083M6WXBL/ref=sr_1_230?crid=2AL1OBRGNN5S4&keywords=climbing+shoes&qid=1704136555&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=%2Caps%2C272&sr=1-230',
        price: 296,
        sizes: [4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61EB6Wt0EKL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51YAP3qJMLL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51CVV9Y8KnL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51xhI+mU6jL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61v+xOTuchL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Vibram XS Grip 2 (3.5mm)",
            "EU Size: 35 – US Size: 4-4.5 Women/3-3.5 Men | Less Stiff, Same Stick | As the younger sibling of the Instinct VS, the VSR is suited to lighter climbers who found the original model to be a bit too stiff.",
            "Toe Rubber | A large patch of rubber on top gives you maximum coverage for toe hooks and bat hangs.",
            "Vibram XS Grip 2 Rubber | Ideal for any rock type and style, the XS Grip 2 rubber is both stiff and sticky, giving you the grip you need for steeper walls and overhanging boulders.",
            "Flexan Dynamic Midsole | Offsetting the softer upper, the redesigned Flexan midsole is slightly stiffer, offering plenty of support and reducing foot fatigue on multi-pitch routes.",
            "Sizing Advice – Synthetic climbing shoes should fit snugly and will not stretch much over time. An ideal fit should have no dead space out of the box. Use the sizing chart in the product images or description to find your size, then downsize ½ to 2 sizes for premium performance.", 
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'new balance',
        name: '410 V7',
        amazonLink: 'https://www.amazon.com/New-Balance-Womens-Running-Logwood/dp/B088P9WZCX/ref=sr_1_66?crid=2BT96LNZ9QMR&keywords=shoes%2Bcross%2Btrainer&qid=1704153154&refinements=p_n_availability%3A2661601011%2Cp_n_feature_eighteen_browse-bin%3A14630392011&rnid=14630382011&s=apparel&sprefix=shoes%2Bcross%2Btrainer%2Caps%2C188&sr=1-66&th=1',
        badges: ['new'],
        price: 59.95,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9],
        colors: ['darkblue','lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61FmPhOFydL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61C7wNWT0JL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51-gES7UsNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Htl9fSR3L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51uXeMEQvaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51EmqVWI8dL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Glsnnu05L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51-xxbB7FpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51LF6ggv93L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/5135W0Pnu+L._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Nylon",
            "Closure type Lace-Up",
            "Water resistance level Water Resistant",
            "AT Tread outsole provides versatile traction during both on and off-road activities",
            "Ripstop nylon upper with a rugged texture for added durability",
            "Soft midsole for underfoot comfort",
            "Adjustable lace closure for a customized fit",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Ghost 13',
        amazonLink: 'https://www.amazon.com/Brooks-Womens-Ghost-Running-Shoe/dp/B083QC722M/ref=sr_1_70?crid=2BT96LNZ9QMR&keywords=shoes+cross+trainer&qid=1704153154&refinements=p_n_availability%3A2661601011%2Cp_n_feature_eighteen_browse-bin%3A14630392011&rnid=14630382011&s=apparel&sprefix=shoes+cross+trainer%2Caps%2C188&sr=1-70',
        badges: ['new'],
        price: 124.99,
        sizes: [5.5,6,6.5,7,7.5,8,8.5,9],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81PMMQZPRqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81X8UW62slL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81e2t1lj4iL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71NKdL2F5hL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81EghrPd+DL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81mZsRv3weL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "THIS WOMEN'S SHOE IS FOR: The Ghost 13 is for runners looking for a reliable shoe that's soft and smooth. The Ghost 13 offers improved transitions for zero distractions so you can focus more on what matters most: your run. This Brooks Ghost 13 is a certified PDAC A5500 Diabetic shoe and has been granted the APMA Seal of Acceptance.",
            "SUPPORT AND CUSHION: The neutral support type provides high energizing cushioning. Ideal for road running, cross training, the gym or wherever you might want to take them! Predecessor: Ghost 12",
            "BALANCED, SOFT CUSHIONING: BioMoGo DNA and DNA LOFT cushioning work together to provide a just-right softness underfoot without losing responsiveness and durability - yet it feels lighter than ever.",
            "SMOOTH, STABLE RIDE: No matter how your foot lands, our Segmented Crash Pad - an integrated system of shock absorbers - will cushion every step and stride for smooth heel-to-toe transitions.",
            "SOFT, SECURE, FIT: The newly engineered mesh and 3D Fit Print practically disappears on your foot with strategically placed stretch and structure.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'nike',
        name: 'Aver',
        amazonLink: 'https://www.amazon.com/Nike-Train-Anthracite-White-Training/dp/B0163GJJW4/ref=sr_1_177?crid=2BT96LNZ9QMR&keywords=shoes+cross+trainer&qid=1704153523&refinements=p_n_availability%3A2661601011%2Cp_n_feature_eighteen_browse-bin%3A14630392011&rnid=14630382011&s=apparel&sprefix=shoes+cross+trainer%2Caps%2C188&sr=1-177',
        price: 110,
        sizes: [8,8.5,9,9.5,10],
        colors: ['red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81aN2LR2aCL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81I38ZjoLoL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71SVuRurdTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/712ey2BhMlL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81wZwd1S8KL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81N0m92WbAL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818sGTFUb5L._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Ricochet',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Ricochet-Black-Ebony/dp/B077KFVMP9/ref=sr_1_102?crid=2BT96LNZ9QMR&keywords=shoes%2Bcross%2Btrainer&qid=1704153487&refinements=p_n_availability%3A2661601011%2Cp_n_feature_eighteen_browse-bin%3A14630392011&rnid=14630382011&s=apparel&sprefix=shoes%2Bcross%2Btrainer%2Caps%2C188&sr=1-102&th=1',
        badges: ['best seller'],
        price: 205.74,
        sizes: [7,7.5,8,8.5,9,9.5,10,11,11.5,12,15],
        colors: ['grey','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91Tz79AwPlL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91sX+bpx+wL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81vM3jIW8xL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Ntimj8bOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81rPoHZ06mL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-Q2VoO+9L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91Yj1fKhZdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81tWlUcsc5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/912jLUI-O4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81N4a0SWOEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Q-cb9T9cL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81J7MeHygBL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Inner material Manmade",
            "SHOE SIZE: 'D' = Medium width",
            "ENERGIZED FEEL: Delivers a responsive and springy ride to add extra lift to your stride without compromising support or speed.",
            "FOOT SUPPORT: Ideal for runners with a medium to high arch looking for neutral support.",
            "ENERGIZED CUSHIONING: Running shouldn't be a zero-sum game. That's why our BioMoGo DNA and DNA AMP midsole technology provides light-weight, best-in-class energy return. You give. Ricochet gives back.",
            "INTUITIVE FIT, INCOGNITO COMFORT: Comfort goes stealth mode inside the sleek, adaptable Fit Knit upper. Hidden features include a heel wrap and an ultra-soft heel tab to shield your Achilles from irritation. Fit Knit upper holds a host of comfort features to keep you running at your best.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Ricochet',
        amazonLink: 'https://www.amazon.com/Brooks-Womens-Ricochet-Navy-White/dp/B07DS321PS/ref=sr_1_121?crid=2BT96LNZ9QMR&keywords=shoes%2Bcross%2Btrainer&qid=1704153487&refinements=p_n_availability%3A2661601011%2Cp_n_feature_eighteen_browse-bin%3A14630392011&rnid=14630382011&s=apparel&sprefix=shoes%2Bcross%2Btrainer%2Caps%2C188&sr=1-121&th=1&psc=1',
        badges: ['best seller'],
        price: 205.74,
        sizes: [5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['green','darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/713sbXMtodL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71h9qIAh5vL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71nnZGW8flL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71mFeuRvEJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61QUjCjg3qL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71I3-5xNBdL._AC_SX695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81otO-yV92L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81b3HFkJU1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/812qPxk-vPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81cnC0G-E6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81EBMfd-cXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/811A3CYnhCL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Fabric",
            "Inner material Manmade",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        brand: 'adidas',
        category: 'cross training',
        name: 'Adidas ZGM',
        amazonLink: 'https://www.amazon.com/adidas-Trainer-Metallic-Utility-Medium/dp/B01NCOCKKQ/ref=sr_1_70?crid=34HEIBPBJS3LF&keywords=shoes+cross+trainer&qid=1704154909&refinements=p_72%3A2661618011%2Cp_89%3Aadidas%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=%2Cfashion%2C199&sr=1-70',
        price: 89.95,
        sizes: [9,10,11,12],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81YMJEZBl6L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81maNxyDDyL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71q+jDJWVRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717sAl8sCKL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81e6T00Zt4L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XIEVTwvJL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81vjsTFYKqL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type1 00% Synthetic",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "BOUNCE provides energized comfort for all sports, all day",
            "Lightweight and supportive engineered mesh upper",
            "Seamless upper for more comfort and better fit",
            "Comfortable textile lining",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'adidas',
        name: 'Terrex Swift R3',
        amazonLink: 'https://www.amazon.com/adidas-Terrex-Swift-Cross-Trainer/dp/B08JNFRVTP/ref=sr_1_2?crid=34HEIBPBJS3LF&keywords=shoes%2Bcross%2Btrainer&qid=1704155160&refinements=p_72%3A2661618011%2Cp_89%3ANew%2BBalance%7Cadidas&rnid=2528832011&s=apparel&sprefix=%2Cfashion%2C199&sr=1-2&th=1',
        badges: ['best seller'],
        price: 106.82,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5],
        colors: ['sienna'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'sienna',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61isJT3bBnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61o3nzfTV1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71rCZWKydFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SBNImsjIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71E+KSDI9gL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61i0i76g2aL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "Continental Rubber outsole",
            "GORE-TEX textile upper",
            "Speed lacing system",
            "EVA midsole and moulded heel cup",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: 'HOVR Rise 2',
        amazonLink: 'https://www.amazon.com/Under-Armour-Trainer-Mineral-Academy/dp/B07Z75D9YD/ref=sr_1_35?crid=34HEIBPBJS3LF&keywords=shoes%2Bcross%2Btrainer&qid=1704155248&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011%2Cp_89%3AUnder%2BArmour&rnid=2528832011&s=apparel&sprefix=%2Cfashion%2C199&sr=1-35&th=1',
        badges: ['best seller'],
        price: 125.5,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13],
        colors: ['teal','red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612ewayXWnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Z1gBD7PmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617fDDPMRbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71JhUKUxR6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61upPVjMZRL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61La+q6RmBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61oNlr4w0AL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61X0WiOwGfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61deYSdRfmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/610KzImU92L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Water resistance levelNot Water Resistant",
            "UA HOVR technology provides 'zero gravity feel' to maintain energy return that helps eliminate impact",
            "Compression mesh Energy Web contains & molds UA HOVR foam to give back the energy you put in",
            "Lightweight, abrasion-resistant mesh upper with 3D print is durable & breathable for any workout",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'under armour',
        name: 'Dynamic Select',
        amazonLink: 'https://www.amazon.com/Under-Armour-Womens-Dynamic-Trainer/dp/B0BGQM8R8F/ref=sr_1_2?crid=34HEIBPBJS3LF&keywords=shoes%2Bcross%2Btrainer&qid=1704155277&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011%2Cp_89%3AUnder%2BArmour&rnid=2528832011&s=apparel&sprefix=%2Cfashion%2C199&sr=1-2&th=1',
        badges: ['sale'],
        price: 90,
        discount: 20,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,12],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51fd2IWZHCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51oTUGzcMSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51qzzUGAnEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Jl5F+Lf7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612qhFG6GuL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Polyester",
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Lightweight, breathable mesh upper",
            "Molded TPU clip for added lateral support",
            "Cushioned sockliner molds to your foot, eliminating slippage & providing ideal underfoot comfort",
            "Charged Cushioning midsole absorbs impact & converts it into a responsive burst",
            "Durable rubber outsole with strategically placed flex grooves for multi-surface traction & flexibility",
            "Offset: 8mm",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'columbia',
        name: 'Vitesse SlipOn',
        amazonLink: 'https://www.amazon.com/Columbia-Womens-Vitesse-Slip-Hibiscus/dp/B07RDM9DFV/ref=sr_1_37?crid=2Z6AB9IS5XGLR&keywords=columbia%2Bshoes&qid=1704156306&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=columbia%2Bshoe%2Caps%2C216&sr=8-37&th=1',
        badges: ['new'],
        price: 126.48,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9.5,10],
        colors: ['darkblue','sienna'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Hoy1oShdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61VhzQg8dWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61rydFY5DxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-Trr7tM-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51+aczcZ80L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51k0nsgeb+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61AyI3vvlBL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'sienna',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71HdwtsepxS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61NByHwbppS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71GavUge-uS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61kfi6hgwYS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SS8gO-oqS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/514BHxVoeyS._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61b4GtNNSYS._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "SLIP INTO COMFORT: These slip-on sneakers feature a sock-like fit. Lightweight cushioning and suede overlays add support, protection, and all-day comfort.",
            "COMFORT MEETS FUNCTION: The ultralight Midsole utilizes our most advanced cushioning compound providing high energy return for all day comfort and performance.",
            "STREET READY / INDOOR SAFE: Our signature Omni-GRIP non-marking traction rubber outsole provides versatility for pavement ready use without worrying scuffs during indoor use.",
            "NIMBLE PERFORMANCE: High function and performance are designed into this agile all-purpose shoe, built to deliver nimble response wherever you go.",
            "BUILT TO LAST: Columbia’s attention to detail is what sets our footwear apart from others. We use only the highest quality materials, expert craftsmanship, and durable stitching. This is an excellent pair of shoes you will enjoy for seasons to come.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'columbia',
        name: 'Columbia',
        amazonLink: 'https://www.amazon.com/Columbia-Sports-Shoes-Black-Amber/dp/B09642NDG4/ref=sr_1_50?crid=2Z6AB9IS5XGLR&keywords=columbia%2Bshoes&qid=1704156334&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=columbia%2Bshoe%2Caps%2C216&sr=8-50&th=1',
        badges: ['new'],
        price: 119.99,
        sizes: [7.5,8,8.5,9,9.5,10,11,11.5,12,13,14],
        colors: ['sienna'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'sienna',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ZziIDQbhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PUH7R8eBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71kcv-qxyUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61cR3gfyTeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61NxrxjP8XL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617RR3HKvPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61AW17HflPL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Faux Leather",
            "Inner material Synthetic",
            "Outdry waterproof, breathable construction",
            "Navic Fit System midfoot lock down",
            "TechLite+ cushioned midsole for stability and comfort",
            "AdaptTrax grip outsole to keep you sure-footed in wet and dry conditions",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'columbia',
        name: 'SH/FT Mid Breeze',
        amazonLink: 'https://www.amazon.com/Columbia-Womens-Breeze-Hiking-bluetint/dp/B084BNVFYK/ref=sr_1_98?crid=2Z6AB9IS5XGLR&keywords=columbia+shoes&qid=1704156365&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=columbia+shoe%2Caps%2C216&sr=8-98',
        badges: ['new'],
        price: 76.94,
        sizes: [6,6.5,7,7.5,8,8.5,9],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Gzh9orjDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61upghNbe3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TK867TNwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51+xSPKrgQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51IoOHNRSgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61aczKfLdnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61wbFN1v3RL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "Full grain leather overlays",
            "Soft beads embedded in PU foam midsole",
            "Omni-GRIP non-marking traction rubber",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'altra',
        name: 'Rivera 2',
        amazonLink: 'https://www.amazon.com/ALTRA-Mens-AL0A547G-Rivera-Running/dp/B09PL6D71W/ref=sr_1_66?crid=1PIW4H36KNI2G&keywords=altra%2Bshoes&qid=1704204975&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra%2Bshoes%2Caps%2C190&sr=8-66&th=1',
        badges: ['new'],
        price: 157.73,
        sizes: [7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['darkblue','red','white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71B+l7IRQXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ErUE-IfRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/710qPkdOFXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tLuqFrCvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71dMgzU7g0L._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71YSvvDEK0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ts1QSaFoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/711hHMutV5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71qnQ0XRd2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wz48krzTL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71GB3-SHbzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71iEsnicsXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tjdVswA5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ZoaQ3Z1aL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KUEY7zsiL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Stay Focused: Engineered mesh uppers are light, breathable and ready for the open road",
            "Get Comfortable: Altra EGO midsoles provide a responsive yet soft ride and the FootShape toe boxes allow the toes to relax and spread out naturally",
            "Push Yourself: Neutral InnerFlex midsole technology increases flexibility and performance",
            "Built For You: Bio heels are designed to mimic the natural form of the human heel for a smooth heel-to-toe transition",
            "Go Further: Balanced Cushioning platform places the heel and forefoot the same distance from the ground, which encourages low-impact landings",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'altra',
        name: 'Provision 5',
        amazonLink: 'https://www.amazon.com/ALTRA-Womens-AL0A4VRC-Provision-Running/dp/B08TVMHGCF/ref=sr_1_101?crid=1PIW4H36KNI2G&keywords=altra%2Bshoes&qid=1704205001&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra%2Bshoes%2Caps%2C190&sr=8-101&th=1',
        badges: ['best seller','sale'],
        price: 91.62,
        discount: 15,
        sizes: [5.5,6,6.5,12],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/711HlDtSRcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KTDiGnsML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71mbzkCc7KL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71jXgxbWJHL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Weight: 9.2 oz / 261 g",
            "Insole: 6mm Contour Footbed",
            "Midsole: Ultralight EVA Top Layer and InnerFlex",
            "Outsole: Rubber FootPod",
            "Cushion: Moderate",
            "Stack Height: 27 mm",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'altra',
        name: 'Escalante 2',
        amazonLink: 'https://www.amazon.com/ALTRA-Mens-Escalante-Road-Running/dp/B07NBRP4Q9/ref=sr_1_107?crid=1PIW4H36KNI2G&keywords=altra+shoes&qid=1704205001&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra+shoes%2Caps%2C190&sr=8-107',
        badges: ['best seller'],
        price: 134.7,
        sizes: [8,8.5,9,9.5,10,11],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51F7s7XTcsL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51cWJNtN1iL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/5183mj4STcL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51fE7VTZxlL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Altra EGO midsole",
            "Closure type Lace-Up",
            "Increased breathability",
            "Secure fit",
            "Updated insole that is less susceptible to compression",
            "Better step-in feel",
            "Stack Height: 24mm",
            "M | 8.8 oz / 249 g",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'altra',
        name: 'Lone Peak 4',
        amazonLink: 'https://www.amazon.com/Altra-Mens-Waterproof-Trail-Running/dp/B079RLC6LC/ref=sr_1_116?crid=1PIW4H36KNI2G&keywords=altra+shoes&qid=1704205001&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra+shoes%2Caps%2C190&sr=8-116',
        badges: ['new'],
        price: 178.95,
        sizes: [8,8.5,9,9.5,10,10.5,11,12],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Gl6EHqNxL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/813FVnSUazL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gD74bOB+L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71dRHPlaJuL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81rf53HpdCL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Ethylene Vinyl Acetate, Rubber",
            "Outer material Rubber",
            "Balanced cushioning: Places your heel and forefoot the same distance from the ground to encourage proper, low-impact form throughout your run.",
            "Upper: eVent Fabrics",
            "Footshape Toe Box: Allows your toes to relax and spread out naturally for more comfort and stability.",
            "Gaitertrap: Hook-and-loop tab allows strapless gaiter attachment that prevents debris from building up beneath the shoe.",
            "Trailclaw: Canted lugs positioned strategically beneath the metatarsals to provide traction at toe off.",
            "Duratread: Durable outsole rubber made to last long and offer great grip on both tame and technical terrain.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'GT-4000 3',
        amazonLink: 'https://www.amazon.com/ASICS-GT-4000-Running-Black-Waterscape/dp/B0CFP9SNRT/ref=sr_1_57?crid=1TKOSKZ00H6BN&keywords=asics+shoes&qid=1704209895&refinements=p_89%3AASICS%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=asics+shoes%2Caps%2C301&sr=1-57',
        price: 129.95,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,12,13],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/718Yh+fNYpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717RP0QyrPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8148z0nirOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81hMdznNe-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RxJ0zYRWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ob5fL3XbL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Made in the USA or Imported",
            "Closure type Lace-Up",
            "Engineered mesh upper: Improves breathability and wraps the foot with a soft feel.",
            "3D SPACE CONSTRUCTION: Improves compression and cushioning at footstrike and reduces pronation.",
            "LITETRUSS technology: Improves medial support and midfoot integrity.",
            "FLYTEFOAM Propel Technology: ASICS energetic foam formulation that provides supreme bounce thanks to a unique elastomer compound.",
            "Rearfoot and Forefoot GEL Technology Cushioning System: Attenuates shock during impact and toe-off phases, and allows movement in multiple planes as the foot transitions through the gait cycle.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'asics',
        name: 'Novablast AWL',
        amazonLink: 'https://www.amazon.com/ASICS-Novablast-Running-Graphite-Silver/dp/B086Z3FKQ8/ref=sr_1_64?crid=1TKOSKZ00H6BN&keywords=asics+shoes&qid=1704209895&refinements=p_89%3AASICS%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=asics+shoes%2Caps%2C301&sr=1-64',
        price: 139.99,
        sizes: [8.5,10.5,11.5,12,12.5,13],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8194++SmqoL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81K6j9DnkML._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81nZRVeUE3L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81JeIFZ6ObL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gf3RSofuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/810zJT+-VLL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81abcJxt5oL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Outer material FlyteFoam",
            "Rearfoot GEL technology cushioning system",
            "360-degree reflectivity for increased visibility.",
            "FLYTEFOAM BLAST Midsole Foam",
            "Forefoot Twist GEL Technology",
            "Monofilament Engineered Jacquard Mesh",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'asics',
        name: 'GT 2000',
        amazonLink: 'https://www.amazon.com/ASICS-Womens-GT-2000-Running-Indigo/dp/B0B4PJHSZ9/ref=sr_1_207?crid=1TKOSKZ00H6BN&keywords=asics+shoes&qid=1704209946&refinements=p_89%3AASICS%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=asics+shoes%2Caps%2C301&sr=1-207',
        badges: ['new'],
        price: 79.95,
        sizes: [5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['slateblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'slateblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/611b9yKFcQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612j9BBUUaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pej5USvoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/618VvuyLoFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71v2yh2OkhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61q+dRZAFyL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Gusseted tongue: Helps provide a supportive and comfortable foothold",
            "Engineered knit upper: Wraps the foot with a soft feel while improving breathability",
            "At least 50% of the shoe's main upper material is made with recycled content to reduce waste and carbon emissions:",
            "The sockliner is produced with the solution dyeing process that reduces water usage by approximately 33% and carbon emissions by approximately 45% compared to the conventional dyeing technology:",
            "Rearfoot GEL technology: Improves impact absorption and creates a softer feeling at footstrike",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'asics',
        name: 'Quantum Lyte',
        amazonLink: 'https://www.amazon.com/ASICS-Unisex-Quantum-Sportstyle-Indigo/dp/B09WWWJNZ2/ref=sr_1_405?crid=1TKOSKZ00H6BN&keywords=asics%2Bshoes&qid=1704210030&refinements=p_89%3AASICS%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=asics%2Bshoes%2Caps%2C301&sr=1-405&th=1',
        badges: ['sale'],
        price: 93.97,
        discount: 22,
        sizes: [10,10.5,11,11.5,12.5,13],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617OabYYRPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61AxfVyRU7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PmBWyKjWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-+a70MC7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61DXcvrDm4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61B1wzjQLsL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61f5TxYAb+L._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "GEL technology",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'Gel Kayano 29',
        amazonLink: 'https://www.amazon.com/ASICS-Gel-Kayano-Running-Shoes-Indigo/dp/B0B47KLQBG/ref=sr_1_292?crid=1TKOSKZ00H6BN&keywords=asics+shoes&qid=1704209973&refinements=p_89%3AASICS%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=asics+shoes%2Caps%2C301&sr=1-292',
        badges: ['best seller'],
        price: 89.95,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61xKGRd6j7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61RDfukz5sL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61k97FRRZhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ifBB0OyHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vUiVzpRIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61DJMMTMjWL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61lnf6ExUtL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Knit upper wraps your foot with a sock-like fit.:",
            "Redesigned external heel counter: Helps keep the foot stable and provide a more comfortable stride.",
            "LITETRUSS technology: Improves medial support and midfoot integrity.",
            "3D SPACE CONSTRUCTION feature: Improves compression at footstrike.",
            "Rearfoot GEL technology cushioning: Provides good shock absorption.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'Gel Cumulus 23',
        amazonLink: 'https://www.amazon.com/ASICS-Gel-Cumulus-Running-Shoes-Electric/dp/B09CLL57HL/ref=sr_1_290?crid=1TKOSKZ00H6BN&keywords=asics%2Bshoes&qid=1704209973&refinements=p_89%3AASICS%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=asics%2Bshoes%2Caps%2C301&sr=1-290&th=1',
        badges: ['sale'],
        price: 89.95,
        discount: 25,
        sizes: [8,8.5,9,9.5,10,13,14],
        colors: ['blue','darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61o7JpsZLJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qN+B-gmgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616qBR-laSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61a6ccboqLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616+u4Ylx0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61OLKcuyXmL._AC_SX695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-txPy+SrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61x+b+5qk+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61WSt7wwIfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61bPTWBBZUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61MuHMYiHYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61y1IAyhRrL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Synthetic-and-mesh",
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "GEL Technology: Cushioning provides excellent shock absorption",
            "Gender Specific 3D SPACE CONSTRUCTION: Addresses different compression rates at footstrike per gender.",
            "Engineered mesh upper:",
            "Reflective accents improve visibility in low-light conditions:",
            "FLYTEFOAM Technology: Provides lightweight cushioning.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'Roadblast',
        amazonLink: 'https://www.amazon.com/ASICS-ROADBLAST-Running-Peacoat-Directoire/dp/B082ZSD8DF/ref=sr_1_726?crid=1TKOSKZ00H6BN&keywords=asics%2Bshoes&qid=1704211613&refinements=p_89%3AASICS%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=asics%2Bshoes%2Caps%2C301&sr=1-726&th=1',
        badges: ['sale'],
        price: 79.95,
        discount: 24,
        sizes: [7,10,11,11.5,12],
        colors: ['darkblue','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TLjLcay7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61oWW42RqdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612KJ5QZNgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61K4mFbpmxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61id72e6Y2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61oadFMDUWS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613bD2vJtfL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615mtm-MK0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vXxKe-L+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Xjat+nSBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ZgOS8LXLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61kKq6FudrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613NsQ0n9sS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71cBUpEVqhL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Synthetic-and-mesh",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "FLYTEFOAM BLAST: Lightweight, midsole foam with energetic and highly responsive cushioning and bounce for an efficient ride.",
            "Gender-specific knit mesh upper:",
            "AmpliFoam Midsole: Engineered to maintain durability at softer densities, providing better flexibility, comfort, and platform adaptability ideal for natural running.",
            "Gender Specific Upper: Knit pattern that takes on the natural splay of men's and women's foot shapes.",
            "Solid Rubber Outsole: Provides enhanced durability and traction.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'asics',
        name: 'Gel DS Trainer 25',
        amazonLink: 'https://www.amazon.com/ASICS-Gel-DS-Trainer-Running-Metropolis/dp/B08DL7YF5R/ref=sr_1_579?crid=1TKOSKZ00H6BN&keywords=asics+shoes&qid=1704211542&refinements=p_89%3AASICS%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=asics+shoes%2Caps%2C301&sr=1-579',
        badges: ['new'],
        price: 154.09,
        sizes: [10.5,11,11.5],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61jE0seLfyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61psBMDXDGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61I5tb9ZFpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61zRgFWXwlL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615G3M2e6cL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61COfBpjeaL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hacxhXLTL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "Propulsion Trusstic Technology - Mimics connective tissue in the foot by creating tension as foot enters propulsion stage.",
            "FlyteFoam Midsole Technology - Our FlyteFoam technology provides exceptional bounce back and responsiveness no matter the distance, utilizing organic super fibers to help reduce packing out that traditionally happens with softer, low density foams.",
            "Rearfoot GEL technology cushioning system - Attenuates shock during impact phase and allows for a smooth transition to midstance.",
            "AHAR Plus Outsole - Strategically positioned in critical areas of the outsole, this exceptionally durable compound is 50% more durable than standard ASICS High Abrasion Rubber.",
            "DuoMax Support System - A dual density midsole system positioned to enhance support and stability, positioned sport specifically.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'asics',
        name: 'Dynaflyte 3 SP',
        amazonLink: 'https://www.amazon.com/ASICS-Womens-Running-Shoes-Skylight/dp/B078Z1Q5Y3/ref=sr_1_702?crid=1TKOSKZ00H6BN&keywords=asics%2Bshoes&qid=1704211578&refinements=p_89%3AASICS%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=asics%2Bshoes%2Caps%2C301&sr=1-702&th=1',
        badges: ['best seller'],
        price: 130,
        sizes: [5.5,6,7,7.5,8,10,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6131a3fghyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61KY3aUN-aL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61DvmZNNojL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61i39DK7QLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6162SUM+UhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61G2OlabVmL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51VOPmDLXaL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Inner material Textile",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'asics',
        name: 'GT-800',
        amazonLink: 'https://www.amazon.com/ASICS-Womens-Gt-800-Shoes-Carrier/dp/B08FP8F12J/ref=sr_1_675?crid=1TKOSKZ00H6BN&keywords=asics%2Bshoes&qid=1704211578&refinements=p_89%3AASICS%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=asics%2Bshoes%2Caps%2C301&sr=1-675&th=1',
        badges: ['sale'],
        price: 79.95,
        discount: 18,
        sizes: [5,6,6.5,7,7.5,8,8.5,9.5,10],
        colors: ['grey'],
        images :[
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uOsMFaGbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qk5FL06WL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uqk+qGGKL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ciYNYZ8EL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61v2CVbhXFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61NF1xetM5L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61EO8bH954L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Ethylene Vinyl Acetate, Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "I.G.S (Impact Guidance System) Technology: ASICS design philosophy that employs linked componentry to enhance the foot's natural gait from heel strike to toe-off.",
            "FLYTEFOAM Midsole Technology: Our FLYTEFOAM technology provides exceptional bounce back and responsiveness no matter the distance, utilizing organic super fibers to help reduce packing out that traditionally happens with softer, low density foams.",
            "DuoMax Support System: A dual density midsole system positioned to enhance support and stability, positioned sport specifically.",
            "AHAR Outsole: Acronym for ASICS High Abrasion Rubber. Placed in critical areas of the outsole for exceptional durability.",
            "EVA Sockliner: Removable sockliner that provides cushioning performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'Novablast Tokyo',
        amazonLink: 'https://www.amazon.com/ASICS-Novablast-Tokyo-Running-Sunrise/dp/B085ZVZ6D3/ref=sr_1_680?crid=1TKOSKZ00H6BN&keywords=asics+shoes&qid=1704211578&refinements=p_89%3AASICS%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=asics+shoes%2Caps%2C301&sr=1-680',
        price: 62.41,
        sizes: [7,7.5,8.5,10,10.5,11.5,12.5,13],
        colors: ['red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nD8bwH93L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sHIpWMtJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619fmxxAMjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61iNeOJT+CL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SnLJWNUxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61fl49EE6YL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/618+sy-4s-L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Synthetic-and-mesh",
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Midsole",
            "FLYTEFOAM BLAST - Lightweight, midsole foam with energetic and highly responsive cushioning and bounce for an efficient ride.",
            "AHAR Plus Outsole - Strategically positioned in critical areas of the outsole, this exceptionally durable compound is 50% more durable than standard ASICS High Abrasion Rubber.",
            "Reflectivity - Special reflective material designed to enhance safety and visibility in low light conditions",
            "Ortholite Lasting - This lasting material features plush underfoot comfort while providing excellent moisture management and a high level of breathability (Ortholite is a registered trademark of ATP Manufacturing LLC.)",
            "Engineered Mesh Upper - Multi-directional mesh material improves ventilation and stability.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'puma',
        name: "X-Cell Nova",
        amazonLink: 'https://www.amazon.com/PUMA-Athletic-Running-Training-Footwear/dp/B0C7S2T972/ref=sr_1_1?crid=BCMARVSX95Y9&keywords=puma%2Bshoes&qid=1704467085&sprefix=puma%2Bshoes%2Caps%2C236&sr=8-1&th=1',
        price: 99.95,
        sizes: [9,9.5,10,10.5,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71N4nd9KCEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71vkYGshz6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71UHTRmh52L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81J3DqttXBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Uzz3ooJHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71mhEix0LQL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Water resistance level Not Water Resistant",
            "Textile and synthetic upper",
            "PUMA Formstrip on the lateral sides",
            "PUMA Wordmark on the heel",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'puma',
        name: "Softride One4all",
        amazonLink: 'https://www.amazon.com/PUMA-Softride-One4all-Mens-Blackwhite/dp/B0CD2ST19Z/ref=sr_1_148?crid=BCMARVSX95Y9&keywords=puma%2Bshoes&qid=1704467424&refinements=p_n_availability%3A2661601011&rnid=2941120011&s=apparel&sprefix=puma%2Bshoes%2Caps%2C236&sr=1-148&th=1',
        badges: ['sale'],
        price: 74.95,
        discount: 25,
        sizes: [7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51W42XAoTTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51SUvtp39LL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51UlbDKMqlL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51yC6Skkt9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51BR2aPt6WL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Ethylene Vinyl Acetate",
            "Outer material Mesh",
            "REVAMPED DESIGN: One4all, all for one: every detail on these shoes conspires to make your run a little bit more fun. From Softride and SoftFoam+ technology to cushion your feet to the special lacing system, it's all geared towards comfort on the go.",
            "ENHANCED TECHNOLOGY: Utilizes PUMA's SoftFoam+, a step-in comfort sockliner designed to provide soft cushioning thanks to its extra thick heel.",
            "PERFORMANCE-DRIVEN: Utilizes PUMA's Softride EVA tech, our softest foam providing extreme cushioning and all-day comfort.",
            "ENHANCED VENTILATION: Features a breathable, mesh upper.",
            "FOREVER BETTER: PUMA is always pushing to be better than we were yesterday. FOREVER BETTER is our commitment to reduce our environmental impact and work together towards a sustainable future. The shoe's upper is made with recycled material.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: "HOVR Rise 4",
        amazonLink: 'https://www.amazon.com/Under-Armour-Training-Tempered-Midnight/dp/B09LSB53WV/ref=sr_1_7?keywords=hovr+rock+under+armour&qid=1704467811&refinements=p_n_availability%3A2661601011&rnid=2661599011&s=apparel&sr=1-7',
        badges: ['sale'],
        price: 95.72,
        discount: 15,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14,15],
        colors: ['slateblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'slateblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61cvZPH0LmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61orR67aQnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71goJdPQQzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71UWpLxXgfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61n7pEFa6-L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Textile_Synthetic",
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Ethylene Vinyl Acetate",
            "Under Armour's mission is to make all athletes better through passion, design and the relentless pursuit of innovation.",
            "The technology behind Under Armour's diverse product assortment is complex, but the program for reaping the benefits is simple: wear HeatGear when it's hot, ColdGear when it's cold, and AllSeasonGear between the extremes.",
            "Where we started? It all started with an idea to build a superior T-shirt",
            "The technology behind Under Armour's diverse product assortment for men, women and youth is complex, but the program for reaping the benefits is simple: wear HeatGear when it's hot, ColdGear when it's cold, and AllSeasonGear between the extremes.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'Magic Speed 3',
        amazonLink: 'https://www.amazon.com/ASICS-Magic-Speed-Shoes-Black/dp/B0BY3RZTK2/ref=sr_1_46?crid=1IKJQFGHI236X&keywords=asics%2Bshoes&qid=1704585524&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=asics%2Bshoe%2Caps%2C298&sr=8-46&th=1',
        badges: ['new'],
        price: 160,
        sizes: [6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5],
        colors: ['white','blue','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51v-WVfL3pL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51b03C5zBBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/519xwT23PBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51z1csd7vvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51QT1G3yTEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51x2XLaPsrL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qVHPTinoL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-FPS8C+fL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TRiMUGLxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61HZoeATjGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sF4+CZP2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Uo3LbaFOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-pikg3Y3L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61j+CdLXw1L._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61H+ZJNZXZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61z+okPxV2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61X2ThxRg+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ytkCv99QL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61OUeR9zC4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61xSqHWHYHL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWR5ACSCL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructionsMachine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "MOTION WRAP upper: Improves breathability",
            "At least 50% of the shoe’s main upper material is made with recycled materials to reduce waste and carbon emissions:",
            "The sockliner is produced with the solution dyeing process that reduces water usage by approximately 33% and carbon emissions by approximately 45% compared to the conventional dyeing technology:",
            "Full-length carbon plate: Adds structure and improve toe-off propulsion",
            "FF BLAST PLUS cushioning: Provides lightweight impact absorption and a responsive rebound",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'asics',
        name: 'GT-2000 12',
        amazonLink: 'https://www.amazon.com/ASICS-Womens-GT-2000-Running-Sapphire/dp/B0BZDS8HQ4/ref=sr_1_54?crid=1IKJQFGHI236X&keywords=asics%2Bshoes&qid=1704585546&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=asics%2Bshoe%2Caps%2C298&sr=8-54&th=1',
        badges: ['new'],
        price: 140,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5],
        colors: ['black','grey','darkblue','blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619xUqHyb5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51P+1DKe5bL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Pouh2GqaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51rjo5b7QbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/519YFhszMgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613S-QVx6eL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pg+kpeYJL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sRPOxzeFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613zHKuG97L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61z1gc3Ym2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61aWnA2NvpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61o6PCMQeZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61mL4M8DHlL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61sKSeSj8xL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61XmCj8cxCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61WzOAEUCeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6136WkVyNdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61XUEwXaoCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61phsB9-vnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Zps2j521L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61k993AWM8L._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61xM936F0OL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61e333zvrJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61XsWUIhOUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61t8m34Uv3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61dTfNNqJXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61FK8z7jz8L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TDGRXkKKL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Attribute not applicable for product",
            "Closure type Lace-Up",
            "Jacquard mesh upper: Offers a supportive and comfortable foothold",
            "At least 50% of the shoe's main upper material is made with recycled content to reduce waste and carbon emissions:",
            "The sockliner is produced with the solution dyeing process that reduces water usage by approximately 33% and carbon emissions by approximately 45% compared to the conventional dyeing technology:",
            "3D GUIDANCE SYSTEM helps provide advanced stability for a smoother stride:",
            "Rearfoot PureGEL technology: Helps provide lightweight cushioning and softer landings",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'Gel-Cumulus ™ 25',
        amazonLink: 'https://www.amazon.com/ASICS-Gymnastics-Shoes-Sneaker-Black/dp/B0C5Y64BNN/ref=sr_1_58?crid=1IKJQFGHI236X&keywords=asics%2Bshoes&qid=1704585546&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=asics%2Bshoe%2Caps%2C298&sr=8-58&th=1',
        price: 203.31,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['white','darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71uC4g7GpcL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71fh9J2Lo9L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71UqPCQlcLL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yhiJG6xrL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KD3x66PhL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61FU+CswX1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81N6OuC9mrL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ujHDEgUHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51xu6OuKWBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61f10Mj3TaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/513pEXNFjUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617TD1zpeHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51PbL+Kg6-L._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Shaft height Ankle Strap",
            "Outer material Synthetic",
            "Trainer",
            "Quick Sleak",
            "Unrelated natural soil or asphalt",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'asics',
        name: 'Gel Cumulus 24',
        amazonLink: 'https://www.amazon.com/ASICS-Womens-Gel-Cumulus-Running-Purple/dp/B0B4PP2BDS/ref=sr_1_113?crid=1IKJQFGHI236X&keywords=asics+shoes&qid=1704586009&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=asics+shoe%2Caps%2C298&sr=8-113',
        badges: ['new'],
        price: 89.95,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,12],
        colors: ['slateblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'slateblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61F4EID5cxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61OFiGZzNeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ZwZ9PRxyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uHPacpFGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61DTPKzUP8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61OQrwfk-nL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "FLYTEFOAM BLAST cushioning: Creates lightweight impact absorption and a responsive energy return.",
            "At least 75% of the shoe’s main upper material is made with recycled materials to reduce waste and c:",
            "The sockliner is produced with the solution dyeing process that reduces water usage by approximately:",
            "Rearfoot and forefoot GEL technology: Improves impact absorption and creates a softer feeling at footstrike.",
            "Gender-specific 3D SPACE CONSTRUCTION feature: Addresses different compression rates",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'asics',
        name: 'GT-4000 3',
        amazonLink: 'https://amazon.com/ASICS-Womens-GT-4000-Running-French/dp/B0BZ1GH8RK/ref=sr_1_118?crid=1IKJQFGHI236X&keywords=asics+shoes&qid=1704586009&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=asics+shoe%2Caps%2C298&sr=8-118',
        price: 130,
        sizes: [5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5],
        colors: ['slateblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'slateblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61VaVJDROrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61gMXw-b5KL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uFfM5il8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hA8NykpNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Zwp9cvIzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61TtVs+aJ1L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717p8DgsVML._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Engineered mesh upper: Improves breathability and wraps the foot with a soft feel.",
            "3D SPACE CONSTRUCTION: Improves compression and cushioning at footstrike and reduces pronation",
            "LITETRUSS technology: Improves medial support and midfoot integrity.",
            "FLYTEFOAM Propel Technology: ASICS energetic foam formulation that provides supreme bounce thanks to a unique elastomer compound.",
            "Rearfoot and Forefoot GEL Technology Cushioning System: Attenuates shock during impact and toe-off phases, and allows movement in multiple planes as the foot transitions through the gait cycle.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'Hyper Speed 2',
        amazonLink: 'https://www.amazon.com/ASICS-Hyper-Speed-Running-Island/dp/B0BCGXD1LV/ref=sr_1_209?crid=1IKJQFGHI236X&keywords=asics%2Bshoes&qid=1704587353&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=asics%2Bshoe%2Caps%2C298&sr=8-209&th=1',
        badges: ['sale'],
        price: 90.43,
        discount: 20,
        sizes: [7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['black','green'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615xUAnz4nL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61VUl3LB7nL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/610fTPeBflL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61OiBZE83YL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71GG0AUtJUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61AUtoBgBTL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/719nip7aN-L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SiSOWaXTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61JPUj5eahL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61eij+Bz3+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619BYQa+T1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-qwfo9lpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pwlUFxTEL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tmHSWayGL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Breathable mesh upper: Helps you focus on your training as you move towards a new personal best",
            "Higher stack height in the midsole: Creates a more energized stride",
            "FLYTEFOAM cushioningProvides lightweight impact absorption.: Helps you conserve more energy",
            "AHAR outsole: Improves durability.",
            "The sockliner is produced with the solution dyeing process that reduces water usage by approximately 33% and carbon emissions by approximately 45% compared to the conventional dyeing technology",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Adrenaline GTS 22',
        amazonLink: 'https://www.amazon.com/Brooks-Adrenaline-Mens-Supportive-Running/dp/B08QV8K2PV/ref=sr_1_4?crid=36FGIAZZYHEAO&keywords=brooks%2Bshoes&qid=1704632692&sprefix=brooks%2Bshoe%2Caps%2C287&sr=8-4&th=1',
        price: 96.95,
        sizes: [7.5,8,8.5,9,9.5,10,10.5,11,12,13],
        colors: ['darkblue','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81hcm8PA8SL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81DRqEKKKIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Gp6Ax+fTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818L2UoFtNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81BFacwEV6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81qI3xjO7LL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81e2rdPVepL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81siNs3haBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81a66ABh52L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81xi4JUKqrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81UTgCnR2PL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81qWpNlcUoL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "THIS MEN'S SHOE IS FOR: Runners looking for a smooth ride, with great cushion and trusted GuideRails support that won’t distract from the fun of the run. This Brooks Adrenaline GTS 22 is a certified PDAC A5500 Diabetic shoe and has been granted the APMA Seal of Acceptance. We recommend ordering Brooks running shoes 1/2 to one size larger than your dress shoe.",
            "SUPPORT AND CUSHION: Provides just the right amount of stability and support, great for overpronation while providing high energizing cushioning. Ideal for road running, cross training, the gym or wherever you might want to take them! Predecessor: Adrenaline GTS 21",
            "BALANCED, SOFT CUSHIONING: The updated midsole is now 100% DNA LOFT cushioning paired with the Segmented Crash Pad for an even softer, smoother ride and easier flow from landing to toe-off.",
            "MODERNIZED FIT: More strategic use of the 3D Fit Print upper technology offers the structure and proven fit the Adrenaline is known for without excess bulk.",
            "GUIDERAILS HOLISTIC SUPPORT SYSTEM: We've shifted our focus beyond the feet to the most injury-prone part of a runner’s body: the knees. GuideRails keep you moving comfortably by keeping excess movement in check.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Hyperion Tempo',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Hyperion-Tempo-Running/dp/B0842NRDBG/ref=sr_1_19?crid=36FGIAZZYHEAO&keywords=brooks%2Bshoes&qid=1704632743&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoe%2Caps%2C287&sr=8-19&th=1',
        badges: ['best seller'],
        price: 150,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['black','white','teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gwJjH+E9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81qUZje21hL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bni+CMdkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81YvkP0PqbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81fwve+wRqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Xhljivs7L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/813aVC6P9tL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81KxuonoymL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/814NdrlXl3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ZjeeMZZ4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/815LS2zQ8FL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/817G+UqKSRL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/7160yvg+Y9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81sJoG47GSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71S5UH+3FuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71iIT56+-BL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/719SuK5BpzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71nhIJ+Q53L._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Shaft height Alla caviglia",
            "THIS MEN'S SHOE IS FOR: For runners looking to get the most out of their workouts, the Hyperion Tempo is a light and responsive trainer that reduces deviation, allowing you to run and recover faster",
            "LIGHT, RESPONSIVE CUSHIONING: We created the all-new DNA FLASH midsole by infusing our adaptive DNA material with nitrogen, providing an incredibly lightweight yet springy experience.",
            "PERFORMANCE FIT: The woven upper moves with your foot and provides both stretch and breathability for maximum comfort.",
            "ENERGY SAVINGS: The shoe geometries keep your foot stable as you move, allowing you to run efficiently in your natural motion path.",
            "QUICK RECOVERY: Get back to the grind and focus on your progress with Hyperion Tempo's impact-absorbing, lightweight, responsive and soft cushioning.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'brooks',
        name: 'Caldera 6',
        amazonLink: 'https://www.amazon.com/Brooks-Womens-Caldera-Trail-Running/dp/B09MGF6VDF/ref=sr_1_27?crid=36FGIAZZYHEAO&keywords=brooks%2Bshoes&qid=1704632743&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoe%2Caps%2C287&sr=8-27&th=1',
        badges: ['new'],
        price: 109.95,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,11,12],
        colors: ['lightblue','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Z+-qh9FnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81V3EP-0C8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/813vf4V-6dL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/819GhkHVUTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81vx8gclmDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/819krXTg+4L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8101wEK979L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81cRHOZoUfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818wZlcJ22L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71GZFnFdvUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81M1O-MJgUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/810FcUMPwqL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "THIS WOMEN'S SHOE IS FOR: The Caldera 6 provides support for trail runners ready to run far with supremely soft cushioning and trusted traction for a fully distraction-free run.",
            "SUPREME SOFTNESS: Now featuring nitrogen-infused DNA LOFT v3, our softest cushioning optimized to be lightweight, plush, and responsive.",
            "COMFORTABLY SECURE FIT: An internal midfoot saddle holds the foot securely without sacrificing breathability to ensure stability over any terrain.",
            "HIGHLY BREATHABILITY: All new, quick drying, lightweight air mesh upper that offers enhanced breathability.",
            "STABLE RIDE: The foot sits securely within raised midsole foam walls, while the widened base and split heel outsole work to stabilize your landings and carry you smoothly over uneven terrain.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Glycerin Stealthfit GTS 21',
        amazonLink: 'https://www.amazon.com/Brooks-Glycerin-Stealthfit-Supportive-Running/dp/B0CGYZCC3M/ref=sr_1_1?crid=36FGIAZZYHEAO&keywords=brooks+shoes&qid=1704632770&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks+shoe%2Caps%2C287&sr=8-1',
        price: 159.95,
        sizes: [7.5,8,8.5,9.5,10,11],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71H56haP47L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81sRScRvs2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71vIhbDTlEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71dkMYY5tUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81jSuuDTbHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XUlRGGQUL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Origin Made in the USA or Imported",
            "Closure type Lace-Up",
            "THIS WOMEN’S SHOE IS FOR: The Glycerin Stealthfit GTS 21 is for runners who want supreme softness, do-it-all design and added support from the GuideRails holistic support system. Predecessor: Brooks Glycerin Stealthfit GTS 20.",
            "SUPREME SOFTNESS: Now with even more super-soft nitrogen-infused DNA LOFT v3 cushioning that is optimized to be lightweight, responsive, and durable with plush comfort.",
            "GREAT SUPPORT: The Glycerin Stealthfit GTS 21 is the more supportive version of the Glycerin Steathfit 20. The innovative GuideRails holistic support system supports your body in its natural motion path while keeping excess movement in check.",
            "SECURE, ADAPTABLE FIT: Updated flat knit upper Stealthfit construction offers a blend of stretch and compression for a closer fit which provides seamless structure, breathability and adapts to the movements of your foot.",
            "BREATHABILITY: Flat Knit upper provides a seamless fit that allows for maximum breathability to keep your feet comfortably cool.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'brooks',
        name: 'Catamount Agil',
        amazonLink: 'https://www.amazon.com/Brooks-Unisex-Catamount-Trail-Running/dp/B0CH43FQRW/ref=sr_1_10?crid=36FGIAZZYHEAO&keywords=brooks%2Bshoes&qid=1704632770&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoe%2Caps%2C287&sr=8-10&th=1&psc=1',
        badges: ['limited'],
        price: 187.13,
        sizes: [5,9],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71UKr5aGtZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71kQ4765RtL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61j8T1LIy0L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Closure type Lace-Up",
            "THIS UNISEX SHOE IS FOR: The Catamount Agil is made for both men and women looking to propel to top speeds on race day, thanks to the nitrogen-infused DNA FLASH v2 midsole technology that creates a lightweight and responsive ride — ready for technical trails at top speeds. The Catamount Agil is a certified carbon neutral product.",
            "AGILE & RESPONSIVE DESIGN: Midsole and outsole are precision engineered for speed – lower stack height and responsive underfoot-feel allow runners to remain agile at top speeds. The articulated SpeedVault Trail plate helps maintain footing on dynamic terrain.",
            "LOCKED-IN FIT: Lightweight mesh upper contours to the foot for a second-skin feel and can be cinched down for increased precision fit.",
            "ENERGY RETURN: Nitrogen-infused DNA FLASH v2 midsole technology is lighter and provides nearly 10% more energy return than the previous version.",
            "RUGGED OUTSOLE: Perforated outsole shaves weight by delivering high-performance traction, grip, and protection on the trails. TrailTrack Green outsole provides superior traction on both wet and dry surfaces and is made of 25% recycled materials.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'under armour',
        name: 'HOVR Forge Spikeless',
        amazonLink: 'https://www.amazon.com/Under-Armour-Forge-Spikeless-3024366-103/dp/B0BLWFG6J4/ref=sr_1_69?crid=2P5AS9KOSQYF0&keywords=under+armour&qid=1704634432&refinements=p_89%3AUnder+Armour%2Cp_n_availability%3A2661601011&rnid=7141123011&s=apparel&sprefix=under+armour%2Caps%2C198&sr=1-69',
        badges: ['limited'],
        price: 77.99,
        sizes: [5.5,6],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Wu6FfoydL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51TE6a2eKZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/511VA4AZo+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71muiAXk1bL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/611HzFKoYHL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Mesh",
            "Breathable microfiber and textile upper with Never-Wet treatment to keep you cool and dry.",
            "UA HOVR cushioning supports natural motion of the foot and provides energy return to eliminate impact.",
            "Compression mesh Energy Web contains and molds UA HOVR foam to give back the energy you put in.",
            "UA Rotational Resistance outsole for lightweight lockdown traction to support your swing.",
            "Lightweight spikeless outsole is light weight, durable, and offers tour level traction.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'under armour',
        name: 'HOVR Mega 2',
        amazonLink: 'https://www.amazon.com/Under-Armour-running-shoes-women/dp/B0B9GWFYFB/ref=sr_1_151?crid=2P5AS9KOSQYF0&keywords=under+armour&qid=1704634488&refinements=p_89%3AUnder+Armour%2Cp_n_availability%3A2661601011&rnid=7141123011&s=apparel&sprefix=under+armour%2Caps%2C198&sr=1-151',
        price: 339.83,
        sizes: [7,7.5,8,8.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GjUZHOSYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nu-wBYA8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71JoqcE4ptL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71EERURM3-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ntpvyg1KL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Synthetic",
            "Outer material Synthetic",
            "Inner material Manmade",
            "Material: synthetic",
            "Inner material: synthetic",
            "Heel height: 24mm",
            "Differential Tallone Punta: 29-21 mm",
            "Running shoe category: A3 - maximum cushioning",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'salomon',
        name: 'Chukka GTX',
        amazonLink: 'https://www.amazon.com/SALOMON-Cross-Chukka-Womens-Hiking/dp/B08TX1GY88/ref=sr_1_6?crid=106EZOYBF4188&keywords=hiking+shoes&qid=1704644372&refinements=p_n_availability%3A2661601011%2Cp_89%3AColumbia%7CSalomon%7Cadidas&rnid=2528832011&s=apparel&sprefix=hiking+shoe%2Caps%2C247&sr=1-6',
        price: 185,
        sizes: [6,7,8.5,12],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81iIgYRg1uL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71zHzBRHIqL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71prv3rHcWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71G6ufN0h1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61WXaJ1CgAL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71uPFHrVkyL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Synthetic",
            "Inner material Manmade",
            "Closure type Speed Laces",
            "Hiking Grip",
            "We've optimized the Contagrip outsole with rugged rubber and hiking-specific cleats",
            "Outdoor Protection",
            "Reinforced toe and higher shaft protects foot, seamless construction protects from mud",
            "Specifically designed for bold hiking",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'columbia',
        name: 'Facet 60',
        amazonLink: 'https://www.amazon.com/Columbia-Womens-Outdry-Hiking-Nocturnal/dp/B09K2S3QD7/ref=sr_1_54?crid=7PF57XQBIUIF&keywords=hiking%2Bshoes%2Bwomen&qid=1704644494&refinements=p_89%3AColumbia%7CNew%2BBalance%7CSalomon%7Cadidas%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=hiking%2Bshoes%2B%2Caps%2C285&sr=1-54&th=1',
        price: 108.79,
        sizes: [5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['sienna'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'sienna',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61edRdHIs7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61A5yTyuaXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61habaux8uL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61JB31O+3cL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51JlVbneCbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51NkndE9loL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vlMiDGikL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "WATERPROOF & BREATHABLE: A technical hiker delivering plush cushioning, stability and waterproof protection — this shoe features our highest performing technologies designed for a wide range of trail activities",
            "ADVANCED TECHNOLOGY: A lightweight shoe with our NavicFit system that delivers natural midfoot lockdown, combined with our FluidFrame tech that's co-molded with our Techlite+ multi density platform — to deliver secure and enduring performance",
            "COMFORT MEETS FUNCTION: The perfect combination of performance and style, our men’s Columbia Facet 60 Low OutDry performance shoes deliver plenty of comfort and flex ideal for walking or running",
            "NIMBLE PERFORMANCE: High function and performance are designed into this agile all-purpose waterproof shoe built to deliver nimble response wherever you go",
            "TRAIL READY, INDOOR SAFE: Our signature Omni-Grip non-marking traction rubber outsole provides versatility from trail to pavement — without worrying indoor scuffs",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'nike',
        name: 'Flex Control TR3',
        amazonLink: 'https://www.amazon.com/Nike-Control-Trainer-Blacksmoke-Regular/dp/B07FLM44Q8/ref=sr_1_3?crid=7GOUDUTS5KYP&keywords=nike%2Bcross%2Btrainer&qid=1704674344&refinements=p_89%3ANike%2Cp_n_feature_eighteen_browse-bin%3A14630392011%2Cp_n_availability%3A2661601011&refresh=1&rnid=2661599011&s=apparel&sprefix=nike%2Bcross%2Btrainer%2Caps%2C188&sr=1-3&th=1',
        badges: ['best seller'],
        price: 79.99,
        colors: ['grey'],
        sizes: [6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81eLZkEhrOL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ukkWtkmKL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81wqSL6RlmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714H43cEOhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81LPbiNChKL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91XQDs7mvkL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Shaft height Low-top",
            "Outer materialLeather",
            "Mesh upper provides lightweight breathability. A durable overlay wraps from the midfoot around the heel for added support",
            "Segmented rubber outrigger on the forefoot of the sole gives you stability during side-to-side movements. Overlays above the outrigger add durability",
            "Nike Flex sole lets your foot move naturally. Textured rubber tread outlines the sole for durable traction and stability",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'nike',
        name: 'Nike Metcon',
        amazonLink: 'https://www.amazon.com/Nike-Mens-Free-Metcon-Black/dp/B07HDSCNL7/ref=sr_1_74?crid=7GOUDUTS5KYP&keywords=nike%2Bcross%2Btrainer&qid=1704674364&refinements=p_89%3ANike%2Cp_n_feature_eighteen_browse-bin%3A14630392011%2Cp_n_availability%3A2661601011&refresh=1&rnid=2661599011&s=apparel&sprefix=nike%2Bcross%2Btrainer%2Caps%2C188&sr=1-74&th=1',
        badges: ['best seller'],
        price: 79.8,
        sizes: [7,7.5,8,8.5,9,9.5,10,13,14],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81GM0Gx8chL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bNOK1YS9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81afypIjk3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71j3O1AhaFL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up]",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'nike',
        name: 'DM0824-101',
        amazonLink: 'https://www.amazon.com/Nike-Trainer-Elemental-White-Pure-Platinum/dp/B0B6FWNDT3/ref=sr_1_117?crid=7GOUDUTS5KYP&keywords=nike%2Bcross%2Btrainer&qid=1704674653&refinements=p_89%3ANike%2Cp_n_feature_eighteen_browse-bin%3A14630392011%2Cp_n_availability%3A2661601011&refresh=1&rnid=2661599011&s=apparel&sprefix=nike%2Bcross%2Btrainer%2Caps%2C188&sr=1-117&th=1',
        badges: ['sale'],
        price: 90.49,
        discount: 12,
        sizes: [5,5.5,6,7,10.5,11,11.5,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612cdu9duPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61zZ30Ngu6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613dpgxhoiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71TQ5YfIefL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81DLDKaahJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71aw4yYyK4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ar2fg448L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "The flat base is wider around the heel to help stabilize your foot while you work with weights",
            "Support wraps from the heel up to the sides for a snug fit when you tighten the laces",
            "Soft foam provides supportive cushioning and rises at the sides to help brace your foot during lateral moves",
            "Rubber tread gives you traction from the turf to the training room floor",
            "It's thicker under the heel for stability while you lift, and thinner in the front for flexibility during short runs or speed drills",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'nike',
        name: 'Free Run 2',
        amazonLink: 'https://amazon.com/Nike-Womens-WMNS-Free-DM9057/dp/B0B57JJMNW/ref=sr_1_190?crid=7GOUDUTS5KYP&keywords=nike%2Bcross%2Btrainer&qid=1704674942&refinements=p_89%3ANike%2Cp_n_feature_eighteen_browse-bin%3A14630392011%2Cp_n_availability%3A2661601011&refresh=1&rnid=2661599011&s=apparel&sprefix=nike%2Bcross%2Btrainer%2Caps%2C188&sr=1-190&th=1',
        badges: ['sale'],
        price: 79.99,
        discount: 35,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/715bMxFc5zL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+e3uz-AWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71DmvbLUXDL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Outer material Leather",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'altra',
        name: 'TIMP 3',
        amazonLink: 'https://www.amazon.com/ALTRA-AL0A4VQI-Trail-Running-Orange/dp/B099WJGXYL/ref=sr_1_74?crid=3660JLG3ME4XY&keywords=altra%2Bshoes&qid=1704675596&refinements=p_89%3AALTRA%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=altra%2Bshoes%2Caps%2C184&sr=1-74&th=1',
        price: 99.95,
        sizes: [8,9,10,11.5,12],
        colors: ['orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/519etmRc6ZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ouLS3EEaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51FL01UdkoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51lVnyHCmIL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Stay Focused: With our MaxTrac outsole and multi-directional TrailClaw lug pattern for grippy traction, you can focus on the trail infront of you",
            "Go Further: Balanced Cushioning platform places the heel and forefoot the same distance from the ground, which encourages low-impact landings",
            "Get Comfortable: Highly cushioned Quantic midsoles provide the support needed for high intensity trail days",
            "Run Naturally: Our FootShape toe box allows the toes to relax and spread out naturally",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Bedlam 3',
        amazonLink: 'https://www.amazon.com/Brooks-Womens-Bedlam-Running-Shoe/dp/B083LX3MFM/ref=sr_1_1_sspa?crid=1DSQJ4OD0NNM6&keywords=brooks%2Bshoes&qid=1704720710&sprefix=brooks%2Bshoes%2Caps%2C661&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1',
        badges: ['sale'],
        price: 110,
        discount: 5,
        sizes: [5,6.5,7.5,11.5],
        colors: ['black','white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ok9W5REjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/819dTaQg7iL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81BZKpSD0lL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71I-ovwLqoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81aFX-oIO7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81EvCIOIUlL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81QBZACm8ZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gw9V09-gL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/813vu52Sk2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71lBvJvWoEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81S7WHwY+pL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81neisAkOVL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in USA or Imported",
            "Sole material Rubber",
            "Outer material Canvas",
            "THIS WOMEN'S SHOE IS FOR: The Bedlam 3 is perfect for runners who want a shoe that helps them by giving energy back with each step and supports the way their body naturally wants to move.",
            "ENERGIZED CUSHIONING: Built with our best energy return, the DNA AMP midsole gives you back more of the effort you put in.",
            "SECURE, SOCK-LIKE FIT: Redesigned Fit Knit upper provides a secure, sock-like fit that moves with you.",
            "GUIDERAILS HOLISTIC SUPPORT SYSTEM: We’ve shifted our focus beyond the feet to the most injury-prone part of a runner’s body: the knees. GuideRails support keeps you moving comfortably by keeping excess movement in check.",
            "WEAR TESTERS SAY: “ I love the energy I have in these shoes, they are light but powerful! Traction and stability are very strong as well.”",
        ]

    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Launch 10',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Launch-Neutral-Running/dp/B0BJNKRFHP/ref=sr_1_12?crid=1DSQJ4OD0NNM6&keywords=brooks%2Bshoes&qid=1704720740&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C661&sr=8-12&th=1',
        price: 99.95,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['grey','green'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81kpuOxUc6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Wq9SktGWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81j7okU2mfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/817W0NrAB6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-db82a9IL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81uH9XCOCcL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81MnN8moX7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/914VUcZKvzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81TebIQou4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91TK5ydc2OL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81rp-IrUogL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ORcs8hXkL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Fabric-and-synthetic",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "THIS MEN’S SHOE IS FOR: The Launch 10 is for runners who need a shoe that will offer dependable speed for all types of workouts and even races.",
            "QUICK, SMOOTH TRANSITIONS: Our outsole is shaped to encourage transitions from heel to toe for an efficient toe-off.",
            "SOFT, LIGHTWEIGHT CUSHIONING: Lightweight DNA cushioning is soft and responsive and adapts to each runner’s unique weight and stride for a fast experience.",
            "PERFORMANCE FIT: An updated upper to deliver a locked-down fit that will hold your foot securely in place during fast workouts and races.",
            "BREATHABLE UPPER: New engineered warp knit upper provides targeted breathability.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Addiction GTS 15',
        amazonLink: 'https://www.amazon.com/Brooks-Addiction-Womens-Supportive-Running/dp/B09RRSD97L/ref=sr_1_99?crid=1DSQJ4OD0NNM6&keywords=brooks+shoes&qid=1704720763&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks+shoes%2Caps%2C661&sr=8-99',
        price: 139.95,
        sizes: [5.5,6,6.5,7,7.5,8,8.5,9],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81DCHQY0CHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81n-DQa6R1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Rp5fzyltL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81lHCgNRaFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-aBWE5ezL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KZMFOKPJL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "THIS WOMEN'S SHOE IS FOR: Runners who want trusted support and protection in every step, plus a roomy fit to accommodate feet with unique needs. A roomy toe box accommodates orthotics or provides a better fit for voluminous feet. Updated with the innovative GuideRails support technology, this shoe maximizes comfort and support. Predecessor: Addiction 14. This Brooks Addiction GTS 15 is a certified PDAC A5500 Diabetic shoe and has been granted the APMA Seal of Acceptance.",
            "SUPER-SOFT CUSHIONING: BioMoGo DNA, our proprietary cushioning, adapts to your stride, weight, and speed. Why? So it can help protect you by reducing impact on your joints.",
            "MAXIMUM SUPPORT: Our innovative GuideRails support technology reduces excess joint movement on the run, adding support beyond your feet to the most injury-prone part of a runner’s body: the knees.",
            "BREATHABLE UPPER: 3D Fit Print and engineered Air Mesh create the right blend of stretch and structure for supreme comfort.",
            "GENEROUS FIT: Sometimes you need a little extra room to move around in. If you need a roomier shoe for flat or high-volume feet or specialized orthotics, your search is over.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Revel 5',
        amazonLink: 'https://www.amazon.com/Brooks-Revel-Bluetiful-Irish-Cream/dp/B09FTPS93W/ref=sr_1_139?crid=1DSQJ4OD0NNM6&keywords=brooks%2Bshoes&qid=1704720763&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C661&sr=8-139&th=1',
        badges: ['sale'],
        price: 89.95,
        discount: 15,
        sizes: [8,8.5,9.5,10,11,11.5,12,13,14],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ZO4nqpdSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81wjHIYQbzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81hEoInQTKL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Pvq50wAdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81kKn2NW9WL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81fSMkL9E+L._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "THIS MEN'S SHOE IS FOR: For runners looking for a versatile shoe that’s springy on the run, stylish off the run, and comfortable for the long run. Styled to perform, the Revel 5 delivers a springy ride and all-day comfort. We recommend ordering Brooks running shoes 1/2 to one size larger than your dress shoe.",
            "BALANCED, SOFT CUSHIONING: BioMoGo DNA cushioning adapts to your stride, weight, and speed to help protect you by deflecting impact away from your body.",
            "QUICK TRANSITIONS: The arrow-point pattern in the outsole lets your foot move from heel to toe quickly. Our Green Rubber outsole puts a spring in each step.",
            "FRESH LOOK: The updated Fit Knit upper provides versatility and style with a comfortably secure fit.",
            "REFRESHED UPPER: The Engineered Air Mesh and 3D Fit Print on the upper create the right blend of stretch and structure for supreme comfort and stability.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Launch GTS 8',
        amazonLink: 'https://www.amazon.com/Brooks-Launch-Peacoat-Legion-Nightlife/dp/B08LN6YJBB/ref=sr_1_295?crid=1DSQJ4OD0NNM6&keywords=brooks+shoes&qid=1704722078&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks+shoes%2Caps%2C661&sr=8-295',
        badges: ['best seller'],
        price: 110,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['blue','green','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Hvl+eYGRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gUXhPSvKL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XsYiEVIyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91WxoF335QL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Z3FEr0lGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ZgtQ9ywDL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81lcdKFVbYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81rkQG+iNLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bsvgZx4xL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-6qqjwFyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Y-74awXmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81g8cx5AhoL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81RVMWWZvDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81I3PzjGoHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81nxc+BaN+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81snQEjH8nL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81sjPSoZ5BL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81jW1PEd3iL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Canvas",
            "Inner material Manmade",
            "THIS MEN'S SHOE IS FOR: The Launch GTS 8 is for runners who want a lightweight shoe with a fast, fun ride plus trusted GuideRails support. Durable enough for training but light enough for race day, the Launch GTS 8 is designed to keep up on every run. Predecessor: Brooks Ravenna 11.",
            "MAXIMUM SUPPORT: The Launch GTS 8 is the more supportive version of the Launch 8. The integrated GuideRails holistic support system keeps excess movement in check to keep you moving comfortably and providing support beyond just the feet, to the most injury-prone part of a runner’s body: the knees.",
            "LIGHTWEIGHT CUSHIONING: Brooks lightest BioMoGo DNA midsole cushioning provides a fast and supportive ride without the extra weight - perfect for days when you are working on your speed.",
            "BREATHABLE AND SLEEK FIT: The new one-piece mesh upper creates a closer-to-foot-feel that is more breathable than ever before.",
            "QUICK TRANSITIONS: The Midfoot Transition Zone is shaped to go from heel to toe quickly. Newly added blown rubber in the forefoot propels you forward for a faster ride.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Levitate StealthFit GTS 5',
        amazonLink: 'https://www.amazon.com/Brooks-Levitate-Stealthfit-Peacoat-Titan/dp/B0975R3F5S/ref=sr_1_157?crid=1DSQJ4OD0NNM6&keywords=brooks%2Bshoes&qid=1704720778&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C661&sr=8-157&th=1',
        price: 184.14,
        sizes: [8,8.5,9,9.5,10,11.5,12,12.5,14],
        colors: ['darkblue','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-83Ax6xHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81cX8rwECfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8149751Y3EL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81WVTQUMa7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/81P-xBgIdSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/813YFfnKRQL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81uzkfLC4jL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81wC2UDduyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81GMPkfPeyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81I0Hvu-P+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81qUDV1aNXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81UXskBqk+L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "THIS MEN’S SHOE IS FOR: The Levitate StealthFit GTS 5 is a more supportive version of the Levitate StealthFit 5. The integrated GuideRails technology aligns your body in its natural motion path while keeping excess movement in check.",
            "GREAT SUPPORT: The Levitate StealthFit GTS 5 was designed for the runner who seeks a sleek design, closer-to-foot fit, springy returns, and trusted GuideRails support.",
            "ENERGIZED CUSHIONING: The DNA AMP midsole technology provides an outstanding 71% energy return that aids your foot in springing off the ground with every step.",
            "SECURE, ADAPTABLE FIT: New StealthFit construction with integrated tongue and refined fit knit upper, offers improved, adaptable fit, with stretch and compression to move with the foot.",
            "SECURE, SOCK-LIFE FIT: Refined Fit Knit upper designed for a close-to-foot fit, delivers more seamless structure and breathability.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Launch GTS 8',
        amazonLink: 'https://www.amazon.com/Brooks-Launch-Lavender-Astral-Coral/dp/B08LMQLYBT/ref=sr_1_294?crid=1DSQJ4OD0NNM6&keywords=brooks%2Bshoes&qid=1704722078&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C661&sr=8-294&th=1',
        badges: ['best seller'],
        price: 80.95,
        sizes: [5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['beige','lightblue','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'beige',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+Jt0G3XgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81l2sD789pL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81W3eJ0Ni-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81AiSMB1m1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81EUmVADwSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Tvd7sr97L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bwtEwGc8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81m-YxJymHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81jwtKCf+6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81aQMa0r8QL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81pr3h+FSAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81tLEnPOaiL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81G-r-dR-WL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8176MYhMjOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+fLrvRhkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81R7TerH87L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/819S0YgLI2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-dwGdDAvL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Synthetic",
            "THIS WOMEN'S SHOE IS FOR: The Launch GTS 8 is for runners who want a lightweight shoe with a fast, fun ride plus trusted GuideRails support. Durable enough for training but light enough for race day, the Launch GTS 8 is designed to keep up on every run. Predecessor: Brooks Ravenna 11.",
            "MAXIMUM SUPPORT: The Launch GTS 8 is the more supportive version of the Launch 8. The integrated GuideRails holistic support system keeps excess movement in check to keep you moving comfortably and providing support beyond just the feet, to the most injury-prone part of a runner’s body: the knees.",
            "LIGHTWEIGHT CUSHIONING: Brooks lightest BioMoGo DNA midsole cushioning provides a fast and supportive ride without the extra weight - perfect for days when you are working on your speed.",
            "BREATHABLE AND SLEEK FIT: The new one-piece mesh upper creates a closer-to-foot-feel that is more breathable than ever before.",
            "QUICK TRANSITIONS: The Midfoot Transition Zone is shaped to go from heel to toe quickly. Newly added blown rubber in the forefoot propels you forward for a faster ride.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'salomon',
        name: 'Supercross 4',
        amazonLink: 'https://www.amazon.com/Salomon-Supercross-Trail-Running-Shoes/dp/B0B5P8T3RW/ref=sr_1_51?crid=26EBFH0DH5VGN&keywords=salomon+shoes&qid=1704732523&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=salomon+shoes%2Caps%2C180&sr=8-51',
        price: 108.29,
        sizes: [8,8.5,9,9.5,10,10.5,11,11.5,12,13],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61WNNq7sH4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61oJSQ+q0TL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51KWqnPhzHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61slXVTtzZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613yKY9wolL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61oKGRt3lxL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Powerful Grip - Delivering an optimized ground connection thanks to super grippy Contagrip rubber and a lug geometry designed for better mud-shedding and adhesion.",
            "Trail Running Expertise Born from years of trail running expertise, designed for customizable adjustable foothold, protection where needed and optimal durability.",
            "Long Lasting Comfort This shoe combines a soft lining, generous comfy fit and cushiony Fuze Foam in the midsole.",
            "UPPER MATERIAL: Ripstop fabric Woven fabrics, often made of nylon, with reinforcement to resist tearing, ripping and abrasion.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'salomon',
        name: 'Rogg 2 GTX',
        amazonLink: 'https://www.amazon.com/Salomon-Spectur-Running-Shoes-Blazing/dp/B09R7ZFQ8S/ref=sr_1_61?crid=26EBFH0DH5VGN&keywords=salomon%2Bshoes&qid=1704732523&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=salomon%2Bshoes%2Caps%2C180&sr=8-61&th=1',
        price: 292.95,
        sizes: [8,8.5,9,9.5,10,10.5,11],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61A55Pyc2WL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KQOfyk5qL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Tpbc7+mjL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61tSk9UkYGL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Energy Blade-powered propulsion for snappy toe-off and an easier, more fluid stride.",
            "Energy Surge is a lightweight, resilient and soft foam compound that evens out the impact and delivers a smoother foot strike.",
            "Lightweight, responsive foam created by combining EVA and Olefin [OBC] to deliver long-lasting cushion and bouncy energy return.",
            "Energy Blade is a built into the midsole to boost forward propulsion. The joined efforts of the blade, midsole foam and sole geometry make for a snappy, propulsive running machine.",
            "Engineered mesh is a structure that varies the weave to offer more support and durability or flexibility and breathability, according to the specific needs of the shoe.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'salomon',
        name: 'Amphib Bold 2',
        amazonLink: 'https://www.amazon.com/Salomon-Womens-Amphib-Sneaker-Black/dp/B08C7V3FTV/ref=sr_1_67?crid=26EBFH0DH5VGN&keywords=salomon+shoes&qid=1704732817&refinements=p_n_availability%3A2661601011&rnid=2941120011&s=apparel&sprefix=salomon+shoes%2Caps%2C180&sr=1-67',
        price: 115.28,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/718oG5cpdzL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71NGAP20X5L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71khuBoe-DL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71P8P5oFxSL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LB3y2I6fL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Closure type Pull On",
            "AMPHIB BOLD 2 is a versatile shoe for almost any summer kind of summer fun. Collapse the heel to wear it like a slide, or synch the quicklace and take it for a run.",
            "Summer Fun: Looking for a summer sneaker that's ready for water adventures or a water shoe you can run in? The Amphib Bold is what you need. Collapse the heel like a slide or cinch the quicklace & hit the trails.",
            "Unlimited Adventure: Salomon's multi-activity water shoes feature collapsible heels & recycled materials. These versatile water shoes drain & dry quickly—perfect for summer fun on & off the trail.",
            "Time To Play: Whether you are into trail running, hiking, backpacking, or mountaineering, Salomon has shoes and gear for kids, men and women to help you conquer a new distance, personal record, or event",
            "Since 1947 Salomon has created innovative outdoor sports gear. From running and hiking to backpacking, skiing and more, our shoes, boots, bags, apparel and accessories help make any path your own",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'red chili',
        name: 'Fusion',
        amazonLink: "https://www.amazon.com/Red-Chili-Fusion-Climbing-Shoe/dp/B09VDBQ7MK?ref_=ast_sto_dp",
        price: 154.95,
        sizes: [4.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['green'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/515as8d6j-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51YZPvrdjwL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Leather, microfibre",
            "Closure type Hook & Loop",
            "Upper Material: [face fabric synthetic, [tongue] neoprene (3mm)",
            "Lining: none",
            "Closure: hook-and-loop",
            "Midsole: medium",
            "Rubber: RX-1",

        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'red chili',
        name: 'Ventic Air',
        amazonLink: 'https://www.amazon.com/Red-Chili-Ventic-Climbing-Shoe/dp/B083JNW9TV/ref=sr_1_9?crid=9BKDZG1BKK0S&keywords=red+chili+climbing+shoes&qid=1704752765&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=red+chili+climbin%2Caps%2C244&sr=8-9',
        price: 89.9,
        sizes: [5,6,7.5,8,9.5],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/611IpFaJI8L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61iW-FmfdoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61jGGdO5A7L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Hook & Loop",
            "Modern climbing and bouldering shoe for extensive training sessions inside and outside",
            "Knitted upper for excellent breathability and maximum comfort",
            "Two VCR straps and a sock-like design enable simple on and offs and individual foot adjustment",
            "Low pre-tensioning, Vegan climbing shoe",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'red chili',
        name: 'Ventic Air',
        amazonLink: 'https://www.amazon.com/Red-Chili-Ventic-Lace-Climbing/dp/B09V4NT2VY/ref=sr_1_10?crid=9BKDZG1BKK0S&keywords=red+chili+climbing+shoes&qid=1704752765&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=red+chili+climbin%2Caps%2C244&sr=8-10',
        price: 111.99,
        sizes: [7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Y08DKpmXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51E1XmnWOtL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Polyester",
            "Closure type Pull On",
            "A milestone in sustainability! If you are after resource-conserving climbing shoes, then look no further than the VENTIC AIR LACE",
            "All of the textile elements of the upper material, i.e. the fabric, laces, lace loops, and even the pull-on loops, are recycled from post-consumer polyester and produced in line with the Global Recycled Standard (GRS)",
            "However, Red Chili's efforts to protect the environment are not at the expense of the shoeâ€s performance! Constructed using the VENTIC AIRâ€s tried-and-tested rand, it promises outstanding comfort and can even be worn for longer periods-for lengthy gym sessions or multi-pitch climbs",
            "The knitted upper ensures excellent breathability while zones with varying degrees of stretch enable a precise fit",
            "The RX-2 TECHGRIP sole offers good edge stability and provides support when standing on small footholds",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'red chili',
        name: 'Voltage',
        amazonLink: 'https://www.amazon.com/Red-Chili-Charger-Climbing-Shoes/dp/B00KGT5SEI/ref=sr_1_12?crid=9BKDZG1BKK0S&keywords=red%2Bchili%2Bclimbing%2Bshoes&qid=1704752765&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=red%2Bchili%2Bclimbin%2Caps%2C244&sr=8-12&th=1',
        price: 99,
        sizes: [5.5,6,6.5,7,7.5,8],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619iEue4N2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81fYRugt0FL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Climbing rubber",
            "Outer material Microfiber, leather footbed, neoprene, climbing rubber",
            "Material:Outer Material:TextileInsole and lining:TextileOutsole:other material.",
            "Parts of animal origin:no.",
            "style: Climb",
            "outer material: Microfiber, leather footbed, neoprene, climbing rubber",
            "closure type: Hook & Loop",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'under armour',
        name: 'HOVR Machina 3',
        amazonLink: 'https://www.amazon.com/Under-Armour-Machina-Running-Phosphor/dp/B09MVGGGZG/ref=sr_1_1?crid=3UKWK59ERJQJI&keywords=ua%2Bhovr&qid=1704761601&sprefix=UA%2BHO%2Caps%2C216&sr=8-1&th=1',
        price: 209.99,
        sizes: [8,8.5,9,10,11,12.5],
        colors: ['red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/611H42KcFKL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-h7s0Jk7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/715l+-ggDVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71re0QU3ykL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/713Ag9-H48L._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Neutral Road Running Shoes",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'under armour',
        name: "HOVR Sonic 5",
        amazonLink: 'https://www.amazon.com/Under-Armour-Running-Aurora-Purple/dp/B09LSB4JVK/ref=sr_1_40?crid=3UKWK59ERJQJI&keywords=ua%2Bhovr&qid=1704761611&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=UA%2BHO%2Caps%2C216&sr=8-40&th=1&psc=1',
        badges: ['best seller'],
        price: 75.7,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5],
        colors: ['grey','teal','darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61fPojb-GLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616Qk3AJOOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61b-vwXkEvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hrANqUCkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/619091pxryL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-8LG42LuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/611FvjCSkPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hcSFGB6oL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Rofzzk38L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nQW-uAVfL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61FxcooMHOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61IwdLqgdyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ydBePH9FL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61zGBmnPi2L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nP4mF8uBL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "CONNECTS TO UA MAPMYRUN: tracks & analyzes your running metrics to help make you a better runner",
            "Engineered spacer upper with a minimalist design for breathability, durability & lightweight containment",
            "External TPU heel wrap provides lightweight structure & support for added lockdown",
            "Molded EVA sockliner provides added comfort, resiliency & cushioning for high-mileage performance",
            "Responsive UA HOVR cushioning reduces impact, returns energy, and helps propel you forward",
            "Carbon rubber in heel & toe-off for added traction & durability & blown rubber forefoot for energy return",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'under armour',
        name: 'UA HOVR Phantom 3',
        amazonLink: 'https://www.amazon.com/Under-Armour-Phantom-Running-Shoes/dp/B0B9GSTJKJ/ref=sr_1_41?crid=3UKWK59ERJQJI&keywords=ua+hovr&qid=1704761611&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=UA+HO%2Caps%2C216&sr=8-41',
        price: 140,
        sizes: [8,8.5,9,9.5,10,12.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61oLyXIlJYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61RffU3YNpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61JChs5R7bL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71iUX1nYp4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61xUeqlP8IL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: 'UA HOVR™ Machina',
        amazonLink: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61xUeqlP8IL._AC_SY695_.jpg',
        price: 75,
        sizes: [8,8.5,9,9.5,10,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71i6qGMrFeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71vatZx4OHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/7125YLFhkmL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Mandala',
        amazonLink: 'https://www.amazon.com/Sportiva-Mandala-Performance-No-Edge-Climbing/dp/B0CRJVK79W/ref=sr_1_182?crid=284BAWNIJOMWO&keywords=climbing+shoes&qid=1704807642&refinements=p_n_availability%3A2661601011%2Cp_89%3ABLACK+DIAMOND%7CLa+Sportiva%7CSCARPA&rnid=2528832011&s=apparel&sprefix=climbing+shoes%2Caps%2C192&sr=1-182',
        price: 168.95,
        sizes: [8.5,9,9.5,10,11.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ebV96X8CL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Y9hw4c98L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ISOJxRSIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71d6NEb0XNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71NH4PxurLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71scdsD1NAL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Outer material Polyester",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Futura',
        amazonLink: 'https://www.amazon.com/Sportiva-No-Edge-Comfort-Performance-Climbing/dp/B0CRJSLGL3/ref=sr_1_194?crid=284BAWNIJOMWO&keywords=climbing+shoes&qid=1704807660&refinements=p_n_availability%3A2661601011%2Cp_89%3ABLACK+DIAMOND%7CLa+Sportiva%7CSCARPA&rnid=2528832011&s=apparel&sprefix=climbing+shoes%2Caps%2C192&sr=1-194',
        price: 215.52,
        sizes: [9,9.5,10,10.5,11,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81l9Ho2Q71L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81IDr205ZZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71bVTtQbyUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81VJvLixTCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Ft-y2lwsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/718jFK0jJcL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Outer material Polyester",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Generator V',
        amazonLink: 'https://www.amazon.com/SCARPA-Generator-Climbing-Shoes-Sport/dp/B0CR5B38B8/ref=sr_1_195?crid=284BAWNIJOMWO&keywords=climbing+shoes&qid=1704807660&refinements=p_n_availability%3A2661601011%2Cp_89%3ABLACK+DIAMOND%7CLa+Sportiva%7CSCARPA&rnid=2528832011&s=apparel&sprefix=climbing+shoes%2Caps%2C192&sr=1-195',
        price: 178.95,
        sizes: [5.5,6,6.5,7,8,9.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714fHFvuwSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71htC8qPcgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71OWfR+Jt4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71h0Qbu3vxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wku0Ir1qL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61VFU5CMZDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71430ctJmXL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "EU Size: 46 - US Size: 13-13.5 Women/12-12.5 Men | Generates Tradical | Climbing shoe blends comfort with the performance that challenging trad routes, multi-pitches, and some sport climbs demand.",
            "Moderate Downturn | Not as downturned as aggressive shoes, nor as flat as comfy shoes, this shoe strikes the perfect balance.",
            "Vibram XS Edge | Vibram’s firmer rubber compound ensures long-lasting edging quality.",
            "Eco Suede | Undyed, stretchy leather upper with hook-and-loop straps for quicker on-and-off.",
            "Tech Specs | [Weight] (½ Pair, 40.5) 10.9oz; [Upper] Eco Suede (2mm); Midsole: Dynamic Flexan; [Outsole] Vibram XS Edge (4mm); [Last] FG – Moderately Downturned, Moderately Asymmetric; [Origin] Italy",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'nike',
        name: 'Air Zoom Superrep',
        amazonLink: 'https://www.amazon.com/Nike-Womens-Superrep-Trainers-Sneakers/dp/B0BNJJYJPV/ref=sr_1_6?crid=3H9YTS55C8UEX&keywords=women+cross+training&qid=1704810841&refinements=p_n_feature_eighteen_browse-bin%3A14630392011%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=women+cross+training%2Caps%2C267&sr=1-6',
        price: 184.99,
        sizes: [5,5.5,6,6.5,7.5,8,8.5,9,9.5,10,10.5,11,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hQVy8I4VL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81yCOjMk3VL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71g1AJy0ZbL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ZDx58cw4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81M2WEdFIBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81I8VDYNlVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71i11zdBEGL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Shaft height Ankle Strap",
            "Outer material Synthetic",
            "Aerobic shoes",
            "Cushioned",
            "Breathtaking",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'nike',
        name: 'Pegasus Trail 4',
        amazonLink: 'https://www.amazon.com/Nike-Running-us_Footwear_Size_System-Numeric-Numeric_10/dp/B0BFF9J41V/ref=sr_1_7?crid=11AQ4I9KQWOO0&keywords=nike+pegasus+trail+4+gore-tex&qid=1704811890&sprefix=Nike+Pegasus+Trail+4%2Caps%2C203&sr=8-7',
        badges: ['best seller'],
        price: 169.99,
        sizes: [7.5,8,8.5,9,9.5,10],
        colors: ['black'],
        images:[
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61U2EWSAtOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61iPBtO3VZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51992LFfejL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71WNDN5ptGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81B1x4TpRHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81r4gt-z55L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qZ25qd2IL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Shaft height Ankle",
            "Outer material Synthetic",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'new balance',
        name: '715 V4',
        amazonLink: 'https://www.amazon.com/New-Balance-Womens-Cross-Trainer/dp/B08PCCK85N/ref=sr_1_27?keywords=women%2Bcross%2Btraining&qid=1704815640&refinements=p_n_availability%3A2661601011%2Cp_89%3ANew%2BBalance&rnid=7141123011&s=apparel&sr=1-27&th=1',
        badges:['best seller'],
        price: 91.67,
        sizes: [5,6,8,9.5],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uWIYA3H8L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GdGNVO9TL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51rq96-XrKL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51DCR3Q6tEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617B+inr+pL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pyoMhVkDL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Water resistance level Not Water Resistant",
            "No-sew overlays",
            "CUSH+ midsole",
            "Synthetic construction offers a lightweight feel built for all-day comfort",
            "NB Memory Sole Comfort Insert offers plush feel with every step",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'nike',
        name: 'Pegasus Trail',
        amazonLink: 'https://www.amazon.com/Nike-React-Pegasus-Sneaker-Spring/dp/B0BWPHVJ6Y/ref=sr_1_1?crid=3IWFGL030IOR1&keywords=Nike%2BPegasus%2BTrail%2B4&qid=1704811598&sprefix=nike%2Bpegasus%2Btrail%2B4%2Caps%2C273&sr=8-1&th=1',
        badges: ['best seller'],
        price: 184.07,
        sizes: [8,9.5,10,10.5,11,12,12.5,13],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51im9ztVaqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/514FLibIkDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61mftzsUE6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+Dhczw8ZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61RvZkHHp3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51cqQ72TBnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yKYWvPyRL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Shaft height Ankle Strap",
            "Outer material Synthetic",
            "Inner material Tissue",
            "Tongue on the heel to wear the shoe easily",
            "Nike React Technology",
            "Rubber tread",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'nike',
        name: 'Pegasus Trail',
        amazonLink: 'https://www.amazon.com/Nike-React-Pegasus-Sneaker-Spring/dp/B0BWPHVJ6Y/ref=sr_1_1?crid=3IWFGL030IOR1&keywords=Nike%2BPegasus%2BTrail%2B4&qid=1704811598&sprefix=nike%2Bpegasus%2Btrail%2B4%2Caps%2C273&sr=8-1&th=1',
        badges: ['best seller'],
        price: 184.07,
        sizes: [8,9.5,10,10.5,11,12,12.5,13],
        colors: ['green'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71p3LJc1nqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71fhAACSbyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71l4OY-BokL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71AzxSz5lQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/812q-Z9UL4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61EeayCFXyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ehL9qAyhL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Shaft height Ankle Strap",
            "Outer material Synthetic",
            "Inner material Tissue",
            "Tongue on the heel to wear the shoe easily",
            "Nike React Technology",
            "Rubber tread",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'nike',
        name: 'Pegasus',
        amazonLink: 'https://www.amazon.com/Nike-Pegasus-Trail-Running-Ck4305-001/dp/B08PKHXY3N/ref=sr_1_13?crid=3IWFGL030IOR1&keywords=Nike%2BPegasus%2BTrail%2B4&qid=1704811598&sprefix=nike%2Bpegasus%2Btrail%2B4%2Caps%2C273&sr=8-13&th=1',
        badges: ['best seller'],
        price: 142,
        sizes: [7,7.5,8,9,9.5,10,10.5,11,11.5,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Th-IKBQyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61VkGuuXKtL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41zefAo2TjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61lIeVnDWLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61IOuJlXvUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Jb6WpA2LL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Mesh",
            "Nike, air, swoosh",
            "Breathable and long-lasting comfort with mesh over the forefoot that improves ventilation",
            "Anti-clog coating on the sole prevents the earth from sticking; Nike React foam promotes a soft and flowing runtime",
            "Additional cushioning in the heel area; Mesh forefoot improves breathability",
        ]
    },



    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'nike',
        name: 'Pegasus',
        amazonLink: 'https://www.amazon.com/NIKE-Pegasus-Trail-Womens-DA8698/dp/B09Q9B4C2S/ref=sr_1_29?crid=3IWFGL030IOR1&keywords=Nike+Pegasus+Trail+4&qid=1704811598&sprefix=nike+pegasus+trail+4%2Caps%2C273&sr=8-29',
        badges: ['sale'],
        price: 102.34,
        discount: 19,
        sizes: [8],
        colors: ['teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61gFuq5oWLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61J89tHk6iL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51kz6yuU6vL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61fmVx+-RzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71df7Ui8tbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Pw+KeWPpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Y81-ZToTL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Hand Wash Only",
            "Sole material Rubber",
            "Closure type Drawstring",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'puma',
        name: 'Softride Enzo Evo',
        amazonLink: 'https://www.amazon.com/Puma-Womens-Softride-Metallic-Shoes/dp/B0BN795PDN/ref=sr_1_58?keywords=women%2Bcross%2Btraining&qid=1704813306&refinements=p_89%3APUMA%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sr=1-58&th=1',
        badges: ['sale'],
        price: 74.95,
        discount: 15,
        sizes: [6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/511iguNQSpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51y2BeYjVIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51C+91YpOjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/513N-5LVXfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51l6+JwiTvL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Fabric",
            "Origin Made in USA and Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "Textile upper",
            "Lace up closure for secure fit",
            "Jewel piece on the midsole",
            "Rubber outsole",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'puma',
        name: 'Enzo 2',
        amazonLink: 'https://www.amazon.com/PUMA-Enzo-Uncaged-Black-Sunblaze/dp/B0975RW4SX/ref=sr_1_156?keywords=women%2Bcross%2Btraining&qid=1704813349&refinements=p_89%3APUMA%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sr=1-156&th=1',
        price: 79,
        sizes: [7.5,8.5,10,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51qg-biyQiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61v6FqObGQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51FNJvNFfkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51VeMn-iJbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41uCTyi02nL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Fabric",
            "Care instructions Machine Wash",
            "Origin Made in USA and Imported",
            "Sole material Rubber",
            "Mesh upper",
            "Lace up closure",
            "TPU mould on the side quarter panel",
            "Rubber outsole",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'puma',
        name: 'Pure Xt',
        amazonLink: 'https://www.amazon.com/PUMA-Womens-Training-Sneakers-Shoes/dp/B0BHV4T1DK/ref=sr_1_310?keywords=women%2Bcross%2Btraining&qid=1704813397&refinements=p_89%3APUMA%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sr=1-310&th=1',
        badges: ['sale'],
        price: 70.95,
        discount: 50,
        sizes: [8,9],
        colors: ['red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51f9m4Kbm5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51jPq66oarL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Kz8paV0sL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51I7g0nXLEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51CCx6UBccL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Fabric",
            "Care instructions Machine Wash",
            "Origin Made in USA and Imported",
            "Sole material Rubber",
            "Textile upper",
            "Lace closure",
            "Pull tab for easy on/off",
            "Cushioned midsole",
            "Rubber outsole",
        ]
    },



    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'adidas',
        name: 'Crazytrain Elite',
        amazonLink: 'https://www.amazon.com/adidas-Crazytrain-Elite-Training-Mystery/dp/B07MVJ73TS/ref=sr_1_56?keywords=women+cross+training&qid=1704815711&refinements=p_n_availability%3A2661601011%2Cp_89%3Aadidas&rnid=2528832011&s=apparel&sr=1-56',
        price: 139.99,
        sizes: [6.5],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/711A9UfP1ZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Nh4b1v7UL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71PxAwmbtwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71K0gEOvZ3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71830p5HxOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BGNEriBJL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'altra',
        name: 'Provision 3.0',
        amazonLink: 'https://www.amazon.com/Altra-Provision-Womens-Running-Silver/dp/B071JCMJDC/ref=sr_1_2?crid=2R4V8NWW8NP7J&keywords=women%2Bcross%2Btraining%2Bshoes&qid=1704837247&refinements=p_n_availability%3A2661601011%2Cp_89%3AALTRA&rnid=2528832011&s=apparel&sprefix=women%2Bcross%2Btrain%2Caps%2C236&sr=1-2&th=1',
        price: 89.23,
        sizes: [6.5,7,7.5],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ltV6UZrFL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91qdA5Un5lL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Y-552vAHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71l+Eht6btL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81KOtFPyCiL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8109kSUk6NL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91eIQtRrVCL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic/Leather",
            "Origin Imported",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "DESIGNED TO IMPROVE: Running Form, Assist Fallen Arches, Excessive Pronation",
            "PLATFORM: Fully cushioned Zero Drop platform and FootShape toe box. CUSHIONING: Moderate. STACK HEIGHT: 25mm. LAST: SL1-W.",
            "MIDSOLE: Ultralight EVA with A-Bound Tp Layer, StabiliPod Technology, and Varus Wedge Technology. OUTSOLE: FootPod Outsole with StabiliPod Technology. INSOLE: 6mm Sculpted Footbed. UPPER: Quick-Dry Air Mesh.",
            "OTHER FEATURES: Natural Ride System, GuideRail; All-new Midsole and Upper.",
            "IDEAL USES: Road Running, Walking, Light Trail Running, Cross-Training. WEIGHT: 8.5oz.",
        ]
    },



    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'puma',
        name: 'Pwr Xx Nitro',
        amazonLink: 'https://www.amazon.com/PUMA-Womens-Nitro-Training-Sneakers/dp/B0CLCD4XGJ/ref=sr_1_22?crid=2R4V8NWW8NP7J&keywords=women%2Bcross%2Btraining%2Bshoes&qid=1704837603&refinements=p_n_availability%3A2661601011%2Cp_89%3APUMA&rnid=2528832011&s=apparel&sprefix=women%2Bcross%2Btrain%2Caps%2C236&sr=1-22&th=1',
        price: 59.95,
        sizes: [5.5,6.5,7,7.5,8,8.5,9,9.5],
        colors: ['red'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51BLO5mVpwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Rjj+wvRrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51i4aeJMdtL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/517xEzqmoPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51KEuJyh0eL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Fabric",
            "Care instructions Machine Wash",
            "Origin Made in USA and Imported",
            "Sole materialRubber",
            "Lightweight mesh upper",
            "Lace up closure",
            "Cushioned midsole",
            "Rubber outsole",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'puma',
        name: 'Softride Enzo',
        amazonLink: 'https://www.amazon.com/PUMA-Softride-Ombre-Running-Sneakers/dp/B0BHV3XRM2/ref=sr_1_16?crid=1LMTZCE5ZO4YW&keywords=PUMA+Softride+Stakd+Speckle&qid=1704837825&sprefix=puma+softride+stakd+speckle%2Caps%2C180&sr=8-16',
        price: 49.95,
        sizes: [9.5,10,10.5,14],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/514UwFJMgmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61DsavaOJ5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/514jeQ2HwnL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51kbeKi-OsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41JnRjYEaLL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Fabric",
            "Care instructions Machine Wash",
            "Origin Made in USA and Imported",
            "Sole material Rubber",
            "Mesh upper",
            "Lace up closure",
            "CMEVA midsole",
            "Rubber outsole",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'puma',
        name: 'Weave XT',
        amazonLink: 'https://www.amazon.com/Womens-Weave-Training-Sneakers-Casual/dp/B07VY4R29V/ref=sr_1_247?crid=2R4V8NWW8NP7J&keywords=women+cross+training+shoes&qid=1704838541&refinements=p_n_availability%3A2661601011%2Cp_89%3APUMA&rnid=2528832011&s=apparel&sprefix=women+cross+train%2Caps%2C236&sr=1-247',
        price: 59.95,
        sizes: [7.5],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61+8aj36BML._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Q5KlDu9kL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717YfU1dVDL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613q3mV8fmL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'puma',
        name: 'Ignite Flash Evoknit',
        amazonLink: 'https://www.amazon.com/PUMA-Evoknit-Stripped-Sneaker-Black-Quiet/dp/B0752FLSSS/ref=sr_1_255?crid=2R4V8NWW8NP7J&keywords=women+cross+training+shoes&qid=1704838541&refinements=p_n_availability%3A2661601011%2Cp_89%3APUMA&rnid=2528832011&s=apparel&sprefix=women+cross+train%2Caps%2C236&sr=1-255',
        badges: ['best seller'],
        price: 89.99,
        sizes: [8,8.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XUStOKyvL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81kn8ZBJa0L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81BEG1fROuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71uXoqop9NL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Br42IlO-L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71cDD5GuWJL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81clCz-fk5L._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Textile",
            "Origin Imported",
            "Sole material Man Made",
            "Shaft height Low-top",
            "FOREVER BETTER: PUMA is constantly pushing to be better than we were yesterday.",
            "FOREVER BETTER is our commitment to reduce our environmental impact and work together towards a sustainable future.",
            "PUMA brand logo",
            "Ignite",
            "Run-Train Performance Sneaker",
        ]
    },



    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Glycerin 20',
        amazonLink: 'https://www.amazon.com/Brooks-Glycerin-Womens-Neutral-Running/dp/B0BYTLDWCZ/ref=sr_1_9?crid=3RP39YMHOV57X&keywords=brooks%2Bshoes&qid=1704901104&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C245&sr=8-9&th=1',
        badges: ['best seller'],
        price: 173.97,
        sizes: [5,5.5,6.5,7,7.5,8,8.5,9,9.5,11,11.5,12],
        colors: ['lightblue','white','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81yiCYiim5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81P3g-TgwvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/814Kmaj59-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/816l6FrqroL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81rcMNFLQyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Fo2sL+T6L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81HofKWMVRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818VN+2UJ1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81WxUll-UIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81yL+RZc+-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81zWPprtMsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81WplPlZWTL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81p0BpdVToL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81jDch+4wlL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81lIZz1eZfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81z8Ng1EhjL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81iH9f7Z0iL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/811V9uM+mDL._AC_SY695_.jpg',
                ]
            },
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Manmade",
            "THIS WOMEN'S SHOE IS FOR: The Glycerin 20 is perfect for runners who think there is no such thing as too much cushioning. The plush internal fit and soft transitions keep runners surrounded by supreme softness. This Brooks Glycerin 20 is a certified PDAC A5500 Diabetic shoe and has been granted the APMA Seal of Acceptance. We recommend ordering Brooks running shoes 1/2 to one size larger than your dress shoe.",
            "NEUTRAL SUPPORT: Provides neutral support while offering the maximum amount of cushioning. Ideal for road running, cross training, the gym or wherever you might want to take them! Predecessor: Glycerin 19. Look for the Brooks Glycerin GTS 20 for the same style with added Support.",
            "SUPREME SOFTNESS: The ultimate in softness and supreme comfort, designed for runners who want pillowy soft cushioning. The Glycerin 20 with nitrogen-infused DNA LOFT v3 offers the softest cushioning optimized to be lightweight, responsive, and durable.",
            "PLUSH FIT: The plush feel of an internal stretch bootie surrounds your foot and moves and expands with your stride. The engineered breathable mesh upper provides a secure fit while comfortably keeping your foot in place.",
            "SMOOTH TRANSITIONS: Redesigned midsole and outsole offer a widened platform for smoother and even easier transitions.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'brooks',
        name: 'Cascadia 16 GTX',
        amazonLink: 'https://www.amazon.com/Brooks-Cascadia-Black-Blackened-Pearl/dp/B097F3J6GX/ref=sr_1_25?crid=3RP39YMHOV57X&keywords=brooks+shoes&qid=1704901104&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks+shoes%2Caps%2C245&sr=8-25',
        badges: ['new'],
        price: 109.95,
        sizes: [6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81eLjVH1WKL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81YiBWL5eOL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81LOrtvArRL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81jxWHj+bUL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81pZA+wgsZL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71BCWY020lL._AC_SX679_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Fabric-and-synthetic",
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "THIS WOMEN'S SHOE IS FOR: Trail Runners who want to explore and feel protected on changing terrain. This shoe is made to adapt quickly so runners stay comfortable and stable.",
            "SUPPORT IN ALL TERRAIN: Release grooves in the midsole allow for enhanced adaptability on rough terrain, while the Ballistic Rock Shield now includes vertical grooves to provide side-to-side adaptability. Updated construction allows the shoe to adapt, flex, and protect the foot in all terrains.",
            "CUSHION AND COMFORT: New DNA LOFT v2 Technology provides 10% softer and 20% lighter cushioning than previous models. New 2mm of foam in the midsole gives added comfort.",
            "HIGH PERFORMANCE IN ALL ENVIRONMENTS: TrailTack rubber outsole provides wet-dry traction, drainage ports allow water to escape quickly, and gusset keeps out sand and small debris, allowing for high performance on all trails and conditions.",
            "WATERPROOF PROTECTION: Waterproof GORE-TEX Invisible Fit membrane is bonded directly to the upper for a lighter, more flexible protective fit.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'brooks',
        name: 'Cascadia 17 GTX',
        badges: ['new'],
        amazonLink: 'https://www.amazon.com/Brooks-Cascadia-Waterproof-Trail-Running/dp/B0BMT5Z4ZQ/ref=sr_1_50?crid=3RP39YMHOV57X&keywords=brooks+shoes&qid=1704901129&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks+shoes%2Caps%2C245&sr=8-50',
        price: 169.95,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Bk3LTVZQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/810Lp+Om4YL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81rH9bswyNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81JMEsj4yoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91VnfKDCCWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81F8w2IAtuL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "THIS MEN’S SHOE IS FOR: The Cascadia 17 GTX is for runners who want to explore any trail and feel confident across all terrain with added GORE-TEX waterproof protection.",
            "SOFT CUSHIONING: DNA LOFT v2 midsole technology provides soft cushioning over rugged terrain to deliver comfort on long trail runs.",
            "ENHANCED TRACTION: New TrailTack Green provides versatile traction on wet and dry surfaces for added stability over uneven terrain and is constructed from 25% recycled content.",
            "ADAPTABLE STABILITY: Our new Trail Adapt System utilizes an integrated midsole, rock plate, and zonal outsole pods to offer enhanced control and a stable ride over any terrain.",
            "WATERPROOF PROTECTION: Waterproof GORE-TEX Invisible Fit membrane is bonded directly to the upper for a lighter, more flexible protective fit.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'brooks',
        name: 'Catamount 2',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Catamount-Trail-Running/dp/B0BJ4B2N2B/ref=sr_1_52_mod_primary_new?crid=3RP39YMHOV57X&keywords=brooks%2Bshoes&qid=1704901129&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C245&sr=8-52&th=1',
        price: 109.95,
        sizes: [7,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['red','blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'red',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81pVA9axMIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81zBIb1x8eL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81y3tqbukRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Bx5eHEs5L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81b2yQtILBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81tFnpwUbfL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81hZYP7MwML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81z3AaDmGYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81HRhD0lAAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81zq-J9Z5dL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/817wDSAujSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81o2htwtw7L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "THIS MEN'S SHOE IS FOR: Trail Runners who aim to conquer the trail. With super light and responsive cushioning plus a high-traction outsole, the Catamount 2 is built to go faster and farther on the trails.",
            "PROPULSION PLATE: Push the pace with the new SkyVault propulsion plate that’s engineered to help you run uphill efficiently while doubling as a rock shield.",
            "DURABLE COMFORT: Dual-sided air mesh features an abrasion-resistant and hydrophobic TPEE outer layer. DNA FLASH midsole crafted from nitrogen-infused compound delivers the perfect blend of responsiveness and adaptive cushioning for a fast ride.",
            "HIGH PERFORMANCE IN ALL ENVIRONMENTS: TPU Mud Guard provides protection from trail debris while drainage slits release water so feet can dry more quickly. TrailTack rubber outsole offers traction on both wet and dry surfaces.",
            "LOCKED-IN FIT: Strong yet flexible internal reinforcements around the midfoot, with a half bootie tongue construction, keep your foot locked in on uneven terrain and changing elevations.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Bedlam',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Bedlam-Blue-Navy/dp/B07D3Z6X65/ref=sr_1_105?crid=3RP39YMHOV57X&keywords=brooks%2Bshoes&qid=1704901181&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C245&sr=8-105&th=1',
        badges: ['best seller'],
        price: 162.93,
        sizes: [8,9,10,11,12],
        colors: ['darkblue','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81kgrTGBDsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XTLRga2kL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81KIiVe3D0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81jXQQ73WkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XTkEqcOIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bS89S668L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91ZAVGJZSDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91hu29rLKWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91lcjfb5aiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81xWwwb6WtL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81XGdD-DiBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81zopYlxqfL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructionsMachine Wash",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Inner material Manmade",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'brooks',
        name: 'Divide 4',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Divide-Trail-Running/dp/B0BZJSN4C1/ref=sr_1_99?crid=3RP39YMHOV57X&keywords=brooks%2Bshoes&qid=1704901181&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C245&sr=8-99&th=1',
        price: 99.95,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['darkblue','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81YQacJzM-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81CCbLVNT3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71eoNYjq9IL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71gEhM8FUCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tUDtUajpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hO4x26eCL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81WlsjpRLML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/916B9g6qfXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81nrPrsPrHL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81CR7mhOACL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ADB+GglrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Rdh5KpbUL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Shaft height Ankle Strap",
            "THIS MENS SHOE IS FOR: The Divide 4 provides road-to-trail adaptability thanks to a familiar road shoe-inspired fit, featuring DNA LOFT midsole technology for impact absorption and smooth transitions, while the TrailTack rubber outsoles provide traction over trail terrain.",
            "ROAD TO TRAIL TRACTION: DNA LOFT cushioning provides a soft, smooth ride from the roads to the trails while high surface area lugs provide necessary grip for offroad light trails.",
            "SECURE FIT: Road-shoe inspired fit equipped with a tongue gusset, features an updated mesh upper that enhances breathability while a TPU mudguard and toe cap offer protection from gravel, sticks and other trail debris.",
            "TRUSTED TRACTION: Feel confident as you venture off road, thanks to the premium wet-dry traction of our trusted TrailTack rubber outsole.",
            "RECYCLED MATERIAL CONSTUCTION: Made with recycled materials equivalent to 7 plastic water bottles.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Levitate GTS 6',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Levitate-Supportive-Running/dp/B0BJ4QF3J4/ref=sr_1_54?crid=3RP39YMHOV57X&keywords=brooks%2Bshoes&qid=1704901129&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C245&sr=8-54&th=1',
        badges: ['best seller'],
        price: 119.95,
        sizes: [7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['black','blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/814wnAPCrqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Y24R8fJ8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bKMInc-eL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81FGwEJVNWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/813PQPxUlcL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81eJZ9oYzFL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91n1BoqZy7L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91t96XJ+gDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8136POiJzSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91H8g+2MUeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81p0By4kU3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91Jmvq3NbfL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Synthetic",
            "Outer material Mesh",
            "THIS MEN’S SHOE IS FOR: The Levitate GTS 6 offers the energizing power of our newly updated DNA AMP technology plus integrated added support from the GuideRail holistic support system. Infused with our DNA AMP v2 the Levitate GTS 6 is 10% lighter while delivering runners with our highest energy return, made for fast transitions and a supremely comfortable ride. Now constructed with recycled materials equivalent to 7 plastic water bottles.",
            "ADDED SUPPORT: The Levitate 6 GTS is the more supportive version of the Levitate 6. The integrated GuideRail holistic support system keeps excess movement in check to keep you moving comfortably.",
            "SPRINGY, SOFT CUSHIONING: The new DNA AMP v2 foam is now 10% lighter, and we packed even more",
            "of it into the midsole for added comfort in every stride.",
            "OPTIMAL FIT: Engineered creel mesh material in the upper and a wider midfoot for smooth transitions join forces to provide enhanced breathability and a flexible fit that accommodates the foot.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'brooks',
        name: 'Catamount',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Catamount-Running-Shoe/dp/B08QV963MB/ref=sr_1_74?crid=3RP39YMHOV57X&keywords=brooks%2Bshoes&qid=1704901129&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C245&sr=8-74&th=1',
        badges: ['best seller'],
        price: 149.95,
        sizes: [7,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5],
        colors: ['darkblue','black','teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Rimwut9GL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/811TjUwN5bL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81C8ocux3kL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81m3mdTDWTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bRsJtbhQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Ud1QK+1lL._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81MpJYZHUsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+qD3VRoOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81GudSa0wBL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81OuvfrVK8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81PaC+Y+JkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81zY3Z-ds6L._AC_SY695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91r+CRnhO6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ItEEJz8iL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91Gtu9HMOdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81r0PNRlPtL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ZgTd5xrbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81vhPFmeqsL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Suede",
            "Outer material Suede",
            "Closure type Lace-Up",
            "THIS MEN'S SHOE IS FOR: Trail Runners who aim to conquer the trail. With super light and responsive cushioning plus a high-traction outsole, the Catamount is built to go faster and farther on the trails.",
            "CUSHION AND COMFORT: New DNA FLASH midsole compound is nitrogen infused to offer ultralight cushioning plus adaptive energy return.",
            "TRACTION AND SUPPORT: Feel confident on any terrain, thanks to the extra traction of our TrailTack sticky rubber outsole and our updated Ballistic Rock Shield which protects your foot from roots and rocks without feeling stiff underfoot.",
            "HIGH PERFORMANCE IN ALL ENVIRONMENTS: TPU Mud Guard provides protection from trail debris while drainage slits release water so feet can dry more quickly. The suede internal reinforcement keeps your foot locked down while keeping debris out.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Levitate 6',
        amazonLink: 'https://www.amazon.com/Brooks-Womens-Levitate-Neutral-Running/dp/B0BJ4CJGQS/ref=sr_1_56?crid=3RP39YMHOV57X&keywords=brooks%2Bshoes&qid=1704901129&refinements=p_72%3A2661618011%2Cp_n_availability%3A2661601011&rnid=2661599011&sprefix=brooks%2Bshoes%2Caps%2C245&sr=8-56&th=1',
        badges: ['best seller'],
        price: 119.95,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['white','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81snfiCsgrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/817feNzLbDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818vFgnnlqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/710v-feilgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/810Zanx4S1L._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81SYu0E-diL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81NZWOh-pqL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81tkgiFLmsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81VEAWJopaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81FZiiinySL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81WIB75rTeL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Manmade",
            "THIS WOMEN’S SHOE IS FOR: The Levitate 6 offers the energizing power of our newly updated DNA AMP technology. Introducing our DNA AMP v2 which is 10% lighter while delivering runners with our highest energy return, made for fast transitions and a supremely comfortable ride. Now constructed with recycled materials equivalent to 7 plastic water bottles. Predecessor: Levitate 5",
            "NEUTRAL SUPPORT: The Levitate 6 provides the perfect blend of neutral support, springy cushioning, and high energy return to comfortably propel you forward mile after mile.",
            "SPRINGY, SOFT CUSHIONING: The new DNA AMP v2 foam is now 10% lighter, and we packed even more of it into the midsole for added comfort in every stride.",
            "OPTIMAL FIT: Engineered creel mesh material in the upper and a wider midfoot for smooth transitions join forces to provide enhanced breathability and a flexible fit that accommodates the foot.",
            "QUICK TRANSITIONS: The arrow-point pattern in the outsole lets your foot move quickly from heel to toe, enhancing the shoe’s springy feel.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Launch 8',
        amazonLink: 'https://www.amazon.com/Brooks-Launch-Black-Ebony-Blue/dp/B08LMVCD27/ref=sr_1_146?crid=3KIA3SMN05KP4&dib=eyJ2IjoiMSJ9.u_3Tnv54MRkO4v-I8gk3YBUr2rmQgHwfD4nVY86yO6PD6S9vwousqGmzjbLIkrYNZunyIBNUARomjUA37cMDzw.klo4csTwBQGaCIqR686UT8NWPKelVY3n19iW68tj27A&dib_tag=se&keywords=brooks+shoes&qid=1704924688&refinements=p_72%3A2661618011&rnid=2661617011&sprefix=brooks+shoes%2Caps%2C244&sr=8-146',
        badges: ['sale'],
        price: 100,
        discount: 6,
        sizes: [9],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81WSeqw3kSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81mlZg17IML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81lhB4YnsgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81sGjYv+xZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-AlEd5yLL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81SJlq9A+tL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "THIS WOMEN'S SHOE IS FOR: The Launch 8 is for neutral runners who want a lightweight shoe with a fast, fun, ride. Durable enough for training but light enough for race day, the Launch 8 is designed to keep up on every run. Predecessor: Brooks Launch 7.",
            "NEUTRAL SUPPORT: Streamlined yet cushioned, with neutral support, this shoe hits the sweet spot between a race flat and a standard trainer.",
            "LIGHTWEIGHT CUSHIONING: Brooks lightest BioMoGo DNA midsole cushioning provides a fast ride without any extra weight - perfect for days when you are working on your speed.",
            "BREATHABLE AND SLEEK FIT: The new one-piece mesh upper creates a closer-to-foot-feel that is more breathable than ever before.",
            "QUICK TRANSITIONS: The Midfoot Transition Zone is shaped to go from heel to toe quickly. Newly added blown rubber in the forefoot propels you forward for a faster ride.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Addiction 14',
        amazonLink: 'https://www.amazon.com/Brooks-Womens-Addiction-Running-Shoe/dp/B07L6KG4JL/ref=sr_1_257?crid=3KIA3SMN05KP4&dib=eyJ2IjoiMSJ9.ZdqspqNjBG0zKv8NQkYjKN5DFrF8JX1_plHY3Qs-0LJRDvoX0RYFJbstFWasGZkdIq-rU9pNLtUhBBqqXrTC6Q.V266OaKOVsac2sEje8dtRHay56KhKS6P8_towwNRh4k&dib_tag=se&keywords=brooks+shoes&qid=1704925001&refinements=p_72%3A2661618011&rnid=2661617011&sprefix=brooks+shoes%2Caps%2C244&sr=8-257',
        price: 124.95,
        sizes: [5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+1Pq8QCoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bl1KhxcXL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81dZDiJksoL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81JpqrgIGKL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81SOPUUH4vL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81pRSFWiMBL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Closure type Lace-Up",
            "THIS WOMEN'S SHOE IS FOR: With its maximum support and generous fit, the Addiction is great for both runners and walkers. If you’re looking for comfort or pain relief and haven’t found it in standard performance running shoes, this shoe might be your perfect match. This Brooks Addiction 14 is a certified PDAC A5500 Diabetic shoe and has been granted the APMA Seal of Acceptance.",
            "SUPER-SOFT CUSHIONING: BioMoGo DNA, our proprietary cushioning,adapts to your stride, weight and speed. Why? So it can help protect you by reducing impact on your joints.",
            "MAXIMUM SUPPORT: Our Extended Progressive Diagonal Rollbar (PDRB) is a support system for your entire body. It strategically positions arch support to guide and keep your body in its natural path of motion.",
            "GENEROUS FIT: Sometimes you need a little extra room to move around in. So if you need a roomier shoe for flat or high-volume feet or specialized orthotics, your search is over.",
            "WEAR TESTERS SAY: I like the fit and cushioning of the shoes. The shoes were extremely comfortable when you first put them on. This is one of the key indicators that I will mostly likely buy the shoe. Also, the cushioning felt like it provides plenty of support.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Ghost 11',
        amazonLink: 'https://amazon.com/Brooks-Womens-Ghost-11-Latigo/dp/B07DS4ZMP5/ref=sr_1_289?crid=3KIA3SMN05KP4&dib=eyJ2IjoiMSJ9.ut8RnjWpYJQfY1woODshfk7rw9YYj59szaf0afj1uVOATC54mdPndo9HInaErXIr6bZvVtC1adVWQ8WKq2X3Xg.4O0mv12EZKKiKJoJY0l0ycz7XN2orCL9okSMT-OhHFY&dib_tag=se&keywords=brooks%2Bshoes&qid=1704925041&refinements=p_72%3A2661618011&rnid=2661617011&sprefix=brooks%2Bshoes%2Caps%2C244&sr=8-289&th=1',
        price: 129.99,
        sizes: [5,5.5,6,10,11,11.5,12],
        colors: ['grey','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81rzN7d+x3L._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81M0QtmQ0+L._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81H+f2y5TRL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81SfVLpGI6L._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81QZgC5GvAL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gJLAuXBFL._AC_SX679_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81lUsaX3PbL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81H4zPeBa3L._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81UQ0x62UjL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81q9yTUiDyL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/811AEKIAEuL._AC_SX679_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81cqSs9NnkL._AC_SX679_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "SHOE SIZE: B = Medium width, D = Wide width",
            "FOOT SUPPORT: Ideal for runners with a medium to high arch looking for neutral support.",
            "BALANCED, SOFT CUSHIONING: BioMoGo DNA and DNA LOFT cushioning work together to provide a just-right softness underfoot without losing responsiveness and durability—yet it feels lighter than ever.",
            "SMOOTH, STABLE RIDE: The Segmented Crash Pad is designed to adapt to each foot fall, so no matter how your foot lands, you’ll enjoy the smoothest ride possible.",
            "SOFT, SECURE FIT: The newly engineered mesh upper practically disappears on foot with strategically placed stretch and structure where you need it most.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'GT 1000',
        amazonLink: 'https://www.amazon.com/ASICS-GT-1000-Carrier-Silver-Medium/dp/B08RXX4KYW/ref=sr_1_47?crid=3EJCOMOGSN5QS&dib=eyJ2IjoiMSJ9.jEZZ2L6aS_W3oAuE3-RQQESXo2t5owBAcm0bkYPInP7aeGg2Nflo4J4zg5IexZuXWDhaWQ7x6GGCho2k-ZywKA.hlEx6aion6uDkcxo5_oYW7-Qq9QA96qA1Ixmw-jKLKY&dib_tag=se&keywords=asics%2Bshoes&qid=1704925582&refinements=p_72%3A2661618011&rnid=2661617011&sprefix=asics%2Bshoe%2Caps%2C247&sr=8-47&th=1',
        badges: ['sale'],
        price: 84.95,
        discount: 30,
        sizes: [8,8.5,9,9.5,10],
        colors: ['black','blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61JBGBzIJGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61WJdGDTikL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61kklzVQm6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PN6sdWC0L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61-QcBwOg9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61m4Qpk3pJL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71nuIyQyIeL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61x6MGZiHIL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61wReiFg2mL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qF050pWiL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61+Sz6wMtRL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615q3YrnOgL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uCmBjtYjL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71K1Wf-HDvL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Synthetic-and-mesh",
            "Care instructions Machine Wash",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Engineered mesh upper improves breathability:",
            "FLYTEFOAM Technology: Provides lightweight cushioning.",
            "Rearfoot GEL technology cushioning system: Attenuates shock during impact phase and allows for a smooth transition to midstance.",
            "DuoMax Support System: A dual density midsole system positioned to enhance support and stability, positioned sport specifically.",
            "AHAR Plus Outsole: Strategically positioned in critical areas of the outsole, this exceptionally durable compound is 50% more durable than standard ASICS High Abrasion Rubber.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'asics',
        name: 'GT 1000',
        amazonLink: 'https://www.amazon.com/ASICS-GT-1000-10-Running-Digital/dp/B093ZS18YX/ref=sr_1_74?crid=3EJCOMOGSN5QS&dib=eyJ2IjoiMSJ9.k4xfCX39JOyYOdf9xmdfIxNLYtFTU-1YNViK11JKk2ylF6POSRuv_G0LyCl3MjcjKXcEjklQGCRURuJzDcVBWA.EBiCTTkvfvDgVtMkx5WBXlqtOLsb-daU5GiOxI9kb1Q&dib_tag=se&keywords=asics%2Bshoes&qid=1704925614&refinements=p_72%3A2661618011&rnid=2661617011&sprefix=asics%2Bshoe%2Caps%2C247&sr=8-74&th=1',
        badges: ['sale'],
        price: 84.95,
        discount: 30,
        sizes: [5,5.5,6,6.5,7,7.5,8,9,10],
        colors: ['darkblue','lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Ti-ZPfXEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61wm2QXeDDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SJNY+WShL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uvZ1KLEbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614fsyxUvrL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/617TXpKF1GL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61uovU0+IwL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Ipbrtc3uL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61JIJlQBFlL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6189-8Anr6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BZ9gbOGVL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61P7pTIeyvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71IrfpjwKlS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71GJ-6M0PWL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Synthetic-and-mesh",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Closure type Lace-Up",
            "Engineered mesh upper improves breathability:",
            "FLYTEFOAM Technology: Provides lightweight cushioning.",
            "Rearfoot GEL technology cushioning system: Attenuates shock during impact phase and allows for a smooth transition to midstance.",
            "DuoMax Support System: A dual density midsole system positioned to enhance support and stability, positioned sport specifically.",
            "AHAR Plus Outsole: Strategically positioned in critical areas of the outsole, this exceptionally durable compound is 50% more durable than standard ASICS High Abrasion Rubber.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'asics',
        name: 'Gel Pulse 13',
        amazonLink: 'https://www.amazon.com/ASICS-Gel-Pulse-Running-French-Shocking/dp/B098L7VFF8/ref=sr_1_99?crid=3EJCOMOGSN5QS&dib=eyJ2IjoiMSJ9.55f4mGaaZWrrvoqbUX582diQjQLgdGJbPo41uxzbicr2DUSKg7RZpibJEL0YHA0HgI7_7hYhrsERRxl5AWwhYg.94_zxjwzzphoX5DilbE8Txp2LVT6nMwxlWGfG4kulCM&dib_tag=se&keywords=asics%2Bshoes&qid=1704925640&refinements=p_72%3A2661618011&rnid=2661617011&sprefix=asics%2Bshoe%2Caps%2C247&sr=8-99&th=1',
        badges: ['sale'],
        price: 90,
        discount: 40,
        sizes: [8,9,9.5,10,10.5,11,11.5,12,13,14],
        colors: ['teal','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61CSZJ-gH+L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vNabgm3cL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61J9V7XiUaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61CdiG3TbTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61F5+5DoGxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61yju+Z6-DS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/610BmdkuKkL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61QuZRaqAsL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nX4Fv49SL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Tn66hg9tL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61WFONkCsbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61fcevrFvEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61DWOzMp1IS._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/718DKV9LztL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Synthetic-and-rubber",
            "Sole material Rubber",
            "Outer material Mesh",
            "Closure type Lace-Up",
            "Engineered jacquard mesh upper improves breathability:",
            "AmpliFoam Midsole: Engineered to maintain durability at softer densities, providing better flexibility, comfort, and platform adaptability ideal for natural running.",
            "GEL Technology: Cushioning provides excellent shock absorption",
            "Guidance Line Midsole Technology: Vertical flex groove decouples the tooling along the line of progression for enhanced gait efficiency.",
            "AmpliFoam Midsole - Engineered to maintain durability at softer densities, providing better flexibility, comfort, and platform adaptability ideal for natural running.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'altra',
        name: 'Provision 4',
        amazonLink: 'https://www.amazon.com/Altra-Footwear-Provision-Blue-Lime/dp/B07TRBYK18/ref=sr_1_55?crid=1RWPB0G2WIC3N&dib=eyJ2IjoiMSJ9.YIA-P1jX68l7ox-Klltb3PlkRCA33FXbnlbU61LROX2HFeSArL0srAgAXnZVyyGMJbJ1QxsMkboxHSs0vW-_CA.8QKmZU8KdM1FM_B9b4g4Q3iTS8lAcs1tFF8Rpq9Z-Vc&dib_tag=se&keywords=altra%2Bcross%2Btraining%2Bshoes&qid=1705011786&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=altra%2Bcross%2Btrai%2Caps%2C372&sr=8-55&th=1',
        price: 154.81,
        sizes: [9.5,15],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/81mIy99YxRL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/81g3p0pk3ZL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/71M7NoI02bL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/81AGoFahKGL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Made in USA or Imported",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Weight: 8.2 oz / 232 g",
            "Insole: 6mm Contor Footbed",
            "Midsole: Ultralight EVA top layer and InnerFlex",
            "Outsole: Rubber FootPod",
            "Cushion: High",
            "Stack Height: 27 mm",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'brooks',
        name: 'Divide 3',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Divide-Trail-Running/dp/B09MGF5CJ8/ref=sr_1_143?crid=AUBSHODR4FP4&dib=eyJ2IjoiMSJ9.o56rflOYmRd8yTu8mjm87bgnQwDnuVntPRggm2NabEHD-kwBj2ALto676QJImke8hvfU7repB-mYiRpwnYqc2g._-oWVOIKpHd-Gb47elhRfQqmP22G5BodC_XFbbLIxIc&dib_tag=se&keywords=altra%2Bshoes&qid=1705012096&refinements=p_72%3A2661618011&rnid=2661617011&sprefix=altra%2Bshoes%2Caps%2C216&sr=8-143&th=1',
        price: 76.95,
        sizes: [10,11.5,12,12.5,13,14,15],
        colors: ['black','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/81+lI18+UWL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/81BQkIDCg4L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/81S7luL6kuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/8187uInDWbL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/81LA1KUyleL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71QAnwbyBqL._AC_SY695_.jpg'
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/81nSrsqliuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/91srQHl7FzL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/81hAVFeW6JL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/81lMDTLxSkL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/81QX5kDZ5rL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/716mCL2mj-L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Shaft height Ankle Strap",
            "Outer material Canvas",
            "THIS MENS SHOE IS FOR: The Divide 3 is for groomed trails and road-to-trail transitions, perfect for runners who frequent city parks or neighborhood paths.",
            "SOFT CUSHIONING: Constructed with our soft DNA Loft cushioning and a Segmented Crash Pad in the outsole, the Divide 3 delivers soft landings and even smoother transitions.",
            "ROAD-TO-TRAIL VERSATILITY: Reconfigured midsole features soft DNA LOFT cushion for smooth transitions, plus flexibility and protection from road to trail.",
            "TRUSTED TRACTION: Feel confident as you venture off road, thanks to the premium wet-dry traction of our trusted TrailTack rubber outsole.",
            "HYBRID FIT: The all-new air-mesh upper provides structure and breathability, while the TPU mudguard protects the foot — creating a familiar fit that is ready for new terrain.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'altra',
        name: 'TIMP 2',
        amazonLink: 'https://www.amazon.com/ALTRA-Womens-AL0A4QTP-Trail-Running/dp/B07TP9Q6ZW/ref=sr_1_188?crid=AUBSHODR4FP4&dib=eyJ2IjoiMSJ9.Lt-yWCYXU8bqtHiKajdPddyI3J6-xds2fzPkhGDYrok7D0ukxL0MKyt1ygUDLX433nTmtsFrlXBRCzeW8upj2g.bG-IkARENpAFuz9l9YjMOJfytBr49ky-DpMweta-tgI&dib_tag=se&keywords=altra%2Bshoes&qid=1705012131&refinements=p_72%3A2661618011&rnid=2661617011&sprefix=altra%2Bshoes%2Caps%2C216&sr=8-188&th=1',
        price: 131.14,
        sizes: [6,6.5,7,10.5],
        colors: ['teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/81tNbnxkQ7L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/81BS1gUMdxL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/81H2wYoTPwL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/81VmS8IAIGL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Gain Traction: Maxtrac Outsole And Multi-Directional Lug Pattern For Best In Class Traction",
            "Designed to Perform: Trimmed Down Overall Design With An Updated Fit For Enhanced Performance",
            "Go Further: Highly Cushioned Softer Midsole For Miles And Miles Of Comfort",
            "Stack Height: 29mm",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Mistral',
        amazonLink: 'https://www.amazon.com/Sportiva-Mistral-Climbing-Shoe-Hawaiian/dp/B0BRJVLMHQ/ref=sr_1_1?crid=1DE4T5WTN8XLE&dib=eyJ2IjoiMSJ9.JWo6HGSdLpVBgG8Z8633mutY3FimNSqG16FQuSzKiVguDkRQwdMi7jeeCgJZ8dLM06H1QozGpKI8R-aBKGD8VoHTqmNiTCP7xM9mlyc_ZdDxxWkqkFkY97UInSUc1my1TOqCo6t_Z1QJ055JHwI6Pw.8NKvfE4Crt1V1YuZ9cjZTSRy4HZS7gdEBne77PVUTLQ&dib_tag=se&keywords=climbing%2Bshoes&qid=1705270082&sprefix=climbing%2Bshoes%2Caps%2C195&sr=8-1&th=1',
        price: 138.95,
        sizes: [7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/61C5rD5ngTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51UYkNO-wuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51zRdHp4slL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/511mmZ1w6XL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61tAzc9Gp3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/41UA-pMid6L._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Leather",
            "Closure type Lace-Up",
            "It has a downturned design to give a greater performance when you brave the gym's overhangs and start leading outdoors.",
            "La Sportiva made this shoe with ECO and vegan materials so you can appreciate the outdoors a little more, too.",
            "Affordable performance shoe is a step-up from your first pair of climbing shoes",
            "Unlined microfiber upper stretches to conform to your foot's shape for a comfy fit",
            "Vegan insole made of three different layers to feel like leather",
        ]
    },



    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Origin',
        amazonLink: 'https://www.amazon.com/SCARPA-Unisex-Origin-Iron-Gray/dp/B012A3YIE8/ref=sr_1_28?crid=2ALR3YVW71164&dib=eyJ2IjoiMSJ9.dMWurjd8uXaYF_gz6JMTZvZxqbDKHQcUvy5cNdPSm0PZA9I4K-SkyXn-VfNLSGlzzkEjh36j3LHTozWboyxuytTcOSnDo8Y_L9y12tdK02UB8sSwM5l9ozqlO4cXeUR6nUbfrJVDPeU7mTJD8leblA.zW2OZrUfHqjFmnxvHcienawJ_wF5MmGUfJ9-WjVnVa4&dib_tag=se&keywords=scarpa%2Bclimbing%2Bshoes&qid=1705271553&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=scarpa%2Bcli%2Caps%2C259&sr=8-28&th=1&psc=1',
        price: 119,
        sizes: [5.5,6,6.5,7,8,9],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/61fRt5cfFdL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/61ELkOoB+yL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/518rlvvCS6L._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Sole material: Leather, Suede, Rubber",
            "Closure typeLace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: 'reflex',
        amazonLink: 'https://www.amazon.com/SCARPA-Reflex-Junior-Climbing-Shoes/dp/B08TJ3RWJ6/ref=sr_1_78?crid=19QN5WH5QBORM&dib=eyJ2IjoiMSJ9.jZax-XJFnrWLIEv8CTk40RyJyea9MAUYiQabx58pZVITK2Sr9wVMSTS7t4Qo7-SaWwOub1esgQavDpJ9NNxNm3JMMbtr7YRZa1Yekb_y2MihXC0hjT-OWfO2Mu2QFoOSv0EOeZ-Ym3QQXjvYT-OAWA.M396TLhaBzNJVqHMN2zipP3qvfeivUICyaJP0NRcEDI&dib_tag=se&keywords=scarpa+shoes&qid=1705272064&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=scarpa+shoes%2Caps%2C215&sr=8-78',
        price: 135.5,
        sizes: [3.5,4,5,10.5],
        colors: ['yellow'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'yellow',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/7171ez381cL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/61yV21ZlTcL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/61QApF0iecL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/61UJ1o8r1iL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/617i3uw5x6L._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Hook & Loop",
            "EU Size: 28 – US Size: 10.5-11 Little Kid | Climb On | Made to feel as comfortable as a regular shoe, but with enough tech to help them get up the wall, the Reflex Kid is the perfect shoe to introduce your little one to rock climbing.",
            "Stretch-Knit Upper | Breathable and washable, the upper is made to handle the rough and tumble life of a kid.",
            "Kid-Friendly Fit | Flat, neutral lasting with minimal forward pressure ensures that their feet are comfortable all day long.",
            "Durable Design | Sticky and hard-wearing, the Vision rubber on bottom means this shoe will stay climb-ready long enough to become hand-me-downs.",
            "Dual-Strap Closure | Offering secure and simple fastening, the two-strap closure system ensures that they don’t lose a shoe in the boulder field.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'under armour',
        name: 'Project Rock 2',
        amazonLink: 'https://www.amazon.com/Unisex-Project-Rock-Training-Shoes/dp/B0B5V3ZG49/ref=sr_1_272?crid=OMMFT9DG6ZYA&keywords=training+shoes&qid=1705322414&refinements=p_n_feature_eighteen_browse-bin%3A14630392011%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=training+shoe%2Caps%2C211&sr=1-272',
        price: 198.95,
        sizes: [5,5.5,6,6.5,7,8],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/71k8CK1VVdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61r6jayXxJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71AlSW4OHTL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71Dc89qdJdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71dbDLyI4VL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Official Footwear of UFC",
            "Lightweight, breathable airmesh upper with stretch & structure where you need it",
            "Additional midfoot lockdown & support with webbing & eyelet structure",
            "Charged Cushioning midsole absorbs impact & converts it into a responsive burst",
            "UA TriBase maximizes ground contact, promotes natural motion & provides flexibility to grip during lifts",
            "Full rubber outsole for elevated traction & durability",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'under armour',
        name: 'HOVR Phantom 2',
        amazonLink: 'https://www.amazon.com/Under-Armour-Phantom-Synthetic-Trainers/dp/B0B71MZSGB/ref=sr_1_56?crid=OMMFT9DG6ZYA&keywords=training%2Bshoes&qid=1705322811&refinements=p_n_feature_eighteen_browse-bin%3A14630392011%2Cp_n_availability%3A2661601011%2Cp_89%3AUnder%2BArmour&rnid=2528832011&s=apparel&sprefix=training%2Bshoe%2Caps%2C211&sr=1-56&th=1',
        price: 102.89,
        sizes: [6,6.5,7.5,8.5,9.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/61l1t-oaTpL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/6196s4sqRDL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71VC8AJMZwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71PMm0KPpFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/713njh-YLsL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Synthetic",
            "Inner material Fabric",
            "Closure type Lace-Up",
            "Breathable textile and synthetic upper",
            "Breathable textile lining for abrasion-free wear",
            "Removable, foam padded insole for cushioning and support",
            "Modern lacing system for secure fit",
            "Durable rubber sole for optimal grip and traction on any surface",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'under armour',
        name: 'HOVR Revenant Camo',
        amazonLink: 'https://www.amazon.com/Under-Armour-Revenant-Trainer-Metallic/dp/B09692JNPM/ref=sr_1_63?crid=OMMFT9DG6ZYA&keywords=training+shoes&qid=1705322811&refinements=p_n_feature_eighteen_browse-bin%3A14630392011%2Cp_n_availability%3A2661601011%2Cp_89%3AUnder+Armour&rnid=2528832011&s=apparel&sprefix=training+shoe%2Caps%2C211&sr=1-63',
        price: 87.62,
        sizes: [4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/61HWbecqjJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/6133Q6I3MCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/618Iiqg-6ML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61J5A7-n9ZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61SxhF5VKcL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Under Armour’s mission is to make all athletes better through passion, design and the relentless pursuit of innovation",
            "Where we started? It all started with an idea to build a superior T-shirt",
            "The technology behind Under Armour's diverse product assortment for men, women and youth is complex, but the program for reaping the benefits is simple: wear HeatGear when it's hot, ColdGear when it's cold, and AllSeasonGear between the extremes.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'salomon',
        name: 'XA Rogg 2 GTX',
        amazonLink: 'https://amazon.com/Salomon-Spectur-Running-Estate-Dazzling/dp/B0992G6CB8/ref=sr_1_38?crid=1XQ90G8JFLMXK&dib=eyJ2IjoiMSJ9.SIW1oSPYMKV00b6QDaynagLGM_Qg08nLbMAgD9w6GgMsdT28jk3oow0q0sP3lHF2RO3LzmJ1u9_qGkgk-pJ5ywoADs3OXTF5hvGtVSMvp0V7xiW0YAmwAjVeW90657OYOqnfsM5ps53pqwNw-3h2Mek25WrLpCC82xaTEugKeQ_fsONrXPCrpIeqioXHl-X_D8qJU4Tb9vPXL8oMNH6h-3aXkQJ-x-BONw0tWpA0yo-D5HqOdLY-YwjIJEjBkuGd7yLSDWltK0khDxvD2XBcV5JSw_9slal5UCrEXaAl7xk._ahb9ZdY6f5VSqI_efBDHs8j1i6FuLApGMWAR2yRZnw&dib_tag=se&keywords=salomon+shoes&qid=1705709069&refinements=p_n_availability%3A2661601011&rnid=2941120011&s=apparel&sprefix=salomon+shoe%2Caps%2C224&sr=1-38',
        badges: ['new'],
        price: 120,
        sizes: [8,8.5,9,9.5,10,10.5,11],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/71K+WqMeHnL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/71STH4ev1VL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/61dXh+nyJhL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61G3FA2B9eL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71cyu0jAxhL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/71nDH5EuGTL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/71bUefyEdEL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Energy Blade-powered propulsion for snappy toe-off and an easier, more fluid stride.",
            "Energy Surge is a lightweight, resilient and soft foam compound that evens out the impact and delivers a smoother foot strike.",
            "Lightweight, responsive foam created by combining EVA and Olefin [OBC] to deliver long-lasting cushion and bouncy energy return.",
            "Energy Blade is a built into the midsole to boost forward propulsion. The joined efforts of the blade, midsole foam and sole geometry make for a snappy, propulsive running machine.",
            "Engineered mesh is a structure that varies the weave to offer more support and durability or flexibility and breathability, according to the specific needs of the shoe.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'nike',
        name: 'SuperRep Go',
        amazonLink: 'https://www.amazon.com/Nike-Superrep-Training-Shoe-Cj0773-010/dp/B09LRJB4YD/ref=sr_1_64?content-id=amzn1.sym.9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e%3Aamzn1.sym.9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e&dib=eyJ2IjoiMSJ9.KsLpWWEMdqaIeT2xTYzCLMLbQI1-Je6HRFVB3jFF3Bmu9NRw9PSeguff7Mvknx5jIkL9p13A4tOoyeC4Yn0dzkwt8OGCOh9vBdVr1dTZNcpyxfK1Q9jfHRzTWhaAROHPFLFFB9rQ51r0ULhZgJgKY4BI5maYKWh55yGY-ijqXvGTLN8lmynoT4r8duElsR9AH6usck4O2uXAX1kok19Z57dXCDQX8Tt7h90lcWclDaa2Ye3pg3cMsw5QIg5ur3Ebig2MdAOru0X61r1RKSE7s59-EkEzvirbIVuMH27kyVQ.PxRUMGK0W3J5lwvB6PFo9qUKGfrD7eWMeFCnbB0AfHo&dib_tag=se&keywords=nike%2Bgo%2Bflyease%2Bwomen&pd_rd_r=148b3fb7-815b-48d4-98dc-76fdab846140&pd_rd_w=AcrbQ&pd_rd_wg=dlQp3&pf_rd_p=9bbe09a5-e2ce-4594-80e8-ad6153d0ea3e&pf_rd_r=D6NJC9TMMHHJXKY2P9G4&qid=1705710242&refinements=p_89%3ANike&rnid=2528832011&s=apparel&sr=1-64&th=1',
        badges: ['best seller'],
        price: 125,
        sizes: [7,7.5,8,8.5,9,10,11,11.5,12.5,13],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/616Xq2TwEAL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61qtLy3y6YL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/712AG8MZjEL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61KE9sSy-QL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/81ZlpOAnUJL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61XR61qdjCL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/91TMMH7dRbL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Synthetic",
            "Inner material Canvas",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: 'Tri Base Reign 6',
        amazonLink: 'https://www.amazon.com/Under-Armour-TriBase-Reign-Castlerock/dp/B0CN33H92P/ref=zg_bs_g_679271011_d_sccl_25/132-4220382-8388525?th=1',
        badges: ['best seller'],
        price: 164.99,
        sizes: [7,7.5,8,8.5,9,9.5,10,11,11.5,12,12.5,14],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/61BrFyP97PL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61-BIrVOwmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61v7j0IzuYL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71VVYqXzIuL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61+X8tDe5mL._AC_SY695_.jpg',
                ]
            }
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'adidas',
        name: 'Amplimove',
        amazonLink: 'https://www.amazon.com/adidas-Amplimove-Trainer-Sneaker-Black/dp/B0C131CPWR/ref=zg_bs_g_679271011_d_sccl_26/132-4220382-8388525?psc=1',
        badges: ['sale'],
        price: 90,
        discount: 20,
        sizes: [6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/712vHCm0iFL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71eutO7AR1L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71cSuzgvKNL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71igFPf2WML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71UjZrf2e6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71okp8HP1wL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Outer material Synthetic",
            "Closure type Lace-Up",
            "Men's versatile trainers with a forefoot focus for HIIT workouts",
            "SNUG FIT: Adjustable laces provide a secure fit",
            "MESH UPPER: Mesh upper for breathability and light weight",
            "LIGHTWEIGHT CUSHIONING: Sculpted Vis-Tech EVA midsole offers a comfortable step-in feel",
            "HIGH TRACTION: Multidirectional rubber outsole delivers great grip",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'la sportiva',
        name: 'Miura',
        amazonLink: 'https://www.amazon.com/Sportiva-Mens-Miura-Climbing-Shoe/dp/B078KRSXDH/ref=sr_1_13?crid=2BSW2THKCMH1N&dib=eyJ2IjoiMSJ9.BvRr1LVJRK7P9zAMwSgoKvoJIJkHzfcFk9pINnUPKvB5pqr19RMZsGKU81R-kzrk7ij4mRVYcOGQXGIsQgAB9VnTunACCG60NNcS6YtlGev-emCqaUhurC1OauebouKmLJQJvXOvjlEGDx-lLdaNUx-dZqJjuFQ4xh0uOnx-Up8W318-HtDigVNFJH-2v0I0hSD9ydkMX_09Ujs08NM7umFAGUZzeTuYDzRulydPCbv82PnS08hmtwyO52rv8aXWzDw1K4EMTemW03safKP_6XKcVuMkftCTxBYROguQJ4s.IAptrR7HS18fGbiwdzTVeEepyX3tAJfwkXUSCQawWNc&dib_tag=se&keywords=la+sportiva+climbing+shoes&qid=1705758887&sprefix=la+sportiva+climbi%2Caps%2C203&sr=8-13',
        badges: ['best seller'],
        price: 188.95,
        sizes: [4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.],
        colors: ['yellow'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'yellow',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/610SDZu-JnL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61BilFdqRfL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61F66G8ns8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/6101h4ieNOL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61PPl6eeovL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61+HVFy+UUL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/615EdHl9NeL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructionsMachine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "FAST LACING SYSTEM - Quick-pull lacing harness allows for precise regulation of inner volumes; Wrapping the foot snugly for excellent support, fit, and comfort",
            "ADVANCED CONTROL - A grippy 4mm Vibram XS Edge rubber sole and a highly tensioned Slingshot Rand that transfers power to the toes let climbers smear, hook, and edge like pros; Asymmetric build is ideal for precision pocket climbing",
            "CLIMB IN COMFORT - From the gym to the crags, the classic leather upper is soft yet supportive; Moisture-wicking Dentex lining keeps feet dry and comfortable all day long",
            "BUILT TO LAST - The indoor/outdoor Miura is constructed from industry-leading materials for high performance and durability; 1.1mm LaspoFlex forefoot midsole is lightweight and is designed for maximum torsion rigidity",
            "TIPS FOR BUYING - Rock climbing shoes are designed to fit differently than other footwear; Be sure to reference the La Sportiva size chart in the product images for more accurate sizing; The fit should be tight, but not painful, and without pressure points",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'nike',
        name: 'Flex Control TR3',
        amazonLink: 'https://www.amazon.com/Nike-Control-Trainer-White-Dark-Regular/dp/B07RJTMPM6/ref=sr_1_6?crid=NTZ9BNMEID2T&dib=eyJ2IjoiMSJ9.xCqzYhrgnAyT36mhUYmaPe5iHnMvhmCM1myu6bzg2uxJhrSSbDV9U4l2xizPBnCAXeyhvJnCwuQF_4ivUQFmIaCvMtV2Sj7qeNAsvYUlGB5q27tPu08fOdA-OUJBCgIRjlgc4TcepUQzHexoNwH5iK4KdSWzu_N0wYpqhQ0gKkelI-pmXQfm2wy-2JPU8TV64bz2Hjbar5ruTnN6cGa71miGTHLDNyUUAX6uJeb9vPuXlmR2EasdqVwmlTod4yKA_jnxWvSLL7PhhaKMXC2Ke_V4cguWbsLPYrXgPL3IWr0.hPXLTVzE8GJdiOsTjSeRpAcsPVZ4abfXgG7yXGRF18w&dib_tag=se&keywords=cross%2Btraining%2Bshoes&qid=1705846231&sprefix=cross%2Btraining%2Bshoes%2Caps%2C225&sr=8-6&th=1',
        badges: ['best seller'],
        price: 85,
        sizes: [7,8,8.5,9,9.5,10,10.5,11,11.5,12,13],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/618IK6sSdmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51-AxSjXSML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51EbaPUtTpL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Rubber",
            "Shaft height Low-top",
            "Outer material Mesh",
            "Mesh upper provides lightweight breathability. A durable overlay wraps from the midfoot around the heel for added support",
            "Segmented rubber outrigger on the forefoot of the sole gives you stability during side-to-side movements. Overlays above the outrigger add durability",
            "Nike Flex sole lets your foot move naturally. Textured rubber tread outlines the sole for durable traction and stability",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'on',
        name: 'Cloudswift 3',
        amazonLink: 'https://www.amazon.com/Womens-Cloudswift-Sneaker-Black-Medium/dp/B0B2F4DQ18/ref=sr_1_10?keywords=On&qid=1705849374&refinements=p_89%3AOn&rnid=2528832011&s=apparel&sr=1-10&th=1',
        badges: ['best seller'],
        price: 159.99,
        sizes: [6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/51yK4h3CzwL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51u9M-FgCSL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/517MD9-JlML._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51QyrD4VZZL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51xaFupTbPL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51HDRnDoilL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "Rubber sole",
            "Structured arch support and removable insole, Lightweight design , Reflective accents, Helion superfoam injected CloudTec sole for cushioned, yet responsive movement, Supportive side panels, Integrated collar and tongue",
            "Lace-up closure",
            "Round toe",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'on',
        name: 'Cloudswift',
        amazonLink: 'https://www.amazon.com/Running-Mens-Cloudswift-Black-Running/dp/B07DFPZ75K/ref=sr_1_57?keywords=On&qid=1705849429&refinements=p_89%3AOn&rnid=2528832011&s=apparel&sr=1-57&th=1',
        badges: ['best seller'],
        price: 150,
        sizes: [7.5,8,9,10,10.5,11.5,12,12.5],
        colors: ['blue','grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/71UR3HvAq9L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/61UwFBxtr-L._AC_SX695_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/71-LxgxSOML._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/71Xsud-1ZoL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Mesh",
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Mesh",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'on',
        name: 'Cloudswift 3',
        amazonLink: 'https://www.amazon.com/Cloudswift-Textile-Synthetic-Wisteria-Trainers/dp/B0C7C4ZBTJ/ref=sr_1_51?keywords=On&qid=1705849429&refinements=p_89%3AOn&rnid=2528832011&s=apparel&sr=1-51&th=1',
        badges: ['best seller'],
        price: 149.07,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/617DLcvPH9L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51z-GuLtCxL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51hQ1Rnk0TL._AC_SY695_.jpg',
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Synthetic",
            "Inner material Fabric",
            "Closure type Lace-Up",
            "Crafted with premium and durable mesh and synthetic upper",
            "Soft and breathable textile lining for comfort",
            "Textile lined, foam padded insole for cushioning and support",
            "Traditional lacing system for secure fit",
            "Durable rubber sole for grip and traction",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'on',
        name: 'Cloudswift',
        amazonLink: 'https://www.amazon.com/Cloudswift-Sneakers-Glacier-Silver-Medium/dp/B0B2F4SDV2/ref=sr_1_78?crid=G4XSSMAZ2ZIG&keywords=On+cloud&qid=1705851068&refinements=p_n_availability%3A2661601011&rnid=2661599011&sprefix=on+cloud%2Caps%2C188&sr=8-78',
        price: 115,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/71YWKOFINvL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/71-OBebgMrL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/61nEYrsUe3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/615gbSYiJvL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/81a3nNC8iSL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: 'Project Rock',
        amazonLink: 'https://www.amazon.com/Under-Armour-Project-Training-Matter/dp/B0B2RCG4QT/ref=sr_1_97?crid=1B1SAE0QTEEMC&keywords=men+cross+training+shoes&qid=1705872285&refinements=p_n_feature_eighteen_browse-bin%3A14630392011%2Cp_n_availability%3A2661601011&rnid=2661599011&s=apparel&sprefix=men+cross+training+shoes%2Caps%2C195&sr=1-97',
        badges: ['sale'],
        price: 159,
        discount: 6,
        sizes: [10.5],
        colors: ['beige'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'beige',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/617EwhKRHdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/616OvToy+WL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71A+ncq2KQL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71BnREen+3L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61s-bKLH8lL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'new balance',
        name: "Garoe V1",
        amazonLink: 'https://www.amazon.com/New-Balance-Running-Natural-Electric/dp/B09H3QHYQ5/ref=sr_1_554?crid=M2LEH3ZOHIEF&keywords=women%2Bcross%2Btrainer%2Bshoes&qid=1706025808&refinements=p_n_feature_eighteen_browse-bin%3A14630392011%2Cp_72%3A2661618011&rnid=2661617011&s=apparel&sprefix=women%2Bcross%2Btr%2Caps%2C189&sr=1-554&th=1',
        badges: ['best seller'],
        price: 89.99,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/71K+JOhntHL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/710gIuicl7L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71rXzBIdjsL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/81E-uCYyf1L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/719dwWydZ-L._AC_SL1500_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Synthetic material",
            "Fresh Foam midsole cushioning is precision engineered to deliver an ultra-cushioned, lightweight ride",
            "Supportive synthetic upper",
            "Upper features no-sew overlays for a sleek fit and feel",
            "AT Tread outsole provides versatile traction during both on and off-road activities",
            "Unique marbled outsole",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'new balance',
        name: 'NB 847 V4',
        amazonLink: 'https://www.amazon.com/New-Balance-Walking-Aluminum-Carolina/dp/B0815WJQTF/ref=sr_1_770?crid=M2LEH3ZOHIEF&keywords=women%2Bcross%2Btrainer%2Bshoes&qid=1706026534&refinements=p_n_feature_eighteen_browse-bin%3A14630392011%2Cp_72%3A2661618011&rnid=2661617011&s=apparel&sprefix=women%2Bcross%2Btr%2Caps%2C189&sr=1-770&th=1',
        badges: ['best seller'],
        price: 81.88,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/51xvgiZ97aL._AC_SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/51sTvpJo4dL._AC_SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/61-09gbX+PL._AC_SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/51hhqTTm6LL._AC_SL1000_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type 50% Mesh, 50% Synthetic",
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "TRUFUSE midsole cushioning combines two different foams to deliver responsive, durable cushioning",
            "ROLLBAR stability post system helps control rear-foot movement for enhanced support",
            "Synthetic leather construction offers unmatched durability and a lightweight feel built for all-day comfort",
            "Mesh upper offers a lightweight feel for enhanced breathability and air flow",
            "TPU heel insert provides added support for increased balance and stability",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'under armour',
        name: 'TriBase Reign 3NM',
        amazonLink: 'https://www.amazon.com/Under-Armour-TriBase-Concrete-Footwear/dp/B09HTY62PL/ref=sr_1_23?crid=3FK1S6HZYN820&keywords=ua%2Bshoes&qid=1706053641&sprefix=ua%2Bshoes%2Caps%2C208&sr=8-23&th=1',
        price: 129.99,
        sizes: [11,11.5,12],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/71nzj0oelnL._AC_SL1425_.jpg',
                    'https://m.media-amazon.com/images/I/71xs1SCmEpL._AC_SL1425_.jpg',
                    'https://m.media-amazon.com/images/I/61GcyMIJw0L._AC_SL1425_.jpg',
                    'https://m.media-amazon.com/images/I/81xUdEcMnxL._AC_SL1425_.jpg',
                    'https://m.media-amazon.com/images/I/71bWuqv9inL._AC_SL1425_.jpg',
                ]
            }
        ],
        details: [
            "Origin Imported",
            "Sole material Polyester",
            "Outer material Polyester",
            "Closure type Pull-On",
            "UA WARP upper technology provides ultimate lockdown & durability throughout dynamic movements External heel clip & internal heel counter for added stability & support Full-length Micro G foam midsole for the ultimate in responsive cushioning UA TriBase maximizes ground contact, promotes natural motion & provides flexibility to grip during lifts",
            "Full-rubber outsole wraps up the sides for durability & added abrasion resistance with medial rope grip Strategic rubber build under the toe box for a more powerful floor grip Low to the ground build allows for greater feel & power transfer Lace type: Standard tie",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'under armour',
        name: "UA Charged Phantom",
        amazonLink: 'https://www.amazon.com/Under-Armour-Charged-Phantom-Marine/dp/B0CHN1B9JS/ref=sr_1_59?crid=3FK1S6HZYN820&keywords=ua%2Bshoes&qid=1706053677&sprefix=ua%2Bshoes%2Caps%2C208&sr=8-59&th=1',
        price: 115.04,
        sizes: [8,9,9.5,10,11,12],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/61mjKN+e70L._AC_SL1360_.jpg',
                    'https://m.media-amazon.com/images/I/518q6OT0prL._AC_SL1360_.jpg',
                    'https://m.media-amazon.com/images/I/61lB-xjo8cL._AC_SL1360_.jpg',
                    'https://m.media-amazon.com/images/I/71B91VB4dlL._AC_SL1408_.jpg',
                    'https://m.media-amazon.com/images/I/61VBWrrfF6L._AC_SL1360_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Ethylene Vinyl Acetate",
            "Outer material Ethylene Vinyl Acetate (EVA)",
            "Closure type Lace-Up",
            "Under Armour",
            "Charged Phantom SL",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'under armour',
        name: 'UA Flow Velociti',
        amazonLink: 'https://www.amazon.com/Under-Armour-Velociti-us_Footwear_Size_System-Numeric_9_Point_5/dp/B0C3JF5J14/ref=sr_1_97?crid=3FK1S6HZYN820&keywords=ua+shoes&qid=1706053710&sprefix=ua+shoes%2Caps%2C208&sr=8-97',
        price: 139.99,
        sizes: [8,9,9.5,10,11,11.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/61PpU1iVSdL._AC_SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/61YXzRrqwiL._AC_SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/61zbzFEv7LL._AC_SL1000_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Rubber",
            "Closure type Pull-On",
            "Upper has a strategic knit design for a locked-in fit & added comfort with internal molding FLOW technology eliminates the rubber outsole, creating a more lightweight & seamless ride on any surface Bootie construction for elevated ease of entry combined with a contoured fit",
            "Outsole material is super-durable & increases ground traction One-piece Flow midsole provides responsive & long-lasting cushioning Flow technology eliminates the rubber outsole, creating a more lightweight & seamless ride on any surface",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'under armour',
        name: 'Charged Commit 4',
        amazonLink: 'https://www.amazon.com/Under-Armour-Charged-Trainer-Distant/dp/B0BZXL3LH9/ref=sr_1_2?keywords=women%2Bgym%2Bshoes&qid=1706054879&refinements=p_n_feature_eighteen_browse-bin%3A14630392011&rnid=14630382011&s=apparel&sr=1-2&th=1',
        badges: ['sale'],
        price: 71.99,
        discount: 12,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5],
        colors: ['beige'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'beige',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/51rtyptaXVL._AC_SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/61n5gxzLO+L._AC_SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/61lLKcMTFLL._AC_SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/51Winwq0x2L._AC_SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/51tWERG8rZL._AC_SL1000_.jpg',
                ]
            }
        ],
        details: [
            "Origin Made in the USA or Imported",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Water resistance level Not Water Resistant",
            "Under Armour’s mission is simple: to make you better.",
            "That means if you set a goal, we’ll help you crush it.",
            "We do that with performance innovation and game-changing shoes, shirts, and digital tools that push the limits of what you thought possible.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'on',
        name: 'Cloudgo',
        amazonLink: 'https://www.amazon.ae/%E3%82%AA%E3%83%B3-65-98231-Cloudgo-Black-Shale/dp/B0B2F41782/ref=sr_1_24?crid=WANHH5HRH1DE&keywords=on%2Bshoes&qid=1706117052&refinements=p_89%3AOn&rnid=15703921031&s=fashion&sprefix=on%2Bshoe%2Caps%2C131&sr=1-24&th=1',
        price: 171.18,
        sizes: [8,8.5,9,9.5,10,10.5,11],
        colors: ['slateblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'slateblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/81ulCZH3-3L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/71DAxQqMElL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/71DzJCmTnvL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71F3QA5EyGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71Z8g74o6fL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/71nK7Emx15L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/81uj-m+y4-L._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Polyester",
            "Closure type Lace-Up",
            "Water resistance level Not Water Resistant",
            "Sole Thickness: 1.2 inches (3 cm)",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'on',
        name: 'Cloudventure',
        amazonLink: 'https://www.amazon.ae/Cloudventure-32-99256-Womens-Running-Marina/dp/B097R5H62C/ref=sr_1_36?crid=WANHH5HRH1DE&keywords=on+shoes&qid=1706117052&refinements=p_89%3AOn&rnid=15703921031&s=fashion&sprefix=on+shoe%2Caps%2C131&sr=1-36',
        price: 305.52,
        sizes: [11],
        colors: ['lightblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/61M+hzxznGL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/71hIgpAog7L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/61eGeJpg8uL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61v41snCWdL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61AuLhf3jRL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Package Dimensions: 32.28 x 22.71 x 11.91 cm; 240 Grams",
            "Date First Available: 8 January 2024",
            "ASIN: B097R5H62C",
            "Item model number: 32.99256",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'on',
        name: 'Cloudflyer',
        amazonLink: 'https://www.amazon.ae/ON-Cloudflyer-Black-White-5-5/dp/B0728J11RT/ref=sr_1_110?crid=WANHH5HRH1DE&keywords=on+shoes&qid=1706117102&refinements=p_89%3AOn&rnid=15703921031&s=fashion&sprefix=on+shoe%2Caps%2C131&sr=1-110',
        price: 255.35,
        sizes: [5.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/617XfNiODKL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/81fJigZVKHL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/61Lk-wuUdeL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/71DQHGY5pTL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/71W1UXdMlTL._AC_SX695_.jpg',
                ]
            }
        ],
        details: [
            "Closure type: Lace-Up"
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'on',
        name: 'Cloud X 3',
        amazonLink: 'https://www.amazon.ae/Running-Cloud-Shift-Womens-Trainers/dp/B0BS1DB556/ref=sr_1_200?crid=WANHH5HRH1DE&keywords=on%2Bshoes&qid=1706117839&refinements=p_89%3AOn&rnid=15703921031&s=fashion&sprefix=on%2Bshoe%2Caps%2C131&sr=1-200&th=1',
        price: 416.62,
        sizes: [7,8,9,10],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/61Z7s6PcyyL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61bZTeZm9-L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61p95hLRREL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61xH2U-m8kL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Closure type Lace-Up",
            "Ultra-light comfort and strong performance – designed for those who want to stay in motion and do not want to stand still",
            "ULTRA LIGHT COMFORT & STRONG PERFORMANCE - Designed for those who stay in motion and don't want to stand still.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'on',
        name: 'Cloud 5',
        amazonLink: 'https://www.amazon.ae/Cloud-Black-black-7-5-US/dp/B0CB5YJHK6/ref=sr_1_220?crid=WANHH5HRH1DE&keywords=on+shoes&qid=1706117839&refinements=p_89%3AOn&rnid=15703921031&s=fashion&sprefix=on+shoe%2Caps%2C131&sr=1-220',
        price: 297.31,
        sizes: [7.5],
        colors: ['green'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/51kBgD8BlmL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51JO14Rb-8L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51W7-o00S6L._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61kTl8OLUiL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Closure type Lace-Up",
            "Brand: On",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'on',
        name: 'Cloudace',
        amazonLink: 'https://www.amazon.ae/Cloudace-Black-Eclipse-10/dp/B08XXJF7W2/ref=sr_1_348?crid=WANHH5HRH1DE&keywords=on+shoes&qid=1706118801&refinements=p_89%3AOn&rnid=15703921031&s=fashion&sprefix=on+shoe%2Caps%2C131&sr=1-348',
        price: 338.42,
        sizes: [10],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/51rANiu4U0L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/61A5jJr4eIL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/51dcWE1xDaL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/61pLIbFdnbL._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/51xyGoZ8k0L._AC_SX695_.jpg',
                    'https://m.media-amazon.com/images/I/6163XJWCUnL._AC_SX695_.jpg'
                ]
            }
        ],
        details: [
            "Brand: on",
            "Closure Type: Lace-Up"
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'on',
        name: 'Cloud 5',
        amazonLink: 'https://www.amazon.ae/Sneakers-Stellar-Eclipse-Footwear-Numeric/dp/B0BQR6TL5B/ref=sr_1_351?crid=WANHH5HRH1DE&keywords=on%2Bshoes&qid=1706118801&refinements=p_89%3AOn&rnid=15703921031&s=fashion&sprefix=on%2Bshoe%2Caps%2C131&sr=1-351&th=1',
        price: 217.76,
        sizes: [6.5,7.5,8.5,9.5,10.5,12.5],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/I/61GdByUWKaL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61xALtgICeL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/51HfA9B-3bL._AC_SY695_.jpg',
                    'https://m.media-amazon.com/images/I/61S7gIiPoaL._AC_SY695_.jpg'
                ]
            }
        ],
        details: [
            "Material composition Textile Synthetic",
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Mesh",
            "Fabric: Mesh",
            "Rubber sole",
            "Cushioned collar and tongue, Removable insole, Reflective accents",
            "Lace-up closure",
            "Round toe",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Ghost 15 GTX',
        amazonLink: 'https://www.amazon.com/Brooks-Ghost-Waterproof-Neutral-Running/dp/B0BMT37ZNQ/ref=sr_1_31?crid=2N56AUR4Y44XQ&keywords=brooks%2Bshoes&qid=1706985663&sprefix=brooks%2Bshoe%2Caps%2C601&sr=8-31&th=1',
        badges: ['new'],
        price: 169.95,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81vjR4voFWL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71Kzqi51pKL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81cz6S3kRYL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/817K44b-JjL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81C+yc6i2BL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71iupa+SdLL._AC_SL1500_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Fabric-and-synthetic",
            "OriginM ade in the USA or Imported",
            "Sole material Rubber",
            "Shaft height Ankle Strap",
            "THIS MEN'S SHOE IS FOR: Runners looking for a smooth ride that won’t distract from the fun of the run. The Ghost 15 GTX offers a refined 3D Fit Print to create a more seamless, secure fit and waterproof protection. This Brooks Ghost 15 GTX is a certified PDAC A5500 Diabetic shoe and has been granted the APMA Seal of Acceptance.",
            "WATERPROOF AND CUSHION: The Ghost 15 GTX offers neutral support while providing high energizing cushioning and GORE-TEX waterproof protection. Ideal for road running, cross training, the gym or wherever you might want to take them!",
            "BALANCED, SOFT CUSHIONING: New midsole features soft and lighter-weight DNA LOFT V2 cushioning to provide distraction free cushioning under your feet with each stride.",
            "SMOOTH, STABLE RIDE: No matter how your foot lands, our soft midsole and Segmented Crash Pad - an integrated system of shock absorbers - team up for easy flow from landing to toe-off.",
            "ENHANCED UPPER: Engineered air mesh upper provides comfort and breathability with 3D Fit Print for added structure.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Veloce Rock',
        amazonLink: 'https://www.amazon.com/SCARPA-Womens-Veloce-Climbing-Maldive/dp/B083RF5Z7M?ref_=ast_sto_dp&th=1&psc=1',
        price: 138.94,
        sizes: [5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
        colors: ['beige'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'beige',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/619J9gtNA5L._AC_SL1400_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61-XnqiVFzL._AC_SL1364_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61pr1vGcL3L._AC_SL1396_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61GPejlkqRL._AC_SL1389_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/715s5hE63LL._AC_SL1500_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material S-72 (4mm)",
            "Outer material Rubber",
            "Closure type Hook & Loop",
            "Gym-Ready | With a wide toe-box and breathable construction, SCARPA designed the Veloce for intermediate to advanced climbers looking for a more technical shoe that’s comfortable for long sessions in the gym.",
            "Women’s Last | These climbing shoes feature a more narrow last and lower-volume heel cup for a women’s-specific fit.",
            "S-72 Rubber | This ultra-soft rubber conforms to the shape of almost any foothold for increased surface area and greater friction.",
            "Relaxed Performance Fit | With more room near the 4th and 5th toes, this new last from SCARPA provides a comfortable fit and reduces foot fatigue without limiting the power driven towards your big toe.",
            "Pressure Absorbing Fit | By wrapping the heel in a thinner layer of rubber and breaking the rand over the Achilles tendon, SCARPA gave the Vapor a comfortable fit that doesn’t skimp on performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Quantix SF',
        amazonLink: 'https://www.amazon.com/SCARPA-Womens-Quantix-Climbing-Shoes/dp/B0B6LNL5CH?ref_=ast_sto_dp&th=1&psc=1',
        price: 198.5,
        sizes: [4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9],
        colors: ['teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71F0Ic159-L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61gjmyaE4pL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/613J7TBcUPL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/51ly-clpMqL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61IIOJ6n6UL._AC_SL1500_.jpg',
                ]
            }
        ],
        details: [
            "Care instructionsMachine Wash",
            "Sole material Vibram",
            "Outer material Rubber",
            "Closure type Hook & Loop",
            "EU Size: 40.5 – US Size: 8.5-9 Women/7.5-8 Men | Versatility Expert | With a subtle downturn, supportive midsole, and fast break-in time, the Quantix SF blends comfort and performance for everything from gym climbing to outdoor sport routes.",
            "SF Tension System | This rubber rand wraps the shoe from below, starting from the toe area, to keep your foot in a performance position and ensure your new climbing shoe maintains its shape over time.",
            "Women’s Last | This climbing shoe features a more narrow last and lower-volume heel cup for a women’s-specific fit.",
            "Vibram XS Grip 2 Rubber | Ideal for any rock type, the XS Grip 2 rubber is both stiff and sticky, giving you the grip you need for steeper walls and overhanging boulders.",
            "Sizing Advice – Synthetic climbing shoes should fit snugly and will not stretch much over time. An ideal fit should have no dead space out of the box. Use the sizing chart in the product images or description to find your size, then downsize ½ to 2 sizes for premium performance.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Mago Lace',
        amazonLink: 'https://www.amazon.com/SCARPA-Mago-Climbing-Shoe-Bright/dp/B07TVWGYRN?ref_=ast_sto_dp&th=1&psc=1',
        price: 218.95,
        sizes: [6,6.5,7,7.5,8],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/51zXgy7ZWLL._AC_SL1200_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61g0b2MS6lL._AC_SL1200_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/51BrxXq1pAL._AC_SL1200_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/513xLdra15L._AC_SL1200_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/51w1TKHgP+L._AC_SL1200_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/51p+Tuw0PNL._AC_SL1200_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/51bUydpXPsL._AC_SL1200_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Vibram",
            "Outer material Rubber",
            "Closure type Lace-Up",
            "The Sport Specialist | With an aggressive downturned profile, innovative materials, and a supportive, lace-up design, the Mago is purpose-built to push your limits on steep sport routes.",
            "Toe Power Support | A supportive insert under the forefoot provides increased power, improved pulling, and a more precise feel on small footholds.",
            "Vibram XS Grip 2 Rubber | This stiff and sticky high-performance rubber delivers maximum grip for technical footwork on overhanging climbs.",
            "X-Tension System | Highly charged randing lifts the heel while supporting the arch and forefoot to focus power towards your big toe.",
            "Improved Upper | Microfiber and Alcantara upper is breathable, soft next to skin, and delightfully lightweight.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'climbing',
        brand: 'scarpa',
        name: 'Origin',
        amazonLink: 'https://www.amazon.com/SCARPA-Origin-Womens-Climbing-Shoes/dp/B08TJ1VL8K?ref_=ast_sto_dp&th=1',
        price: 212.11,
        sizes: [5.5,7,7.5],
        colors: ['teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71FjREUnrSL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71mCQ5G0uAL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61TotoY63tL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71KQ-XohFSL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61lMza4kStL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61K3w91YAgL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/611Yfoc7+RL._AC_SL1500_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Synthetic",
            "Outer material Synthetic",
            "Inner material Manmade",
            "Origin provides an ideal introduction to climbing.",
            "With a flat bottom profile",
            "Vision TM sticky but durable rubber sole",
            "A plush leather upper that gives the luxurious padded feel",
            "Detail that is rarely found in a shoe designed for newer climbers",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Glycerin StealthFit 20',
        amazonLink: 'https://www.amazon.com/Brooks-Glycerin-StealthFit-Neutral-Running/dp/B09MGCPPVC/ref=sr_1_18?crid=2YXXOJCMHA5O0&keywords=brooks%2Bshoes&qid=1707072946&sprefix=brooks%2Bshoe%2Caps%2C547&sr=8-18&th=1',
        price: 121.99,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        colors: ['lightblue','black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'lightblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81yFUD2FPtL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81a8ERUomGL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81O6AxfptUL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/810HOccQBoL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81BnxwnGBzL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81biFRAthOL._AC_SL1500_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81LJNoPTGyL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81RsXUyKclL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81BlnJKkRtL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81ub-Nep4jL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81bWxDNFNqL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81FVyJzJzTL._AC_SL1500_.jpg',
                ]
            }
        ],
        details: [  
            "Fabric type 100% Synthetic",
            "Care instructions Machine Wash",
            "Origin Made in the USA or Imported",
            "Sole material Manmade",
            "THIS WOMEN’S SHOE IS FOR: The Glycerin StealthFit 20 is for runners who want a close-to-foot fit and extreme softness in every step — so they can get lost in the comfortable ride and run distraction-free.",
            "SUPREME SOFTNESS: Featuring nitrogen-infused DNA LOFT v3, our softest cushioning optimized to be lightweight, responsive, and durable with plush comfort.",
            "SECURE, ADAPTABLE FIT: New StealthFit construction introduces an adaptable, closer fit with a Fit Knit upper which provides seamless structure and breathability that adapts to the movements of your foot.",
            "SMOOTH TRANSITIONS: Redesigned midsole and outsole offer a widened platform for smoother and even easier transitions.",
            "BREATHABILITY: Fit Knit upper provides a seamless fit that allows for maximum breathability to keep your feet comfortable and cool.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Hyperion Max',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Hyperion-Neutral-Running/dp/B0CH1QMJ9X/ref=sr_1_38?crid=2YXXOJCMHA5O0&keywords=brooks%2Bshoes&qid=1707072946&sprefix=brooks%2Bshoe%2Caps%2C547&sr=8-38&th=1',
        price: 169.95,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13],
        colors: ['green','white','orange'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'green',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81ZyhlDTDgL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/91M+DKzXrjL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81HdFPUfC3L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81bkpygY4fL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81+HdTe5F9L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81ndN+X-BZL._AC_SL1500_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61-S5DeqHWL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61GFZsNa6xL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61xRtc8H27L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61Z3gA8BHKL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71TAOAWtGbL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71MD3sss90L._AC_SL1500_.jpg',
                ]
            },
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'orange',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71skVexw7ML._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81w9otGqUuL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71lJgFleLdL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/714tHHVFeqL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81mQyQVrdnL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/717oJtaLrxL._AC_SL1500_.jpg',
                ]
            }
        ],
        details: [
            "Fabric type Fabric-and-synthetic",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Caucho",
            "THIS MEN’S SHOE IS FOR: The Hyperion Max provides neutral support for runners who want to train their fastest and need performance gear to get them ready for race day.",
            "SOFT CUSHIONING: The midsole is configured with nitrogen-infused, lightweight DNA FLASH cushioning that is highly responsive and returns energy while adapting to your stride.",
            "SECURE FIT: The stretch woven upper and 3D Fit Print provide extra structure to hold your foot in place while also providing optimum airflow.",
            "PROTECTION: Outfitted with substantial midsole foam to help absorb impact through your toughest workouts — so you can take on another hard training session sooner.",
            "QUICK TRANSITIONS: The heel and toe of the midsole are uniquely curved to propel you forward while the Green Rubber outsole helps with fast, effortless transitions.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Revel 5',
        amazonLink: 'https://www.amazon.com/Brooks-Womens-Revel-Neutral-Running/dp/B09FTN224Q/ref=sr_1_57?crid=2YXXOJCMHA5O0&keywords=brooks%2Bshoes&qid=1707072994&sprefix=brooks%2Bshoe%2Caps%2C547&sr=8-57&th=1',
        price: 95.01,
        sizes: [5.5,6,6.5,7,7.5,8],
        colors: ['blue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'blue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/813SgRdNJDL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81pB0TdmpTL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81atiChkwQL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81Yl-njHTVL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81F7AO6T4sL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81OnV1aJvpL._AC_SL1500_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Rubber",
            "THIS WOMEN'S SHOE IS FOR: For runners looking for a versatile shoe that’s springy on the run, stylish off the run, and comfortable for the long run. Styled to perform, the Revel 5 delivers a springy ride and all-day comfort. We recommend ordering Brooks running shoes 1/2 to one size larger than your dress shoe.",
            "BALANCED, SOFT CUSHIONING: BioMoGo DNA cushioning adapts to your stride, weight, and speed to help protect you by deflecting impact away from your body.",
            "QUICK TRANSITIONS: The arrow-point pattern in the outsole lets your foot move from heel to toe quickly. Our Green Rubber outsole puts a spring in each step.",
            "FRESH LOOK: The updated Fit Knit upper provides versatility and style with a comfortably secure fit.",
            "REFRESHED UPPER: The Engineered Air Mesh and 3D Fit Print on the upper create the right blend of stretch and structure for supreme comfort and stability.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Ravenna 11',
        amazonLink: 'https://www.amazon.com/Brooks-Womens-Ravenna-Running-Shoe/dp/B07VXWLMVV/ref=sr_1_102?crid=2YXXOJCMHA5O0&keywords=brooks%2Bshoes&qid=1707073850&sprefix=brooks%2Bshoe%2Caps%2C547&sr=8-102&th=1',
        price: 144.55,
        sizes: [5,5.5,6,6.5,7,8.5,10.5,12],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/917s-qzcrGL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81tmXqN7pNL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81SL-55jlkL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81heM-274+L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81tZP-psMYL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/810uYdl13tL._AC_SL1500_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Canvas",
            "Inner material Manmade",
            "THIS WOMEN'S SHOE IS FOR: The Ravenna 11 is perfect for runners who want a lightweight, supportive shoe that straddles the line between training and racing.",
            "SUPPORT AND CUSHION: Provides just the right amount of stability and support, great for overpronation while providing a lightweight, flexible and responsive cushioning. Ideal for road running, cross training, the gym or wherever you might want to take them! Predecessor: Ravenna 10",
            "FAST CUSHIONING: BioMoGo DNA midsole cushioning and rebounding rubber deliver comfort without adding extra weight - perfect for days when you’re working on your speed.",
            "HOLISTIC SUPPORT: We've shifted our focus beyond the feet to the most injury-prone part of a runner's body: the knees. GuideRails support keeps you moving comfortably by keeping excess movement in check.",
            "QUICK TRANSITIONS: The Midfoot Transition Zone is shaped to go from heel to toe quickly.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'running',
        brand: 'brooks',
        name: 'Launch 7',
        amazonLink: 'https://www.amazon.com/Brooks-Womens-Launch-Running-Shoe/dp/B0828C7VND/ref=sr_1_105?crid=2YXXOJCMHA5O0&keywords=brooks%2Bshoes&qid=1707073850&sprefix=brooks%2Bshoe%2Caps%2C547&sr=8-105&th=1',
        price: 188.51,
        sizes: [6,6.5,7,7.5,8,8.5,9,9.5,10,11],
        colors: ['teal'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'teal',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/91vJrZba0PL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81EEmiP9oBL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/91qpV1xJvcL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/817tniBEncL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/915njTPXPcL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81WVAMQPT2L._AC_SL1500_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Sole material Rubber",
            "Outer material Canvas",
            "Inner material Manmade",
            "THIS WOMEN'S SHOE IS FOR: The Launch 7 is perfect for runners who want a streamlined, race-ready shoe that still has enough cushioning for everyday training.",
            "SUPPORT AND CUSHION: The neutral support type provideds lightweight, flexible and responsive cushioning. Ideal for road running, cross training, the gym or wherever you might want to take them! Predecessor: Launch 6",
            "FAST CUSHIONING: BioMoGo DNA midsole cushioning and rebounding rubber deliver comfort without adding extra weight - perfect for days when you’re working on your speed.",
            "LIGHTWEIGHT FIT: The one-piece mesh upper and internal bootie are so light and breezy, they feel like they’re not even there.",
            "QUICK TRANSITIONS: The Midfoot Transition Zone is shaped to go from heel to toe quickly.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'hiking',
        brand: 'brooks',
        name: 'Cascadia 14',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Cascadia-Grey-Navy/dp/B07LCX56CP/ref=sr_1_97?crid=2RXWFB2MDIQ77&keywords=brooks%2Bshoes&qid=1707074531&rnid=2941120011&s=apparel&sprefix=brooks%2Bshoes%2Caps%2C529&sr=1-97&th=1',
        badges: ['best seller'],
        price: 189.16,
        sizes: [7,8,8.5,9,9.5,10,10.5,11],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71BnK-FFTML._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71nX-8EgnrL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71uaWALKCZL._AC_SL1239_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71Dc255Mu0L._AC_SL1267_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71kCye4z-yL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81Mv5idrPqL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81Ar4SZAgZL._AC_SL1500_.jpg'
                ]
            }
        ],
        details: [
            "Sole material Rubber",
            "Outer material Canvas",
            "Inner material Manmade",
            "Closure type Snare",
            "Rubber sole",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'running',
        brand: 'brooks',
        name: 'Revel 4',
        amazonLink: 'https://www.amazon.com/Brooks-Mens-Revel-Running-Shoe/dp/B08BVYBQYG/ref=sr_1_69?crid=2RXWFB2MDIQ77&keywords=brooks%2Bshoes&qid=1707074504&rnid=2941120011&s=apparel&sprefix=brooks%2Bshoes%2Caps%2C529&sr=1-69&th=1',
        badges: ['best seller'],
        price: 159.74,
        sizes: [7,7.5,8,8.5,9,9.5,10,10.5],
        colors: ['darkblue'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'darkblue',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81LUDZs9f2L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81NWsZPV4qL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81xM2V7EfxL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/810xAyQoJEL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81xRx8NJy0L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81bhSzW3BWL._AC_SL1500_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Hand Wash Only",
            "Sole material Rubber",
            "Outer material Canvas",
            "Inner material Canvas",
            "THIS MEN'S SHOE IS FOR: For runners looking for a shoe with modern looks and performance features to make running feel springy and fun, the Revel 4 delivers all-day versatility with a responsive feeling perfect for putting in miles on the road.",
            "BALANCED, SOFT CUSHIONING: BioMoGo DNA cushioning adapts to your stride, weight, and speed to help protect you by deflecting impact away from your body.",
            "QUICK TRANSITIONS: An updated arrow-point pattern in the outsole lets your foot move from heel to toe quickly.",
            "FRESH LOOK: The Fit Knit upper provides a fashion-forward aesthetic with a secure, distraction-free fit.",
            "WEAR TESTERS SAY: “The shape of the shoe promotes a fluid motion from forefoot striking to toe-off. I am running quickly in them without much extra effort and the ride is a good contributor to that.",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'cross training',
        brand: 'on',
        name: 'Cloud X',
        amazonLink: 'https://www.amazon.com/Cloud-Alloy-Niagara-12-5/dp/B098NK1ZGT/ref=sr_1_10?crid=16BCSOA2UQNEN&keywords=on+shoes&qid=1707132386&refinements=p_89%3AOn&rnid=2528832011&s=apparel&sprefix=on+sho%2Caps%2C841&sr=1-10',
        price: 139.94,
        sizes: [12.5],
        colors: ['grey'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'grey',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81SNK89bETL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/717Tp3HpaAL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71cVwWBOpBL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71oa1DTfH3L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71nBLX-PhTL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71Dny6oBXZL._AC_SL1500_.jpg',
                ]
            }
        ],
        details: [
            "Closure type Lace-Up",
            "Water resistance level Not Water Resistant",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'men',
        category: 'hiking',
        brand: 'on',
        name: 'Cloudnova',
        amazonLink: 'https://www.amazon.com/Cloudnova-Sneakers-Eclipse-Green-Medium/dp/B0BN8T3J6X/ref=sr_1_59?crid=16BCSOA2UQNEN&keywords=on%2Bshoes&qid=1707132416&refinements=p_89%3AOn&rnid=2528832011&s=apparel&sprefix=on%2Bsho%2Caps%2C841&sr=1-59&th=1',
        price: 233.53,
        sizes: [7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14],
        colors: ['sienna'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'sienna',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71mwho7F6nL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71U-ha0JlvL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71w7whEvlaL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71-e3i3lAzL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71SJK00p5bL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61jj6bzVs4L._AC_SL1500_.jpg'
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Suede, Rubber",
            "Closure type Lace-Up",
            "Man-made sole",
            "Padded collar and footbed, Reflective logo details, Perforated panels, Engineered for the needs of multi-functional athletes and everyday wear, Ultra lightweight design, Connected CloudTec cushions at outsole, Removable insole",
            "Lace-up closure",
            "Round toe",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'on',
        name: 'Cloudvista',
        amazonLink: 'https://www.amazon.com/Womens-Cloudvista-Sneakers-Black-Medium/dp/B098NK2YFV/ref=sr_1_95?crid=16BCSOA2UQNEN&keywords=on%2Bshoes&qid=1707132444&refinements=p_89%3AOn&rnid=2528832011&s=apparel&sprefix=on%2Bsho%2Caps%2C841&sr=1-95&th=1',
        badges: ['best seller'],
        price: 190.30,
        sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],
        colors: ['white'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'white',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/615sdkW6Q7L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71VYz8JvdiL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61zvmjLQ7sL._AC_SL1439_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/610BuftZdaL._AC_SL1479_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61U-sSXt7EL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/610G5MT-+oL._AC_SL1500_.jpg',
                ]
            }
        ],
        details: [
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Outer material Mesh",
            "Fabric: Performance mesh",
            "Rubber sole",
            "Reflective accents, Lightweight design, Cushioned collar and super-soft insole, Perforated tongue, Rigid trail running sole",
            "Lace-up closure",
            "Round toe",
        ]
    },
    {
        id: uuidv4().toString().replace(/-/g, ''),
        gender: 'women',
        category: 'cross training',
        brand: 'on',
        name: 'Cloud 5',
        amazonLink: 'https://www.amazon.com/Cloudflow-Mens-Running-Shoes-black/dp/B08TWF994M/ref=sr_1_1?crid=16BCSOA2UQNEN&keywords=on+shoes&qid=1707133249&refinements=p_89%3AOn&rnid=2528832011&s=apparel&sprefix=on+sho%2Caps%2C841&sr=1-1',
        badges: ['best seller'],
        price: 178.95,
        sizes: [5.5],
        colors: ['black'],
        images: [
            {
                id: uuidv4().toString().replace(/-/g, ''),
                color: 'black',
                imagesUrls: [
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71htUPht7mL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71loY6rW1sL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71ZFot4f65L._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71Mi6jOOopL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71+o9s+uVnL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/712+wdkyWpL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71fojVHyVOL._AC_SL1500_.jpg'
                ]
            }
        ],
        details: [
            "Fabric type Mesh",
            "Care instructions Machine Wash",
            "Origin Imported",
            "Sole material Rubber",
            "Fabric: Mesh",
            "Rubber sole",
            "Cushioned collar and tongue, Removable insole, Reflective accents",
            "Lace-up closure",
            "Round toe",
        ]
    }
]