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

export default function OneTenant() {
    let {id} = useParams();
    const [tenant, setTenant] = useState([{"id": 1, "firstname": "", "lastname": "", "birthday": "1990-01-01", "phone": "", "email": ""}]);
    console.log(tenant);

    useEffect(() => {
        GetTenant(id).then(res => {setTenant(res.data);}).catch(error => error)
    }, [])

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
        </div>
        <div class="tenant_payments">
            <h2>Solde</h2>
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