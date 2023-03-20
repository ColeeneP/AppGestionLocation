package com.studi.location.controller;

import com.studi.location.models.Rental;
import com.studi.location.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
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

            Long flat = rental.getFlat();
            if(flat != null) {
                currentRental.setFlat(flat);
            }
            Long tenant = rental.getTenant();
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