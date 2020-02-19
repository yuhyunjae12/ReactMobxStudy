import Axios from "axios";

// axios config 설정
const Api = Axios.create({
    baseURL: '',
    headers: {}
})

export default Api