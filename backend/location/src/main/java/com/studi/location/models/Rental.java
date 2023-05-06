package com.studi.location.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Optional;

@Data
@Entity
@Getter
@Setter
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
}
