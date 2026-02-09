const users = [
    { name: "Alex", active: true, age: 20 },
    { name: "Sam", active: false, age: 25 },
    { name: "Gemini", active: true, age: 30 }
];
const activeUsers =users.filter(users => users.active);
const activeUserNames = activeUsers.map(users => users.name);
console.log(activeUserNames); 
