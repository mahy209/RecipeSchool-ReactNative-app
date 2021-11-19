import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "Spaghetti With Shrimp Sauce",
        image: images.spagetti,
        duration: "30 mins",
        serving: 3,
        isBookmark: true,
        category: "Pasta",
        author: {
            profilePic: images.UserProfile2,
            name: "Rita Dexter",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.cheese,
                description: "Parmesan Cheese",
                quantity: "250g"
            },
            {
                id: 2,
                icon: icons.tomato,
                description: "Tomato Ketchup",
                quantity: "4 tsp"
            },
            {
                id: 3,
                icon: icons.pasta,
                description: "pasta",
                quantity: "1/2kg"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "shrimp",
                quantity: "1/2kg"
            },
            {
                id: 5,
                icon: icons.onion,
                description: "Dried Onion",
                quantity: "2 pcs"
            },
            {
                id: 6,
                icon: icons.butter,
                description: "molten butter",
                quantity: "250gm"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 2,
        name: "Chicken BQQ with salt vegetables",
        image: images.chickenBBQ,
        duration: "40 mins",
        serving: 4,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile3,
            name: "Adam oho",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile5
            },
            {
                id: 2,
                profilePic: images.UserProfile4
            },
            {
                id: 3,
                profilePic: images.UserProfile1
            },
            {
                id: 4,
                profilePic: images.UserProfile2
            },
            {
                id: 5,
                profilePic: images.UserProfile3
            }
        ]
    },

]

const categories = trendingRecipes

export default {
    trendingRecipes,
    categories
}