(function(){
    /**
     * @summary Request metrics on robblox (USE NODE.JS.)
     */
    fetch("http://metrics.roblox.com/");
    const metricbase = fetch("http://metrics.roblox.com/");
    const statusbase = fetch("https://games.roblox.com");
    const byline = require("./byline");
    async function children() {
        if ((await metricbase).headers["Server-Timing"]) {
            metricbase.catch(this);
            statusbase.catch(Response[this])
        }
        
    }
    

})