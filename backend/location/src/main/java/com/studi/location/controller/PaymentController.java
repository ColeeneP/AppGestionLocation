package com.studi.location.controller;

import com.studi.location.models.Payment;
import com.studi.location.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Optional;

@RestController
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    /**
     * Create - Add a new payment
     * @param payment An object payment
     * @return The payment object saved
     */
    @PostMapping("/payment")
    public Payment createPayment(@RequestBody Payment payment) {
        return paymentService.savePayment(payment);
    }

    /**
     * Read - Get one payment
     * @param id The id of the payment
     * @return A Payment object fulfilled
     */
    @GetMapping("/payment/{id}")
    public Payment getPayment(@PathVariable("id") final Long id) {
        Optional<Payment> payment = paymentService.getPayment(id);
        if(payment.isPresent()) {
            return payment.get();
        } else {
            return null;
        }
    }

    /**
     * Read - Get all payments
     * @return - An Iterable object of Payments fulfilled
     */
    @GetMapping("/payments")
    public Iterable<Payment> getPayments() {
        return paymentService.getPayments();
    }

    /**
     * Update - Update an existing payment
     * @param id - The id of the payment to update
     * @param payment - The payment object updated
     * @return
     */
    @PutMapping("/payment/{id}")
    public Payment updatePayment(@PathVariable("id") final Long id, @RequestBody Payment payment) {
        Optional<Payment> e = paymentService.getPayment(id);
        if(e.isPresent()) {
            Payment currentPayment = e.get();

            Long rental = payment.getRental();
            if(rental != null) {
                currentPayment.setRental(rental);
            }
            Date date = payment.getDate();
            if(date != null) {
                currentPayment.setDate(date);
            }
            String origin = payment.getOrigin();
            if(origin != null) {
                currentPayment.setOrigin(origin);
            }
            Float amount = payment.getAmount();
            if(amount != null) {
                currentPayment.setAmount(amount);
            }
            paymentService.savePayment(currentPayment);
            return currentPayment;
        } else {
            return null;
        }
    }

    /**
     * Delete - Delete a payment
     * @param id - The id of the payment to delete
     */
    @DeleteMapping("/payment/{id}")
    public void deletePayment(@PathVariable("id") final Long id) {
        paymentService.deletePayment(id);
    }
}
