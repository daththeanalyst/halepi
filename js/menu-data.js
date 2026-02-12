/* ============================================================
   HALEPI RESTAURANT — MENU DATA
   Complete menu from the official Halepi menu.
   ============================================================ */

const MENU_DATA = {
    currency: "\u00A3",
    coverCharge: 1.00,
    serviceCharge: "12.5%",

    categories: [
        {
            id: "starters",
            name: "Starters",
            description: "Traditional Greek and Cypriot hors d\u2019oeuvres, dips and salads",
            items: [
                { name: "Houmous", description: "Creamy chickpea and tahini dip", price: 8.00, priceLarge: 11.00, dietary: ["V"] },
                { name: "Melizanosalata", description: "Smoky aubergine dip", price: 8.00, priceLarge: 11.00, dietary: ["V"] },
                { name: "Taramasalata", description: "Smoked cod roe blended with lemon and olive oil", price: 8.00, priceLarge: 11.00, dietary: [] },
                { name: "Tzatziki", description: "Greek yoghurt with cucumber, garlic and mint", price: 8.00, priceLarge: 11.00, dietary: ["V"] },
                { name: "Tabouli", description: "Bulgur wheat with parsley, mint, tomato and lemon", price: 8.00, priceLarge: 11.00, dietary: ["V"] },
                { name: "Prawn Cocktail", description: "Classic prawn cocktail with Marie Rose sauce", price: 9.00, dietary: [] },
                { name: "Special Prawn Cocktail", description: "Premium prawn cocktail", price: 25.00, dietary: [] },
                { name: "Greek Sausages (Loukanika)", description: "Two traditional Cypriot sausages", price: 9.00, dietary: [] },
                { name: "Smoked Pork Fillet (Lounza)", description: "Thinly sliced smoked pork fillet", price: 9.00, dietary: [] },
                { name: "Chicken Wings", description: "Golden fried chicken wings", price: 15.00, dietary: [] },
                { name: "Halloumi", description: "Grilled Cypriot halloumi cheese", price: 10.00, dietary: ["V"], isPopular: true },
                { name: "Feta Cheese", description: "Traditional Greek feta", price: 10.00, dietary: ["V"] },
                { name: "Saganaki", description: "Pan-fried cheese flamb\u00e9ed with brandy", price: 10.00, dietary: ["V"], isPopular: true },
                { name: "Fasolia", description: "Butter beans in tomato sauce", price: 9.00, dietary: ["V"] },
                { name: "Spanakopita", description: "Spinach and feta in crispy filo pastry", price: 9.00, dietary: ["V"] },
                { name: "Beetroots", description: "Marinated beetroot salad", price: 9.00, dietary: ["V"] },
                { name: "Octopus Salad", description: "Tender octopus with olive oil and lemon", price: 17.00, priceLarge: 29.00, dietary: [] },
                { name: "Calamari (Fried)", description: "Lightly fried squid rings served with lemon", price: 17.00, priceLarge: 29.00, dietary: [], isPopular: true },
                { name: "Calamari (Grilled)", description: "Whole grilled squid with lemon and olive oil", price: 17.00, priceLarge: 29.00, dietary: [] },
                { name: "Lentil Salad", description: "Warm lentil salad with herbs", price: 9.00, dietary: ["V"] },
                { name: "Finely Chopped Salad", description: "Fresh finely chopped mixed salad", price: 8.00, priceLarge: 12.00, dietary: ["V"] },
                { name: "Dakos Salad", description: "Cretan barley rusk with tomato and feta", price: 8.00, priceLarge: 12.00, dietary: ["V"] },
                { name: "Greek Salad", description: "Tomato, cucumber, onion, olives, peppers and feta", price: 8.00, priceLarge: 12.00, dietary: ["V"], isPopular: true },
                { name: "Mixed Starter", description: "A generous selection of 8 pieces", price: 20.00, dietary: [] },
                { name: "Tomato & Feta with Red Onion Salad", description: "Fresh tomato, feta and red onion", price: 13.00, dietary: ["V"] },
                { name: "Ravioles with Halloumi", description: "Traditional Cypriot ravioles stuffed with halloumi", price: 12.00, dietary: ["V"] },
                { name: "Avgolemono Soup", description: "Traditional egg and lemon soup", price: 7.00, dietary: [] },
                { name: "Minestrone Soup", description: "Hearty vegetable soup", price: 7.00, dietary: ["V"] }
            ]
        },
        {
            id: "grill",
            name: "From the Grill",
            description: "Charcoal grilled, served with a choice of rice, potatoes or chips",
            items: [
                { name: "Lamb Kebab \u2014 4 Skewers", description: "Tender pieces of marinated lamb, charcoal grilled", price: 22.00, dietary: [], isPopular: true },
                { name: "Pork Kebab", description: "Marinated pork pieces, charcoal grilled", price: 22.00, dietary: [] },
                { name: "Sheftalia", description: "Traditional Cypriot pork and lamb sausages", price: 20.00, dietary: [] },
                { name: "Lamb Chops \u2014 5 Pieces", description: "Prime lamb chops, charcoal grilled", price: 30.00, dietary: [], isPopular: true },
                { name: "Milk Fed Lamb Chops", description: "Premium milk-fed lamb chops", price: 50.00, dietary: [] },
                { name: "Entrec\u00f4te Steak", description: "Charcoal grilled entrec\u00f4te", price: 32.00, dietary: [] },
                { name: "Mixed Grill", description: "A selection of lamb, chicken, pork and more", price: 32.00, dietary: [], isPopular: true },
                { name: "Spring Chicken", description: "Half chicken marinated and charcoal grilled", price: 20.00, dietary: [] },
                { name: "Fillet Steak", description: "Prime fillet steak, charcoal grilled", price: 35.00, dietary: [] },
                { name: "Ribeye Miguel Vergara", description: "300-day grain-fed ribeye, approx 1 kilo", price: 95.00, dietary: [], note: "Premium cut" },
                { name: "Veal Chop", description: "Charcoal grilled veal chop", price: 32.00, dietary: [] },
                { name: "Special Beef Kebab", description: "Premium beef kebab, charcoal grilled", price: 36.00, dietary: [] },
                { name: "Special Chicken Kebab", description: "Premium chicken kebab, charcoal grilled", price: 22.00, dietary: [] },
                { name: "Special Lamb Kebab", description: "Premium lamb kebab, charcoal grilled", price: 25.00, dietary: [] },
                { name: "Best Lamb on Spit (Souvla)", description: "Slow-roasted lamb on the spit", price: 29.00, dietary: [], isPopular: true },
                { name: "Chicken Souvla", description: "Chicken slow-roasted on the spit", price: 26.00, dietary: [] },
                { name: "Quail", description: "Charcoal grilled quail", price: 13.00, dietary: [], note: "Each" }
            ]
        },
        {
            id: "specialities",
            name: "Specialities",
            description: "Traditional Greek and Cypriot home-cooked dishes",
            items: [
                { name: "Kleftiko", description: "Baby lamb cooked with care in closed oven with aromatic spices, served with rice, potatoes or chips", price: 29.00, dietary: [], isPopular: true, note: "Signature dish" },
                { name: "Lahano Dolmades", description: "Stuffed kale with mince, finished with lemon egg sauce", price: null, dietary: [], note: "Ask for price" },
                { name: "Dolmades", description: "Stuffed vine leaves with minced lamb and rice", price: 21.00, dietary: [] },
                { name: "Mousaka", description: "B\u00e9chamel cream with minced lamb and sliced aubergines, oven baked", price: 21.00, dietary: [], isPopular: true },
                { name: "Afelia", description: "Pork fillet cooked in wine and spices with potatoes and rice", price: 27.00, dietary: [] },
                { name: "Meat Meze", description: "A selection of Greek specialities", price: 39.00, dietary: [], isPopular: true, note: "Min 2 persons \u00B7 per person" },
                { name: "Milk Fed Lamb Leg", description: "Whole leg of milk-fed lamb for two", price: 95.00, dietary: [], note: "For two" },
                { name: "Milk Fed Lamb Shoulder", description: "Whole shoulder of milk-fed lamb for two", price: 105.00, dietary: [] , note: "For two" },
                { name: "Milk Fed Lamb Rack", description: "Rack of milk-fed lamb for two", price: 105.00, dietary: [], note: "For two" },
                { name: "Katsigaki", description: "Milk-fed baby goat, half carcass", price: 135.00, dietary: [], note: "Half carcass" }
            ]
        },
        {
            id: "fish",
            name: "Fish",
            description: "All fish are wild and grilled, accompanied by vegetables. Priced on a daily basis",
            items: [
                { name: "Dover Sole", description: "Wild grilled Dover sole", price: null, dietary: [], note: "Market price" },
                { name: "Seabass", description: "Wild grilled whole seabass", price: null, dietary: [], note: "Market price" },
                { name: "Red Mullet", description: "Wild grilled red mullet", price: null, dietary: [], note: "Market price" },
                { name: "Turbot", description: "Wild grilled turbot", price: null, dietary: [], note: "Market price" },
                { name: "Red Sicilian Prawns", description: "Premium red Sicilian prawns", price: 10.00, dietary: [], note: "Each" },
                { name: "Tiger Prawns", description: "Charcoal grilled tiger prawns", price: 25.00, dietary: [], note: "Each" },
                { name: "Giant Prawns", description: "Large grilled prawns", price: 12.00, dietary: [], note: "Each" },
                { name: "Giant Scallops", description: "Diver-caught giant scallops", price: null, dietary: [], note: "Market price" },
                { name: "John Dory", description: "Wild grilled John Dory", price: null, dietary: [], note: "Market price" },
                { name: "Mixed Grill Fish", description: "A selection of grilled fish", price: 47.00, dietary: [] },
                { name: "Fish Meze with Shellfish", description: "An extensive selection of fish and shellfish", price: 52.00, dietary: [], isPopular: true, note: "Min 2 persons \u00B7 per person" }
            ]
        },
        {
            id: "chefs",
            name: "Chef\u2019s Selection",
            description: "House specialities prepared with care",
            items: [
                { name: "Lamb Casserole", description: "Baby lamb cooked with green beans in tomato sauce, served with rice", price: 29.00, dietary: [] },
                { name: "Beef Stifado", description: "Boneless beef cooked with shallots, served with rice", price: 27.00, dietary: [], isPopular: true },
                { name: "Kolokassi", description: "A traditional Cyprus stew", price: 27.00, dietary: [] },
                { name: "Beef Stroganoff", description: "Slices of fillet of beef in red wine with mushrooms, served with rice", price: 36.00, dietary: [] },
                { name: "Escalope Palliard", description: "Sliced veal in butter with white wine, topped with asparagus and potatoes", price: 29.00, dietary: [] },
                { name: "Escalope of Veal", description: "Breaded veal fried in butter, served with chips", price: 29.00, dietary: [] },
                { name: "Escalope of Chicken", description: "Breaded chicken fried in butter, served with chips", price: 29.00, dietary: [] },
                { name: "Scampi \u00e0 l\u2019Orange", description: "Fresh scampi fried in butter with orange and brandy sauce, served with rice", price: 38.00, dietary: [] },
                { name: "Steak Diane", description: "Fillet steak with red wine sauce and mushrooms, served with chips", price: 39.00, dietary: [], isPopular: true },
                { name: "Poisson Halepi", description: "John Dory in white wine sauce with mushrooms, basil, sage and dill, served with rice", price: 39.00, dietary: [], note: "House speciality" },
                { name: "Pepper Steak", description: "Fillet steak with mushrooms and black pepper, flamed in brandy and cream", price: 39.00, dietary: [] },
                { name: "Vegetarian Dish", description: "Ask your waiter for today\u2019s vegetarian option", price: 20.00, dietary: ["V"] }
            ]
        },
        {
            id: "sides",
            name: "Sides",
            description: "Accompaniments and vegetables \u2014 per portion",
            items: [
                { name: "French Fries", description: "Crispy golden chips", price: 5.00, dietary: ["V"] },
                { name: "Roast Potatoes", description: "Oven-roasted potatoes", price: 5.00, dietary: ["V"] },
                { name: "Rice", description: "Fluffy white rice", price: 5.00, dietary: ["V"] },
                { name: "Spinach", description: "Saut\u00e9ed spinach", price: 6.00, dietary: ["V"] },
                { name: "Green Beans", description: "Fresh green beans", price: 6.00, dietary: ["V"] },
                { name: "Mushrooms", description: "Saut\u00e9ed mushrooms", price: 6.00, dietary: ["V"] },
                { name: "Mixed Vegetables", description: "Seasonal mixed vegetables", price: 6.00, dietary: ["V"] },
                { name: "Asparagus", description: "Fresh asparagus", price: 8.00, dietary: ["V"] },
                { name: "Okra (Ladies Fingers)", description: "Traditional braised okra", price: 6.00, dietary: ["V"] }
            ]
        }
    ]
};

