import { useState } from "react";

export const PaymentCard = ({ title, description, children }) => {
  return <div className="payment-card">{children}</div>;
};
