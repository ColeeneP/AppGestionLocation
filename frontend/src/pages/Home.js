import { useEffect, useState } from "react";
import { GetPayments } from "../services/Payments";

export default function Home(){ 
    // get payments since last month
    const [payments, setPayments] = useState([{'amount': 150, 'origin': 'CAF', 'tenant': 'Monsieur Dupont', 'date': '14/01/2023'},{'amount': 350, 'origin': 'Locataire', 'tenant': 'Monsieur Dupont', 'date': '16/01/2023'}]);

    // useEffect(() =>{
    //     GetPayments.then((res) => setPayments(res.content)).catch(error => alert(error.message))
    // }, [])

    return (
        <div><h2>Liste des derniers paiements reçus :</h2>
            {payments.map((payment) => {
                return (
                    <p>{payment.amount + '€' + ' ' + payment.origin + ' ' + payment.tenant + ' ' + payment.date}</p>
                );
            })}
        </div>
    );

};