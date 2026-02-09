const browserhistory = [];
browserhistory.push("https://www.google.com/search?q=google.com");
browserhistory.push("https://www.youtube.com");
browserhistory.push("https://www.github.com");
const back = browserhistory.pop();
console.log(back);
console.log(browserhistory);