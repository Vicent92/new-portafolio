import { DataBase } from '../../../dataBase/projects/dbProjects'

const allData = async (req, res) => {
    try {
        const service = new DataBase()
        const data  = await service.allData()
        res.status(200).json(data)
    } catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export default allData