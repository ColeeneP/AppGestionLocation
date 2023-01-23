package com.studi.location.service;

import com.studi.location.models.Flat;
import com.studi.location.repository.FlatRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class FlatService {

    @Autowired
    private FlatRepository flatRepository;

    public Optional<Flat> getFlat(final Long id) {
        return flatRepository.findById(id);
    }

    public Iterable<Flat> getFlats() {
        return flatRepository.findAll();
    }

    public void deleteFlat(final Long id) {
        flatRepository.deleteById(id);
    }

    public Flat saveFlat(Flat flat) {
        Flat savedFlat = flatRepository.save(flat);
        return savedFlat;
    }
}
