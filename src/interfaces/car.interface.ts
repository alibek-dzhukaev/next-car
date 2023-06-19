export interface ICar {
    name: string
    id: string
    price: number
    image: string
}

export interface ICarData {
    cars: ICar[]
}

export interface ICarDataSingle {
    car: ICar
}