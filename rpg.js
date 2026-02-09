let inventory = [
    { item: "Sword", price: 100, weight: 5 },
    { item: "Potion", price: 20, weight: 1 },
    { item: "Shield", price: 50, weight: 10 },
    { item: "Rock", price: 0, weight: 2 }
];
const heavyLoot = inventory.filter( item => item.weight > 2);
const itemNames = inventory.map(item => item.item);
const totalValue =inventory.reduce((total,item)=> total + item.price, 0);
inventory.push({ item: "Gold", price: 500, weight: 1 });
console.log(heavyLoot);
console.log(itemNames);
console.log(totalValue);

