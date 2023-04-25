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
        <div class="tenant_info"><PersonIcon /><h2>{tenant.firstname}<br />{tenant.lastname}</h2><br />
        nom : {tenant.lastname}<br />
        prénom : {tenant.firstname}<br />
        date de naissance : {tenant.birthday}
        <br /><br />
        téléphone : {tenant.phone}<br />
        email : {tenant.email}
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