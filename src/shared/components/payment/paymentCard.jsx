import { useState } from "react";
import Cluby from "@/assets/images/cluby.png";
import Fire from "@/assets/images/Fire.png";

export const PaymentCard = ({ title, description, children }) => {
  return (
    <div className="payment-card">
      <div className="payment-card-header">
        <img src={Cluby} alt="" className="payment-card-header-logo" />
      </div>

      <div className="payment-logo-container">
        <img src={Fire} alt="" className="company-logo" />
        <div className="payment-body">
          <p className="title">{title}</p>
          <span className="description">{description}</span>
        </div>
      </div>
      {children}
    </div>
  );
};
