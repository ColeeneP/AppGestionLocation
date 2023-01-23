package com.studi.location.repository;

import org.springframework.data.repository.CrudRepository;

import com.studi.location.models.Flat;
import org.springframework.stereotype.Repository;

@Repository
public interface FlatRepository extends CrudRepository <Flat, Long> {
}
