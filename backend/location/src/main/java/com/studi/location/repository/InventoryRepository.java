package com.studi.location.repository;

import com.studi.location.models.Property;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.studi.location.models.Inventory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends CrudRepository <Inventory, Long> {

    //@Query(value = "SELECT * FROM Inventory i JOIN Property p ON i.property = p.id", nativeQuery = true)
    //List<Inventory> findByProperty(Property property);

}
