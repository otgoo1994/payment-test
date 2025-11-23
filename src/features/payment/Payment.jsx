import { useState } from "react";
import { Stepper, Group, Radio, Stack, Text } from "@mantine/core";
import { PaymentCard } from "@/shared/components";
import { TrainingRegister } from "./TrainingRegister";
import { UserRegister } from "./UserRegister";
import { PaymentInfo } from "./PaymentInfo";
import { SuccessPayment } from "./SuccessPayment";

export const Payment = () => {
  const [active, setActive] = useState(0);
  const [selectedType, setSelectedType] = useState("football");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("11-13");
  const [selectedTime, setSelectedTime] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const schedules = [
    {
      label: "11:00 - 12:00 цагийн анги",
      value: "11:00 - 12:00",
    },
    {
      label: "15:00 - 16:00 цагийн анги",
      value: "15:00 - 16:00",
    },
    {
      label: "17:00 - 18:00 цагийн анги",
      value: "17:00 - 18:00",
    },
  ];

  const ageGroups = [
    {
      label: "11-13 нас /350.000₮ сарын төлбөр/",
      value: "11-13",
      price: 350000,
    },
    {
      label: "14-15 нас /450.000₮ сарын төлбөр/",
      value: "14-15",
      price: 450000,
    },
    {
      label: "16-18 нас /500.000₮ сарын төлбөр/",
      value: "16-18",
      price: 500000,
    },
  ];

  const types = [
    {
      label: "Хөл бөмбөг",
      value: "football",
    },
    {
      label: "Сагсан бөмбөг",
      value: "baskektball",
    },
    {
      label: "Гар бөмбөг",
      value: "volleyball",
    },
  ];

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleTrainingRegisterCallBack = ({ type, group, time }) => {
    setSelectedAgeGroup(group);
    setSelectedTime(time);
    setSelectedType(type);
    nextStep();
  };

  const handleUserRegisterCallBack = (formValues) => {
    if (!formValues) {
      prevStep();
      return;
    }

    setUserInfo(formValues);
    nextStep();
  };

  const handlePaymentCallBack = (type) => {
    if (!type) {
      prevStep();
      return;
    }

    nextStep();
  };

  return (
    <section className="payment">
      <div className="payment-container">
        <Stepper active={active}>
          <Stepper.Step label="" description="Сургалтын бүртгэл">
            <PaymentCard
              title="BARCELONA - MONGOLIA"
              description="Хөл бөмбөг, сагсан бөмбөг болон гар бөмбөгийн сургалт"
            >
              <TrainingRegister
                schedules={schedules}
                ageGroups={ageGroups}
                types={types}
                onCallBack={handleTrainingRegisterCallBack}
              />
            </PaymentCard>
          </Stepper.Step>
          <Stepper.Step label="" description="Хэрэглэгчийн бүртгэл">
            <PaymentCard
              title="BARCELONA - MONGOLIA"
              description="Хөл бөмбөг, сагсан бөмбөг болон гар бөмбөгийн сургалт"
            >
              <UserRegister
                schedules={schedules}
                ageGroups={ageGroups}
                types={types}
                schedule={selectedTime}
                type={selectedType}
                group={selectedAgeGroup}
                onCallBack={handleUserRegisterCallBack}
              />
            </PaymentCard>
          </Stepper.Step>
          <Stepper.Step label="" description="Төлбөр төлөлт">
            <PaymentCard
              title="BARCELONA - MONGOLIA"
              description="Хөл бөмбөг, сагсан бөмбөг болон гар бөмбөгийн сургалт"
            >
              <PaymentInfo
                schedules={schedules}
                ageGroups={ageGroups}
                types={types}
                schedule={selectedTime}
                type={selectedType}
                group={selectedAgeGroup}
                userInfo={userInfo}
                onCallBack={handlePaymentCallBack}
              />
            </PaymentCard>
          </Stepper.Step>
          <Stepper.Completed>
            <PaymentCard
              title="BARCELONA - MONGOLIA"
              description="Хөл бөмбөг, сагсан бөмбөг болон гар бөмбөгийн сургалт"
            >
              <SuccessPayment
                schedules={schedules}
                ageGroups={ageGroups}
                types={types}
                schedule={selectedTime}
                type={selectedType}
                group={selectedAgeGroup}
              />
            </PaymentCard>
          </Stepper.Completed>
        </Stepper>
      </div>
    </section>
  );
};
