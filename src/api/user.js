import request from '@/utils/request'

export function UserLogin(data){
    return request({
        method: "POST",
        url: "/AccountLogin",
        data
    })
}

export function UserList(data){
    return request({
        method: "POST",
        url: "/UserList",
        data
    })
}

export function UserAdd(data){
    return request({
        method: "POST",
        url: "/UserAdd",
        data
    })
}

export function UserDel(data){
    return request({
        method: "POST",
        url: "/UserDel",
        data
    })
}