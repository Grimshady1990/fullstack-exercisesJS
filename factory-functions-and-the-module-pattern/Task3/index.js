const Formatter = (function() {

    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const timesRun = [];
    
    const makeUppercase = (text) => {
        log("Making uppercase");
        timesRun.push(null);
        return text.toUpperCase();
    };

    return {
        makeUppercase,
        timesRun,
    }
})();

console.log(Formatter.makeUppercase("Fizwop"));
console.log(Formatter.makeUppercase("Fizwop"));
console.log(Formatter.makeUppercase("Fizwop"));

console.log(Formatter.timesRun.length);
