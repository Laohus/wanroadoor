import Axios from 'axios'

const service = Axios.create({
    headers:{
        "Content-Type":"application/json"
    },
    baseURL: "/api",
    timeout: 60000,
})

// service.interceptors.request.use(request => {
//         return request
//     },
//     error => {
//         return error
//     }
// )

// 添加请求拦截器，在请求头中加token
service.interceptors.request.use(
    config => {
        if (localStorage.getItem('Authorization')) {
            config.headers.token = localStorage.getItem('Authorization');
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data
        }else {
            return false
        }
    },
    error => {
        console.log(error)
    }
)
export default service