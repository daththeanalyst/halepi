/* ============================================================
   HALEPI RESTAURANT — MENU DATA
   Single source of truth for all menu content.

   NOTE: Prices assembled from public sources — verify all
   prices and items against the actual current menu before
   publishing the site.
   ============================================================ */

const MENU_DATA = {
    currency: "\u00A3",
    coverCharge: 2.00,
    serviceCharge: "12.5%",

    categories: [
        {
            id: "starters",
            name: "Starters & Dips",
            description: "Traditional Greek and Cypriot appetisers to share",
            items: [
                { name: "Houmous", description: "Creamy chickpea and tahini dip, drizzled with olive oil", price: 6.00, dietary: ["V", "GF"] },
                { name: "Taramasalata", description: "Smoked cod roe blended with lemon and olive oil", price: 6.00, dietary: ["GF"] },
                { name: "Tzatziki", description: "Greek yoghurt with cucumber, garlic and mint", price: 6.00, dietary: ["V", "GF"] },
                { name: "Saganaki", description: "Pan-fried kefalograviera cheese flamb\u00e9ed with brandy", price: 8.00, dietary: ["V"], isPopular: true },
                { name: "Spanakopita", description: "Spinach and feta cheese in crispy filo pastry", price: 5.00, dietary: ["V"] },
                { name: "Calamari", description: "Lightly fried squid rings served with lemon", price: 9.00, dietary: [], isPopular: true },
                { name: "Dolmades", description: "Vine leaves stuffed with rice, herbs and lemon", price: 6.00, dietary: ["V", "GF"] },
                { name: "Prawn Cocktail", description: "Classic prawn cocktail with Marie Rose sauce", price: 6.50, dietary: ["GF"] },
                { name: "Mixed Meze for Two", description: "A generous selection of our finest starters", price: 16.00, dietary: [], isPopular: true, note: "For 2 persons" }
            ]
        },
        {
            id: "salads",
            name: "Salads",
            description: "Fresh Mediterranean salads",
            items: [
                { name: "Greek Salad", description: "Tomato, cucumber, onion, olives, peppers and feta cheese", price: 9.00, dietary: ["V", "GF"], isPopular: true },
                { name: "Tabouli", description: "Bulgur wheat with parsley, mint, tomato and lemon dressing", price: 8.00, dietary: ["V"] },
                { name: "Halloumi Salad", description: "Grilled halloumi cheese on a bed of mixed leaves", price: 10.00, dietary: ["V", "GF"] }
            ]
        },
        {
            id: "grill",
            name: "From the Grill",
            description: "Charcoal grilled to perfection",
            items: [
                { name: "Lamb Kebab", description: "Tender pieces of marinated lamb, charcoal grilled", price: 15.00, dietary: ["GF"], isPopular: true },
                { name: "Chicken Kebab", description: "Marinated chicken breast pieces, charcoal grilled", price: 14.00, dietary: ["GF"] },
                { name: "Mixed Grill", description: "A selection of lamb, chicken and kofte, charcoal grilled", price: 20.00, dietary: ["GF"], isPopular: true },
                { name: "Spring Chicken", description: "Half chicken marinated in lemon and herbs, charcoal grilled", price: 15.00, dietary: ["GF"] },
                { name: "Lamb Cutlets", description: "Prime lamb cutlets, charcoal grilled with herbs", price: 18.00, dietary: ["GF"] },
                { name: "Souvlaki", description: "Skewered pieces of pork, charcoal grilled, served with pitta", price: 14.00, dietary: [], isPopular: true }
            ]
        },
        {
            id: "mains",
            name: "Main Courses",
            description: "Traditional Greek and Cypriot home-cooked dishes",
            items: [
                { name: "Kleftiko", description: "Baby lamb cooked slowly in a sealed oven with aromatic spices", price: 17.00, dietary: ["GF"], isPopular: true, note: "Signature dish" },
                { name: "Mousaka", description: "Layers of aubergine, minced lamb and b\u00e9chamel cream, oven baked", price: 15.00, dietary: [], isPopular: true },
                { name: "Dolmades", description: "Stuffed vine leaves with minced lamb and rice in egg-lemon sauce", price: 15.00, dietary: ["GF"] },
                { name: "Stifado", description: "Tender beef slowly braised with baby onions, cinnamon and red wine", price: 16.00, dietary: ["GF"] },
                { name: "Lamb Shoulder", description: "Slow-roasted whole lamb shoulder for sharing", price: null, dietary: ["GF"], isPopular: true, note: "Pre-order required \u2014 ask for price" }
            ]
        },
        {
            id: "fish",
            name: "Fish",
            description: "Fresh seafood dishes",
            items: [
                { name: "Grilled Sea Bass", description: "Whole sea bass, charcoal grilled with lemon and olive oil", price: 18.00, dietary: ["GF"] },
                { name: "Calamari Grilled", description: "Whole grilled squid with lemon and olive oil dressing", price: 16.50, dietary: ["GF"] },
                { name: "King Prawns", description: "Pan-fried king prawns in garlic, chilli and white wine", price: 18.00, dietary: ["GF"] }
            ]
        },
        {
            id: "vegetarian",
            name: "Vegetarian",
            description: "Plant-based Greek favourites",
            items: [
                { name: "Vegetarian Mousaka", description: "Layers of aubergine, courgette and potato in b\u00e9chamel sauce", price: 13.00, dietary: ["V"] },
                { name: "Imam Bayildi", description: "Stuffed aubergine with tomatoes, onions and herbs", price: 12.00, dietary: ["V", "GF"] },
                { name: "Halloumi & Vegetables", description: "Grilled halloumi with charcoal-grilled Mediterranean vegetables", price: 13.00, dietary: ["V", "GF"] }
            ]
        },
        {
            id: "sides",
            name: "Side Dishes",
            description: "Perfect accompaniments",
            items: [
                { name: "Rice", description: "Fluffy white rice", price: 3.50, dietary: ["V", "GF"] },
                { name: "French Fries", description: "Crispy golden chips", price: 3.50, dietary: ["V", "GF"] },
                { name: "Pitta Bread", description: "Warm freshly baked pitta", price: 2.00, dietary: ["V"] },
                { name: "Mixed Vegetables", description: "Seasonal vegetables saut\u00e9ed in olive oil", price: 4.00, dietary: ["V", "GF"] }
            ]
        },
        {
            id: "desserts",
            name: "Desserts",
            description: "Traditional sweet endings",
            items: [
                { name: "Baklava", description: "Layers of filo pastry with chopped nuts and honey syrup", price: 6.00, dietary: ["V"], isPopular: true },
                { name: "Cr\u00e8me Caramel", description: "Classic Greek-style cr\u00e8me caramel", price: 5.50, dietary: ["V", "GF"] },
                { name: "Turkish Delight & Parfait", description: "House-made Turkish delight with parfait ice cream", price: 6.00, dietary: ["V"] },
                { name: "Fresh Fruit", description: "Seasonal fresh fruit platter", price: 5.00, dietary: ["V", "GF"] },
                { name: "Greek Yoghurt with Honey", description: "Thick Greek yoghurt drizzled with thyme honey and walnuts", price: 5.50, dietary: ["V", "GF"], isPopular: true }
            ]
        }
    ]
};

