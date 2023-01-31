import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetTenants = () => {
    return axios.get(config.baseURL + `tenants/getTenants/`,{ 
        headers: header})
}

export const GetTenant = (id) => {
    return axios.get(config.baseURL + `tenants/getTenant/` + id,{ 
        headers: header})
}

export const CreateTenant = (post) => {
    return axios.post(config.baseURL + `tenants/createTenant`, post, { 
        headers: header})
}

export const UpdateTenant = (id, post) => {
    return axios.put(config.baseURL + `tenants/updateTenant/`+ id, post, { 
        headers: header})
}

export const DeleteTenant = (id) => {
    return axios.delete(config.baseURL + `tenants/deleteTenant/` + id,{ 
        headers: header})
}