
export type filterItemType = {"name": string | number, "isChecked": boolean}

export interface shopFiltersTypes {
    string: filterItemType[]
}

export const SHOP_FILTERS: Record<string, any> = {
    "all": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            },
            {
                "name": "women",
                "isChecked": false
            },
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "climbing",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            },
        ],
        "brand": [
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },

            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "scarpa",
                "isChecked": false
            },
            {
                "name": "black diamond",
                "isChecked": false
            },
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "red chili",
                "isChecked": false
            },
            {
                "name": "climb x",
                "isChecked": false
            },
            
            {
                "name": "under armour",
                "isChecked": false
            },
        ],
        "sizes": [
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 4,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 13.5,
                "isChecked": false
            },
            {
                "name": 14.5,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 3,
                "isChecked": false
            },
            {
                "name": 3.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
        ]
    },
    // men
    "men": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "climbing",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "black diamond",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            
            {
                "name": "nike",
                "isChecked": false
            },
            
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "scarpa",
                "isChecked": false
            },
            
            
            {
                "name": "puma",
                "isChecked": false
            },
            
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "red chili",
                "isChecked": false
            },
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "climb x",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
        ],
        "sizes": [
            {
                "name": '8',
                "isChecked": false
            },
            {
                "name": '8.5',
                "isChecked": false
            },
            {
                "name": '9',
                "isChecked": false
            },
            {
                "name": '9.5',
                "isChecked": false
            },
            {
                "name": '10',
                "isChecked": false
            },
            {
                "name": '10.5',
                "isChecked": false
            },
            {
                "name": '11',
                "isChecked": false
            },
            {
                "name": '7',
                "isChecked": false
            },
            {
                "name": '7.5',
                "isChecked": false
            },
            {
                "name": '11.5',
                "isChecked": false
            },
            {
                "name": '12.5',
                "isChecked": false
            },
            {
                "name": '13',
                "isChecked": false
            },
            {
                "name": '12',
                "isChecked": false
            },
            {
                "name": '15',
                "isChecked": false
            },
            {
                "name": '6',
                "isChecked": false
            },
            {
                "name": '6.5',
                "isChecked": false
            },
            {
                "name": '14',
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            }
        ]
    },
    "menrunning": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
        ],
        "sizes": [
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            }
        ]
    },
    "mencross training": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            }
        ]
    },
    "menclimbing": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "climbing",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "scarpa",
                "isChecked": false
            },
            {
                "name": "black diamond",
                "isChecked": false
            },
            {
                "name": "red chili",
                "isChecked": false
            },
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "climb x",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            }
        ]
    },
    "menhiking": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            }
        ]
    },

    "menbest seller": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "climbing",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "black diamond",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "climb x",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
        ]
    },
    "mennew": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            },
            {
                "name": "climbing",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "scarpa",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            }
        ]
    },
    "mensale": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            },
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            }
        ]
    },

    "menaltra": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "altra",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            }
        ]
    },

    "menasics": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            },
            {
                "name": "cross training",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "asics",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            }
        ]
    },
    "menbrooks": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "brooks",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            }
        ]
    },
    "mennike": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "nike",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            }
        ]
    },
    "mensalomon": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "hiking",
                "isChecked": false
            },
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "salomon",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            }
        ]
    },
    "menscarpa": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "climbing",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "scarpa",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            }
        ]
    },
    "menunder armour": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "under armour",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            }
        ]
    },

    // women
    "women": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "climbing",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            },
        ],
        "brand": [
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "scarpa",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "red chili",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "black diamond",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 4,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 3,
                "isChecked": false
            },
            {
                "name": 3.5,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            }
        ]
    },
    "womenbest seller": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            },
            {
                "name": "climbing",
                "isChecked": false
            },
        ],
        "brand": [
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "scarpa",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            }
        ]
    },
    "womennew": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            },
            {
                "name": "climbing",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "scarpa",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            }
        ]
    },
    "womensale": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            },
            {
                "name": "climbing",
                "isChecked": false
            },
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "red chili",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 4,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            }
        ]
    },

    "womenrunning": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            }
        ]
    },
    "womencross training": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            }
        ]
    },
    "womenclimbing": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "climbing",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "scarpa",
                "isChecked": false
            },
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "red chili",
                "isChecked": false
            },
            {
                "name": "black diamond",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 4,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 3,
                "isChecked": false
            },
            {
                "name": 3.5,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            }
        ]
    },
    "womenhiking": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            }
        ]
    },
    
    "womenasics": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "asics",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            }
        ]
    },
    "womencolumbia": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "columbia",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            }
        ]
    },
    "womenbrooks": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "brooks",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            }
        ]
    },

    "womenla sportiva": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "climbing",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "la sportiva",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 4,
                "isChecked": false
            },
            {
                "name": 3,
                "isChecked": false
            },
            {
                "name": 3.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            }
        ]
    },
    "womennew balance": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "new balance",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            }
        ]
    },
    "womennike": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "nike",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            }
        ]
    },
    "womenunder armour": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "under armour",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            }
        ]
    },

    // running
    "running": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            },
            {
                "name": "women",
                "isChecked": false
            },
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
        ],
        "sizes": [
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            }
        ]
    },
    "runningbest seller": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            },
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            }
        ]
    },
    "runningsale": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            },
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            }
        ]
    },
    "runningnew": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            },
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
        ],
        "sizes": [
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            }
        ]
    },
    
    // cross training
    "cross training": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            },
            {
                "name": "men",
                "isChecked": false
            },
            {
                "name": "cross training",
                "isChecked": false
            },
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 4,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
        ],
        "colors": [
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
        ]
    },
    "cross trainingbest seller": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            },
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
        ]
    },
    "cross trainingnew": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            },
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            }
        ]
    },
    "cross trainingsale": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            },
            {
                "name": "men",
                "isChecked": false
            },
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            }
        ]
    },

    // climbing
    "climbing": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            },
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "climbing",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "scarpa",
                "isChecked": false
            },
            {
                "name": "black diamond",
                "isChecked": false
            },
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "red chili",
                "isChecked": false
            },
            {
                "name": "climb x",
                "isChecked": false
            },
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 4,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 13.5,
                "isChecked": false
            },
            {
                "name": 14.5,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 3,
                "isChecked": false
            },
            {
                "name": 3.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            }
        ]
    },
    "climbingbest seller": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            },
            {
                "name": "women",
                "isChecked": false
            },
        ],
        "category": [
            {
                "name": "climbing",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "black diamond",
                "isChecked": false
            },
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "scarpa",
                "isChecked": false
            },
            {
                "name": "climb x",
                "isChecked": false
            },
        ],
        "sizes": [
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 3,
                "isChecked": false
            },
            {
                "name": 3.5,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 4,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            }
        ]
    },
    "climbingsale": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "climbing",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "red chili",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 4,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            }
        ]
    },
    "climbingnew": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            },
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "climbing",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "scarpa",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 4,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 13.5,
                "isChecked": false
            },
            {
                "name": 14.5,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            }
        ]
    },

    // hiking
    "hiking": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            },
            {
                "name": "women",
                "isChecked": false
            },
        ],
        "category": [
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            }
        ]
    },
    "hikingbest seller": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            },
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            }
        ]
    },
    "hikingsale": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            },
            {
                "name": "men",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            }
        ]
    },
    "hikingnew": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            },
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            }
        ]
    },

    // collections
    "best seller": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            },
            {
                "name": "women",
                "isChecked": false
            },
        ],
        "category": [
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            },
            {
                "name": "climbing",
                "isChecked": false
            },
        ],
        "brand": [
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "black diamond",
                "isChecked": false
            },
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "scarpa",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "climb x",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 3,
                "isChecked": false
            },
            {
                "name": 3.5,
                "isChecked": false
            },
            {
                "name": 4,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "yellow",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
        ]
    },
    "sale": {
        "gender": [
            {
                "name": "women",
                "isChecked": false
            },
            {
                "name": "men",
                "isChecked": false
            },
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            },
            {
                "name": "climbing",
                "isChecked": false
            },
            {
                "name": "running",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "puma",
                "isChecked": false
            },
            {
                "name": "la sportiva",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "red chili",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            }
        ],
        "sizes": [
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 4,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "beige",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            }
        ]
    },
    "new": {
        "gender": [
            {
                "name": "men",
                "isChecked": false
            },
            {
                "name": "women",
                "isChecked": false
            }
        ],
        "category": [
            {
                "name": "cross training",
                "isChecked": false
            },
            {
                "name": "climbing",
                "isChecked": false
            },
            {
                "name": "running",
                "isChecked": false
            },
            {
                "name": "hiking",
                "isChecked": false
            }
        ],
        "brand": [
            {
                "name": "under armour",
                "isChecked": false
            },
            {
                "name": "scarpa",
                "isChecked": false
            },
            {
                "name": "brooks",
                "isChecked": false
            },
            {
                "name": "salomon",
                "isChecked": false
            },
            {
                "name": "adidas",
                "isChecked": false
            },
            {
                "name": "on",
                "isChecked": false
            },
            {
                "name": "nike",
                "isChecked": false
            },
            {
                "name": "altra",
                "isChecked": false
            },
            {
                "name": "asics",
                "isChecked": false
            },
            {
                "name": "new balance",
                "isChecked": false
            },
            {
                "name": "columbia",
                "isChecked": false
            },
        ],
        "sizes": [
            {
                "name": 7,
                "isChecked": false
            },
            {
                "name": 7.5,
                "isChecked": false
            },
            {
                "name": 8,
                "isChecked": false
            },
            {
                "name": 8.5,
                "isChecked": false
            },
            {
                "name": 9,
                "isChecked": false
            },
            {
                "name": 9.5,
                "isChecked": false
            },
            {
                "name": 10,
                "isChecked": false
            },
            {
                "name": 10.5,
                "isChecked": false
            },
            {
                "name": 11,
                "isChecked": false
            },
            {
                "name": 11.5,
                "isChecked": false
            },
            {
                "name": 12.5,
                "isChecked": false
            },
            {
                "name": 13,
                "isChecked": false
            },
            {
                "name": 4,
                "isChecked": false
            },
            {
                "name": 4.5,
                "isChecked": false
            },
            {
                "name": 6.5,
                "isChecked": false
            },
            {
                "name": 12,
                "isChecked": false
            },
            {
                "name": 13.5,
                "isChecked": false
            },
            {
                "name": 14.5,
                "isChecked": false
            },
            {
                "name": 15,
                "isChecked": false
            },
            {
                "name": 5,
                "isChecked": false
            },
            {
                "name": 5.5,
                "isChecked": false
            },
            {
                "name": 6,
                "isChecked": false
            },
            {
                "name": 14,
                "isChecked": false
            }
        ],
        "colors": [
            {
                "name": "white",
                "isChecked": false
            },
            {
                "name": "black",
                "isChecked": false
            },
            {
                "name": "lightblue",
                "isChecked": false
            },
            {
                "name": "orange",
                "isChecked": false
            },
            {
                "name": "darkblue",
                "isChecked": false
            },
            {
                "name": "grey",
                "isChecked": false
            },
            {
                "name": "blue",
                "isChecked": false
            },
            {
                "name": "green",
                "isChecked": false
            },
            {
                "name": "teal",
                "isChecked": false
            },
            {
                "name": "slateblue",
                "isChecked": false
            },
            {
                "name": "sienna",
                "isChecked": false
            },
            {
                "name": "red",
                "isChecked": false
            },
            {
                "name": "pink",
                "isChecked": false
            }
        ]
    }
}