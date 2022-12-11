import { experiencesData } from './experiencesData'

export class DataBase {
    constructor() {}

    async allData() {
        const data = experiencesData
        return data
    }
}