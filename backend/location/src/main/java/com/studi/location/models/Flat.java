package com.studi.location.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "flat")
public class Flat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String address;

    private String additional;

    @Column(name="postal_code")
    private Integer postalCode;

    private String city;

    private Float rent;

    private Float charges;

    private Float deposit;

    private Boolean available;

}
