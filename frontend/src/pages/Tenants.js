import { useTenants } from "../hooks/useTenants";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Tenants() {
    const {tenants, setTenants} = useTenants();

    return(
        <div>
            <Header />
            <img class="background-image" src="https://as2.ftcdn.net/v2/jpg/00/97/79/05/1000_F_97790501_WzLIeayLrlQotVDdM6gERYVeRGQJ5GKR.jpg" />
            <main id="main_tenant">
                <h2>Nos locataires</h2>

                <section class="tenants_section">
                {tenants.map(tenant => {
                    return(
                        <><Link to={`/oneTenant/${tenant.id}`}><button class="adding_button">{tenant.firstname + ' ' + tenant.lastname} <i class="fa-solid fa-user"></i></button></Link></>   
                    )                   
                    })}
                </section>
            </main>
        </div>
    );
};