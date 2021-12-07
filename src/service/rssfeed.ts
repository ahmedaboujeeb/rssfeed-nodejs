import Parser from 'rss-parser';


export async function rssfeedToData(url: string) {
    const parser = new Parser();
    try {
        const data: { title: string | undefined; checksum: number | undefined; link: string | undefined; }[] = [];
        const feed = await parser.parseURL(url);
        console.log(feed.title); // feed will have a `foo` property, type as a string

        feed.items.forEach(item => {
            const obj = { title: item.title, checksum: item.checksum, link: item.link }
            data.push(obj)
        });
        return data;
    } catch (err) {
        throw Error("something went wrong while parsing the url")
    }
}