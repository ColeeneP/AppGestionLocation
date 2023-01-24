import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetAllTenants = () => {
    return axios.get(config.baseURL + `tenants/getAllTenants/`,{ 
        headers: header})
}

export const GetOneTenant = (id) => {
    return axios.get(config.baseURL + `tenants/getOneTenant/` + id,{ 
        headers: header})
}

export const CreateTenant = (post) => {
    return axios.post(config.baseURL + `tenants/createTenant`, post, { 
        headers: header})
}

export const ModifyCompany = (id, post) => {
    return axios.put(config.baseURL + `tenants/modifyTenant/`+ id, post, { 
        headers: header})
}

export const DeleteTenant = (id) => {
    return axios.delete(config.baseURL + `tenants/deleteTenant/` + id,{ 
        headers: header})
}