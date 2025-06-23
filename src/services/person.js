import axios from "axios";
const baseUrl = 'http://localhost:3002/persons'


const getAll=()=>{
    const request = axios.get(baseUrl)
    return request.then(response=>response.data)
}

const create=(newObject)=>{
    const request = axios.post(baseUrl,newObject)
    return request.then(response=>response.data)
}
const update = (id, updatedObject) => {
    
    console.log(id +' id')
    console.log(updatedObject +' Object')
    const request = axios.put(`${baseUrl}/${id}`, updatedObject)
    return request.then(response => response.data)
  }

const deleteObj=(id)=>{
  //  console.log(newObject)
  //  const request = axios.delete(baseUrl+`${id}`)
    return axios.delete(`${baseUrl}/${id}`);
  //  return axios.delete(`${baseUrl}/${id}`);

}

export default {getAll,create,update,deleteObj}