import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { GetTenant } from "../services/Tenants";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Header from "../components/Header";
import PersonIcon from '@mui/icons-material/Person';
import { GetPaymentForTenant } from "../services/Payments";
import { GetRentalsForTenant } from "../services/Rental";

export default function OneTenant() {
    let {id} = useParams();
    const [tenant, setTenant] = useState([{"id": 1, "firstname": "", "lastname": "", "birthday": "1990-01-01", "phone": "", "email": ""}]);
    console.log(tenant);
    const [payments, setPayments] = useState([
        {"id":1,"rental":{"id":1,"property":{"id":1,"address":"1181 chemin du plan","additional":"BAT C APP 004","postalCode":86370,"city":"VIVONNE","rent":480.0,"charges":20.0,"deposit":500.0,"available":true},"tenant":{"id":1,"firstname":"John","lastname":"Smith","birthday":"1990-01-01","phone":"0601020304","email":"john.smith@email.fr"},"deposit":true},"date":"2023-04-28","origin":"Locataire","amount":"350"}
    ]);
    console.log(payments);

    const [properties, setProperties] = useState([{"id":1,"property":{"id":1,"address":"1181 chemin du plan","additional":"BAT C APP 004","postalCode":86370,"city":"VIVONNE","rent":480.0,"charges":20.0,"deposit":500.0,"available":true},"tenant":{"id":1,"firstname":"John","lastname":"Smith","birthday":"1990-01-01","phone":"0601020304","email":"john.smith@email.fr"},"deposit":true}])

    useEffect(() => {
        GetTenant(id).then(res => {setTenant(res.data);}).catch(error => error);
        GetPaymentForTenant(id).then(res => {setPayments(res.data); console.log(res.data);}).catch(error => error);
        GetRentalsForTenant(id).then(res => {setProperties(res.data); console.log(res.data);}).catch(error => error);
        
    }, []);

    return (
        <div>
        <Header />
        <div class="tenant_info">
            <div class="header_info">
                <PersonIcon sx={{ fontSize: 100 }}/>
                <h2>{tenant.firstname} {tenant.lastname}</h2>   
            </div>
            <div class="detail_info"><div>nom </div><div>{tenant.lastname}</div><br /></div>
            <div class="detail_info"><div>prénom</div><div>{tenant.firstname}</div><br /></div>
            <div class="detail_info"><div>date de naissance</div><div>{tenant.birthday}</div> </div><br />
            <div class="detail_info"><div>téléphone</div><div>{tenant.phone}</div><br /></div>
            <div class="detail_info"><div>email</div><div>{tenant.email}</div></div>                 
            
        </div>
        <div class="tenant_property">
            <h2>Biens loués</h2>
            {properties.map((property) => {
                return(
                    <div class="detail_property">{property.property.address}<br /> {property.property.additional}<br /> {property.property.postalCode} {property.property.city}</div>   
                )
            })}

        </div>
        <div class="tenant_payments">
            <h2>Solde</h2>
            {payments.map((payment) => {
                return(
                    <div class="detail_payment"><div>{payment.amount}€ {payment.origin}</div><div>{payment.date}</div></div>   
                )
            })}
        </div>

        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16, color:'#CEB992' }}
                icon={<SpeedDialIcon />}
            >
                <SpeedDialAction icon={<PictureAsPdfIcon />} name={'PDF'} />
                <SpeedDialAction icon={<EditIcon />} name={'Edit'} />
                <SpeedDialAction icon={<DeleteIcon />} name={'Delete'} />
            </SpeedDial>
        </Box>
    </div>
    )

}