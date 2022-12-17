import { projectsData } from './projectsData'

export class DataBase {
    constructor () {}

    async allData() {
        const data = projectsData
        return data
    }
}