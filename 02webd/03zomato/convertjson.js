const fs = require('fs');
const restaurants = [];

for(let i=0;i<100;i++){

}

const jsonData = JSON.stringify(restaurants,null, 4);
fs.writeFileSync('arrayData.json',jsonData,'utf8');