import { useEffect, useState } from "react";
import { GetPayments } from "../services/Payments";

export default function Home(){ 
    // get payments since last month
    const [payments, setPayments] = useState([{'amount': 150, 'origin': 'CAF', 'tenant': 'Monsieur Dupont', 'date': '14/01/2023'},{'amount': 350, 'origin': 'Locataire', 'tenant': 'Monsieur Dupont', 'date': '16/01/2023'}]);

    // useEffect(() =>{
    //     GetPayments.then((res) => setPayments(res.content)).catch(error => alert(error.message))
    // }, [])

    return (
        // <main id="main_dashboard">
        //     <img class="background-image" src="https://as2.ftcdn.net/v2/jpg/00/97/79/05/1000_F_97790501_WzLIeayLrlQotVDdM6gERYVeRGQJ5GKR.jpg" />
        //     <h2>Liste des derniers paiements reçus :</h2>
        //     {payments.map((payment) => {
        //         return (
                        // <ul>
                        //     <li>
                        //         <div>{payment.date + ' ' + payment.tenant}</div>
                        //         <div>{payment.amount + '€' + ' ' + payment.origin}</div>
                        //     </li>
                        // </ul>
        //         );
        //     })}
        // </main>
        <div>
            <img class="background-image" src="https://as2.ftcdn.net/v2/jpg/00/97/79/05/1000_F_97790501_WzLIeayLrlQotVDdM6gERYVeRGQJ5GKR.jpg" />
            <main id="main_dashboard">
        
        
                <section class="actions">
                    <button class="adding_button">Ajouter un locataire <i class="fa-solid fa-user"></i></button>
                <button class="adding_button">Ajouter un bien <i class="fa-solid fa-building"></i></button>
                <button class="adding_button">Ajouter un paiement <i class="fa-regular fa-credit-card"></i></button>
                </section>
        
                <section class="payment_section">
                    <h2>Derniers paiements</h2>
                    <div class="payment_list">
                        
                        <ul>
                            <li>
                                <div>M. DURANT Henri</div>
                                <div>375€ CAF</div>
                            </li>
                            <li>
                                <div>M. DURANT Henri</div>
                                <div>125€ Locataire</div>
                            </li>
                        </ul>
                    </div>
        
                </section>
        
            </main>            
        </div>

    );

};