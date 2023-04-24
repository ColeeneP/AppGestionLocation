import React, { useState, useEffect } from 'react';
import { GetPayments } from "../services/Payments";

export const usePayments = (events) => {
    const [payments, setPayments] = useState([
        {"id": 1, "rental": "", "date": "1990-01-01", "origin": "", "amount": ""}
    ]);
    useEffect(() => {
        GetPayments().then((res) => setPayments(res.data)) .catch(error => alert(error.message))
    }, [events])

    return {
        payments, setPayments
    };
  };