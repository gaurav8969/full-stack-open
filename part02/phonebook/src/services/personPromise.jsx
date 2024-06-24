import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () =>{
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}
const update = newObject => {
    return axios.put(`${baseUrl}/${newObject.id}`,newObject)
}
const deletePerson = object =>{
    return axios.delete(`${baseUrl}/${object.id}`)
}

export default {
    getAll,
    update,
    create,
    deletePerson
}