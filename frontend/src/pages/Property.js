import { useEffect, useState } from "react";
import { GetProperties } from "../services/Property";

export default function Property() {
    const [properties, setProperties] = useState([
        {address: '14 Rue de la Liberté', additionnal: 'Bat C', city: 'Montpellier', postal_code: '34000', rent: 250, charges: 50, deposit: 250, available: true}, 
        {address: '2 Rue du Maréchal Juin', additionnal: null, city: 'Montpellier', postal_code: '34080', rent: 400, charges: 75, deposit: 400, available: false}
    ]);

    // useEffect(() => {
    //     GetProperties().then((res) => setProperties(res.content)).catch(error => alert(error.message))
    // })

    return (
        <main id="main_property">
        <h2>Nos biens</h2>

        <section class="property_section">
            <div class="property_card">
                <div class="card_image">
                <img src="https://as2.ftcdn.net/v2/jpg/04/39/24/79/1000_F_439247968_J5nC39sqagXLVBTRGXlt2HZgaf3LDriM.jpg" />
                </div>
                <div class="card_info">
                    <div class="address">1181 Chemin du plan<br />Bat C App 004<br />86370 VIVONNE</div>
                    <div class="cost">Loyer: 480€<br />Charges: 20€</div>
                    <div class="deposit">Caution: 500€</div>
                    <div class="availability">Non disponible</div>
                </div>
            </div>

            <div class="property_card available">
                <div class="card_image">
                <img src="https://as2.ftcdn.net/v2/jpg/04/39/24/79/1000_F_439247968_J5nC39sqagXLVBTRGXlt2HZgaf3LDriM.jpg" />
                </div>
                <div class="card_info">
                    <div class="address">1181 Chemin du plan<br />Bat A App 108<br />86370 VIVONNE</div>
                    <div class="cost">Loyer: 530€<br />Charges: 20€</div>
                    <div class="deposit">Caution: 550€</div>
                    <div class="availability">Disponible</div>
                </div>
            </div>

        </section>

    </main>
        // <article>
        //     <h1>Liste des biens disponibles :</h1>
        //     {properties.map((property) => {
        //         if(property.available == false) {
        //             return (
        //                 <article>
        //                     <h2>{property.address + ' ' + property.postal_code + ' ' + property.city}</h2>
        //                     <div>Prix : {property.rent + ' ' + property.charges + ' ' + property.deposit}</div>
        //                 </article>
        //             );           
        //         } else {
        //             return (
        //                 <article>
        //                     <h2>{property.address + ' ' + property.postal_code + ' ' + property.city}</h2>
        //                     <div>Prix : {property.rent + ' ' + property.charges + ' ' + property.deposit}</div>
        //                 </article>
        //             ); 
        //         }
        //     })}
        // </article>
    );

};