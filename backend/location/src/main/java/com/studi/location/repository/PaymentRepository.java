package com.studi.location.repository;

import org.springframework.data.repository.CrudRepository;

import com.studi.location.models.Payment;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends CrudRepository <Payment, Long> {
}
