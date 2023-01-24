package com.studi.location.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "rental")
public class Rental {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long flat;

    private Long tenant;

    private Boolean deposit;

    public Long getFlat() {
        return flat;
    }

    public void setFlat(Long flat) {
        this.flat = flat;
    }

    public Long getTenant() {
        return tenant;
    }

    public void setTenant(Long tenant) {
        this.tenant = tenant;
    }

    public Boolean getDeposit() {
        return deposit;
    }

    public void setDeposit(Boolean deposit) {
        this.deposit = deposit;
    }
}
