package com.studi.location.repository;

import com.studi.location.models.Inventory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.studi.location.models.Payment;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends CrudRepository <Payment, Long> {

    //@Query(value = "SELECT * FROM Payment p JOIN Rental r ON p.rental = r.tenant", nativeQuery = true)
    List<Payment> findByRental_TenantId(Long id);
}