const WINE_DATA = {
    categories: [
        {
            name: "Champagne & Sparkling",
            items: [
                { name: "House Champagne", detail: "France", bottle: 44.00 },
                { name: "Mo\u00ebt & Chandon Imperial", detail: "Dry", bottle: 75.00, half: 39.00 },
                { name: "Veuve Clicquot", detail: "France", bottle: 79.00 },
                { name: "Laurent-Perrier", detail: "France", bottle: 79.00 },
                { name: "Laurent-Perrier Ros\u00e9", detail: "France", bottle: 120.00 },
                { name: "Dom P\u00e9rignon", detail: "Prestige Cuv\u00e9e", bottle: 200.00 },
                { name: "Prosecco Sparkling Wine", detail: "Italy", bottle: 29.00 },
                { name: "Prosecco 200ml", detail: "Italy \u2022 Small bottle", glass: 10.00 }
            ]
        },
        {
            name: "Greek Red",
            items: [
                { name: "House Red", detail: "Greece", bottle: 29.00, half: 15.00 },
                { name: "Hatzimichalis Cabernet Sauvignon", detail: "Vintage", bottle: 35.00, half: 18.00 },
                { name: "Avantis Estate Syrah", detail: "Agios Chronos", bottle: 42.00 },
                { name: "Boutari Grand Reserve", detail: "Greece", bottle: 42.00 },
                { name: "Boutari Naoussa", detail: "Macedonia", bottle: 32.00 },
                { name: "Nemea", detail: "Peloponnese \u2022 Agiorgitiko", bottle: 32.00 },
                { name: "Alpha Estate Xinomavro", detail: "Barba Yiannis \u2022 Old Vines 2021", bottle: 69.00 },
                { name: "Xinomavro Single Vineyard", detail: "Alpha Estate 2022", bottle: 49.00 },
                { name: "Malagouzia Single Vineyard", detail: "Alpha Estate", bottle: 49.00 },
                { name: "Malagouzia Single Block", detail: "Vintage \u2022 Alpha Estate", bottle: 59.00 },
                { name: "Tria Ampelia Pithari", detail: "Premium", bottle: 149.00 }
            ]
        },
        {
            name: "Greek White",
            items: [
                { name: "House White", detail: "Greece", bottle: 29.00, half: 18.00 },
                { name: "Retsina", detail: "Traditional resinated wine", bottle: 29.00, half: 18.00 },
                { name: "Santorini Vassaltis Assyrtiko", detail: "Santorini", bottle: 49.00 },
                { name: "Hatzimichalis Chardonnay", detail: "Greece", bottle: 35.00 },
                { name: "Hatzimichalis Dry White", detail: "Le Blanc", bottle: 35.00, half: 18.00 }
            ]
        },
        {
            name: "Cyprus Wines",
            items: [
                { name: "Aphrodite", detail: "Cyprus White", bottle: 32.00 },
                { name: "St. Panteleimon", detail: "Cyprus White", bottle: 32.00 },
                { name: "Zambartas Xynisteri", detail: "Cyprus White", bottle: 32.00 },
                { name: "Morokanella 2024", detail: "Cyprus White", bottle: 39.00 },
                { name: "Othello", detail: "Cyprus Red", bottle: 29.00 },
                { name: "Zambartas Kouvagia Shiraz", detail: "Cyprus Red", bottle: 30.00 }
            ]
        },
        {
            name: "French Red",
            items: [
                { name: "M\u00e9doc", detail: "Bordeaux", bottle: 39.00 },
                { name: "St Emilion", detail: "Bordeaux", bottle: 49.00, half: 28.00 },
                { name: "Margaux", detail: "Bordeaux", bottle: 120.00 },
                { name: "Nuits-Saint-Georges", detail: "Burgundy", bottle: 85.00 },
                { name: "Beaujolais Villages", detail: "Burgundy", bottle: 34.00 },
                { name: "Ch\u00e2teauneuf-du-Pape", detail: "Rh\u00f4ne", bottle: 69.00 }
            ]
        },
        {
            name: "French White & Ros\u00e9",
            items: [
                { name: "Meursault", detail: "Burgundy", bottle: 98.00 },
                { name: "Chassagne-Montrachet", detail: "Burgundy", bottle: 98.00 },
                { name: "Pouilly-Fuiss\u00e9", detail: "Burgundy", bottle: 59.00 },
                { name: "Chablis Premier Cru", detail: "Burgundy", bottle: 55.00, half: 30.00 },
                { name: "Sancerre", detail: "Loire", bottle: 49.00 },
                { name: "Domaine Gavoty Ros\u00e9", detail: "Provence", bottle: 36.00 }
            ]
        },
        {
            name: "Italian & Other",
            items: [
                { name: "Frascati", detail: "Italy \u2022 White", bottle: 32.00 },
                { name: "Bolla Valpolicella", detail: "Italy \u2022 Red", bottle: 32.00 },
                { name: "Chianti Bessi", detail: "Italy \u2022 Red", bottle: 32.00 },
                { name: "Pinot Grigio", detail: "Italy \u2022 White", bottle: 32.00 },
                { name: "Mateus Ros\u00e9", detail: "Portugal", bottle: 29.00 },
                { name: "La Tour Idyl\u00e9e", detail: "Portugal", bottle: 47.00 }
            ]
        },
        {
            name: "Beers",
            items: [
                { name: "Lager (Half Pint)", detail: "Draught", glass: 4.50 },
                { name: "Lager (Pint)", detail: "Draught", glass: 7.00 },
                { name: "Keo", detail: "Cyprus Beer", glass: 6.00 },
                { name: "Kronenbourg / Stella", detail: "Bottled", glass: 6.00 },
                { name: "Kaliber", detail: "Non-alcoholic", glass: 6.00 }
            ]
        },
        {
            name: "Spirits & Brandies",
            items: [
                { name: "Ouzo", detail: "Greek anise spirit", glass: 8.00 },
                { name: "Metaxa", detail: "Greek brandy", glass: 8.00 },
                { name: "R\u00e9my Martin", detail: "Cognac", glass: 8.00 },
                { name: "Courvoisier", detail: "Cognac", glass: 8.00 },
                { name: "Armagnac", detail: "French brandy", glass: 8.00 },
                { name: "Calvados", detail: "Apple brandy", glass: 8.00 },
                { name: "Grey Goose Vodka", detail: "Premium vodka", glass: 8.00 },
                { name: "Black Label", detail: "Scotch whisky", glass: 8.00 },
                { name: "Chivas Regal", detail: "Scotch whisky", glass: 8.00 },
                { name: "Jack Daniels", detail: "Tennessee whiskey", glass: 8.00 },
                { name: "Glenfiddich / Oban", detail: "Single malt", glass: 9.00 },
                { name: "Zivania", detail: "Cypriot spirit", glass: 8.00 }
            ]
        },
        {
            name: "Dessert Wine & By the Glass",
            items: [
                { name: "House Red or White", detail: "175ml glass", glass: 7.50 },
                { name: "Coburns Port", detail: "Dessert wine", glass: 7.50 },
                { name: "St. Johns Commandaria", detail: "Cyprus dessert wine", glass: 7.50 }
            ]
        },
        {
            name: "Soft Drinks",
            items: [
                { name: "Coca Cola / Lemonade / Bitter Lemon", detail: "Bottle", glass: 3.50 },
                { name: "Mineral Water (Small)", detail: "Still or sparkling", glass: 3.50 },
                { name: "Mineral Water (Large)", detail: "Still or sparkling", glass: 4.50 },
                { name: "Fruit Juice", detail: "Grapefruit, tomato, pineapple or apple", glass: 4.00 },
                { name: "Freshly Squeezed", detail: "Orange, apple, carrot or mixed", glass: 5.00 }
            ]
        }
    ]
};

const REVIEWS_DATA = [
    {
        text: "We went to Halepi last night. The salad was fresh, and all the stews were juicy, tender and comforting. A wonderful neighbourhood gem that we\u2019ll keep coming back to.",
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
        text: "Best Greek restaurant in London, hands down. The kleftiko melts in your mouth and the baklava is the perfect ending. We\u2019ve been coming here for over 20 years.",
        author: "James M.",
        source: "TripAdvisor",
        rating: 5
    }
];
