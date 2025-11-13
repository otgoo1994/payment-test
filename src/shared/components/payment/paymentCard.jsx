import { useState } from "react";
import Cluby from "@/assets/images/cluby.png";
import { IconArrowLeft } from "@tabler/icons-react";

export const PaymentCard = ({ title, description, children, onCallBack }) => {
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
      <div className="payment-footer">
        <button className="back" onClick={() => onCallBack("back")}>
          <IconArrowLeft />
        </button>
        <button onClick={() => onCallBack("next")} className="continue">
          Үргэлжлүүлэх
        </button>
      </div>
    </div>
  );
};
