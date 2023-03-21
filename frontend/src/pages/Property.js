import { useEffect, useState } from "react";
import { GetProperties } from "../services/Property";

export default function Property() {
    const [property, setProperties] = useState([
        {address: '14 Rue de la Liberté', additionnal: 'Bat C', city: 'Montpellier', postal_code: '34000', rent: 250, charges: 50, deposit: 250, available: true}, 
        {address: '2 Rue du Maréchal Juin', additionnal: null, city: 'Montpellier', postal_code: '34080', rent: 400, charges: 75, deposit: 400, available: false}
    ]);

    // useEffect(() => {
    //     GetProperties().then((res) => setProperties(res.content)).catch(error => alert(error.message))
    // })

    return (
        <article>
            <h1>Liste des biens disponibles :</h1>
            {properties.map((property) => {
                if(property.available == false) {
                    return (
                        <article>
                            <h2>{property.address + ' ' + property.postal_code + ' ' + property.city}</h2>
                            <div>Prix : {property.rent + ' ' + property.charges + ' ' + property.deposit}</div>
                        </article>
                    );           
                } else {
                    return (
                        <article>
                            <h2>{property.address + ' ' + property.postal_code + ' ' + property.city}</h2>
                            <div>Prix : {property.rent + ' ' + property.charges + ' ' + property.deposit}</div>
                        </article>
                    ); 
                }
            })}
        </article>
    );

};