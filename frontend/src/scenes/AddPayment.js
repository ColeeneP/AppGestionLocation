import { useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { CreatePayment, GetPayment } from "../services/Payments";
import { useRentals } from "../hooks/useRentals";
import { GetRental } from "../services/Rental";

export default function AddPayment() {
    const navigate = useNavigate();
    const {rentals, setRentals} = useRentals();

    const [rentalId, setRentalId] = useState(0);
    const [date, setDate] = useState(Date);
    const [origin, setOrigin] = useState(String);
    const [amount, setAmount] = useState(String);

    const [rental, setRental] = useState({
        "id": null,
        "property": {
            "id": null,
            "address": "",
            "additional": "",
            "postalCode": null,
            "city": "",
            "rent": null,
            "charges": null,
            "deposit": null,
            "available": true
        },
        "tenant": {
            "id": 1,
            "firstname": "",
            "lastname": "",
            "birthday": "",
            "phone": "",
            "email": ""
        },
        "deposit": true
    });

    const handleSubmit = (e) => {
        GetRental(rentalId).then(res => setRental(res.data)).catch(err => alert(err.message));
        
        if (rental.id !== null && date !== null && origin !== null && amount !== null) {
            let post = {
                rental: rental,
                date: date,
                origin: origin,
                amount: amount
            };       
            console.log(post);  
            CreatePayment(post).then((response) => {navigate(`/home`); alert("Paiement ajouté") }, (error) => { alert(error.response.data.error) });   
        } else {
            alert("Veuillez renseigner tous les champs")
        }
      e.preventDefault();}

    return (
        <div>
          <Header /> 
        <form onSubmit={handleSubmit} class="formulaire">
            <label for="rental">Location : 
            <select name='rental' id='rental' onChange={(e) => setRentalId(e.target.value)}> 
                <option> Choisir un locataire</option>
                {rentals.map((option) => (
                    <option key={option.id} value={option.id}> {option.tenant.lastname + ' ' + option.tenant.firstname} </option>
                ))}
            </select >                
            </label><br />

            <label for="date">Date de paiement : <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label><br />

            <label for="origin">Origine du versement : <input id="origin" type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
            </label><br />

            <label for="amount">Montant : <input id="amount" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </label><br />

            <button class="submit_button" type='submit'>Valider</button>
        </form>
        </div>
    )
}