export type Brand = {
    id: number
    name: string
    letter : string
}

export type Size = {
    id: number
    name: string
}

export type Category = {
    id: number
    name: string
}

export type Price = {
    min: number
    max: number
}

export type Color = {
    id: number
    hexCode: `#${string}`
    name : string
}

export type Sort = {
    order : string
    orderBy : string
}
