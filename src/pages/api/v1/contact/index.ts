export default function handler(req: any, res: any) {
    const { method } = req;

    switch (method) {
        case 'GET':
            res.status(200).json("contact page testing")
            break;
        case 'POST':
            res.status(200).json({ response: "POST contact page testing" })
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"])
            res.status(405).end
    }
}