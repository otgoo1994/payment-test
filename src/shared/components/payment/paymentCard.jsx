import { useState } from "react";
import Cluby from "@/assets/images/cluby.png";

export const PaymentCard = ({ title, description, children }) => {
  return (
    <div className="payment-card">
      <div className="payment-card-header">
        <img src={Cluby} alt="" className="payment-card-header-logo" />
      </div>

      <div className="payment-body">
        <p className="title">{title}</p>
        <span className="description">{description}</span>
      </div>
      {children}
    </div>
  );
};
