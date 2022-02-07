import { mapToArray } from "../helpers";
import { AddResultType, Result } from "../types/models";
import { api } from "../utils";

const getResults = async (): Promise<Result[]> => {
    const response = await api.get('/results.json')
    return mapToArray(response.data)
}

const addResult = async (payload: AddResultType) => {
    await api.post('/results.json', payload)
}

export const firebaseApi = { getResults, addResult }