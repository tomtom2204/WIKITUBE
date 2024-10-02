'use strict'

const STORAGE_KEY = 'wikitube'
const CACHE_TIMEOUT = 1_000_000
const API_KEY = 'AIzaSyAt8-2Hr3Sh9G4wUpLH4XVkU2qjC2jwdWE'
let gCache = loadFromStorage(STORAGE_KEY) || {}

    //* ------------------- Axios -------------------
    //* axios (common JS library for AJAX) works with promises:


function getTop5(cb, serchValue='Noga Erez - PC People ft. ROUSSO “ Against The Machine “ [Live]') {
    // function getTop5( serchValue='Noga Erez - PC People ft. ROUSSO “ Against The Machine “ [Live]') {
    const cacheEntry = gCache
    
    if (cacheEntry && Date.now() - cacheEntry.ts < CACHE_TIMEOUT) return cb(gCache.data)

        const prm1 = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${serchValue}`)
        //https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyAt8-2Hr3Sh9G4wUpLH4XVkU2qjC2jwdWE&q=Noga Erez - PC People ft. ROUSSO “ Against The Machine “ [Live]
        prm1.then(res => {
            console.log(res)
            const top5 = res.data.items
            gCache = {
                ts: Date.now(),
                data: formatData(top5),
            }
            
            saveToStorage(STORAGE_KEY, gCache)
            // console.log(gCache.data)
        cb(gCache.data)
        })
}


function formatData(rawData) {
    // console.log(rawData)
    const data = rawData.map(top5 => {
        return {
            id: top5.id['videoId'],
            img: top5.snippet.thumbnails.high.url,
            description: top5.snippet.title,
            channel: top5.snippet.channelTitle
        }
    })
    // console.log('data', data);
    return data
}
