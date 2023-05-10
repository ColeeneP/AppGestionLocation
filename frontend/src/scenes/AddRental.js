import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { CreateRental } from "../services/Rental";
import { useProperties } from "../hooks/useProperties";
import { useTenants } from "../hooks/useTenants";
import { GetProperty } from "../services/Property";
import { GetTenant } from "../services/Tenants";

export default function AddRental() {
    const navigate = useNavigate();
    const {properties, setProperties} = useProperties();
    const {tenants, setTenants} = useTenants();

    const [propertyId, setPropertyId] = useState();
    const [tenantId, setTenantId] = useState();
    const [deposit, setDeposit] = useState(String);

    const [property, setProperty] = useState({"id":null,"address":"","additional":"","postalCode":30150,"city":"","rent":450.0,"charges":50.0,"deposit":500.0,"available":null});
    const [tenant, setTenant] = useState({"id":null,"firstname":"","lastname":"","birthday":"","phone":"","email":""});  

    const handleSubmit = (e) => {       
            GetProperty(propertyId).then(res => {setProperty(res.data)}).catch(err => alert(err.message));
            GetTenant(tenantId).then(res => {setTenant(res.data)}).catch(err => alert(err.message));
        
        if (property.id !== null && tenant.id !== null && deposit !== null) {
            let post = {
                property: property,
                tenant: tenant,
                deposit: deposit == "true" ? true : false
            };       
            console.log(property);  
            CreateRental(post).then((response) => {navigate(`/home`); alert("Location ajoutée") }, (error) => { alert(error.message) });   
        } else {
            alert("Veuillez renseigner tous les champs")
        }
      e.preventDefault();}

    return (
        <div>
          <Header /> 
        <form onSubmit={handleSubmit} class="formulaire">
            <label for="property">Bien : 
            <select name='property' id='property' onChange={(e) => setPropertyId(e.target.value)}> 
                <option> Choisir un bien</option>
                {properties.map((option) => (
                    <option key={option.id} value={option.id}> {option.address + ' ' + option.additional + ' ' + option.city} </option>
                ))}
            </select >                
            </label><br />

            <label for="tenant">Locataire : 
            <select name='tenant' id='tenant' onChange={(e) => setTenantId(e.target.value)}> 
                <option> Choisir un locataire</option>
                {tenants.map((option) => (
                    <option key={option.id} value={option.id}> {option.firstname + ' ' + option.lastname} </option>
                ))}
            </select >                
            </label><br />

                <div>La caution a t-elle était payée ?</div>
                    <label for="non">Non <input type="radio" id="non" name="non" value={false} onChange={(e) => setDeposit(e.target.value)} /></label>
                    <label for="oui">Oui <input type="radio" id="oui" name="oui" value={true} onChange={(e) => setDeposit(e.target.value)} /></label>

            <button class="submit_button" type='submit'>Valider</button>
        </form>
        </div>
    )
}