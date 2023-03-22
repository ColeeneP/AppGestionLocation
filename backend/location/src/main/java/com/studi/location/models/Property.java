package com.studi.location.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "property")
public class Property {

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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAdditional() {
        return additional;
    }

    public void setAdditional(String additional) {
        this.additional = additional;
    }

    public Integer getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(Integer postalCode) {
        this.postalCode = postalCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Float getRent() {
        return rent;
    }

    public void setRent(Float rent) {
        this.rent = rent;
    }

    public Float getCharges() {
        return charges;
    }

    public void setCharges(Float charges) {
        this.charges = charges;
    }

    public Float getDeposit() {
        return deposit;
    }

    public void setDeposit(Float deposit) {
        this.deposit = deposit;
    }

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }

    public Property(Long id, String address, String additional, Integer postalCode, String city, Float rent, Float charges, Float deposit, Boolean available) {
        this.id = id;
        this.address = address;
        this.additional = additional;
        this.postalCode = postalCode;
        this.city = city;
        this.rent = rent;
        this.charges = charges;
        this.deposit = deposit;
        this.available = available;
    }
}
