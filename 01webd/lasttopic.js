const restaurants = []
const images = ["first","second","third","fourth","fifth","sixth","seventh","eigth","ninth","tenth"]
const rest_names= [
    "The Golden Fork",
    "Café Delights",
    "Spice Symphony",
    "Blue Lagoon Grill",
    "Sushi Palace",
    "Mamma's Kitchen",
    "Bistro 21",
    "Taco Haven",
    "Bella Cucina",
    "Urban Bites",
    "Seafood Paradise",
    "Pasta Paradise",
    "The Green Table",
    "Grill & Thrill",
    "The Rustic Oven",
    "Chili's Grill & Bar",
    "Sunset Diner",
    "The Italian Garden",
    "Harvest Table",
    "Ocean Breeze Restaurant"
];

const food_types = [
    "Italian",
    "Mexican",
    "Chinese",
    "Indian",
    "Japanese",
    "American",
    "Mediterranean",
    "Thai",
    "French",
    "Lebanese"
];

const locations= [
    "Bara Imambara",
    "Chota Imambara",
    "Rumi Darwaza",
    "Ambedkar Park",
    "Hazratganj",
    "Lucknow Zoo",
    "Mankameshwar Mandir",
    "La Martiniere College",
    "Kaiserbagh Palace",
    "The Residency"
];


for(let i=0;i<100;i++){
const obj ={};
obj["image"]=images[Math.floor(Math.random()*10)];
obj["name"] =rest_names[Math.floor(Math.random()*20)];
obj["rating"]=Math.floor(Math.random()*5 + 1);
obj["food_type"]= food_types[Math.floor(Math.random()*10)];
obj["price"]= [Math.floor(Math.random()*2401 + 100)];
obj["location"]=locations[Math.floor(Math.random()*10)]
obj["distance"]=(Math.random()*10).toFixed(1);
obj["offers"] = Math.floor(Math.random()*30);
obj["alcohol"]= Math.random()>0.7  //70% me nhihoti 
obj["opentime"]=  Math.floor(Math.random()*24);
obj['close']  = (obj["opentime"]+12)%24;

restaurants.push(obj);
}

// JSON.stringify(restaurants);
console.log(restaurants);