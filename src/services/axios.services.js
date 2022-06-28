import axios from "axios";


let axiosInst = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})
 const getAllUsers = () => axiosInst.get('/users').then(value => value.data)
const getAllPosts = () => axiosInst.get('/posts').then(value => value.data)
export {getAllUsers,getAllPosts}