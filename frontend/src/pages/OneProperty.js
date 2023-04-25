import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { GetProperty } from "../services/Property";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Header from "../components/Header";

export default function OneProperty() {
    let {id} = useParams();
    const [property, setProperty] = useState([{"id":1,"address":"","additional":null,"postalCode":86370,"city":"","rent":480.0,"charges":20.0,"deposit":500.0,"available":true}]);
    console.log(property);

    useEffect(() => {
        GetProperty(id).then(res => {setProperty(res.data);}).catch(error => error)
    }, [])

        // { icon: <PictureAsPdfIcon />, name: 'PDF' },

    return (
        <div>
            <Header />
            <img class="property_img" src="https://as2.ftcdn.net/v2/jpg/04/39/24/79/1000_F_439247968_J5nC39sqagXLVBTRGXlt2HZgaf3LDriM.jpg" />
            <div class="property_info">{property.address}<br />{property.additional}<br />{property.postalCode} {property.city}<br /><br />
            {property.rent}€ HC + {property.charges}€ charges + caution {property.deposit}€ 
            </div>
            <div class="property_inventory"></div>

            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16, color:'#CEB992' }}
                    icon={<SpeedDialIcon />}
                >
                    <SpeedDialAction icon={<EditIcon />} name={'Edit'} />
                    <SpeedDialAction icon={<DeleteIcon />} name={'Delete'} />
                </SpeedDial>
            </Box>
        </div>
    )

}