const bannedUsers = new Set(["user1","user2"]);
const isBaned = (users) =>bannedUsers.has(users);
console.log(isBaned("user1"));
console.log(isBaned("user3"));
