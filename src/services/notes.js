import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const add = newNote => {
    const request = axios.post(baseUrl, newNote)
    return request.then(response => response.data)
}

const update = (id, updateNote) => {
    const request = axios.put(`${baseUrl}/${id}` , updateNote)
    return request.then(response => response.data)
}

const remove = (id, ) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll: getAll,
    add: add,
    update: update,
    remove: remove
}