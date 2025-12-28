import { useState } from "react";
import Cluby from "@/assets/images/cluby.png";
import Fire from "@/assets/images/Fire.png";

export const PaymentCard = ({ title, description, children }) => {
  return <div className="payment-card">{children}</div>;
};
