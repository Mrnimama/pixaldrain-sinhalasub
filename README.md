# pixaldrain-sinhalasub

## How to use.
1. Copy This code and make file `pixaldrain-sinhslasub.js` 

### 1. Get all direct  links with quality.
```
var opts = {
    link: "https://sinhalasub.lk/movies/the-greatest-of-all-time-2024-sinhala-subtitles/",
    quality: "HD 720p",
    type: "alllinks" // "direct"
}
PixaldrainDL(opts)
```
### Result
```
{
  '4K 2160p': 'https://pixeldrain.com/api/file/nFP81WRg',
  'FHD 1080p': 'https://pixeldrain.com/api/file/8YQrJ2yn',
  'HD 720p': 'https://pixeldrain.com/api/file/nDM7ERPW',
  'SD 480p': 'https://pixeldrain.com/api/file/p6nmr7Vk'
}
```
</br>

### 2. Get only one direct link is you given quality.
```
var opts = {
    link: "https://sinhalasub.lk/movies/the-greatest-of-all-time-2024-sinhala-subtitles/",
    quality: "HD 720p",
    type: "direct" // "alllinks"
}
PixaldrainDL(opts)
```
### Result
```
https://pixeldrain.com/api/file/nDM7ERPW
```