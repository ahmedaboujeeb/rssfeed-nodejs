import type { Request, Response } from "express"
import { rssfeedToData } from "../../service/rssfeed"


const parseFeed = async (req: Request, res: Response) => {
    if (!req.body.url) {
        return res.status(400).json({ error: true, msg: "you have to input url" })
    }
    const { url } = req.body
    const data = await rssfeedToData(url);
    res.status(200).json(data)
}

export default {
    parseFeed
}