const WINE_DATA = {
    categories: [
        {
            name: "House Wines",
            items: [
                { name: "House Red", detail: "Greece", glass: 5.50, bottle: 22.00 },
                { name: "House White", detail: "Greece", glass: 5.50, bottle: 22.00 },
                { name: "House Ros\u00e9", detail: "Greece", glass: 5.50, bottle: 22.00 }
            ]
        },
        {
            name: "Greek Wines",
            items: [
                { name: "Nemea Red", detail: "Peloponnese \u2022 Agiorgitiko", bottle: 28.00 },
                { name: "Assyrtiko", detail: "Santorini \u2022 Assyrtiko", bottle: 30.00 },
                { name: "Moschofilero", detail: "Mantinia \u2022 Moschofilero", bottle: 26.00 },
                { name: "Retsina", detail: "Attica \u2022 Savatiano", bottle: 20.00 }
            ]
        },
        {
            name: "Italian Wines",
            items: [
                { name: "Chianti Classico", detail: "Tuscany \u2022 Sangiovese", bottle: 28.00 },
                { name: "Pinot Grigio", detail: "Veneto \u2022 Pinot Grigio", bottle: 24.00 }
            ]
        },
        {
            name: "Dessert Wines",
            items: [
                { name: "Muscat of Samos", detail: "Samos, Greece", glass: 7.50 },
                { name: "Commandaria", detail: "Cyprus", glass: 8.00 }
            ]
        }
    ]
};

const REVIEWS_DATA = [
    {
        text: "We went to Halepi last night. The salad was fresh, and all the stews were juicy, tender and comforting. A wonderful neighbourhood gem that we'll keep coming back to.",
        author: "SW Cool",
        source: "Google",
        rating: 5
    },
    {
        text: "Charming Greek restaurant that nailed everything from appetizers to the main course to dessert. The atmosphere is warm and inviting, and the staff made us feel right at home.",
        author: "Abdulaziz Albastaki",
        source: "Google",
        rating: 5
    },
    {
        text: "The food at the restaurant was exceptionally delicious, especially the meats \u2014 truly outstanding. We ordered hummus and dolma as starters, and both were very good.",
        author: "Hashim Alshuber",
        source: "Google",
        rating: 5
    },
    {
        text: "Like stepping into a taverna in the heart of Greece. The mixed meze is incredible and the atmosphere is wonderfully authentic. The Kazolides family make you feel like part of their own.",
        author: "Sofia K.",
        source: "Google",
        rating: 5
    },
    {
        text: "Best Greek restaurant in London, hands down. The kleftiko melts in your mouth and the baklava is the perfect ending. We've been coming here for over 20 years.",
        author: "James M.",
        source: "TripAdvisor",
        rating: 5
    }
];
