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
            <img class="background-image" src="https://as2.ftcdn.net/v2/jpg/00/97/79/05/1000_F_97790501_WzLIeayLrlQotVDdM6gERYVeRGQJ5GKR.jpg" />
            <main id="main_tenant">
                <h2>Nos locataires</h2>

                <section class="tenants_section">
                {tenants.map(tenant => {
                        <><button class="adding_button">{tenant.firstname + ' ' + tenant.lastname} <i class="fa-solid fa-user"></i></button> </>                  
                    })}
                </section>
            </main>
        </div>
    );
};