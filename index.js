const { sinhalaSub } = require("mrnima-moviedl");

/**
 * Pixaldrain download 
 * @param {*} opts 
 */
async function PixaldrainDL(opts) {
    var movie = await sinhalaSub();

    var link = opts.link; // Put here to movie link or episode link
    var { result } = await movie.download(link);
    var pixeldrain = {};
    for (let index of result.links) {
        if (index.link.includes("https://pixeldrain.com/")) {
            pixeldrain[index.quality] = index.link.replace("/u/", "/api/file/")
        }
    }

    var directLink = pixeldrain[opts.quality]
    console.log(pixeldrain)
    console.log(directLink)
    return opts.type === "direct" ? directLink : opts.type === "alllinks" ? pixeldrain : "Give type : direct or alllinks" ;
}
/*
module.exports = {
    PixaldrainDL
}
*/


//Example
// var {PixaldrainDL} = require("./file...")
var opts = {
    link: "https://sinhalasub.lk/movies/the-greatest-of-all-time-2024-sinhala-subtitles/",
    quality: "HD 720p",
    type: "direct" // "alllinks"
}
PixaldrainDL(opts)