import axios from "axios"

const instance = axios.create({
    //api cloud function
    baseURL:'http://localhost:5001/clone-a7237/us-central1/api'
})

export default instance