const baseUrl = 'http://localhost:3000'

const getAllLocations = async() => {
    try{
        const response = await fetch(`${baseUrl}/locations`)
        const data = await response.json()
        return data
    } catch(err){
        console.log(err)
    }
}

export default{
    getAllLocations
}