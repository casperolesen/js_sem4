const fetch = require("node-fetch");

let fetchAlbum = (url) => {
    const albumPromise = fetch(url).then(res => res.json());
    return albumPromise;
}

let getData = async (urls) => {
    return Promise.all(urls.map(url => fetchAlbum(url)))
}

let customAlbum = async (words_count) => {
    let urls = [
        'https://jsonplaceholder.typicode.com/photos?albumId=1', 
        'https://jsonplaceholder.typicode.com/photos?albumId=3',
        'https://jsonplaceholder.typicode.com/photos?albumId=5',
        'https://jsonplaceholder.typicode.com/photos?albumId=7',
        'https://jsonplaceholder.typicode.com/photos?albumId=9', 
    ]
    // fetch all data
    let data = await getData(urls)
    // put all in one array (couldn't get the filter to work without doing this)
    let singleArr = []
    data.map(album => {
        album.map(item => singleArr.push(item))
    })
    // filter array with all data
    let filtered = singleArr.filter(item => item['title'].split(" ").length === words_count)
    // map the filtered array to only show 'id' and 'title'
    let custom = filtered.map(item => {
        return {id: item['id'], title: item['title']}
    })

    return custom
}

module.exports = customAlbum;