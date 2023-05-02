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

    @ManyToOne
    @JoinColumn(name="property", insertable=false, updatable=false)
    private Property property;

    @ManyToOne
    @JoinColumn(name="tenant", insertable=false, updatable=false)
    private Tenant tenant;

    private Boolean deposit;

    public Rental(Property property, Tenant tenant, Boolean deposit) {
        this.property = property;
        this.tenant = tenant;
        this.deposit = deposit;
    }

    public Rental() {

    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    public Tenant getTenant() {
        return tenant;
    }

    public void setTenant(Tenant tenant) {
        this.tenant = tenant;
    }

    public Boolean getDeposit() {
        return deposit;
    }

    public void setDeposit(Boolean deposit) {
        this.deposit = deposit;
    }
}
