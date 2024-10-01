const { sinhalaSub } = require("mrnima-moviedl");

/**
 * Pixaldrain download 
 * @param {*} opts 
 */
async function moviedl(opts) {
     var movie = await sinhalaSub();

    var link = opts.link; // Put here to movie link or episode link
    var {result} = await movie.download(link);
    var pixeldrain = {};
    for(let index of result.links){
        if(index.link.includes("https://pixeldrain.com/")){
            pixeldrain[index.quality] = index.link.replace("/u/","/api/file/")
        }
    }

    var directLink = pixeldrain[opts.quality]
    console.log(pixeldrain)
    console.log(directLink)
}
var opts = {
    link: "https://sinhalasub.lk/movies/deadpool-wolverine-2024-sinhala-subtitles/",
    quality:"HD 720p",
    jid:"null" 
}
moviedl(opts)
