package com.studi.location.controller;

import com.studi.location.models.Inventory;
import com.studi.location.models.Property;
import com.studi.location.models.Rental;
import com.studi.location.models.Tenant;
import com.studi.location.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class RentalController {

    @Autowired
    private RentalService rentalService;

    /**
     * Create - Add a new rental
     * @param rental An object rental
     * @return The rental object saved
     */
    @PostMapping("/api/rental")
    public Rental createRental(@RequestBody Rental rental) {
        return rentalService.saveRental(rental);
    }

    /**
     * Read - Get one rental
     * @param id The id of the rental
     * @return A Rental object fulfilled
     */
    @GetMapping("/api/rental/{id}")
    public Rental getRental(@PathVariable("id") final Long id) {
        Optional<Rental> rental = rentalService.getRental(id);
        if(rental.isPresent()) {
            return rental.get();
        } else {
            return null;
        }
    }

    /**
     * Read - Get all rental's tenant
     *
     * @param id The id of the tenant
     * @return An Rental object fulfilled
     */
    @GetMapping("/api/rentalbytenant/{id}")
    public ResponseEntity<List<Rental>> findByTenant(@PathVariable("id") final Long id) {
        List<Rental> rental = rentalService.findByTenantId(id);
        return new ResponseEntity<>(rentalService.findByTenantId(id), HttpStatus.OK);
    }

    /**
     * Read - Get all rentals
     * @return - An Iterable object of Rentals fulfilled
     */
    @GetMapping("/api/rental")
    public Iterable<Rental> getRentals() {
        return rentalService.getRentals();
    }

    /**
     * Update - Update an existing rental
     * @param id - The id of the rental to update
     * @param rental - The rental object updated
     * @return
     */
    @PutMapping("/api/rental/{id}")
    public Rental updateRental(@PathVariable("id") final Long id, @RequestBody Rental rental) {
        Optional<Rental> e = rentalService.getRental(id);
        if(e.isPresent()) {
            Rental currentRental = e.get();

            Property property = rental.getProperty();
            if(property != null) {
                currentRental.setProperty(property);
            }
            Tenant tenant = rental.getTenant();
            if(tenant != null) {
                currentRental.setTenant(tenant);
            }
            Boolean deposit = rental.getDeposit();
            if(deposit != null) {
                currentRental.setDeposit(deposit);
            }
            rentalService.saveRental(currentRental);
            return currentRental;
        } else {
            return null;
        }
    }

    /**
     * Delete - Delete a rental
     * @param id - The id of the rental to delete
     */
    @DeleteMapping("/api/rental/{id}")
    public void deleteRental(@PathVariable("id") final Long id) {
        rentalService.deleteRental(id);
    }
}