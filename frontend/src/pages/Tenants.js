import { useEffect, useState } from "react";
import { GetTenants } from "../services/Tenants";

export default function Tenants() {
    const[tenants, setTenants] = useState([
        {firstname: 'John', lastname: 'Doe', phone: '0601020304', email: 'john.doe@mail.com'},
        {firstname: 'Julie', lastname: 'Dupont', phone: '0604030201', email: 'julie.dupont@mail.com'}
    ]);

    // useEffect(() => {
    //     GetTenants().then(res => setTenants(res.content)).catch(error => alert(error.message));
    // }, [])

    return(
        <div>
            <h1>Liste des locataires :</h1>
            {tenants.map(tenant => {
                <><h2>{tenant.firstname + ' ' + tenant.lastname}</h2>
                <span>{tenant.phone}</span>
                <span>{tenant.email}</span></>                  
            })}
        </div>
    );
};