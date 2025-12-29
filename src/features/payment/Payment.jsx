import { useEffect, useState } from "react";
import { Stepper, Group, Radio, Stack, Text } from "@mantine/core";
import { PaymentCard } from "@/shared/components";
import { TrainingRegister } from "./TrainingRegister";
import { UserRegister } from "./UserRegister";
import { PaymentInfo } from "./PaymentInfo";
import { SuccessPayment } from "./SuccessPayment";
import BarcaLogo from "/images/barca_logo.png";
import volleyball from "/images/volleyball_line.png";
import basketball from "/images/basketball_line.png";
import football from "/images/football_line.png";
import { IconStar } from "@tabler/icons-react";

export const Payment = () => {
  const [active, setActive] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <>
      <section className="payment">
        <div className="payment-container">
          <div className="payment-container-logo">
            <img src={BarcaLogo} alt="" className="payment-card-header-logo" />
            <div className="line-container">
              <img src={basketball} alt="" />
              <img src={volleyball} alt="" />
              <img src={football} alt="" />
            </div>
          </div>
          <div className="stepper-card">
            <Stepper
              active={active}
              styles={{
                steps: {
                  display: active === 3 ? "none" : "flex",
                },
              }}
            >
              <Stepper.Step
                label=""
                description="Сургалтын бүртгэл"
                completedIcon={<IconStar fill="#FFFFFF" />}
              >
                <PaymentCard
                  title="BARCELONA - MONGOLIA"
                  description="Хөл бөмбөг, сагсан бөмбөг болон гар бөмбөгийн сургалт"
                >
                  <TrainingRegister
                    onCallBack={handleTrainingRegisterCallBack}
                  />
                </PaymentCard>
              </Stepper.Step>
              <Stepper.Step
                label=""
                description="Хэрэглэгчийн бүртгэл"
                completedIcon={<IconStar fill="#FFFFFF" />}
              >
                <PaymentCard
                  title="BARCELONA - MONGOLIA"
                  description="Хөл бөмбөг, сагсан бөмбөг болон гар бөмбөгийн сургалт"
                >
                  <UserRegister
                    schedule={selectedTime}
                    type={selectedType}
                    group={selectedAgeGroup}
                    onCallBack={handleUserRegisterCallBack}
                  />
                </PaymentCard>
              </Stepper.Step>
              <Stepper.Step
                label=""
                description="Төлбөр төлөлт"
                completedIcon={<IconStar fill="#FFFFFF" />}
              >
                <PaymentCard
                  title="BARCELONA - MONGOLIA"
                  description="Хөл бөмбөг, сагсан бөмбөг болон гар бөмбөгийн сургалт"
                >
                  <PaymentInfo
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
                    schedule={selectedTime}
                    type={selectedType}
                    group={selectedAgeGroup}
                    onCallBack={handlePaymentCallBack}
                  />
                </PaymentCard>
              </Stepper.Completed>
            </Stepper>
          </div>
        </div>
      </section>
    </>
  );
};
