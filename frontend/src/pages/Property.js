import { useEffect, useState } from "react";
import { GetProperties } from "../services/Property";
import { useProperties } from "../hooks/useProperties";

export default function Property() {
    const {properties, setProperties} = useProperties();

    return (
        <main id="main_property">
        <h2>Nos biens</h2>

        <section class="property_section">
            {properties.map((property) => {
                if(property.available == false) {
                    return (
                        <div class="property_card">
                        <div class="card_image">
                        <img src="https://as2.ftcdn.net/v2/jpg/04/39/24/79/1000_F_439247968_J5nC39sqagXLVBTRGXlt2HZgaf3LDriM.jpg" />
                        </div>
                        <div class="card_info">
                            <div class="address">{property.address}<br /> {property.additional} <br />{property.postalCode} {property.city}</div>
                            <div class="cost">Loyer: {property.rent}€<br />Charges: {property.charges}€</div>
                                <div class="deposit">Caution: {property.deposit}€</div>
                                <div class="availability">Non disponible</div>
                        </div>
                        </div>          
                )} else {
                    return (
                        <div class="property_card">
                        <div class="card_image">
                        <img src="https://as2.ftcdn.net/v2/jpg/04/39/24/79/1000_F_439247968_J5nC39sqagXLVBTRGXlt2HZgaf3LDriM.jpg" />
                        </div>
                        <div class="card_info">
                            <div class="address">{property.address}<br /> {property.additional} <br />{property.postalCode} {property.city}</div>
                            <div class="cost">Loyer: {property.rent}€<br />Charges: {property.charges}€</div>
                                <div class="deposit">Caution: {property.deposit}€</div>
                                <div class="availability">Disponible</div>
                        </div>
                        </div>
                    )}
            })}
        </section>
        </main>
    );
};