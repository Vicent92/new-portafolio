import { DataBase} from '../../../dataBase/experiences/dbExperiences'


const allData = async (req, res) => {
    try {
        const service = new DataBase()
        const data = await service.allData()

        res.status(200).json(data)

    } catch(error) {
        console.log(error)
        res.status(500).send(error)
    }

}

export default allData