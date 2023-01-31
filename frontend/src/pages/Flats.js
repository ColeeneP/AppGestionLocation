import { useEffect, useState } from "react";
import { GetFlats } from "../services/Flats";

export default function Flats() {
    const [flats, setFlats] = useState([
        {address: '14 Rue de la Liberté', additionnal: 'Bat C', city: 'Montpellier', postal_code: '34000', rent: 250, charges: 50, deposit: 250, available: true}, 
        {address: '2 Rue du Maréchal Juin', additionnal: null, city: 'Montpellier', postal_code: '34080', rent: 400, charges: 75, deposit: 400, available: false}
    ]);

    // useEffect(() => {
    //     GetFlats().then((res) => setFlats(res.content)).catch(error => alert(error.message))
    // })

    return (
        <article>
            <h1>Liste des biens disponibles :</h1>
            {flats.map((flat) => {
                if(flat.available == false) {
                    return (
                        <article>
                            <h2>{flat.address + ' ' + flat.postal_code + ' ' + flat.city}</h2>
                            <div>Prix : {flat.rent + ' ' + flat.charges + ' ' + flat.deposit}</div>
                        </article>
                    );           
                } else {
                    return (
                        <article>
                            <h2>{flat.address + ' ' + flat.postal_code + ' ' + flat.city}</h2>
                            <div>Prix : {flat.rent + ' ' + flat.charges + ' ' + flat.deposit}</div>
                        </article>
                    ); 
                }
            })}
        </article>
    );

};