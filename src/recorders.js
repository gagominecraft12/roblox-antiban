module.exports = ()=>{
    var formidable = require("formidable");
    var fs = require("fs");
    const current = screen;
    function record() {
        fs.open("./recording.txt", fs.write({
            time: event.timeStamp(),
            childOf: current()
        }));
    }
}