package com.studi.location.repository;

import org.springframework.data.repository.CrudRepository;

import com.studi.location.models.Inventory;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryRepository extends CrudRepository <Inventory, Long> {
}
