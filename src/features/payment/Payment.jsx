import { useState } from "react";
import { Stepper, Group, Radio, Stack, Text } from "@mantine/core";
import { PaymentCard } from "@/shared/components";
import { TrainingRegister } from "./TrainingRegister";
import { UserRegister } from "./UserRegister";

export const Payment = () => {
  const [active, setActive] = useState(0);
  const [selectedType, setSelectedType] = useState("football");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("11-13");
  const [selectedTime, setSelectedTime] = useState("10:00");

  const schedules = [
    {
      label: "10 цаг",
      value: "10:00",
    },
    {
      label: "12 цаг",
      value: "12:00",
    },
    {
      label: "15 цаг",
      value: "15:00",
    },
    {
      label: "17 цаг",
      value: "17:00",
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
      label: "Хөлмбөмбөг",
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

    console.log(formValues);
  };

  return (
    <section className="payment">
      <div className="payment-container">
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step label="" description="Сургалтын бүртгэл">
            <div style={{ marginTop: 50 }}>
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
            </div>
          </Stepper.Step>
          <Stepper.Step label="" description="Хэрэглэгчийн бүртгэл">
            <div style={{ marginTop: 50 }}>
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
            </div>
          </Stepper.Step>
          <Stepper.Step label="" description="Төлбөр төлөлт">
            step 3
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </div>
    </section>
  );
};
