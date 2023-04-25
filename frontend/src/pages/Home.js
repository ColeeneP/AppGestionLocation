import { usePayments } from "../hooks/usePayments";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home(){ 
    const {payments, setPayments} = usePayments();

    return (
        <div>
            <Header />
            <img class="background-image" src="https://as2.ftcdn.net/v2/jpg/00/97/79/05/1000_F_97790501_WzLIeayLrlQotVDdM6gERYVeRGQJ5GKR.jpg" />
            <main id="main_dashboard">
        
        
                <section class="actions">
                <Link to="/CreateTenant"><button class="adding_button">Ajouter un locataire <i class="fa-solid fa-user"></i></button></Link>
                <Link to="/CreateProperty"><button class="adding_button">Ajouter un bien <i class="fa-solid fa-building"></i></button></Link>
                <button class="adding_button">Ajouter un paiement <i class="fa-regular fa-credit-card"></i></button>
                </section>
        
                <section class="payment_section">
                    <h2>Derniers paiements</h2>
                    <div class="payment_list">
                        <ul>
                            {payments.map((payment) => {
                            return (  
                                <li>
                                    <div>{payment.date + ' ' + payment.rental.tenant.lastname}</div>
                                    <div>{payment.amount + '€' + ' ' + payment.origin}</div>
                                </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
            </main>            
        </div>

    );

};