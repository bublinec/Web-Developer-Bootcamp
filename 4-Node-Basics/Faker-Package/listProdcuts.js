var faker = require("faker/locale/sk");

for(var i = 0;i<20;i++){
    console.log(faker.commerce.productName() + '\t\t' +  faker.commerce.price() + '$');
}