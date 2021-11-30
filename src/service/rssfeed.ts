import Parser from 'rss-parser';


async function rssfeedToData(url: string) {
    const parser = new Parser();
    try {
        const data: { title: string; checksum: number; url: string; }[] = [];
        const feed = await parser.parseURL(url);
        console.log(feed.title); // feed will have a `foo` property, type as a string

        feed.items.forEach(item => {
            const obj = { title: item.title, checksum: item.checksum, url: item.url }
            data.push(obj)
        });
        return data;
    } catch (err) {
        throw Error("something went wrong while parsing the url")
    }
}