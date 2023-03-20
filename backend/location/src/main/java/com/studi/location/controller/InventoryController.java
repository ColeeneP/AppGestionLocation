package com.studi.location.controller;

import com.studi.location.models.Inventory;
import com.studi.location.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Optional;

@RestController
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    /**
     * Create - Add a new inventory
     * @param inventory An object inventory
     * @return The inventory object saved
     */
    @PostMapping("/api/inventory")
    public Inventory createInventory(@RequestBody Inventory inventory) {
        return inventoryService.saveInventory(inventory);
    }

    /**
     * Read - Get one inventory
     * @param id The id of the inventory
     * @return An Inventory object fulfilled
     */
    @GetMapping("/api/inventory/{id}")
    public Inventory getInventory(@PathVariable("id") final Long id) {
        Optional<Inventory> inventory = inventoryService.getInventory(id);
        if(inventory.isPresent()) {
            return inventory.get();
        } else {
            return null;
        }
    }

    /**
     * Read - Get all inventories
     * @return - An Iterable object of Inventories fulfilled
     */
    @GetMapping("/api/inventory")
    public Iterable<Inventory> getInventories() {
        return inventoryService.getInventories();
    }

    /**
     * Update - Update an existing inventory
     * @param id - The id of the inventory to update
     * @param inventory - The inventory object updated
     * @return
     */
    @PutMapping("/api/inventory/{id}")
    public Inventory updateInventory(@PathVariable("id") final Long id, @RequestBody Inventory inventory) {
        Optional<Inventory> e = inventoryService.getInventory(id);
        if(e.isPresent()) {
            Inventory currentInventory = e.get();

            Long rental = inventory.getRental();
            if(rental != null) {
                currentInventory.setRental(rental);
            }
            Enum status = inventory.getStatus();
            if(status != null) {
                currentInventory.setStatus(status);
            }
            Date date = inventory.getDate();
            if(date != null) {
                currentInventory.setDate(date);
            }
            String notes = inventory.getNotes();
            if(notes != null) {
                currentInventory.setNotes(notes);
            }
            inventoryService.saveInventory(currentInventory);
            return currentInventory;
        } else {
            return null;
        }
    }

    /**
     * Delete - Delete an inventory
     * @param id - The id of the inventory to delete
     */
    @DeleteMapping("/api/inventory/{id}")
    public void deleteInventory(@PathVariable("id") final Long id) {
        inventoryService.deleteInventory(id);
    }
}
