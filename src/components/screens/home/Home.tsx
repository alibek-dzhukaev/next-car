import {Roboto} from 'next/font/google'
import {Layout} from "@/components/layout/Layout";
import {FC} from "react";
import {ICarData} from "@/interfaces/car.interface";
import CarItem from "@/components/ui/cars/CarItem";

const roboto = Roboto({weight: ['100', '400', '700'], subsets: ['latin']})

const Home: FC<ICarData> = ({cars}) => {
    return (
        <Layout
            title='Home'
            description='We love out customers, we like to sale cars'
        >
            <h1 className={roboto.className}>Hello Alibek</h1>

            {cars.length
                ? cars.map(car => <CarItem car={car} key={car.id}/>)
                : <div>Cars not found</div>
            }
        </Layout>
    )
}

export default Home