package com.studi.location.models;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.util.Enumeration;

@Data
@Entity
@Table(name = "inventory")
public class Inventory {
    public enum Status {
        ingoing,
        outgoing
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="property", insertable=false, updatable=false)
    private Property property;

    @Enumerated(EnumType.STRING)
    private Status status;

    private Date date;

    private String notes;

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
