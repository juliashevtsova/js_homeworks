var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";

function price() {
    let total = 0;
    for (let service in services) {
        let cost = services[service]; 
        cost = parseInt(cost);
        total += cost; 
    }
    return total + " грн"; 
}

function minPrice() {
    let min = 1000000; 
    for (let service in services) {
        let cost = services[service];
        cost = parseInt(cost); 
        if (cost < min) {
            min = cost; 
        }
    }
    return min + " грн"; 
}

function maxPrice() {
    let max = 0; 
    for (let service in services) {
        let cost = services[service];
        cost = parseInt(cost);
        if (cost > max) {
            max = cost; 
        }
    }
    return max + " грн"; 
}

console.log("Загальна вартість: " + price());
console.log("Мінімальна ціна: " + minPrice());
console.log("Максимальна ціна: " + maxPrice());
