export type Result = {
    id: string,
    name: string,
    age: number,
    height: number,
    weight: number
}

export type AddResultType = Omit<Result, 'id'>;