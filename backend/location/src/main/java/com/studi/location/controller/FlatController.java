package com.studi.location.controller;

import com.studi.location.models.Flat;
import com.studi.location.service.FlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class FlatController {

    @Autowired
    private FlatService flatService;

    /**
     * Create - Add a new flat
     * @param flat An object flat
     * @return The employee object saved
     */
    @PostMapping("/flat")
    public Flat createFlat(@RequestBody Flat flat) {
        return flatService.saveFlat(flat);
    }

    /**
     * Read - Get one flat
     * @param id The id of the flat
     * @return A Flat object fullfilled
     */
    @GetMapping("/flat/{id}")
    public Flat getFlat(@PathVariable("id") final Long id) {
        Optional<Flat> flat = flatService.getFlat(id);
        if(flat.isPresent()) {
            return flat.get();
        } else {
            return null;
        }
    }

    /**
     * Read - Get all flats
     * @return - An Iterable object of Flats fullfilled
     */
    @GetMapping("/flats")
    public Iterable<Flat> getFlats() {
        return flatService.getFlats();
    }

    /**
     * Update - Update an existing flat
     * @param id - The id of the flat to update
     * @param flat - The flat object updated
     * @return
     */
    @PutMapping("/flat/{id}")
    public Flat updateFlat(@PathVariable("id") final Long id, @RequestBody Flat flat) {
        Optional<Flat> e = flatService.getFlat(id);
        if(e.isPresent()) {
            Flat currentFlat = e.get();

            String address = flat.getAddress();
            if(address != null) {
                currentFlat.setAddress(address);
            }
            String additional = flat.getAdditional();
            if(additional != null) {
                currentFlat.setAdditional(additional);;
            }
            Integer postalCode = flat.getPostalCode();
            if(postalCode != null) {
                currentFlat.setPostalCode(postalCode);
            }
            String city = flat.getCity();
            if(city != null) {
                currentFlat.setCity(city);;
            }
            Float rent = flat.getRent();
            if(rent != null) {
                currentFlat.setRent(rent);;
            }
            Float charges = flat.getCharges();
            if(charges != null) {
                currentFlat.setCharges(charges);;
            }
            Float deposit = flat.getDeposit();
            if(deposit != null) {
                currentFlat.setDeposit(deposit);;
            }
            Boolean available = flat.getAvailable();
            if(available != null) {
                currentFlat.setAvailable(available);;
            }
            flatService.saveFlat(currentFlat);
            return currentFlat;
        } else {
            return null;
        }
    }

    /**
     * Delete - Delete a flat
     * @param id - The id of the flat to delete
     */
    @DeleteMapping("/flat/{id}")
    public void deleteFlat(@PathVariable("id") final Long id) {
        flatService.deleteFlat(id);
    }
}
