// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Car = {
    id: number
    name: string
    price: number
    image: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Car[]>
) {
    res.status(200).json([
        {
            id: 1,
            name: 'Toyota Camry',
            price: 13000,
            image: ''
        }
    ])
}
